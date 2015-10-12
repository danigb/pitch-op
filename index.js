'use strict'

var fifths = require('pitch-fifths')

/**
 * Add two pitches or intervals. Can be used to tranpose pitches.
 *
 * @param {Array} a - one pitch or interval in [a-pitch](https://github.com/danigb/a-pitch) format
 * @param {Array} b - the other pitch or interval in [a-pitch](https://github.com/danigb/a-pitch) format
 * @return {Array} both pitches or intervals added in [a-pitch](https://github.com/danigb/a-pitch) format
 *
 * @example
 * var op = require('pitch-op')
 * op.add([3, 0, 0], [4, 0, 0]) // => [0, 0, 1]
 */
function add (a, b) {
  var fifths = a[0] + b[0]
  var octaves = a[1] === null || b[1] === null ? null : a[1] + b[1]
  return [fifths, octaves]
}

/**
 * Subtract two pitches or intervals. Can be used to find the distance between pitches.
 *
 * @param {Array} a - one pitch or interval in [a-pitch](https://github.com/danigb/a-pitch) format
 * @param {Array} b - the other pitch or interval in [a-pitch](https://github.com/danigb/a-pitch) format
 * @return {Array} both pitches or intervals substracted [a-pitch](https://github.com/danigb/a-pitch) format
 *
 * @example
 * var op = require('pitch-op')
 * op.subtract([4, 0, 0], [3, 0, 0]) // => [1, 0, 0]
 */
function subtract (a, b) {
  var fifths = b[0] - a[0]
  var octaves = a[1] !== null && b[1] !== null ? b[1] - a[1] : null
  return [fifths, octaves]
}

/**
 * Multiply a pitch or interval by a scalar
 *
 * @param {Array} n - the scalar
 * @param {Array} a - the pitch or interval in [a-pitch](https://github.com/danigb/a-pitch) format
 * @return {Array} the pitch or interval multiplied in [a-pitch](https://github.com/danigb/a-pitch) format
 *
 * @example
 * var op = require('pitch-op')
 * op.multiply(2, [4, 0, 0]) // => [1, 0, 1]
 */
function multiply (m, a) {
  return [m * a[0], a[1] === null ? null : m * a[1]]
}

module.exports = {
  add: function (a, b) { return fifths.toPitch(add(fifths(a), fifths(b))) },
  subtract: function (a, b) { return fifths.toPitch(subtract(fifths(a), fifths(b))) },
  multiply: function (m, a) { return fifths.toPitch(multiply(m, fifths(a))) }
}
