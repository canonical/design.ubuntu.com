---
layout: post
title: "Navigation"
body-id: "scopes"
body-class: "scopes"
---

<div class="row">
<div class="eight-col">
<h1 id="navigation">Navigation</h1>
<p>Allow the user to retrieve and browse content easily within your scope through great structure and a consistent feel.</p>
</div>
<div class="six-col combined-list">
<ul class="six-col list">
<li><a href="#scope-header">Scope header ›</a></li>
<li><a href="#category-header">Category header ›</a></li>
<li><a href="#departments">Departments ›</a></li>
</ul>
</div>
</div>
<div class="row">
<div class="link-top"><a href="#">Back to top</a></div>
<div class="eight-col">
<h2 id="scope-header">Scope header</h2>
<p>The scope header contains the main title of your scope, together with four elements that can take the user to a different screen or perform an action.</p>
</div>
<div class="eight-col">
<h3>Actions</h3>
<div class="eight-col"><img class="alignnone size-large wp-image-11002 eight-col" src="https://assets.ubuntu.com/v1/4008e9d9-Scope-header-nav-2-1024x179.png" alt="Scope header nav 2" width="1024" height="179" /></div>
<div class="eight-col">
<ol>
<li><strong>Back &#8211; </strong> present if the scope is opened via tap from an installed scope list as opposed to swiped to in the Dash.</li>
<li><strong>Search &#8211; </strong> allows the user to input a search term.</li>
<li><strong>Settings &#8211; </strong> will take the user to the settings page of the scope where they can enable their location and online accounts to feed the scope.</li>
</ol>
</div>
</div>
<div class="six-col box box-grey">
<div class="one-col align-center last-col"><img class="alignnone size-full wp-image-10438" src="https://assets.ubuntu.com/v1/9e8b37dd-link_external.png" alt="link_external" width="32" height="32" /></div>
<p>See our <a href="/components">Component</a> section on how to best place these actions inside your scope header.</p>
</div>
<div class="six-col last-col box box-grey">
<div class="one-col align-center last-col"><img class="alignnone size-full wp-image-10437" src="https://assets.ubuntu.com/v1/0d9d7281-developer_links..png" alt="developer_links." width="32" height="32" /></div>
<p>For more information on how to implement settings in your scope, see our <a href="https://developer.ubuntu.com/en/scopes/tutorials/adding-settings-to-your-scope/">SDK</a>.</p>
</div>
</div>
<div class="row">
<div class="eight-col">
<h2 id="category-header">Category header</h2>
<p>Links to child scopes can be placed within the category header.</p>
</div>
<div class="four-col">
<div class="four-col"><img class="alignnone size-large wp-image-11438 four-col" src="https://assets.ubuntu.com/v1/79432557-Scope-links-NearBy-a2-618x1024.png" alt="Scope links NearBy a" width="618" height="1024" /></div>
<h3>NearBy scope</h3>
</div>
<div class="four-col last-col">
<div class="four-col"><img class="alignnone size-large wp-image-11697" src="https://assets.ubuntu.com/v1/02a07bd1-Scope-links-Timeout-b-1-618x1024.png" alt="Scope links Timeout b (1)" width="618" height="1024" /></div>
<h3>TimeOut scope</h3>
</div>
<div class="eight-col">
<p>If the scope is invoked by an aggregator scope, then it will have a back button.</p>
<div class="eight-col last-col box box-grey">
<div class="one-col last-col align-center"><img class="alignnone size-full wp-image-11489" src="https://assets.ubuntu.com/v1/7024ba0f-information-link.png" alt="information-link" width="32" height="32" /></div>
<p>You cannot swipe to navigate through a scope link. You must use a chevron to indicate to the user that it leads somewhere. As swiping may take the user to the next/previous scope.</p>
<p>Scope links can only be added by the scope author.</p>
</div>
</div>
</div>
<div class="row">
<div class="link-top"><a href="#">Back to top</a></div>
<div class="eight-col">
<h2 id="departments">Departments</h2>
<p>Departments are an optional feature that can be placed under the scope header to give the user a more targeted and narrower search.</p>
</div>
<div class="six-col"><img class="alignnone size-large wp-image-11012" src="https://assets.ubuntu.com/v1/0f76e6d1-Departments-21-1024x751.png" alt="Departments 2" width="1024" height="751" /></div>
<div class="eight-col">
<h3>Layout:</h3>
<ol>
<li><strong>Department area (below the header)</strong> &#8211; section of the scope layout dedicated to departments.</li>
<li><strong>Content area</strong> &#8211; section of the scope layout dedicated to categories.</li>
</ol>
<h3>Things you can change:</h3>
<ul>
<li>Naming the top-level department e.g. ‘Shop by department’ or ‘Genres’</li>
</ul>
</div>
<div class="eight-col box box-grey">
<div class="one-col align-center"><img class="alignnone size-full wp-image-10414" src="https://assets.ubuntu.com/v1/7024ba0f-information-link.png" alt="information-link" width="32" height="32" /></div>
<p>The scope author chooses what content goes in the navigation paths. Categorize your content to give the user easy access to specific results.</p>
</div>
</div>
<div class="row">
<div class="link-top"><a href="#">Back to top</a></div>
<h2 id="hierarchy">Hierarchy</h2>
<div class="eight-col">
<p>Users can navigate through a scope in a single hierarchy navigation or multiple levels.</p>
</div>
<div class="four-col"><img class="alignnone size-large wp-image-11428" src="https://assets.ubuntu.com/v1/3b0eb504-Hierarchy-13-618x1024.png" alt="Hierarchy 1" width="618" height="1024" /></div>
<div class="four-col"><img class="alignnone size-large wp-image-11429" src="https://assets.ubuntu.com/v1/6a4c92d1-Hierarchy-22-618x1024.png" alt="Hierarchy 2" width="618" height="1024" /></div>
<div class="four-col last-col"><img class="alignnone size-large wp-image-11430" src="https://assets.ubuntu.com/v1/b3b11c0d-Hierarchy-32-618x1024.png" alt="Hierarchy 3" width="618" height="1024" /></div>
<div class="eight-col">
<h3>Single hierarchy</h3>
<ul>
<li>A chevron is used to indicate to the user that there are options available.</li>
<li>A checkmark is used to show the user what they have selected.</li>
</ul>
<h3>Behavior of departments:</h3>
<ul>
<li>They collapse or expand by default.</li>
<li>The widget shows departments returned by the scope per query (including “null” query).</li>
<li>When the top-level department is open a maximum of 5 departments can be shown with a ‘show more’ button included.</li>
</ul>
</div>
<div class="six-col box box-grey">
<div class="one-col align-center"><img class="alignnone size-full wp-image-10414" src="https://assets.ubuntu.com/v1/7024ba0f-information-link.png" alt="information-link" width="32" height="32" /></div>
<p>We use it in some of core scopes such as Music and Shopping, where users can browse by genre or departments.</p>
</div>
<div class="six-col last-col box box-grey">
<div class="one-col align-center"><img class="alignnone size-full wp-image-10437" src="https://assets.ubuntu.com/v1/0d9d7281-developer_links..png" alt="developer_links." width="32" height="32" /></div>
<p>Learn how to create departments and use them in queries in our <a href="https://developer.ubuntu.com/en/scopes/tutorials/adding-departments-to-your-scope/">SDK</a>.</p>
</div>
</div>
<div class="row no-border">
<div class="link-top"><a href="#">Back to top</a></div>
<div class="eight-col">
<h2>Multiple level hierarchy</h2>
<p>Where there are multiple choices in each department branch, the branch is displayed with a chevron to show that tapping it will open a list of its children, rather than selecting an option and closing the menu.</p>
</div>
<div class="twelve-col">
<h3>Department menu</h3>
</div>
<div class="four-col">
<div class="four-col"><img class="alignnone size-large wp-image-11431" src="https://assets.ubuntu.com/v1/98605bd3-multiply-level-12-618x1024.png" alt="multiply level 1" width="618" height="1024" /></div>
<p>When the user first comes to the scope they will be presented with an &#8216;all departments&#8217; menu.</p>
</div>
<div class="four-col">
<div class="four-col"><img class="alignnone size-large wp-image-11432" src="https://assets.ubuntu.com/v1/726cf267-multiply-level-22-618x1024.png" alt="multiply level 2" width="618" height="1024" /></div>
<p>On tap, the menu will expand and reveal a list of available departments.</p>
</div>
<div class="four-col last-col">
<div class="four-col"><img class="alignnone size-large wp-image-11433" src="https://assets.ubuntu.com/v1/45d43336-multiply-level-51-618x1024.png" alt="multiply level 5" width="618" height="1024" /></div>
<p>The menu will then split into two rows&#8221;Featured&#8221; and the selected department.</p>
<p>In the department view the user can navigate back to &#8216;all departments&#8217; using the back chevron, or select another category or department.</p>
</div>
<div class="twelve-col">
<h3>Featured menu</h3>
</div>
<div class="four-col">
<div class="four-col"><img class="alignnone size-large wp-image-11434" src="https://assets.ubuntu.com/v1/e78d262c-multiple-level-41-618x1024.png" alt="multiple level 4" width="618" height="1024" /></div>
<p>When the user has selected a department, the &#8216;Featured&#8217; menu will appear on the left hand side of the &#8216;Department&#8217; menu.</p>
</div>
<div class="four-col">
<div class="four-col"><img class="alignnone size-large wp-image-11435" src="https://assets.ubuntu.com/v1/45d43336-multiply-level-52-618x1024.png" alt="multiply level 5" width="618" height="1024" /></div>
<p>The &#8216;Featured&#8217; menu allows the user to sort results by order e.g.&#8221;Price: high to low&#8221;, which changes the view of the results.</p>
</div>
<div class="four-col last-col">
<div class="four-col"><img class="alignnone size-large wp-image-11436" src="https://assets.ubuntu.com/v1/d3367513-multiple-level-61-618x1024.png" alt="multiple level 6" width="618" height="1024" /></div>
<p>Once the user has selected a feature, the scope page will rearrange the results according to the feature selected.</p>
</div>
<div class="eight-col box box-grey">
<div class="one-col align-center"><img class="alignnone size-full wp-image-10414" src="https://assets.ubuntu.com/v1/7024ba0f-information-link.png" alt="information-link" width="32" height="32" /></div>
<p>Where there are multiple choices in each department branch a chevron is used to indicate to the user that there are options available.</p>
</div>
</div>
