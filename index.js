'use strict'

var fifths = require('pitch-fifths')

var SEMITONES = [0, 2, 4, 5, 7, 9, 11]

var op = {}

/**
 * Get pitch class of a pitch.
 *
 * @param {Array} pitch - the pitch
 * @return {Array} the pitch class of the pitch
 *
 * @example
 * pitchClass([1, -2, 3]) // => [1, -2, nul]
 */
op.pitchClass = function (p) { return [p[0], p[1], null] }

/**
 * Set octave of a pitch.
 *
 * This function can be partially applied (Integer -> Array -> Array)
 *
 * @param {Integer} octave - the octave to set
 * @param {Array} pitch - the pitch
 * @return {Array} the pitch with the given octave
 *
 * @example
 * setOctave(2, [1, 2, 0]) // => [1, 2, 2]
 * // partially applied, you get a function:
 * arrayOfPitchs.map(setOctave(2))
 */
op.setOctave = function (num, p) {
  if (arguments.length > 1) return op.setOctave(num)(p)
  else return function (p) { return p ? [p[0], p[1], num] : null }
}

/**
 * Simplify interval (set the octave to 0)
 *
 * @param {Array} interval - the interval
 * @return {Array} the simplified interval
 *
 * @example
 * op.simplify([1, 2, 3]) // => [1, 2, 0]
 */
op.simplify = op.setOctave(0)

/**
 * Set the octave only if not present
 *
 * This function can be partially applied (Integer -> Array -> Array)
 *
 * @param {Integer} octave - the octave number
 * @param {Array} pitch - the pitch
 *
 * @example
 * op.setDefaultOctave(1, [1, 2, null]) // => [1, 2, 1]
 * op.setDefaultOctave(1, [1, 2, 3]) // => [1, 2, 3]
 * // partially applied:
 * arrayOfPitches.map(op.setDefaultOctave(3))
 */
op.setDefaultOctave = function (octave, pitch) {
  if (arguments.length > 1) return op.setDefaultOctave(octave)(pitch)
  return function (i) { return i && i[2] === null ? [i[0], i[1], octave] : i }
}

/**
 * Get distance in semitones from C0 (or P1 if interval)
 *
 * @param {Array} pitch - the pitch or interval
 * @return {Integer} the distance
 *
 * @example
 * op.semitones([1, 1, 0]) // => 3
 * op.semitones([0, 0, 0]) // => 0
 */
op.semitones = function (i) { return i ? SEMITONES[i[0] % 7] + i[1] + 12 * i[2] : null }

/**
 * Get a comparator to sort pitches by height (frequency)
 *
 * @param {Boolean} descending - set to true if want a descending comparator
 * @param {function} the comparator function
 *
 * @example
 * arrayOfPitches.sort(op.comparator())
 */
op.comparator = function (descending) {
  return descending ? function (a, b) { return op.semitones(b) - op.semitones(a) }
    : function (a, b) { return op.semitones(a) - op.semitones(b) }
}

/**
 * Add two pitches or intervals. Can be used to tranpose pitches.
 *
 * @param {Array} a - one pitch or interval in [pitch-array](https://github.com/danigb/pitch-array) format
 * @param {Array} b - the other pitch or interval in [pitch-array](https://github.com/danigb/pitch-array) format
 * @return {Array} both pitches or intervals added in [pitch-array](https://github.com/danigb/pitch-array) format
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
op.add = function (a, b) { return fifths.toPitch(add(fifths(a), fifths(b))) }

/**
 * Subtract two pitches or intervals. Can be used to find the distance between pitches.
 *
 * @param {Array} a - one pitch or interval in [pitch-array](https://github.com/danigb/pitch-array) format
 * @param {Array} b - the other pitch or interval in [pitch-array](https://github.com/danigb/pitch-array) format
 * @return {Array} both pitches or intervals substracted [pitch-array](https://github.com/danigb/pitch-array) format
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
op.subtract = function (a, b) { return fifths.toPitch(subtract(fifths(a), fifths(b))) }

/**
 * Multiply a pitch or interval by a scalar
 *
 * @param {Array} n - the scalar
 * @param {Array} a - the pitch or interval in [pitch-array](https://github.com/danigb/pitch-array) format
 * @return {Array} the pitch or interval multiplied in [pitch-array](https://github.com/danigb/pitch-array) format
 *
 * @example
 * var op = require('pitch-op')
 * op.multiply(2, [4, 0, 0]) // => [1, 0, 1]
 */
function multiply (m, a) {
  return [m * a[0], a[1] === null ? null : m * a[1]]
}
op.multiply = function (m, a) { return fifths.toPitch(multiply(m, fifths(a))) }

module.exports = op
