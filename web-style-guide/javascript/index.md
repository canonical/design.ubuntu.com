---
layout: web-guidelines-iframe
title: "JavaScript"
body-id: "web-style-guide"
body-class: "web-style-guide"
---


<div class="row">
<h2 id="setting-up-yui">Setting up YUI</h2>
<div class="eight-col">          
<p>Ubuntu&rsquo;s JavaScript uses YUI as its framework. You will need to import YUI followed by the Ubuntu JavaScript file.</p>
</div>
<div class="twelve-col">     
<p class="smaller note"><strong>Code:</strong></p>
<pre>&lt;script src="http://assets.ubuntu.com/sites/ubuntu/latest/u/js/plugins/yui-min.js"&gt;&lt;/script&gt;
&lt;script src="http://assets.ubuntu.com/sites/ubuntu/latest/u/js/core.js"&gt;&lt;/script&gt;</pre>
</div>

</div>

<div class="row no-border">
<div class="link-top"><a href="#">Back to top</a></div>
<h2 id="equal-height-columns">Equal-height columns</h2>

<p>To create equal-height boxes in a row, add the class <code>.equal-height</code> to their parent container.</p>
<p class="smaller note"><strong>Example:</strong></p>
</div>

<div class="row no-border equal-height">
<div class="four-col box">
<p>Ubuntu is an ancient African word meaning &#8216;humanity to others&#8217;. It also means &#8216;I am what I am because of who we all are&#8217;. The Ubuntu operating system brings the spirit of Ubuntu to the world of computers.</p>
</div>
<div class="eight-col box">
<p>Ubuntu is an ancient African word meaning &#8216;humanity to others&#8217;. It also means &#8216;I am what I am because of who we all are&#8217;. The Ubuntu operating system brings the spirit of Ubuntu to the world of computers.</p>
</div>
</div>

<div class="row">
<p class="smaller note"><strong>Code:</strong></p>
<div class="twelve-col">
<pre>&lt;div class="equal-height"&gt;

&lt;div class="four-col box"&gt;
&lt;!-- Content goes here --&gt;
&lt;/div&gt;

&lt;div class="eight-col box"&gt;
&lt;!-- Content goes here --&gt;
&lt;/div&gt;

&lt;/div&gt;</pre>
</div>

</div>

<div class="row">
<div class="link-top"><a href="#">Back to top</a></div>
<h2 id="tooltips">Tooltips</h2>
<p>To add tooltips to an element apply the class <code>.tooltip</code> and add the tooltip content to its <code>title</code> attribute.</p>

<p class="smaller note"><strong>Example:</strong></p>
<div class="six-col">
<ul class="inline-icons">
<li><img src="{{ site.assets_path }}e11d98f6-icon-firefox-32x32.png" alt="Firefox" title="Firefox" class="tooltip" /></li>
<li><img src="{{ site.assets_path }}abe96510-icon-gimp-35x35.png" alt="GIMP" title="GIMP" class="tooltip" /></li>
<li><img src="{{ site.assets_path }}6ea3c2c9-icon-inkscape-35x35.png" alt="Inkscape" title="Inkscape" class="tooltip" /></li>
<li><img src="{{ site.assets_path }}f03f9cbc-icon-pidgin-35x35.png" alt="Pidgin" title="Pidgin" class="tooltip" /></li>
<li><img src="{{ site.assets_path }}8d10c23b-icon-thunderbird-32x32.png" alt="Thunderbird" title="Thunderbird" class="tooltip" /></li>
</ul>
</div>

<div class="twelve-col">
<p class="smaller note"><strong>Code:</strong></p>
<pre>&lt;ul class="inline-icons"&gt;
&lt;li&gt;&lt;img src="{{ site.assets_path }}e11d98f6-icon-firefox-32x32.png" alt="Firefox" title="Firefox" class="tooltip" /&gt;&lt;/li&gt;
&lt;li&gt;&lt;img src="{{ site.assets_path }}abe96510-icon-gimp-35x35.png" alt="GIMP" title="GIMP" class="tooltip" /&gt;&lt;/li&gt;
&lt;li&gt;&lt;img src="{{ site.assets_path }}6ea3c2c9-icon-inkscape-35x35.png" alt="Inkscape" title="Inkscape" class="tooltip" /&gt;&lt;/li&gt;
&lt;li&gt;&lt;img src="{{ site.assets_path }}f03f9cbc-icon-pidgin-35x35.png" alt="Pidgin" title="Pidgin" class="tooltip" /&gt;&lt;/li&gt;
&lt;li&gt;&lt;img src="{{ site.assets_path }}8d10c23b-icon-thunderbird-32x32.png" alt="Thunderbird" title="Thunderbird" class="tooltip" /&gt;&lt;/li&gt;
&lt;/ul&gt;</pre>
</div>
</div>

<div class="row">
<div class="link-top"><a href="#">Back to top</a></div>
<h2 id="tabbed-content">Tabbed content</h2>
<div class="eight-col">
<p>You can show content in tabs by using the <code>.tabbed-menu</code> class on the tabs&#8217; navigation list and the <code>.tabbed-content</code> along with the <code>.box-grey</code> classes on each tab&#8217;s container.</p>
</div>

