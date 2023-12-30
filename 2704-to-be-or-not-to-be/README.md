<h2><a href="https://leetcode.com/problems/to-be-or-not-to-be/">2704. To Be Or Not To Be</a></h2><h3>Easy</h3><hr><div><p>Write a function&nbsp;<code style="background: rgb(0, 9, 15) !important;">expect</code> that helps developers test their code. It should take in any value&nbsp;<code style="background: rgb(0, 9, 15) !important;">val</code>&nbsp;and return an object with the following two functions.</p>

<ul>
	<li><code style="background: rgb(0, 9, 15) !important;">toBe(val)</code>&nbsp;accepts another value and returns&nbsp;<code style="background: rgb(0, 9, 15) !important;">true</code>&nbsp;if the two values&nbsp;<code style="background: rgb(0, 9, 15) !important;">===</code>&nbsp;each other. If they are not equal, it should throw an error&nbsp;<code style="background: rgb(0, 9, 15) !important;">"Not Equal"</code>.</li>
	<li><code style="background: rgb(0, 9, 15) !important;">notToBe(val)</code>&nbsp;accepts another value and returns&nbsp;<code style="background: rgb(0, 9, 15) !important;">true</code>&nbsp;if the two values&nbsp;<code style="background: rgb(0, 9, 15) !important;">!==</code>&nbsp;each other. If they are equal, it should throw an error&nbsp;<code style="background: rgb(0, 9, 15) !important;">"Equal"</code>.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre style="background: rgb(0, 9, 15) !important;"><strong>Input:</strong> func = () =&gt; expect(5).toBe(5)
<strong>Output:</strong> {"value": true}
<strong>Explanation:</strong> 5 === 5 so this expression returns true.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre style="background: rgb(0, 9, 15) !important;"><strong>Input:</strong> func = () =&gt; expect(5).toBe(null)
<strong>Output:</strong> {"error": "Not Equal"}
<strong>Explanation:</strong> 5 !== null so this expression throw the error "Not Equal".
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre style="background: rgb(0, 9, 15) !important;"><strong>Input:</strong> func = () =&gt; expect(5).notToBe(null)
<strong>Output:</strong> {"value": true}
<strong>Explanation:</strong> 5 !== null so this expression returns true.
</pre>
</div>