# pitch-op

[![Build Status](https://travis-ci.org/danigb/music-chord.svg?branch=master)](https://travis-ci.org/danigb/music-chord)
[![Code Climate](https://codeclimate.com/github/danigb/music-chord/badges/gpa.svg)](https://codeclimate.com/github/danigb/music-chord)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![npm version](https://img.shields.io/npm/v/music-chord.svg)](https://www.npmjs.com/package/music-chord)
[![license](https://img.shields.io/npm/l/music-chord.svg)](https://www.npmjs.com/package/music-chord)
[![pitch-array](https://img.shields.io/badge/pitch--array-compatible-yellow.svg)](https://github.com/danigb/pitch-array)

Music pitch operator is a fast and low level library to manipulate pitches or intervals in [pitch-array](https://github.com/danigb/pitch-array) format.

Probably you wanto to use a higher level library:

- [pitch-transpose](https://github.com/danigb/pitch-transpose): transpose pitches
- [music-gamut](https://github.com/danigb/music-gamut): work with groups of notes or intervals
- [music-scale](https://github.com/danigb/music-scale): music scales made easy
- [music-chord](https://github.com/danigb/music-chord): music chords library


## API

<!-- START docme generated API please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN docme TO UPDATE -->

<div>
<div class="jsdoc-githubify">
<section>
<article>
<div class="container-overview">
<dl class="details">
</dl>
</div>
<dl>
<dt>
<h4 class="name" id="add"><span class="type-signature"></span>add<span class="signature">(a, b)</span><span class="type-signature"> &rarr; {Array}</span></h4>
</dt>
<dd>
<div class="description">
<p>Add two pitches or intervals. Can be used to tranpose pitches.</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>a</code></td>
<td class="type">
<span class="param-type">Array</span>
</td>
<td class="description last"><p>one pitch or interval in <a href="https://github.com/danigb/pitch-array">pitch-array</a> format</p></td>
</tr>
<tr>
<td class="name"><code>b</code></td>
<td class="type">
<span class="param-type">Array</span>
</td>
<td class="description last"><p>the other pitch or interval in <a href="https://github.com/danigb/pitch-array">pitch-array</a> format</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/pitch-op/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/danigb/pitch-op/blob/master/index.js#L118">lineno 118</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>both pitches or intervals added in <a href="https://github.com/danigb/pitch-array">pitch-array</a> format</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Array</span>
</dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>var op = require('pitch-op')
op.add([3, 0, 0], [4, 0, 0]) // => [0, 0, 1]</code></pre>
</dd>
<dt>
<h4 class="name" id="comparator"><span class="type-signature"></span>comparator<span class="signature">(descending)</span><span class="type-signature"> &rarr; {function}</span></h4>
</dt>
<dd>
<div class="description">
<p>Get a comparator to sort pitches by height (frequency)</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>descending</code></td>
<td class="type">
<span class="param-type">Boolean</span>
</td>
<td class="description last"><p>set to <code>true</code> if want a descending comparator</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/pitch-op/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/danigb/pitch-op/blob/master/index.js#L91">lineno 91</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the comparator function</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">function</span>
</dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>arrayOfPitches.sort(op.comparator())</code></pre>
</dd>
<dt>
<h4 class="name" id="multiply"><span class="type-signature"></span>multiply<span class="signature">(n, a)</span><span class="type-signature"> &rarr; {Array}</span></h4>
</dt>
<dd>
<div class="description">
<p>Multiply a pitch or interval by a scalar</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>n</code></td>
<td class="type">
<span class="param-type">Array</span>
</td>
<td class="description last"><p>the scalar</p></td>
</tr>
<tr>
<td class="name"><code>a</code></td>
<td class="type">
<span class="param-type">Array</span>
</td>
<td class="description last"><p>the pitch or interval in <a href="https://github.com/danigb/pitch-array">pitch-array</a> format</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/pitch-op/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/danigb/pitch-op/blob/master/index.js#L151">lineno 151</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the pitch or interval multiplied in <a href="https://github.com/danigb/pitch-array">pitch-array</a> format</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Array</span>
</dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>var op = require('pitch-op')
op.multiply(2, [4, 0, 0]) // => [1, 0, 1]</code></pre>
</dd>
<dt>
<h4 class="name" id="pitchClass"><span class="type-signature"></span>pitchClass<span class="signature">(pitch)</span><span class="type-signature"> &rarr; {Array}</span></h4>
</dt>
<dd>
<div class="description">
<p>Get pitch class of a pitch.</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>pitch</code></td>
<td class="type">
<span class="param-type">Array</span>
</td>
<td class="description last"><p>the pitch</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/pitch-op/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/danigb/pitch-op/blob/master/index.js#L9">lineno 9</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the pitch class of the pitch</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Array</span>
</dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>pitchClass([1, -2, 3]) // => [1, -2, nul]</code></pre>
</dd>
<dt>
<h4 class="name" id="semitones"><span class="type-signature"></span>semitones<span class="signature">(pitch)</span><span class="type-signature"> &rarr; {Integer}</span></h4>
</dt>
<dd>
<div class="description">
<p>Get distance in semitones from <code>[0, 0, 0]</code> (<code>'C0'</code> or <code>'1P'</code>)</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>pitch</code></td>
<td class="type">
<span class="param-type">Array</span>
</td>
<td class="description last"><p>the pitch or interval</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/pitch-op/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/danigb/pitch-op/blob/master/index.js#L77">lineno 77</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the distance</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Integer</span>
</dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>op.semitones([1, 1, 0]) // => 3
op.semitones([0, 0, 0]) // => 0</code></pre>
</dd>
<dt>
<h4 class="name" id="setDefaultOctave"><span class="type-signature"></span>setDefaultOctave<span class="signature">(octave, pitch)</span><span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Set the octave only if not present</p>
<p>This function can be partially applied (Integer -&gt; Array -&gt; Array)</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>octave</code></td>
<td class="type">
<span class="param-type">Integer</span>
</td>
<td class="description last"><p>the octave number</p></td>
</tr>
<tr>
<td class="name"><code>pitch</code></td>
<td class="type">
<span class="param-type">Array</span>
</td>
<td class="description last"><p>the pitch</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/pitch-op/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/danigb/pitch-op/blob/master/index.js#L56">lineno 56</a>
</li>
</ul></dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>op.setDefaultOctave(1, [1, 2, null]) // => [1, 2, 1]
op.setDefaultOctave(1, [1, 2, 3]) // => [1, 2, 3]
// partially applied:
arrayOfPitches.map(op.setDefaultOctave(3))</code></pre>
</dd>
<dt>
<h4 class="name" id="setOctave"><span class="type-signature"></span>setOctave<span class="signature">(octave, pitch)</span><span class="type-signature"> &rarr; {Array}</span></h4>
</dt>
<dd>
<div class="description">
<p>Set octave of a pitch.</p>
<p>This function can be partially applied (Integer -&gt; Array -&gt; Array)</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>octave</code></td>
<td class="type">
<span class="param-type">Integer</span>
</td>
<td class="description last"><p>the octave to set</p></td>
</tr>
<tr>
<td class="name"><code>pitch</code></td>
<td class="type">
<span class="param-type">Array</span>
</td>
<td class="description last"><p>the pitch</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/pitch-op/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/danigb/pitch-op/blob/master/index.js#L22">lineno 22</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the pitch with the given octave</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Array</span>
</dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>setOctave(2, [1, 2, 0]) // => [1, 2, 2]
// partially applied, you get a function:
arrayOfPitchs.map(setOctave(2))</code></pre>
</dd>
<dt>
<h4 class="name" id="simplify"><span class="type-signature"></span>simplify<span class="signature">(interval)</span><span class="type-signature"> &rarr; {Array}</span></h4>
</dt>
<dd>
<div class="description">
<p>Simplify interval (set the octave to 0)</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>interval</code></td>
<td class="type">
<span class="param-type">Array</span>
</td>
<td class="description last"><p>the interval</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/pitch-op/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/danigb/pitch-op/blob/master/index.js#L43">lineno 43</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the simplified interval</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Array</span>
</dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>op.simplify([1, 2, 3]) // => [1, 2, 0]</code></pre>
</dd>
<dt>
<h4 class="name" id="subtract"><span class="type-signature"></span>subtract<span class="signature">(a, b)</span><span class="type-signature"> &rarr; {Array}</span></h4>
</dt>
<dd>
<div class="description">
<p>Subtract two pitches or intervals. Can be used to find the distance between pitches.</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>a</code></td>
<td class="type">
<span class="param-type">Array</span>
</td>
<td class="description last"><p>one pitch or interval in <a href="https://github.com/danigb/pitch-array">pitch-array</a> format</p></td>
</tr>
<tr>
<td class="name"><code>b</code></td>
<td class="type">
<span class="param-type">Array</span>
</td>
<td class="description last"><p>the other pitch or interval in <a href="https://github.com/danigb/pitch-array">pitch-array</a> format</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/pitch-op/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/danigb/pitch-op/blob/master/index.js#L128">lineno 128</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>both pitches or intervals substracted <a href="https://github.com/danigb/pitch-array">pitch-array</a> format</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Array</span>
</dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>var op = require('pitch-op')
op.subtract([4, 0, 0], [3, 0, 0]) // => [1, 0, 0]</code></pre>
</dd>
</dl>
</article>
</section>
</div>

*generated with [docme](https://github.com/thlorenz/docme)*
</div>
<!-- END docme generated API please keep comment here to allow auto update -->

## License

MIT License
