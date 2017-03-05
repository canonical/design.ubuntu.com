---
layout: web-guidelines
title: "Scaffolding"
body-id: "web-style-guide"
body-class: "web-style-guide"
---

<style>
.image-labels {
    position: relative;
    clear:both;
}
.image-labels li,
.image-labels-small li {
    position: absolute;
    border-radius: 50%;
    background: #333;
    color: #fff;
    list-style: none;
    padding: 2px 10px;
}
</style>

<div class="row" markdown="1">

# Scaffolding

<div class="four-col">
<ul>
<li><a href="#link">Grid</a></li>
<li><a href="#responsive-grid">Responsive grid</a></li>
<li><a href="#rows">Rows</a></li>
<li><a href="#columns">Columns</a></li>
</ul>
</div>
<div class="four-col">
<ul>
<li><a href="#column-dividers">Column dividers</a></li>
<li><a href="#empty-columns">Empty columns</a></li>
<li><a href="#offset-columns">Offset columns</a></li>
<li><a href="#navigation">Navigation</a></li>
</ul>
</div>
<div class="four-col last-col">
<ul>
<li><a href="#footer">Footer</a></li>
<li><a href="#colours">Colours</a></li>
<li><a href="#utility-classes">Utility classes</a></li>
</ul>
</div>
</div>

