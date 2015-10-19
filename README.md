# pitch-op

[![Build Status](https://travis-ci.org/danigb/music-chord.svg?branch=master)](https://travis-ci.org/danigb/music-chord)
[![Code Climate](https://codeclimate.com/github/danigb/music-chord/badges/gpa.svg)](https://codeclimate.com/github/danigb/music-chord)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![npm version](https://img.shields.io/npm/v/music-chord.svg)](https://www.npmjs.com/package/music-chord)
[![license](https://img.shields.io/npm/l/music-chord.svg)](https://www.npmjs.com/package/music-chord)
[![pitch-array](https://img.shields.io/badge/pitch--array-compatible-yellow.svg)](https://github.com/danigb/pitch-array

Music pitch operator. A fast and low level library to add/subtract/multiply pitches or intervals in [pitch-array](https://github.com/danigb/pitch-array) format.

```js
var op = require('pitch-op')
op.add([1, 0, 0], [1, 0, 0]) // => [2, 0, 0]
```

If you need for note pitch transpositions, look at [tonal](https://github.com/danigb/tonal)

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
<a href="https://github.com/danigb/pitch-op/blob/master/index.js#L106">lineno 106</a>
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
<a href="https://github.com/danigb/pitch-op/blob/master/index.js#L142">lineno 142</a>
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
<a href="https://github.com/danigb/pitch-op/blob/master/index.js#L124">lineno 124</a>
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
