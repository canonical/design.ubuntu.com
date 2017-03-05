---
layout: web-guidelines
title: "Typography"
body-id: "web-style-guide"
body-class: "web-style-guide"
---

<div class="row">

<h2 id="typographic-scale">Typographic scale</h2>
<p>This is the typographic scale that should be used on all *.ubuntu.com websites.</p>

<div class="eight-col">

<h1>h1. Ubuntu Light 45px/1.3</h1>
<h2>h2. Ubuntu Light 32px/1.3</h2>
<h3>h3. Ubuntu Light 23px/1.3</h3>
<h4>h4. Ubuntu Light 20px/1.3</h4>
<h5>h5. Ubuntu Regular Bold 16px/1.3</h5>
<h6>h6. Ubuntu Regular Bold 13px Uppercase/1.3</h6>
<p>p. Ubuntu Light 16px/1.5</p>

<h3>Annotations</h3>
<p>There are a few ways in which you can attribute less emphasis to a piece of text.</p>
<ul>
<li><strong><code>&lt;small&gt;</code></strong><br />
Wrapping text within this tag will make its <code>font-size</code> <code>13px</code> &mdash; smaller than the body copy size</li>
<li><strong><code>.smaller</code></strong><br />
Use this class to make text smaller than the body copy size, reducing it to <code>13px</code>. This class can also be applied to buttons (see more detail in the <a href="/web-style-guide/forms.html">Forms</a> section of this style guide)</li>
<li><strong><code>.note</code></strong><br />
This class will reduce the <code>font-size</code> of the text to <code>13px</code> and change its colour to warm grey. It should be used cautiously and only in instances when the content is nonessential.</li>
</ul>
</div>
<div class="four-col last-col">
<div class="box">
<p><strong>Tip:</strong> To know more about and download the Ubuntu font, visit the <a href="http://font.ubuntu.com">Ubuntu font site</a>.</p>
</div>
<div class="box">
<p><strong>Note:</strong> Titles on Ubuntu websites should be sentence case, so &#8220;Further reading&#8221; instead of &#8220;Further Reading&#8221;.</p>
</div>

</div>

</div>

<div class="row">
<div class="link-top"><a href="#">Back to top</a></div>
<h2 id="lists">Lists</h2>
<div class="eight-col">
<p>As well as the standard ordered and unordered lists, there are 3 different list styles that can be used to make a list of content more interesting and easier to read.</p>
</div>
<div class="four-col">
<h3>Ordered list</h3>
<p class="smaller note"><strong>Example:</strong></p>
<ol>
<li>First item</li>
<li>Second item</li>
<li>Third item</li>
</ol>
<p class="smaller note"><strong>Code:</strong></p>
<pre>&lt;ol&gt;
&lt;li&gt;First item&lt;/li&gt;
&lt;li&gt;Second item&lt;/li&gt;
&lt;li&gt;Third item&lt;/li&gt;
&lt;/ol&gt;</pre>
</div>
<div class="four-col">
<h3>Unordered list</h3>
<p class="smaller note"><strong>Example:</strong></p>
<ul>
<li>First item</li>
<li>Second item</li>
<li>Third item</li>
</ul>
<p class="smaller note"><strong>Code:</strong></p>
<pre>&lt;ul&gt;
&lt;li&gt;First item&lt;/li&gt;
&lt;li&gt;Second item&lt;/li&gt;
&lt;li&gt;Third item&lt;/li&gt;
&lt;/ul&gt;</pre>
</div>
<div class="four-col last-col">
</div>

<div class="four-col">
<h3>List with dividers</h3>
<p class="smaller note"><strong>Example:</strong></p>
<ul class="list">
<li>First item</li>
<li>Second item</li>
<li>Third item</li>
</ul>
</div>
<div class="four-col">
<h3>List with dividers and ticks</h3>
<p class="smaller note"><strong>Example:</strong></p>
<ul class="list-ubuntu">
<li>First item</li>
<li>Second item</li>
<li>Third item</li>
</ul>
</div>
<div class="four-col last-col">
<h3>List with dividers and ticks</h3>
<p class="smaller note"><strong>Example:</strong></p>
<ul class="list-canonical">
<li>First item</li>
<li>Second item</li>
<li>Third item</li>
</ul>
</div>

