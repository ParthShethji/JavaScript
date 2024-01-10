<h2><a href="https://leetcode.com/problems/join-two-arrays-by-id/">2722. Join Two Arrays by ID</a></h2><h3>Medium</h3><hr><div><p>Given two arrays <code style="background: rgb(0, 9, 15) !important;">arr1</code> and <code style="background: rgb(0, 9, 15) !important;">arr2</code>, return a new&nbsp;array <code style="background: rgb(0, 9, 15) !important;">joinedArray</code>. All the objects in each&nbsp;of the two inputs arrays will contain an&nbsp;<code style="background: rgb(0, 9, 15) !important;">id</code>&nbsp;field that has an integer value.&nbsp;<code style="background: rgb(0, 9, 15) !important;">joinedArray</code>&nbsp;is an array formed by merging&nbsp;<code style="background: rgb(0, 9, 15) !important;">arr1</code> and <code style="background: rgb(0, 9, 15) !important;">arr2</code> based on&nbsp;their <code style="background: rgb(0, 9, 15) !important;">id</code>&nbsp;key. The length of&nbsp;<code style="background: rgb(0, 9, 15) !important;">joinedArray</code> should be the length of unique values of <code style="background: rgb(0, 9, 15) !important;">id</code>. The returned array should be sorted in&nbsp;<strong>ascending</strong>&nbsp;order based on the <code style="background: rgb(0, 9, 15) !important;">id</code>&nbsp;key.</p>

<p>If a given&nbsp;<code style="background: rgb(0, 9, 15) !important;">id</code>&nbsp;exists in one array but not the other, the single object with that&nbsp;<code style="background: rgb(0, 9, 15) !important;">id</code> should be included in the result array without modification.</p>

<p>If two objects share an <code style="background: rgb(0, 9, 15) !important;">id</code>, their properties should be merged into a single&nbsp;object:</p>

<ul>
	<li>If a key only exists in one object, that single key-value pair should be included in the object.</li>
	<li>If a key is included in both objects, the value in the object from <code style="background: rgb(0, 9, 15) !important;">arr2</code>&nbsp;should override the value from <code style="background: rgb(0, 9, 15) !important;">arr1</code>.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre style="background: rgb(0, 9, 15) !important;"><strong>Input:</strong> 
arr1 = [
&nbsp;   {"id": 1, "x": 1},
&nbsp;   {"id": 2, "x": 9}
], 
arr2 = [
    {"id": 3, "x": 5}
]
<strong>Output:</strong> 
[
&nbsp;   {"id": 1, "x": 1},
&nbsp;   {"id": 2, "x": 9},
    {"id": 3, "x": 5}
]
<strong>Explanation:</strong> There are no duplicate ids so arr1 is simply concatenated with arr2.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre style="background: rgb(0, 9, 15) !important;"><strong>Input:</strong> 
arr1 = [
    {"id": 1, "x": 2, "y": 3},
    {"id": 2, "x": 3, "y": 6}
], 
arr2 = [
    {"id": 2, "x": 10, "y": 20},
    {"id": 3, "x": 0, "y": 0}
]
<strong>Output:</strong> 
[
    {"id": 1, "x": 2, "y": 3},
    {"id": 2, "x": 10, "y": 20},
&nbsp;   {"id": 3, "x": 0, "y": 0}
]
<strong>Explanation:</strong> The two objects with id=1 and id=3 are included in the result array without modifiction. The two objects with id=2 are merged together. The keys from arr2 override the values in arr1.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre style="background: rgb(0, 9, 15) !important;"><strong>Input:</strong> 
arr1 = [
    {"id": 1, "b": {"b": 94},"v": [4, 3], "y": 48}
]
arr2 = [
    {"id": 1, "b": {"c": 84}, "v": [1, 3]}
]
<strong>Output:</strong> [
    {"id": 1, "b": {"c": 84}, "v": [1, 3], "y": 48}
]
<strong>Explanation:</strong> The two objects with id=1 are merged together. For the keys "b" and "v" the values from arr2 are used. Since the key "y" only exists in arr1, that value is taken form arr1.</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code style="background: rgb(0, 9, 15) !important;">arr1</code> and <code style="background: rgb(0, 9, 15) !important;">arr2</code> are valid JSON arrays</li>
	<li>Each object in <code style="background: rgb(0, 9, 15) !important;">arr1</code> and <code style="background: rgb(0, 9, 15) !important;">arr2</code> has a unique&nbsp;integer <code style="background: rgb(0, 9, 15) !important;">id</code> key</li>
	<li><code style="background: rgb(0, 9, 15) !important;">2 &lt;= JSON.stringify(arr1).length &lt;= 10<sup>6</sup></code></li>
	<li><code style="background: rgb(0, 9, 15) !important;">2 &lt;= JSON.stringify(arr2).length &lt;= 10<sup>6</sup></code></li>
</ul>
</div>