<div class="twelve-col">
<p class="smaller note"><strong>Example:</strong></p>

<div class="tabbed-menu">
<ul class="no-bullets">
<li><a class="slideless active" href="#compute">Compute</a></li>
<li><a class="slideless" href="#object-storage">Object storage</a></li>
<li><a class="slideless" href="#authentication-service">Authentication</a></li>
<li><a class="slideless" href="#management-service">Management</a></li>
</ul>
<img src="{{ site.assets_path }}1000a177-tabbed-nav-arrow.png" class="arrow" height="6" width="12">
</div>
<div id="compute" class="tabbed-content compute twelve-col">
<a class="accordion-button slideless" href="#compute" data-hash="compute">Compute</a>
<div class="eight-col">
<p>The OpenStack Compute component (codenamed Nova) enables you to provision and manage large networks of virtual machines, creating a redundant and scalable cloud-computing platform, based on Ubuntu. It gives you everything you need to run instances, manage networks and control access through users and projects. Like the rest of the Ubuntu operating system, it supports most standard hardware configurations and well-known hypervisors.</p>
</div>
</div>
<div id="object-storage" class="tabbed-content object-storage hide twelve-col">
<a class="accordion-button slideless" href="#object-storage" data-hash="object-storage">Object storage</a>
<div class="eight-col">
<p>OpenStack Object Storage (codenamed Swift) creates redundant, scalable object storage using clusters of standardised storage servers. Rather than a file system or real-time data storage system, it provides a long-term storage system for more permanent, static data. Examples include virtual machine images, photo storage, email storage and backup archiving.</p>
</div>
</div>
<div id="authentication-service" class="tabbed-content authentication-service hide twelve-col">
<a class="accordion-button slideless" href="#authentication-service" data-hash="authentication-service">Authentication</a>
<div class="eight-col">
<p>The OpenStack Authentication service (codenamed Keystone) provides identity, token, catalogue and policy services for use by OpenStack components. It provides a pluggable back-end that has been designed to support various protocols (e.g. Basic Auth, OAuth, OpenID) for authentication and authorisation, allowing clients to obtain security tokens to access different cloud services.</p>
</div>
</div>
<div id="management-service" class="tabbed-content management-service hide twelve-col">
<a class="accordion-button slideless" href="#management-service" data-hash="management-service">Management</a>
<div class="six-col">
<p>The OpenStack management service or dashboard (codenamed Horizon) provides OpenStack users with a web-based user interface with which to control OpenStack&#8217;s component services (Nova, Swift, Keystone, Glance) and a single API with which to access them.</p>
<p>The Horizon application also ships with a set of API abstractions for the core OpenStack projects, enabling developers to work on OpenStack without intimate knowledge of the APIs of every component.</p>
</div>
<div class="six-col">
<p>There are three central dashboards, covering the core OpenStack applications:</p>
<ul class="list-canonical">
<li>Raw</li>
<li>VHD (Hyper-V)</li>
<li class="last-item">VDI (VirtualBox)</li>
</ul>
</div>
</div>

<p class="smaller note"><strong>Code:</strong></p>
<pre>&lt;div class="tabbed-menu"&gt;
&lt;ul class="no-bullets"&gt;
&lt;li&gt;&lt;a class="active slideless" href="#compute"&gt;Compute&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a class="slideless" href="#object-storage"&gt;Object storage&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a class="slideless" href="#authentication-service"&gt;Authentication&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a class="slideless" href="#management-service"&gt;Management&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;img src="http://www.ubuntu.com/static/u/img/patterns/tabbed-nav-arrow.png" class="arrow" height="6" width="12"&gt;
&lt;/div&gt;

&lt;div id="compute" class="tabbed-content box-grey twelve-col"&gt;
&lt;!-- Content goes here --&gt;
&lt;/div&gt;

&lt;div id="object-storage" class="tabbed-content box-grey hide twelve-col"&gt;
&lt;!-- Content goes here --&gt;
&lt;/div&gt;

&lt;div id="image-service" class="tabbed-content box-grey hide twelve-col"&gt;
&lt;!-- Content goes here --&gt;
&lt;/div&gt;

&lt;div id="authentication-service" class="tabbed-content box-grey hide twelve-col"&gt;
&lt;!-- Content goes here --&gt;
&lt;/div&gt;

&lt;div id="management-service" class="tabbed-content box-grey hide twelve-col"&gt;
&lt;!-- Content goes here --&gt;
&lt;/div&gt;</pre>
</div>
</div>
<div class="row no-border">
<div class="link-top"><a href="#">Back to top</a></div>
<div class="eight-col">
<h2 id="hash-bang">Hash bang</h2>
<p>The hash bang function removes the fragment identifiers (the part after the &#8220;#&#8221;) from inner page links and attaches those to the element via the <code>data-hash</code> attribute.</p>
<p>When a link with a <code>data-hash</code> attribute is clicked, the JavaScript animates a scroll to 40px above the location of the element with the relevant <code>id</code>.</p>
<p>Note that the links with no identifier after the # scroll to the top of the page. For example the &#8220;Back to top&#8221; links.</p>
</div>
</div>