<div class="four-col">
<p class="smaller note"><strong>Code:</strong></p>
<pre>&lt;ul class="list"&gt;
&lt;li&gt;First item&lt;/li&gt;
&lt;li&gt;Second item&lt;/li&gt;
&lt;li&gt;Third item&lt;/li&gt;
&lt;/ul&gt;</pre>
</div>
<div class="four-col">
<p class="smaller note"><strong>Code:</strong></p>
<pre>&lt;ul class="list-ubuntu"&gt;
&lt;li&gt;First item&lt;/li&gt;
&lt;li&gt;Second item&lt;/li&gt;
&lt;li&gt;Third item&lt;/li&gt;
&lt;/ul&gt;</pre>
</div>
<div class="four-col last-col">
<p class="smaller note"><strong>Code:</strong></p>
<pre>&lt;ul class="list-canonical"&gt;
&lt;li&gt;First item&lt;/li&gt;
&lt;li&gt;Second item&lt;/li&gt;
&lt;li&gt;Third item&lt;/li&gt;
&lt;/ul&gt;</pre>
</div>
</div>

<div class="row">
<div class="link-top"><a href="#">Back to top</a></div>
<div class="eight-col">
<h2 id="abbr">Abbreviation</h2>

<p>Use the <code>&lt;abbr&gt;</code> element to provide an abbreviation&#8217;s definition on hover.</p>

<p class="smaller note"><strong>Example:</strong></p>

<p><abbr title="Local community">LoCo</abbr> teams work with local <abbr title="Linux User Groups">LUGs</abbr>.</p>

<p class="smaller note"><strong>Code:</strong></p>
<pre>&lt;abbr title="Local community"&gt;LoCo&lt;/abbr&gt; teams work with local &lt;abbr title="Linux User Groups"&gt;LUGs&lt;/abbr&gt;</pre>
</div>
</div>

<div class="row">
<div class="link-top"><a href="#">Back to top</a></div>
<h2 id="quotes">Quotes</h2>

<div class="eight-col">
<p>There are a few different ways of having block and pullquotes on Ubuntu sites.</p>
<p>To the left: an example of a pullquote that sits in a separate column to the right of a block of text.</p>
<p class="smaller note"><strong>Code:</strong></p>
<pre>&lt;div class="three-col prepend-one last-col"&gt;
&lt;blockquote class="pull-quote"&gt;
&lt;p&gt;&lt;span&gt;“&lt;/span&gt; Ubuntu is an ancient African word meaning 'humanity to others'. &lt;span&gt;”&lt;/span&gt;&lt;/p&gt;
&lt;p&gt;&lt;cite&gt;Canonical&lt;/cite&gt;&lt;/p&gt;
&lt;/blockquote&gt;
&lt;/div&gt;</pre>
<p>An example of a blockquote occupying an entire row can be seen in the <a href="http://design.ubuntu.com/web-style-guide/scaffolding#rows">Scaffolding</a> section of this guide.</p>                    
</div>
<div class="three-col prepend-one last-col">
<blockquote class="pull-quote">
<p><span>“</span>&nbsp;Ubuntu is an ancient African word meaning &#8216;humanity to others&#8217;.&nbsp;<span>”</span> </p>
<p><cite>Canonical</cite></p>
</blockquote>
</div>
</div>

<div class="row no-border">
<h2 id="code">Code</h2>
<p>Use the <code>&lt;code&gt;</code> element to indicate a piece of inline code:</p>

<p class="smaller note"><strong>Example:</strong></p>
<p>Remember to use the <code>&lt;blockquote&gt;</code> tag to mark up a pull quote.</p>

<p class="smaller note"><strong>Code:</strong></p>
<pre>Remember to use the &lt;code&gt;&amp;lt;blockquote&amp;gt;&lt;/code&gt; tag to mark up a pull quote.</pre>

<p><br />Use the <code>&lt;pre&gt;</code> element to indicate a larger block of code:</p>

<p class="smaller note"><strong>Example:</strong></p>
<pre>$ quickly create ubuntu-application my-new-project</pre>
<p class="smaller note"><strong>Code:</strong></p>
<pre>&lt;pre&gt;$ quickly create ubuntu-application my-new-project&lt;/pre&gt;</pre>

</div>     
