---
layout: web-guidelines
title: "Components"
body-id: "web-style-guide"
body-class: "web-style-guide"
---

<div class="row">

<div class="eight-col">
<h2 id="boxes">Boxes</h2>
<p>There are several box styles available to use, all of which are an expansion of the basic <code>.box</code> class. The width of the box depends on the width set to its parent container. All box styles should be used sparingly.</p>     
</div>
<div class="four-col last-col">
<div class="box">
<strong>Note:</strong> All boxes have a default <code>border-radius</code> value of <code>4px</code>.
</div>
</div>

<div class="six-col">
<h3>Basic box</h3>
<p><code>.box</code><br>Adds a simple border to a white box.</p>

<p class="smaller note"><strong>Example:</strong></p>
<div class="box">
<p>Ubuntu is an ancient African word meaning &#8216;humanity to others&#8217;. It also means &#8216;I am what I am because of who…</p>
</div>
<br />
<p class="smaller note"><strong>Code:</strong></p>
<pre>&lt;div class="box"&gt;
&lt;/div&gt;</pre>
</div>

<div class="six-col last-col">
<h3>Highlighted box</h3>
<p><code>.box-highlight</code><br>Adds a drop-shadow and a border to <code>.box</code>.</p>

<p class="smaller note"><strong>Example:</strong></p>
<div class="box box-highlight">
<p>Ubuntu is an ancient African word meaning &#8216;humanity to others&#8217;. It also means &#8216;I am what I am because of who…</p>
</div>
<br />
<p class="smaller note"><strong>Code:</strong></p>
<pre>&lt;div class="box box-highlight"&gt;
&lt;/div&gt;</pre>
</div>

<div class="eight-col">
<h3>Resource box</h3>
<p>You can use the resource box style if you are providing a link to a resource such as white paper, case study, factsheet, etc.</p>
<p class="smaller note"><strong>Code:</strong></p>
<pre>&lt;div class="four-col box box-highlight resource"&gt;
&lt;h2&gt;&lt;a href="#">Resource title&amp;nbsp;&rsaquo;&lt;/a&gt;&lt;/h2&gt;
&lt;p&gt;Short description of why the resource is relevant.&lt;/p&gt;
&lt;p class="content-cat"&gt;E-book&lt;/p&gt;
&lt;/div&gt;</pre>
</div>

<div class="four-col last-col">
<p class="smaller note"><strong>Example:</strong></p>
<div class="box box-highlight resource">
<h2><a href="#">Resource title&nbsp;&rsaquo;</a></h2>
<p>Short description of why the resource is relevant.</p>
<p class="content-cat">E-book</p>
</div>
</div>

</div>

<div class="row no-border">
<div class="link-top"><a href="#">Back to top</a></div>
<h2 id="hero-unit">Hero unit</h2>
<div class="eight-col">
<p>A hero unit is composed of a main title, a subtitle or a short introduction, and an image that is representative of the page. Sometimes it can also include a call-to-action button and/or social buttons, which should be placed after the text (see example). When used, it should be the first section of a page.</p>
<p>Although this is not technically a component (it uses nothing more than simple elements and the default grid), you should follow the recommended markup.</p>
<p class="smaller note"><strong>Example:</strong></p>
</div>
</div>
<div class="row row-hero no-border">
<div class="six-col">
<h1>This is a hero unit title</h1>
<p class="intro">Here you can have a subtitle or short introduction to the page.</p>
<p><br></p>
<p><a class="link-cta-ubuntu">Main button</a></p>
</div>
<div class="six-col last-col">
<img src="https://assets.ubuntu.com/v1/447fbd48-hero-unit-image.jpg" alt="Ubuntu on a laptop" />
</div>
</div>     
<div class="row">
<div class="twelve-col">
<p class="smaller note"><strong>Code:</strong></p>
<pre>&lt;div class="row row-hero"&gt;
&lt;div class="six-col"&gt;
&lt;h1&gt;This is a hero unit title&lt;/h1&gt;
&lt;p class="intro"&gt;Here you can have a subtitle or short introduction to the page.&lt;/p&gt;
&lt;p&gt;&lt;a class="link-cta-ubuntu">Main button&lt;/a&gt;&lt;/p&gt;
&lt;/div&gt;
&lt;div class="six-col last-col"&gt;
&lt;img src="/https://assets.ubuntu.com/v1/447fbd48-hero-unit-image.jpg" alt="Ubuntu on a laptop" /&gt;
&lt;/div&gt;
&lt;/div&gt;</pre>
</div>
</div>

<div class="row">

<div class="link-top"><a href="#">Back to top</a></div>

<div class="eight-col">
<h2 id="muted-headings-and-logos-list">Muted headings and logos list</h2>
<p>You can use the muted heading style to describe a list of icons or logos, or even <a href="http://www.canonical.com/projects">a list of content</a>.</p>
</div>

<div class="twelve-col">
<p class="smaller note"><strong>Example:</strong></p>
<h3 class="muted-heading">Certified software</h3>
<ul class="inline-logos no-bullets">
<li><img src="http://assets.ubuntu.com/sites/ubuntu/1049/u/img/logos/logo-pack/logo-centrify.png" alt="Centrify" style="height:45px;" /></li>
<li><img src="http://assets.ubuntu.com/sites/ubuntu/1049/u/img/logos/logo-pack/logo-openbravo.png" alt="Openbravo" style="height:45px;" /></li>
<li class="last-item"><img src="http://assets.ubuntu.com/sites/ubuntu/1049/u/img/logos/logo-pack/logo-likewise.png" alt="Likewise" style="height:45px;" /></li>
</ul>
</div>

<div class="twelve-col">
<p class="smaller note"><strong>Code:</strong></p>
<pre>&lt;h3 class="muted-heading"&gt;Certified software&lt;/h3&gt;
&lt;ul class="inline-logos no-bullets"&gt;
&lt;li&gt;&lt;img src="http://assets.ubuntu.com/sites/ubuntu/1049/u/img/logos/logo-pack/logo-centrify.png" width="94" height="45" alt="Centrify" /&gt;&lt;/li&gt;
...
&lt;/ul&gt;</pre>
</div>
</div>

<div class="row no-border">
<div class="link-top"><a href="#">Back to top</a></div>
<div class="eight-col">
<h2 id="back-to-top">Back to top</h2>
<p>The &#8220;back to top&#8221; component can be used to divide long pages of content and provide an easy way for scrolling back to the top of the page.</p>
</div>
<div class="twelve-col">
<p class="smaller note"><strong>Code:</strong></p>
<pre>&lt;div class="link-top"&gt;&lt;a href="#"&gt;Back to top&lt;/a&gt;&lt;/div&gt;</pre>
</div>

</div>
