---
layout: post
title: "Tables"
body-id: "web-style-guide"
body-class: "web-style-guide"
---

<div class="row">
<h2 id="table-markup">Table markup</h2>
<p>You should use semantic HTML when marking up a data table, as in the following example.</p>
<p class="smaller note"><strong>Code:</strong></p>

<pre>&lt;table&gt;
&lt;thead&gt;
&lt;tr&gt;
&lt;th&gt;&lt/th&gt;
&lt;th scope="col"&gt;Header&lt;/th&gt;
&lt;th scope="col"&gt;Header&lt;/th&gt;
&lt;th scope="col"&gt;Header&lt;/th&gt;
&lt;/tr&gt;
&lt;/thead&gt;
&lt;tfoot&gt;
&lt;tr&gt;
&lt;td&gt;&lt;/td&gt;
&lt;td&gt;Footer&lt;/td&gt;
&lt;td&gt;Footer&lt;/td&gt;
&lt;td&gt;Footer&lt;/td&gt;
&lt;/tr&gt;
&lt;/tfoot&gt;
&lt;tbody&gt;
&lt;tr&gt;
&lt;th scope="row"&gt;Header row&lt;/th&gt;
&lt;td&gt;Table cell&lt;/td&gt;
&lt;td&gt;Table cell&lt;/td&gt;
&lt;td&gt;Table cell&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;th scope="row"&gt;Header row&lt;/th&gt;
&lt;td&gt;Table cell&lt;/td&gt;
&lt;td&gt;Table cell&lt;/td&gt;
&lt;td&gt;Table cell&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;th scope="row"&gt;Header row&lt;/th&gt;
&lt;td&gt;Table cell&lt;/td&gt;
&lt;td&gt;Table cell&lt;/td&gt;
&lt;td&gt;Table cell&lt;/td&gt;
&lt;/tr&gt;
&lt;/tbody&gt;
&lt;/table&gt;</pre>


</div>

<div class="row no-border">
<div class="link-top"><a href="#">Back to top</a></div>
<h2 id="default-style">Default style</h2>
<div class="twelve-col">
<p>Using the markup example from the section above will result in a table using the default Ubuntu style.</p>
<p>In smaller screen sizes, when the table is wide it becomes scrollable horizontally.</p>
</div>

<div class="twelve-col">
<p class="smaller note"><strong>Example:</strong></p>
<table>
<thead>
<tr>
<th></th>
<th scope="col">Header</th>
<th scope="col">Header</th>
<th scope="col">Header</th>
</tr>
</thead>
<tfoot>
<tr>
<td></td>
<td>Footer</td>
<td>Footer</td>
<td>Footer</td>
</tr>
</tfoot>
<tbody>
<tr>
<th scope="row">Header row</th>
<td>Table cell</td>
<td>Table cell</td>
<td>Table cell</td>
</tr>
<tr>
<th scope="row">Header row</th>
<td>Table cell</td>
<td>Table cell</td>
<td>Table cell</td>
</tr>
<tr>
<th scope="row">Header row</th>
<td>Table cell</td>
<td>Table cell</td>
<td>Table cell</td>
</tr>
</tbody>
</table>
</div>

</div>