<div class="row">
<div class="five-col">
<h2 id="grid">Grid</h2>
<p>The default grid has 12 column (&#8220;col&#8221;) units and 20px gutters. Each col unit takes up 6.3053% of the total width.</p>
<p>To create a fixed-width layout at large screen sizes (984px and up), add a pixel or em value to <code>.wrapper</code>, for example:</p>
<pre>.wrapper {
    width: 984px;
    }</pre>
    <p>will result in:</p>
    <ul>
    <li>total content width: 904px</li>
    <li>col unit width: 58px</li>
    <li>gutter width: 19px</li>
    </ul>
    </div>
    <div class="seven-col last-col">
    <img class="right" src="https://assets.ubuntu.com/v1/9eef2b45-grid.png">
    </div>
    </div>

<div class="row">
    <div class="link-top"><a href="#">Back to top</a></div>
    <div class="eight-col">
    <h2 id="responsive-grid">Responsive grid</h2>
    <p>When content is added within <a href="#rows">rows</a> and <a href="#columns">column units</a>, the grid becomes fluid and responsive, adapting to various screens sizes, with a default maximum width of 984 pixels.</p>
    <p>The framework currently uses three breakpoints:</p>
    <ul>
    <li>Small screen styles: 767px and below</li>
    <li>Medium screen styles: 768px and up</li>
    <li>Large screen styles: 984px and up</li>
    </ul>
    <p>As an example, at medium screen sizes a row with four blocks will be become two rows of two blocks, and at small screen sizes the blocks become stacked.</p>
    </div>
    <div class="twelve-col">
    <img src="https://assets.ubuntu.com/v1/51c6af91-responsive-grid.png" alt="responsive-grid" width="904" height="413" class="alignnone size-full7" srcset="https://assets.ubuntu.com/v1/51c6af91-responsive-grid.png 904w, https://assets.ubuntu.com/v1/051d0bca-responsive-grid-300x137.png 300w" sizes="(max-width: 904px) 100vw, 904px" />
    </div>
    </div>

<div class="row">
    <div class="link-top"><a href="#">Back to top</a></div>     
    <div class="eight-col">
    <h2 id="rows">Rows</h2>

    <p>All content must be inside a <code>.row</code> container so that it correctly aligns to the grid.</p>
    <p>The <code>.row</code> class will create a full-width wrapper around row contents with padding and a bottom border. You can have columns and boxes within rows.</p>
    <p>The <code>.row</code> class can be expanded by the <code>.row-hero</code>, <code>.row-quote</code>, <code>.row-enterprise</code>, and <code>.row-image-centered</code> classes.</p>
    </div>

    <div class="eight-col">
    <h3>.row-hero</h3>
    <p>This class should be used for the first row on a page that has breadcrumb navigation. It removes the top padding from the row, as it is not needed. You can also use this class to target the top row of a page for extra styling, when required.</p>
    </div>

    <div class="twelve-col">
    <p class="smaller note"><strong>Code:</strong></p>
    <pre>&lt;div class="row row-hero"&gt;
    &lt;h1&gt;Meet Ubuntu&lt;/p&gt;
    &lt;p&gt;Fast, free and incredibly easy to use, the Ubuntu operating system powers millions of desktop PCs, laptops and servers around the world.&lt;/p&gt;
    &lt;a href="#" class="link-cta-ubuntu"&gt;Get Ubuntu&lt;/a&gt;
    &lt;/div&gt;</pre>
    </div>

    <div class="eight-col">
    <h3>.row-quote</h3>
    <p>This class should be used for full-width quotes.</p>
    <p class="smaller note"><strong>Example:</strong></p>
    </div>
    </div>
<div class="row row-quote">
    <blockquote class="pull-quote">
    <p><span>“</span> Ubuntu is an ancient African word meaning &#8216;humanity to others&#8217;. <span>”</span> </p>
    <p><cite>Canonical</cite></p>
    </blockquote>
    </div>
<div class="row no-border">
    <div class="twelve-col">
    <p class="smaller note"><strong>Code:</strong></p>
    <pre>&lt;div class="row row-quote"&gt;
    &lt;blockquote class="pull-quote"&gt;
    &lt;p&gt;&lt;span&gt;“&lt;/span&gt; Ubuntu is an ancient African word meaning 'humanity to others'. &lt;span&gt;”&lt;/span&gt;&lt;/p&gt;
    &lt;p&gt;&lt;cite&gt;Canonical&lt;/cite&gt;&lt;/p&gt;
    &lt;/blockquote&gt;
    &lt;/div&gt;</pre>
    </div>

    <div class="eight-col">
    <h3>.row-enterprise</h3>
    <p>This class will make the background of the row aubergine and invert the colour of text and buttons:</p>
    <p class="smaller note"><strong>Example:</strong></p>
    </div>
    </div>

<div class="row row-enterprise no-border">
    <div class="eight-col">
    <h3>An example title</h3>
    <p>Ubuntu is an ancient African word meaning &#8216;humanity to others&#8217;. It also means &#8216;I am what I am because of who we all are&#8217;. The Ubuntu operating system brings the spirit of Ubuntu to the world of computers.</p>
    <p><a class="link-cta-canonical" href="#">Button</a></p>
    </div>
    </div>

<div class="row">
    <div class="twelve-col">
    <p class="smaller note"><strong>Code:</strong></p>
    <pre>&lt;div class="row row-enterprise"&gt;
    &lt;div class="eight-col"&gt;
    &lt;h3&gt;An example title&lt;/h3&gt;
    &lt;p&gt;Ubuntu is an ancient African word meaning 'humanity to others'. It also means 'I am what I am because of who we all are'. The Ubuntu operating system brings the spirit of Ubuntu to the world of computers.&lt;/p&gt;
    &lt;p&gt;&lt;a class="link-cta-canonical"&gt;Button&lt;/a&gt;&lt;/p&gt;
    &lt;/div&gt;
    &lt;/div&gt;</pre>
    </div>

    <div class="eight-col">
    <h3>.row-image-centered</h3>
    <p>If you apply this class to the row, when you place an image in a <code>&lt;span&gt;</code> it will be centred vertically and horizontally within the row.</p>
    <p class="smaller note"><strong>Example:</strong></p>
    </div>

    <div class="four-col last-col">
    <div class="box">
    <p><strong>Note:</strong> By placing the <code>&lt;span&gt;</code> <em>before</em> the text it will place the image centered on the left.</p>
    </div>
    </div>
    </div>

<div class="row row-image-centered">
    <div class="six-col">
    <h3>An example title</h3>
    <p>Ubuntu is an ancient African word meaning &#8216;humanity to others&#8217;. It also means &#8216;I am what I am because of who we all are&#8217;. The Ubuntu operating system brings the spirit of Ubuntu to the world of computers. Ubuntu is an ancient African word meaning &#8216;humanity to others&#8217;. It also means &#8216;I am what I am because of who we all are&#8217;…</p>
    </div><span><img src="https://assets.ubuntu.com/v1/7db9facc-canonical-symbol-167x167.png" alt="Canonical symbol" /></span></div>

<div class="row">
    <div class="twelve-col">
    <p class="smaller note"><strong>Code:</strong></p>
    <pre>&lt;div class="row row-image-centered"&gt;
    &lt;div class="six-col"&gt;
    &lt;h3&gt;An example title&lt;/h3&gt;
    &lt;p&gt;Ubuntu is an ancient African word meaning 'humanity to others'. It also means 'I am what I am because of who we all are'. The Ubuntu operating system brings the spirit of Ubuntu to the world of computers.&lt;/p&gt;
    &lt;/div&gt;
    &lt;span&gt;
    &lt;img src="/https://assets.ubuntu.com/v1/7db9facc-canonical-symbol-167x167.png" alt="Canonical symbol" /&gt;
    &lt;/span&gt;
    &lt;/div&gt;</pre>
    </div>

    </div>

<div class="row">
    <div class="link-top"><a href="#">Back to top</a></div>     
    <h2 id="columns">Columns</h2>
    <div class="eight-col">
    <p>Layouts can be created combining rows with different number of columns to a <strong>maximum of 4 columns per row</strong>. Each column must span a minimum of 3 column units. The last <code>col</code> in a row must also include the class <code>.last-col</code> to remove the right margin, except <code>.twelve-col</code>.</p>
    </div>
    <div class="four-col last-col">
    <div class="box">
    <p><strong>Note:</strong> Text shouldn&#8217;t go across more than 8 column units (<code>.eight-col</code>).</p>
    </div>
    </div>

    <div class="twelve-col">
    <h3>1-column layout</h3>
    <p class="smaller note"><strong>Code:</strong></p>
    <pre>&lt;div class="twelve-col"&gt;
    &lt;/div&gt;</pre>
    </div>
    <h3>2-column layouts</h3>
    <div class="six-col">
    <p class="smaller note"><strong>Code:</strong></p>
    <pre>&lt;div class="six-col"&gt;
    &lt;/div&gt;</pre>
    </div>
    <div class="six-col last-col">
    <p class="smaller note"><strong>Code:</strong></p>
    <pre>&lt;div class="six-col last-col"&gt;
    &lt;/div&gt;</pre>
    </div>

    <div class="eight-col">
    <p class="smaller note"><strong>Code:</strong></p>
    <pre>&lt;div class="eight-col"&gt;
    &lt;/div&gt;</pre>
    </div>
    <div class="four-col last-col">
    <p class="smaller note"><strong>Code:</strong></p>
    <pre>&lt;div class="four-col last-col"&gt;
    &lt;/div&gt;</pre>
    </div>

    <div class="nine-col">
    <p class="smaller note"><strong>Code:</strong></p>
    <pre>&lt;div class="nine-col"&gt;
    &lt;/div&gt;</pre>
    </div>
    <div class="three-col last-col">
    <p class="smaller note"><strong>Code:</strong></p>
    <pre>&lt;div class="three-col last-col"&gt;
    &lt;/div&gt;</pre>
    </div>

    <h3>3-column layouts</h3>
    <div class="four-col">
    <p class="smaller note"><strong>Code:</strong></p>
    <pre>&lt;div class="four-col"&gt;
    &lt;/div&gt;</pre>
    </div>
    <div class="four-col">
    <p class="smaller note"><strong>Code:</strong></p>
    <pre>&lt;div class="four-col"&gt;
    &lt;/div&gt;</pre>
    </div>
    <div class="four-col last-col">
    <p class="smaller note"><strong>Code:</strong></p>
    <pre>&lt;div class="four-col last-col"&gt;
    &lt;/div&gt;</pre>
    </div>

    <div class="six-col">
    <p class="smaller note"><strong>Code:</strong></p>
    <pre>&lt;div class="six-col"&gt;
    &lt;/div&gt;</pre>
    </div>
    <div class="three-col">
    <p class="smaller note"><strong>Code:</strong></p>
    <pre>&lt;div class="three-col"&gt;
    &lt;/div&gt;</pre>
    </div>
    <div class="three-col last-col">
    <p class="smaller note"><strong>Code:</strong></p>
    <pre>&lt;div class="three-col last-col"&gt;
    &lt;/div&gt;</pre>
    </div>

    <h3>4-column layout</h3>
    <div class="three-col">
    <p class="smaller note"><strong>Code:</strong></p>
    <pre>&lt;div class="three-col"&gt;
    &lt;/div&gt;</pre>
    </div>
    <div class="three-col">
    <p class="smaller note"><strong>Code:</strong></p>
    <pre>&lt;div class="three-col"&gt;
    &lt;/div&gt;</pre>
    </div>
    <div class="three-col">
    <p class="smaller note"><strong>Code:</strong></p>
    <pre>&lt;div class="three-col"&gt;
    &lt;/div&gt;</pre>
    </div>
    <div class="three-col last-col">
    <p class="smaller note"><strong>Code:</strong></p>
    <pre>&lt;div class="three-col last-col"&gt;
    &lt;/div&gt;</pre>
    </div>
    </div>

<div class="row no-border">
    <div class="link-top"><a href="#">Back to top</a></div>
    <h2 id="column-dividers">Column dividers</h2>
    <div class="eight-col">
    <p>To add a vertical divider to columns, use the class <code>.vertical-divider</code> together with <code>.row</code> in the parent container. The vertical dividers will show up at width sizes of 984 pixels and up.</p>
    </div>
    </div>

<div class="row vertical-divider no-border">
    <p class="smaller note"><strong>Example:</strong></p>
    <div class="four-col">
    <p>Ubuntu is an ancient African word meaning &#8216;humanity to others&#8217;. It also means &#8216;I am what I am because of…</p>
    </div>
    <div class="four-col">
    <p>Ubuntu is an ancient African word meaning &#8216;humanity to others&#8217;. It also means &#8216;I am what I am because of….</p>
    </div>
    <div class="four-col last-col">
    <p>Ubuntu is an ancient African word meaning &#8216;humanity to others&#8217;. It also means &#8216;I am what I am because of…</p>
    </div>
    </div>
<div class="row twelve-col">
    <p class="smaller note"><strong>Code:</strong></p>
    <pre>&lt;div class="row vertical-divider"&gt;
    &lt;div class="four-col"&gt;
    &lt;!-- Content --&gt;
    &lt;/div&gt;
    &lt;div class="four-col"&gt;
    &lt;!-- Content --&gt;
    &lt;/div&gt;
    &lt;div class="four-col last-col"&gt;
    &lt;!-- Content --&gt;
    &lt;/div&gt;
    &lt;/div&gt;</pre>
    </div>

<div class="row">
    <div class="link-top"><a href="#">Back to top</a></div>
    <h2 id="empty-columns">Empty columns</h2>
    <div class="eight-col">
    <p>Adding empty columns before or after an element might be useful when you need extra space between elements and columns than that provided by the default grid.</p>
    <p>The classes <code>.prepend-one</code>, <code>.prepend-two</code>, <code>.prepend-three</code>, and so on, will add empty columns before the element to the number of column units specified in the class.</p>
    </div>
    <div class="four-col last-col">
    <div class="box">
    <p><strong>Note:</strong> in small sized screens, empty columns won&#8217;t have an effect on the element they&#8217;re applied to, as the content is shown in a <a href="#responsive-grid">linear way</a>.</p>
    </div>
    </div>
    <div class="eight-col prepend-four">
    <p class="smaller note"><strong>Code:</strong></p>
    <pre>&lt;div class="eight-col prepend-four"&gt;
    &lt;/div&gt;</pre>
    </div>
    <div class="eight-col">
    <p>The classes <code>.append-one</code>, <code>.append-two</code>, <code>.append-three</code>, and so on, will add empty columns after the element to the number of column units specified in the class.</p>
    </div>
    <div class="eight-col append-four">
    <p class="smaller note"><strong>Code:</strong></p>
    <pre>&lt;div class="eight-col append-four"&gt;
    &lt;/div&gt;</pre>
    </div>
    </div>

<div class="row">
    <div class="link-top"><a href="#">Back to top</a></div>
    <h2 id="offset-columns">Offset columns</h2>
    <div class="eight-col">
    <p>The ability to offset columns can be useful when you want to expand an element beyond its parent container, usually to create interesting visual effects or simply to adjust element alignments.</p>
    <p>The classes <code>.pull-one</code>, <code>.pull-two</code>, <code>.pull-three</code>, and so on, will pull the element to the left the number of column units specified in the class.</p>
    </div>
    <div class="four-col last-col">
    <div class="box">
    <p><strong>Note:</strong> in small sized screens, offset columns won&#8217;t have an effect on the element they&#8217;re applied to, as the content is shown in a <a href="#responsive-grid">linear way</a>.</p>
    </div>
    </div>
    <div class="eight-col pull-two">
    <p class="smaller note"><strong>Code:</strong></p>
    <pre>&lt;div class="eight-col pull-two"&gt;
    &lt;/div&gt;</pre>
    </div>
    <div class="eight-col">
    <p>The classes <code>.push-one</code>, <code>.push-two</code>, <code>.push-three</code>, and so on, will pull the element to the right the number of column units specified in the class.</p>
    </div>
    <div class="eight-col push-six">
    <p class="smaller note"><strong>Code:</strong></p>
    <pre>&lt;div class="eight-col push-six"&gt;
    &lt;/div&gt;</pre>
    </div>

    </div>

<div class="row">
    <div class="link-top"><a href="#">Back to top</a></div>
    <h2 id="navigation">Navigation</h2>
    <p>The default navigation used on ubuntu.com is composed of the following elements:</p>
    <div class="eight-col">
    <ol>
    <li>Ubuntu brand</li>
    <li>Main top level sections</li>
    <li>Current section</li>
    <li>Search input</li>               
    <li>Breadcrumbs</li>
    <li>Current top level section (large screens)</li>
    <li>Current page</li>
    <li>Third level sections</li>
    </ol>
    </div>
    <div class="four-col last-col image-labels-small">
    <ol>
    <li style="left:101px; top:24px;">1</li>
    <li style="left:130px; top:110px;">2</li>
    <li style="left:50px; top:373px;">3</li>
    <li style="left:10px; top:268px;">4</li>
    <li style="right:20px; top:440px;">5</li>
    <li style="left:95px; top:408px;">7</li>
    <li style="left:8px; top:460px;">8</li>
    </ol>
    <img src="https://assets.ubuntu.com/v1/72051301-ubuntu-scaffolding-navigation-main-small-screen.png" style="max-width:100%" /><br /><br />
    <img src="https://assets.ubuntu.com/v1/529a6975-ubuntu-scaffolding-navigation-search-small-screen.png" style="max-width:100%" /><br /><br />
    <img src="https://assets.ubuntu.com/v1/27540521-ubuntu-scaffolding-navigation-breadcrumbs-small-screen.png" style="max-width:100%" />
    </div>
    <div class="image-labels">
    <ol>
    <li style="left:5px; top:-10px;">1</li>
    <li style="left:400px; top:-25px;">2</li>
    <li style="left:142px; top:30px;">3</li>
    <li style="right:-5px; top:7px;">4</li>
    <li style="left:0; top:77px;">5</li>
    <li style="left:38px; top:105px;">6</li>
    <li style="left:110px; top:105px;">7</li>
    <li style="left:220px; top:110px;">8</li>
    </ol>
    <img src="https://assets.ubuntu.com/v1/d2148451-top-nav1.png" style="max-width:100%" />
    </div>
    <p class="smaller note"><strong>Code:</strong></p>
    <pre>&lt;header class="banner global" role="banner"&gt;
    &lt;nav role="navigation" class="nav-primary nav-right"&gt;
    &lt;div class="logo"&gt;
    &lt;a class="logo-ubuntu" href="/"&gt;
    &lt;img width="106" height="25" src="http://assets.ubuntu.com/sites/ubuntu/1044/u/img/logos/logo-ubuntu-orange.svg" alt="Ubuntu" /&gt;
    &lt;!-- Use this tag for the name of your sub-site &lt;span&gt;Design&lt;/span&gt; --&gt;
    &lt;/a&gt;
    &lt;/div&gt;
    &lt;ul&gt;
    &lt;li class="accessibility-aid"&gt;&lt;a accesskey="s" href="#main-content"&gt;Jump to content&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a class="first" href="#"&gt;Cloud&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;Server&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;Desktop&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;Phone&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;Tablet&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;TV&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;Management&lt;/a>&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;Download&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
    &lt;form action="/search" id="google-appliance-search-form" class="header-search"&gt;
    &lt;input type="search" maxlength="255" name="q" id="edit-keys" class="form-text" placeholder="Search" value="" /&gt;
    &lt;button type="submit"&gt;&lt;img src="http://assets.ubuntu.com/sites/ubuntu/1044/u/img/search-white.svg" alt="Search" height="28" /&gt;&lt;/button&gt;     
    &lt;/form&gt;
    &lt;/nav&gt;
    &lt;/header&gt;

    &lt;div class="wrapper"&gt;
    &lt;div id="main-content" class="inner-wrapper"&gt;

    &lt;nav role="navigation" class="nav-secondary clearfix"&gt;
    &lt;ul class="breadcrumb"&gt;
    &lt;li&gt;&lt;a href="#"&gt;Cloud&lt;/a&gt; &amp;nbsp;&amp;rsaquo;&lt;/li&gt;
    &lt;li class="active"&gt;&lt;a href="#"&gt;Cloud tools&lt;/a&gt; &amp;nbsp;&amp;rsaquo;&lt;/li&gt;
    &lt;/ul&gt;
    &lt;ul class="third-level"&gt;
    &lt;li&gt;&lt;a href="#"&gt;Juju&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;MAAS&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;Jumpstart&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
    &lt;/nav&gt;

    &lt;!-- Main content --&gt;

    &lt;/div&gt;
    &lt;/div&gt;</pre>

    </div>

<div class="row">
    <div class="link-top"><a href="#">Back to top</a></div>
    <h2 id="footer">Footer</h2>
    <div class="eight-col">
    <p>The default footer is composed of the following elements:</p>
    <ol>
    <li>Footer level A</li>
    <li>Footer level B</li>
    <li>Legal section</li>
    <li>Ubuntu branding</li>
    </ol>
    </div>
    <div class="four-col last-col image-labels-small">
    <ol>

    <li style="left:-24px; top:51px;">1</li>
    <li style="left:-24px; top:251px;">2</li>
    <li style="left:-24px; top:403px;">3</li>

    </ol>
    <img alt="ubuntu.com footer" src="https://assets.ubuntu.com/v1/9926560a-ubuntu-scaffolding-navigation-footer-small-screen.png" style="max-width:100%">
    </div>
    <div class="image-labels">
    <ol>
    <li style="left:-15px; top:30px;">1</li>
    <li style="left:-15px; top:210px;">2</li>
    <li style="left:-15px; top:375px;">3</li>
    <li style="right:140px; top:380px;">4</li>
    </ol>
    <img alt="ubuntu.com footer" src="https://assets.ubuntu.com/v1/231dfc03-footer.png" style="max-width:100%">
    </div>
    <p class="smaller note"><strong>Code:</strong></p>
    <pre>&lt;footer class="global clearfix"&gt;
    &lt;nav role="navigation"&gt;
    &lt;div class="footer-a"&gt;
    &lt;div class="clearfix"&gt;
    &lt;ul&gt;
    &lt;li&gt;
    &lt;h2&gt;&lt;a href="#"&gt;Section title&lt;/a&gt;&lt;/h2&gt;
    &lt;ul&gt;
    &lt;li class="first"&gt;&lt;a href="#"&gt;Subsection 1&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;Subsection 2&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;Subsection 3&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
    &lt;/li&gt;
    &lt;li&gt;
    &lt;h2&gt;&lt;a href="#"&gt;Section title&lt;/a&gt;&lt;/h2&gt;
    &lt;ul&gt;
    &lt;li class="first"&gt;&lt;a href="#"&gt;Subsection 1&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;Subsection 2&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;Subsection 3&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
    &lt;/li&gt;
    &lt;li&gt;
    &lt;h2&gt;&lt;a href="#"&gt;Section title&lt;/a&gt;&lt;/h2&gt;
    &lt;ul&gt;
    &lt;li class="first"&gt;&lt;a href="#"&gt;Subsection 1&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;Subsection 2&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;Subsection 3&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
    &lt;/li&gt;
    &lt;li&gt;
    &lt;h2&gt;&lt;a href="#"&gt;Section title&lt;/a&gt;&lt;/h2&gt;
    &lt;ul&gt;
    &lt;li class="first"&gt;&lt;a href="#"&gt;Subsection 1&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;Subsection 2&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;Subsection 3&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
    &lt;/li&gt;
    &lt;li&gt;
    &lt;h2&gt;&lt;a href="#"&gt;Section title&lt;/a&gt;&lt;/h2&gt;
    &lt;ul&gt;
    &lt;li class="first"&gt;&lt;a href="#"&gt;Subsection 1&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;Subsection 2&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;Subsection 3&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
    &lt;/li&gt;
    &lt;li&gt;
    &lt;h2&gt;&lt;a href="#"&gt;Section title&lt;/a&gt;&lt;/h2&gt;
    &lt;ul&gt;
    &lt;li class="first"&gt;&lt;a href="#"&gt;Subsection 1&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;Subsection 2&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;Subsection 3&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
    &lt;/li&gt;
    &lt;li&gt;
    &lt;h2&gt;&lt;a href="#"&gt;Section title&lt;/a&gt;&lt;/h2&gt;
    &lt;ul&gt;
    &lt;li class="first"&gt;&lt;a href="#"&gt;Subsection 1&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;Subsection 2&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;Subsection 3&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
    &lt;/li&gt;
    &lt;/ul&gt;
    &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class="footer-b inline-lists twelve-col"&gt;
    &lt;ul&gt;
    &lt;li&gt;
    &lt;h2&gt;&lt;a href="#"&gt;Section title:&lt;/a&gt;&lt;/h2&gt;
    &lt;ul&gt;
    &lt;li class="first"&gt;&lt;a href="#"&gt;Subsection 1&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;Subsection 2&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;Subsection 3&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;Subsection 4&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
    &lt;/li&gt;
    &lt;li&gt;
    &lt;h2&gt;&lt;a href="#"&gt;Section title:&lt;/a&gt;&lt;/h2&gt;
    &lt;ul&gt;
    &lt;li class="first"&gt;&lt;a href="#"&gt;Subsection 1&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;Subsection 2&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;Subsection 3&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;Subsection 4&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
    &lt;/li&gt;
    &lt;li&gt;
    &lt;h2&gt;&lt;a href="#"&gt;Section title:&lt;/a&gt;&lt;/h2&gt;
    &lt;ul&gt;
    &lt;li class="first"&gt;&lt;a href="#"&gt;Subsection 1&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;Subsection 2&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;Subsection 3&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;Subsection 4&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
    &lt;/li&gt;
    &lt;/ul&gt;
    &lt;/div&gt;
    &lt;/nav&gt;

    &lt;div class="legal clearfix"&gt;
    &lt;p class="twelve-col"&gt;&amp;copy; 2013 Canonical Ltd. Ubuntu and Canonical are registered trademarks of Canonical Ltd.&lt;/p&gt;
    &lt;ul class="inline clear"&gt;
    &lt;li&gt;&lt;a href="/trademark-policy"&gt;Trademark policy&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="/legal"&gt;Legal information&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a accesskey="8" href="/privacy-policy"&gt;Privacy policy&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
    &lt;/div&gt;

    &lt;span class="accessibility-aid"&gt;&lt;a href="#">Got to the top of the page&lt;/a&gt;&lt;/span&gt;
    &lt;/footer&gt;</pre>

    </div>

<div class="row">
    <div class="link-top"><a href="#">Back to top</a></div>
    <h2 id="colours">Colours</h2>

    <div class="twelve-col">
    <div class="eight-col">
    <h3>Core web colours</h3>
    <ul>
    <li>Ubuntu orange <code style="background:#E95420;color:white">#E95420</code>: links, row backgrounds, buttons</li>
    <li>Cool grey <code style="background:#333;color:white">#333333</code>: default text colour</li>
    </ul>
    </div>
    <div class="four-col last-col">
    <div class="box">
    <p><strong>Note:</strong> Avoid big blocks of orange. If possible, do not use full width orange. And remember that white text on an orange background is difficult to read.</p>
    </div>
    </div>
    </div>

    <div class="twelve-col">
    <div class="eight-col">
    <h3>Secondary web colours</h3>
    <ul>
    <li>Dark aubergine <code style="background:#2C001E;color:white">#2C001E</code>: row backgrounds</li>
    <li>Warm grey <code style="background:#888888;color:white">#888888</code>: secondary text on white, like notes and help text; horizontal and vertical dotted divider lines</li>
    <li>Light grey <code style="background:#efefef;">#F7F7F7</code>: row backgrounds</li>
    <li>White (transparent) <code>rgba(255, 255, 255, 0.6)</code>: row backgrounds</li>
    </ul>
    </div>
    <div class="four-col last-col">
    <div class="box">
    <p><strong>Warning:</strong> Warm grey must not be used as a background to text on the web, as it doesn&#8217;t provide enough contrast with either light or dark text colours, which causes accessibility problems.</p>  
    </div>
    </div>
    </div>

    <div class="twelve-col">
    <h3>Colour distribution</h3>
    <div class="eight-col">
    <p>When planning your pages, make sure there is an even distribution and well-balanced percentage of light (such as white) and strong colours (such as Ubuntu orange). Think of the screen as a whole &ndash; a unit. It shouldn&#8217;t be top- or bottom-heavy.</p>
    </div>
    </div>

    </div>

<div class="row no-border">
    <div class="link-top"><a href="#">Back to top</a></div>
    <h2 id="utility-classes">Utility classes</h2>
    <p>The following classes were created for flexibility of use &mdash; they should help in many situations and contexts.</p>

    <div class="twelve-col">

    <h3>Accessibility</h3>
    <p>To position an element off-screen keeping it accessible for screen readers, use the class <code>.accessibility-aid</code>.</p>
    <p class="smaller note"><strong>Code:</strong></p>
    <pre>&lt;a class="accessibility-aid"&gt;Skip to content&lt;/a&gt;</pre>

    <h3>Floats</h3>
    <p><code>.left</code> will float the element left.</p>
    <p class="smaller note"><strong>Code:</strong></p>
    <pre>&lt;div class="left"&gt;&lt;/div&gt;</pre>
    <p><code>.right</code> will float the element right.</p>
    <p class="smaller note"><strong>Code:</strong></p>
    <pre>&lt;div class="right"&gt;&lt;/div&gt;</pre>

    <h3>Align centre</h3>
    <p>The <code>.align-center</code> class allows you to centre text and other elements.</p>
    <p class="smaller note"><strong>Code:</strong></p>
    <pre>&lt;p class="align-center"&gt;...&lt;/p&gt;</pre>

    <h3>Self-clearing element</h3>
    <p><code>.clearfix</code> will clear the floats in an element.</p>
    <p class="smaller note"><strong>Code:</strong></p>
    <pre>&lt;div class="clearfix"&gt;&lt;/div&gt;</pre>

    <h3>Last box</h3>
    <p>By default, &#8220;col&#8221; units include a right margin. Add the class <code>.last-col</code> to the last container in a row to remove its right margin.</p>
    <p class="smaller note"><strong>Code:</strong></p>
    <pre>&lt;div class="six-col"&gt;
    &lt;/div&gt;
    &lt;div class="six-col last-col"&gt;
    &lt;/div&gt;</pre>
    <p>Note: The <code>.twelve-col</code> class doesn&#8217;t need the added <code>.last-col</code> class, as it doesn&#8217;t include default right margin.</p>

    <h3>Inline</h3>
    <p>Apply the class <code>.inline</code> to a <code>&lt;ul&gt;</code> or <code>&lt;ol&gt;</code> tag to make the inner <code>&lt;li&gt;</code> elements display inline.</p>
    <p class="smaller note"><strong>Code:</strong></p>
    <pre>&lt;ul class="inline"&gt;
    &lt;li&gt;Item 1&lt;/li&gt;
    &lt;li&gt;Item 2&lt;/li&gt;
    &lt;li&gt;Item 3&lt;/li&gt;
    &lt;/ul&gt;</pre>

    <h3>No margins</h3>
    <p>Add the class <code>.no-margin</code> if you need to remove an element&#8217;s margins.</p>
    <p class="smaller note"><strong>Code:</strong></p>
    <pre>&lt;div class="row no-margin"&gt;
    &lt;/div&gt;</pre>

    <h3>No bottom margin</h3>
    <p>By default, <code>.box</code> and &#8220;col&#8221; units include a bottom margin. Add the class <code>.no-margin-bottom</code> if you need to remove this bottom margin.</p>
    <p class="smaller note"><strong>Code:</strong></p>
    <pre>&lt;div class="box no-margin-bottom"&gt;
    &lt;/div&gt;</pre>

    <h3>No border</h3>
    <p>By default, <code>.box</code> and <code>.row</code> include a border. Add the class <code>.no-border</code> to remove the border maintaining the spacing and layout.</p>
    <p class="smaller note"><strong>Code:</strong></p>
    <pre>&lt;div class="box no-border"&gt;
    &lt;/div&gt;</pre>

    <h3>Touch border</h3>
    <p>The <code>.touch-border</code> class allows you to make an image in a row touch its bottom border.</p>
    <p class="smaller note"><strong>Code:</strong></p>
    <pre>&lt;img class="touch-border" src="..." /&gt;</pre>

    <h3>Responsive images</h3>
    <p>There are three classes that can be used to hide/show images and other elements according to the size of the viewport:</p>
    <ul>
    <li><code>.for-small</code>: only shows in the smallest media query viewport</li>
    <li><code>.for-medium</code>: only shows in the small and medium media query viewports</li>
    <li><code>.not-for-small</code>: does not show in the smallest media query viewport</li>
    </ul>          
    </div>

    <div class="link-top"><a href="#">Back to top</a></div>
    </div>     
