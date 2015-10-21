var vows = require('vows')
var assert = require('assert')
var interval = require('interval-parser')
var op = require('../')

function iadd (a, b) { return interval(op.add(interval(a), interval(b))) }
function isub (a, b) { return interval(op.subtract(interval(a), interval(b))) }
function imul (m, a) { return interval(op.multiply(m, interval(a))) }

vows.describe('pitch-op').addBatch({
  'pitchClass': function () {
    assert.deepEqual(op.pitchClass([1, 2, 3]), [ 1, 2, null ])
    assert.equal(op.pitchClass(null), null)
  },
  'set octave': function () {
    assert.deepEqual(op.setOctave(2, [1, 2, 3]), [1, 2, 2])
    var src = [ [1, 2, 3], [4, 5, 6] ]
    assert.deepEqual(src.map(op.setOctave(2)), [ [ 1, 2, 2 ], [ 4, 5, 2 ] ])
    assert.equal(op.setOctave(2, null), null)
  },
  'simplify interval': function () {
    assert.deepEqual(op.simplify([1, 2, 3]), [1, 2, 0])
    assert.equal(op.simplify(null), null)
  },
  'default octave': function () {
    assert.deepEqual(op.setDefaultOctave(3, [1, 2, null]), [1, 2, 3])
    assert.deepEqual(op.setDefaultOctave(3, [1, 2, 0]), [1, 2, 0])
    assert.deepEqual(op.setDefaultOctave(3, null), null)
    var src = [ [1, 2, null], [4, 5, 1] ]
    assert.deepEqual(src.map(op.setDefaultOctave(2)), [ [ 1, 2, 2 ], [ 4, 5, 1 ] ])
  },
  'semitones': function () {
    assert.equal(op.semitones([0, 0, 0]), 0)
    assert.equal(op.semitones([1, 1, 0]), 3)
  },
  'comparator': function () {
    var src = [ [1, 0, 0], [3, 0, 0], [2, 0, 0] ]
    assert.deepEqual(src.sort(op.comparator()), [ [ 1, 0, 0 ], [ 2, 0, 0 ], [ 3, 0, 0 ] ])
    assert.deepEqual(src.sort(op.comparator(true)), [ [ 3, 0, 0 ], [ 2, 0, 0 ], [ 1, 0, 0 ] ])
  },
  'add': {
    'add ascending intervals': function () {
      assert.equal(iadd('2M', '2M'), '3M')
      assert.equal(iadd('2M', '2m'), '3m')
      assert.equal(iadd('2M', '8P'), '9M')
      assert.equal(iadd('4P', '4P'), '7m')
    },
    'add ascending descending intervals': function () {
      assert.equal(iadd('2M', '-2M'), '1P')
      assert.equal(iadd('5P', '-2M'), '4P')
      assert.equal(iadd('-2M', '5P'), '4P')
      assert.equal(iadd('4P', '-5P'), '-2M')
      assert.equal(iadd('1P', '-2m'), '-2m')
      assert.equal(iadd('1P', '-9m'), '-9m')
      assert.equal(iadd('-9m', '8P'), '-2m')
      assert.equal(iadd('8P', '-9m'), '-2m')
      assert.equal(iadd('8P', '-2M'), '7m')
    },
    'add descending intervals': function () {
      assert.equal(iadd('-2M', '-2M'), '-3M')
    },
    'null resilient': function () {
      assert.equal(op.add(null, [1, 0, 0]))
    }
  },
  'subtract': {
    'subtract ascending intervals': function () {
      assert.equal(isub('2M', '2M'), '1P')
      assert.equal(isub('2M', '2m'), '1d')
      assert.equal(isub('2M', '8P'), '7m')
      assert.equal(isub('4P', '4P'), '1P')
    },
    'subtract ascending descending intervals': function () {
      assert.equal(isub('2M', '-2M'), '-3M')
      assert.equal(isub('5P', '-2M'), '-6M')
      assert.equal(isub('-2M', '5P'), '6M')
      assert.equal(isub('4P', '-5P'), '-8P')
      assert.equal(isub('1P', '-2m'), '-2m')
      assert.equal(isub('1P', '-9m'), '-9m')
      assert.equal(isub('-9m', '8P'), '16m')
      assert.equal(isub('8P', '-9m'), '-16m')
      assert.equal(isub('8P', '-2M'), '-9M')
    },
    'subtract descending intervals': function () {
      assert.equal(isub('-2M', '-2M'), '1P')
      assert.equal(isub('-2M', '-4P'), '-3m')
    }
  },
  'multiply': {
    'multiply ascending intervals': function () {
      assert.deepEqual(op.multiply(-7, [4, 0, 0]), [0, -1, -4])
      assert.equal(imul(3, '2M'), '4A')
      assert.equal(imul(-1, '5P'), '-5P')
      assert.equal(imul(-2, '5P'), '-9M')
    },
    'multiply descending intervals': function () {
      assert.equal(imul(2, '-3M'), '-5A')
    }
  }
}).export(module)
