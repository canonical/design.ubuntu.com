---
layout: post
title: "Components"
body-id: "scopes"
body-class: "scopes"
---

<div class="row">
<div class="eight-col">
<h1>Components</h1>
<p>These are the building blocks that allow you to create a consistent and structured scope.</p>
</div>
<div class="six-col combined-list">
<ul class="six-col list">
<li><a href="#scope-header">Scope header ›</a></li>
<li><a href="#categories">Categories ›</a></li>
<li><a href="#cards">Cards ›</a></li>
</ul>
</div>
</div>
<div class="row">
<div class="eight-col">
<h2 id="scope-header">Scope header</h2>
<p>We use the scope header for navigation purposes and placing actions.</p>
</div>
<div class="six-col combined-list">
<ul class="six-col list">
<li><a href="#scope-title">Scope title ›</a></li>
<li><a href="#placing-actions">Placing actions ›</a></li>
<li><a href="#header-search">Header search ›</a></li>
</ul>
</div>
</div>
<div class="row">
<div class="eight-col">
<h2>Scope title</h2>
<p>The scope title can be represented in two ways.</p>
</div>
<div class="six-col"><img class="alignnone size-large wp-image-10898" src="/assets/images/Scope-title-1-1024x179.png" alt="Scope title 1" width="1024" height="179" /></p>
<h3>Text: Scope title</h3>
</div>
<div class="six-col last-col"><img class="alignnone size-large wp-image-10899" src="/assets/images/Scope-title-2-1024x179.png" alt="Scope title 2" width="1024" height="179" /></p>
<h3>Artwork: Scope logo</h3>
</div>
</div>
<div class="row">
<div class="eight-col">
<h2 id="placing-actions">Placing actions</h2>
<p>The header consists of one text string and optional monochromatic icons.</p>
</div>
<div class="eight-col"><img class="alignnone size-large wp-image-11586" src="/assets/images/Scope-header-nav-1024x179.png" alt="Scope header nav" width="1024" height="179" /></div>
<div class="eight-col">
<h3>Actions</h3>
<ol>
<li>Back &#8211; used if the scope is opened via tap from an installed aggregator scope.</li>
<li>Search &#8211; allows the user to search across the scope and connected branded (single service) scopes for a specific query. It should always appear first after the scope title.</li>
<li>Settings &#8211; enables persistent settings for simple customizations, such as enabling the user&#8217;s geographical location to receive local content sources.</li>
</ol>
</div>
<div class="eight-col box box-grey">
<div class="one-col last-col align-centre"><img class="alignnone size-full wp-image-10414" src="/assets/images/information-link.png" alt="information-link" width="32" height="32" /></div>
<p>Arrange your header to maximize the important actions inside your scope, such as using a search icon for users to reach a specific result.</p>
</div>
<div class="eight-col"><img class="alignnone size-large wp-image-10901" src="/assets/images/placing-actions-22-1024x179.png" alt="placing actions 2" width="1024" height="179" /></div>
<div class="eight-col">
<h3>Burger menu</h3>
<ol>
<li>When more than three actions are placed in the scope header e.g. favorite, settings and search &#8211; a burger  menu is used on the right to store two of the actions.</li>
</ol>
</div>
<div class="eight-col box box-grey">
<div class="one-col align-center last-col"><img class="alignnone size-full wp-image-11489" src="/assets/images/information-link.png" alt="information-link" width="32" height="32" /></div>
<p>We recommend you use the burger menu sparingly, as it hides away views and actions from the user.</p>
</div>
</div>
<div class="row">
<div class="eight-col">
<h2 id="header-search">Header search</h2>
<p>On a search results page, the returned results should be ordered by relevance, which is defined by the scope author.</p>
</div>
<div class="four-col">
<div class="four-col"><img class="alignnone size-large wp-image-11416" src="/assets/images/Header-search-12-618x1024.png" alt="Header search 1" width="618" height="1024" /></div>
<h3>Search icon</h3>
<p>The user can search for a query via the scope header.</p>
</div>
<div class="four-col">
<div class="four-col"><img class="alignnone size-large wp-image-11418" src="/assets/images/Header-search-22-618x1024.png" alt="Header search 2" width="618" height="1024" /></div>
<h3>Suggestions</h3>
<p>Once the user starts to write a query, suggestions will appear in a drop-down menu with related results.</p>
</div>
<div class="four-col last-col">
<div class="four-col"><img class="alignnone size-large wp-image-11419" src="/assets/images/Header-search-32-618x1024.png" alt="Header search 3" width="618" height="1024" /></div>
<h3>Results page</h3>
<p>Once the user has committed to a search, they will be presented with results taken from connected single service scopes.</p>
<p>The user can tap the cross in the header or the back chevron to be taken back to the scope home screen.</p>
</div>
<div class="eight-col box box-grey">
<div class="one-col last-col align-centre"><img class="alignnone size-full wp-image-10437" src="/assets/images/developer_links..png" alt="developer_links." width="32" height="32" /></div>
<p>Implement the <a href="https://developer.ubuntu.com/api/scopes/cpp/sdk-14.10/unity.scopes.SearchReply/">SearchReply</a> element from our SDK, which allows the results of a search query to be sent to the query source. Also see: <a href="https://developer.ubuntu.com/api/scopes/cpp/sdk-14.10/unity.scopes.SearchListenerBase/">SearchListenerBase</a>, <a href="https://developer.ubuntu.com/api/scopes/cpp/sdk-14.10/unity.scopes.SearchMetadata/">SearchMetadata</a> and <a href="https://developer.ubuntu.com/api/scopes/cpp/sdk-14.10/unity.scopes.SearchQueryBase/">SearchQueryBase</a> elements.</p>
</div>
</div>
<div class="row">
<div class="link-top"><a href="#">Back to top</a></div>
<div class="eight-col">
<h2 id="categories">Categories</h2>
<p>Categories are used to group together related content in a readable and manageable way.</p>
</div>
<div class="four-col">
<ul class="no-bullets">
<li><a href="#structure">Structure ›</a></li>
<li><a href="#category-header">Category header ›</a></li>
<li><a href="#designing-categories">Designing categories ›</a></li>
<li><a href="#category-expansion">Category expansion ›</a></li>
</ul>
</div>
<div class="eight-col box box-grey">
<div class="one-col last-col align-centre"><img class="alignnone size-full wp-image-10437" src="/assets/images/developer_links..png" alt="developer_links." width="32" height="32" /></div>
<p>To implement the <a href="https://developer.ubuntu.com/api/scopes/cpp/sdk-14.10/unity.scopes.Category/">Category</a> and <a href="https://developer.ubuntu.com/api/scopes/cpp/sdk-14.10/unity.scopes.CategorisedResult/">Categorised Result</a> element in your scope see our SDK.</p>
</div>
</div>
<div class="row">
<div class="eight-col">
<h2 id="structure">Structure</h2>
<p>Structure your scope according to the user’s activities, and group cards in categories to help them find related results.</p>
<p><img class="alignnone size-large wp-image-11441" src="/assets/images/Structure-11-722x1024.png" alt="Structure (1)" width="722" height="1024" /></p>
</div>
<div class="eight-col">
<ol class="list">
<li>Personal data &#8211; this displays the user&#8217;s local data on their device. For example, it could display the user&#8217;s &#8216;Recently Played&#8217; music from their personally stored music.</li>
<li>Online service accounts &#8211; this displays the user&#8217;s connected online service accounts. For example, the Music Scope will display the user&#8217;s likes from their SoundCloud account.</li>
</ol>
</div>
<div class="six-col box box-grey">
<div class="one-col last-col align-centre"><img class="alignnone size-full wp-image-10414" src="/assets/images/information-link.png" alt="information-link" width="32" height="32" /></div>
<p>Think about what the user will first expect to see at the top of your scope. If your scope is selling products, for instance, you may want to use the top category as a promotional banner.</p>
</div>
<div class="six-col last-col box box-grey">
<div class="one-col last-col align-centre"><img class="alignnone size-full wp-image-10437" src="/assets/images/developer_links..png" alt="developer_links." width="32" height="32" /></div>
<p>Implement a JSON formatted template with the <a href="https://developer.ubuntu.com/api/scopes/cpp/sdk-14.10/unity.scopes.CategoryRenderer/">Category Renderer</a> from our SDK.</p>
</div>
</div>
<div class="row">
<div class="eight-col">
<h2 id="category-header">Category header</h2>
<p>Headers can let the user know what is available inside any given category.</p>
</div>
<div class="six-col">
<div class="six-col"><img class="alignnone size-large wp-image-5524" src="/assets/images/Category-header-1-1024x538.png" alt="Category header" width="1024" height="538" srcset="/assets/images/Category-header-1-1024x538.png 1024w, /assets/images/Category-header-1-300x157.png 300w, /assets/images/Category-header-1.png 1082w" sizes="(max-width: 1024px) 100vw, 1024px" /></div>
<h3>Header</h3>
<p>A category header can consist of one text string and optional monochromatic icons. They can also link elsewhere in the scope or to a branded (single service) scope.</p>
</div>
<div class="six-col last-col">
<div class="six-col"><img class="alignnone size-large wp-image-10907" src="/assets/images/Category-header-Header-less-1024x538.png" alt="Category header (Header-less)" width="1024" height="538" /></div>
<h3>No header</h3>
<p>No header categories can be used for in-scope promotions &#8211; aka &#8220;banners&#8221;. They still have header titles that are shown in the index/collapsed view.</p>
</div>
</div>
<div class="row">
<div class="eight-col">
<h2>Header links</h2>
<p>Where we use links inside a category header, the header should be clear as to where the user will be taken.</p>
</div>
<div class="four-col"><img class="alignnone size-large wp-image-11409" src="/assets/images/Header-link-12-618x1024.png" alt="Header link 1" width="618" height="1024" /></div>
<div class="four-col last-col"><img class="alignnone size-large wp-image-11410" src="/assets/images/Header-link-21-618x1024.png" alt="Header link 2" width="618" height="1024" /></div>
<div class="six-col box box-grey">
<div class="one-col last-col align-centre"><img class="alignnone size-full wp-image-10438" src="/assets/images/link_external.png" alt="link_external" width="32" height="32" /></div>
<p>See more ways in which the header can link to either a website or an app in the <a href="/scopes/navigation">Navigation</a> section.</p>
</div>
<div class="six-col last-col box box-grey">
<div class="one-col last-col align-centre"><img class="alignnone size-full wp-image-10437" src="/assets/images/developer_links..png" alt="developer_links." width="32" height="32" /></div>
<p>Implement a <a href="https://developer.ubuntu.com/api/scopes/cpp/sdk-14.10/unity.scopes.Link/">Hyperlink </a>(label and canned query) from our SDK.</p>
</div>
</div>
<div class="row">
<div class="link-top"><a href="#">Back to top</a></div>
<div class="eight-col">
<h2 id="designing-categories">Designing categories</h2>
</div>
<div class="six-col">
<div class="six-col"><img class="alignnone size-large wp-image-10919" src="/assets/images/Card-size-4-1024x693.png" alt="Card size 4" width="1024" height="693" /></div>
<h3>Grid</h3>
<p>The cards are shown in a grid form where they are fixed at the same height.</p>
</div>
<div class="six-col last-col">
<div class="six-col"><img class="alignnone size-large wp-image-10920" src="/assets/images/Card-size-5-1024x693.png" alt="Card size 5" width="1024" height="693" /></div>
<h3>Horizontal-list</h3>
<p>The horizontal-list layout allows users to scroll horizontally to view more results.</p>
</div>
</div>
<div class="row">
<div class="link-top"><a href="#">Back to top</a></div>
<div class="eight-col">
<h2 id="category-expansion">Category expansion</h2>
<p>A category header can assume a collapsed or expanded state; without a header, it is not expandable.</p>
</div>
<div class="eight-col box box-grey">
<div class="one-col last-col align-centre"><img class="alignnone size-full wp-image-10414" src="/assets/images/information-link.png" alt="information-link" width="32" height="32" /></div>
<p>It is useful to condense the amount of content on the screen, so the user can browse content in other categories.</p>
</div>
<div class="four-col"><img class="alignnone size-large wp-image-10913" src="/assets/images/Category-Expansion-1-618x1024.png" alt="Category Expansion 1" width="618" height="1024" /></div>
<div class="four-col"><img class="alignnone size-large wp-image-10914" src="/assets/images/Category-Expansion-2-618x1024.png" alt="Category Expansion 2" width="618" height="1024" /></div>
<div class="four-col last-col"><img class="alignnone size-large wp-image-10915" src="/assets/images/Category-Expansion-3-618x1024.png" alt="Category Expansion 3" width="618" height="1024" /></div>
<div class="four-col">
<p>In a full expanded view, all cards are presented on the screen.</p>
</div>
<div class="four-col">
<p>In its collapsed state, ‘See all’ displays more cards.</p>
</div>
<div class="four-col last-col">
<p>When the category is in the expanded state, ‘See less’ closes the category back to its original collapsed state. In the expanded state, only the ‘See less’ button is visible.</p>
</div>
</div>
<div class="row">
<div class="link-top"><a href="#">Back to top</a></div>
<h2 id="cards">Cards</h2>
<div class="eight-col">
<p>A card is a visual representation of a content result; you can design them in different layouts and use the given components to enhance their readability.</p>
</div>
<div class="four-col">
<ul class="no-bullets">
<li><a href="#card-components">Card components ›</a></li>
<li><a href="#card-size">Card size ›</a></li>
<li><a href="#designing-cards">Designing cards ›</a></li>
</ul>
</div>
<div class="eight-col box box-grey">
<div class="one-col last-col align-centre"><img class="alignnone size-full wp-image-10437" src="/assets/images/developer_links..png" alt="developer_links." width="32" height="32" /></div>
<p>Implement the <a href="https://developer.ubuntu.com/api/scopes/cpp/sdk-14.10/unity.scopes.Result/">Result</a> element from our SDK, which contains the attributes of a result returned by a Scope.</p>
</div>
</div>
<div class="row">
<div class="link-top"><a href="#">Back to top</a></div>
<div class="eight-col">
<h2 id="card-components">Card components</h2>
<p>There are three components available to create your card, these can be arranged to best suit how you want your results to be displayed.</p>
</div>
<div class="four-col">
<ul class="no-bullets">
<li><a href="#card-art">Card art ›</a></li>
<li><a href="#card-header">Card header ›</a></li>
<li><a href="#card-summary">Card summary ›</a></li>
</ul>
</div>
<div class="eight-col"><img class="alignnone size-full wp-image-10966" src="/assets/images/card-components2.png" alt="card components" width="1023" height="798" /></div>
</div>
<div class="row">
<div class="eight-col">
<h2 id="card-art">Card art</h2>
<p>The art can be an icon or a thumbnail.</p>
</div>
<div class="eight-col">
<h3>Art size</h3>
<p>The art mask defines the maximum size of the art (image) within a card.</p>
</div>
<div class="append-four eight-col last-col box box-grey">
<div class="one-col last-col align-centre"><img class="alignnone size-full wp-image-10414" src="/assets/images/information-link.png" alt="information-link" width="32" height="32" /></div>
<p>Depending on the context of your card, you might want the art to take centre stage, or just be a visual aid to the content.</p>
</div>
<div class="twelve-col">
<h3>Horizontal</h3>
</div>
<div class="six-col">
<div class="six-col"><img class="alignnone size-full wp-image-11456" src="/assets/images/Card-art-1-2-1.png" alt="Card art 1-2 (1)" width="622" height="361" /></div>
<h4>1.2</h4>
<p>The art-mask width equals art-mask height.</p>
</div>
<div class="six-col last-col">
<div class="six-col"><img class="alignnone size-full wp-image-11457" src="/assets/images/Card-art-1-3-1.png" alt="Card art 1-3 (1)" width="528" height="261" /></div>
<h4>1.3</h4>
<p>&nbsp;</p>
<p>You can define the art-mask height to the width, within a range from of 3:1 or 2:1.</p>
</div>
<div class="eight-col box box-grey">
<div class="one-col last-col align-centre"><img class="alignnone size-full wp-image-10414" src="/assets/images/information-link.png" alt="information-link" width="32" height="32" /></div>
<p>By default, the art-mask width equals the art-mask height on a 1:1 ratio.</p>
</div>
<div class="six-col">
<div class="six-col"><img class="alignnone wp-image-11458" src="/assets/images/Card-art-1-1-162x300.png" alt="Card art 1 (1)" width="204" height="378" /></div>
<h4>Vertical</h4>
<p>The art-mask width = card width.</p>
</div>
<div class="eight-col box box-grey">
<div class="one-col last-col align-centre"><img class="alignnone size-full wp-image-10414" src="/assets/images/information-link.png" alt="information-link" width="32" height="32" /></div>
<p>By default, the art-mask height equals the art-mask width on a 1:1 ratio.</p>
</div>
<div class="eight-col">
<h4>Crop your art within the art-mask</h4>
<p>If your art does not fit in the mask, it will be cropped.</p>
</div>
<div class="four-col"><img class="alignnone size-full wp-image-11473" src="/assets/images/Art-and-mask-11.png" alt="Art and mask 1" width="537" height="568" /></div>
<div class="four-col"><img class="alignnone size-full wp-image-10923" src="/assets/images/Art-and-mask-2.png" alt="Art and mask 2" width="537" height="568" /></div>
<div class="four-col last-col"><img class="alignnone size-full wp-image-10924" src="/assets/images/Art-and-mask-3.png" alt="Art and mask 3" width="537" height="568" /></div>
<div class="eight-col">
<ol>
<li>Image cropped area</li>
<li>Image fills art-mask</li>
</ol>
</div>
<div class="eight-col last-col box box-grey">
<div class="one-col last-col align-centre"><img class="alignnone size-full wp-image-10414" src="/assets/images/information-link.png" alt="information-link" width="32" height="32" /></div>
<p>You may choose to scale the art proportionally with the largest aspect of the art scaled to fill the art-mask.</p>
</div>
</div>
<div class="row">
<div class="link-top"><a href="#">Back to top</a></div>
<div class="eight-col">
<h2 id="card-header">Card header</h2>
<p>The header can display up to seven elements. You can configure the header to best represent the content displayed. However, you cannot change the ordering of elements or redefine element formatting in any way (i.e. font style or size).</p>
<div class="eight-col"><img class="alignnone size-full wp-image-11408" src="/assets/images/Card-header1.png" alt="Card header" width="970" height="271" /></div>
</div>
<div class="eight-col">
<h3>Elements</h3>
<ol>
<li>Mascot/Avatar &#8211; You can use a mascot (avatar) to accompany your title; it acts like a thumbnail.</li>
<li>Emblem &#8211; An emblem can be displayed to the right of a title where it is fixed to the height of the title row.</li>
<li>Title &#8211; A title is the only element that has a possible variation, as it can flow onto two lines. If it should go over two lines, then it will be cut off with an ellipsis.</li>
<li>Subtitle &#8211; A subtitle can only use up one line.</li>
<li>Attributes &#8211; These include price, rating and scale, which should fit in the allocated space provided.</li>
</ol>
</div>
</div>
<div class="row">
<div class="eight-col">
<h2 id="attributes">Attributes</h2>
<p>An attribute can either be an icon or text, or both.</p>
</div>
<div class="four-col">
<div class="four-col"><img class="alignnone size-full wp-image-11403" src="/assets/images/atribute-price1.png" alt="atribute price" width="456" height="266" /></div>
<h3>Price</h3>
<p>Is a text string with a predefined star icon.</p>
</div>
<div class="four-col">
<div class="four-col"><img class="alignnone size-full wp-image-11404" src="/assets/images/atribute-rating1.png" alt="atribute rating" width="456" height="266" /></div>
<h3>Rating</h3>
<p>Is a text string with a predefined star icon.</p>
</div>
<div class="four-col last-col">
<div class="four-col"><img class="alignnone size-full wp-image-11405" src="/assets/images/atribute-scale1.png" alt="atribute scale" width="456" height="266" /></div>
<h3>Scale</h3>
<p>Can be a text string with an icon that you can provide, or you can choose from our predefined set of icons.</p>
</div>
</div>
<div class="row">
<div class="eight-col">
<h2>Placement</h2>
<p>The three attributes can be arranged and combined in a number of ways.</p>
</div>
<div class="twelve-col">
<h3>1. attribute</h3>
</div>
<div class="six-col"><img class="alignnone wp-image-10929 size-full" src="/assets/images/Placement-1-atribute-landscape.png" alt="Placement 1 atribute landscape" width="970" height="271" /></div>
<div class="six-col last-col"><img class="alignnone wp-image-10930 size-full" src="/assets/images/Placement-1-atribute.png" alt="Placement 1 atribute" width="970" height="271" /></div>
<div class="twelve-col">
<h3>2. attributes</h3>
<div class="six-col"><img class="alignnone wp-image-10932 size-full" src="/assets/images/Placement-2-atribute-.png" alt="Placement 2 atribute" width="970" height="271" /></div>
<div class="six-col last-col"><img class="alignnone wp-image-10933 size-full" src="/assets/images/Placement-2-attributes-landscape-.png" alt="Placement 2 attributes landscape" width="898" height="692" /></div>
<div class="twelve-col">
<h3>3. attributes</h3>
</div>
<div class="six-col"><img class="alignnone wp-image-10931 size-full" src="/assets/images/Placement-2-atribute-landscape-copy.png" alt="Placement 2 atribute landscape copy" width="970" height="271" /></div>
<div class="six-col last-col"><img class="alignnone wp-image-10935 size-full" src="/assets/images/Placement-3-atribute-.png" alt="Placement 3 atribute" width="970" height="271" /></div>
</div>
</div>
<div class="row">
<div class="link-top"><a href="#">Back to top</a></div>
<div class="twelve-col">
<h2>Headers can overlay an art</h2>
<p><img class="alignnone wp-image-10936" src="/assets/images/Header-overlay-art-300x251.png" alt="Header overlay art" width="340" height="285" /></p>
</div>
<div class="eight-col">The header will have a dark overlay and the text will be white.</div>
<div class="eight-col box box-grey">
<div class="one-col last-col align-centre"><img class="alignnone size-full wp-image-10414" src="/assets/images/information-link.png" alt="information-link" width="32" height="32" /></div>
<p>When a header is an overlay, it should not include a mascot.</p>
</div>
<div class="eight-col">
<h2>Header text styles</h2>
<p>The title, subtitle and attribute can be shown in certain font weights and sizes.</p>
</div>
<div class="six-col">
<div class="six-col"><img class="alignnone size-full wp-image-11387" src="/assets/images/header-text-1.png" alt="header text 1" width="971" height="271" /></div>
<h4>1</h4>
</div>
<div class="six-col last-col">
<div class="six-col"><img class="alignnone size-full wp-image-11388" src="/assets/images/header-text-2.png" alt="header text 2" width="970" height="271" /></div>
<h4>2</h4>
</div>
<div class="six-col">
<div class="six-col"><img class="alignnone size-full wp-image-11390" src="/assets/images/header-text-3.png" alt="header text 3" width="971" height="271" /></div>
<h4>3</h4>
</div>
<div class="six-col last-col">
<div class="six-col"><img class="alignnone size-full wp-image-11391" src="/assets/images/header-text-4.png" alt="header text 4" width="970" height="271" /></div>
<h4>4</h4>
</div>
<div class="six-col">
<div class="six-col"><img class="alignnone size-full wp-image-11393" src="/assets/images/header-text-6.png" alt="header text 6" width="970" height="271" /></div>
<h4>5</h4>
</div>
<table>
<thead>
<tr>
<th></th>
<th scope="col">1</th>
<th scope="col">2</th>
<th scope="col">3</th>
<th scope="col">4</th>
<th scope="col">5</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Font weight</strong></td>
<td>Regular</td>
<td>Regular</td>
<td><strong>1.</strong>Title: Medium</p>
<p>2.Subtitle: Light</td>
<td><strong>1.</strong>Title: Medium</p>
<p><strong>2.</strong>Subtitle: Light</p>
<p><strong>3.</strong>Attribute(s): Regular</td>
<td><strong>1.</strong>Title: Medium, 2.Subtitle: Light</td>
</tr>
<tr>
<td><strong>Font size</strong></td>
<td>Small</td>
<td>Small</td>
<td><strong>1.</strong>Title: Small</p>
<p><strong>2.</strong>Subtitle: Extra small</td>
<td><strong>1.</strong>Title: Small</p>
<p><strong>2.</strong>Subtitle: Extra small</p>
<p><strong>3.</strong>Attribute(s): Small</td>
<td>n/a</td>
</tr>
<tr>
<td><strong>Padding between text baselines</strong></td>
<td>n/a</td>
<td>n/a</td>
<td>&gt;1.5GU</td>
<td><strong>1.</strong>Title: &gt;1.5GU</p>
<p><strong>2.</strong>Subtitle: 2GU</td>
<td><strong>1.</strong>Title: &gt;1.5GU</p>
<p><strong>2.</strong>Subtitle: 2GU</td>
</tr>
<tr>
<td><strong>Alignment</strong></td>
<td>Left/Middle</td>
<td>Left/Middle</td>
<td>Left</td>
<td>Left</td>
<td>Left</td>
</tr>
</tbody>
</table>
</div>
<div class="row">
<div class="link-top"><a href="#">Back to top</a></div>
<div class="eight-col">
<h2 id="card-summary">Card summary</h2>
<p>Text can be split into paragraphs.</p>
<ul class="list">
<li>If the text is up to 5 lines, than the last line of text will be replaced with ‘See More’, where it will show in the preview &#8211; which appears once the user has tapped the card.</li>
<li>Up to 5 lines of text can be placed in the summary component.</li>
<li>When a card includes a summary text, then the background to the header and summary should be white.</li>
</ul>
</div>
<div class="six-col box box-grey">
<div class="one-col last-col align-centre"><img class="alignnone size-full wp-image-10437" src="/assets/images/developer_links..png" alt="developer_links." width="32" height="32" /></div>
<p>You cannot redefine the summary text formatting in any way, and it cannot be used with a small card template.</p>
</div>
<div class="six-col last-col box box-grey">
<div class="one-col last-col align-centre"><img class="alignnone size-full wp-image-10414" src="/assets/images/information-link.png" alt="information-link" width="32" height="32" /></div>
<p>Summaries are great for showing glimpses of news stories or reviews.</p>
</div>
</div>
<div class="row">
<div class="link-top"><a href="#">Back to top</a></div>
<div class="eight-col">
<h2 id="card-size">Card size</h2>
</div>
<div class="four-col">
<div class="four-col"><img class="alignnone size-large wp-image-10916" src="/assets/images/Card-size-1-1024x537.png" alt="Card size 1" width="1024" height="537" /></div>
<h3>Large</h3>
<p>One card is 38GU in a 40GU device &#8211; leaving a 1GU margin. It is also available on phone, tablet and desktop.</p>
<p>Useful for banners or displaying previews.</p>
</div>
<div class="four-col">
<div class="four-col"><img class="alignnone size-large wp-image-10917" src="/assets/images/Card-size-2-1024x537.png" alt="Card size 2" width="1024" height="537" /></div>
<h3>Medium</h3>
<p>Two cards are 18GU each on a 40GU device &#8211; leaving a 1GU margin on a narrow space of a device with 40GU &#8211; each card is 18GU with a 2GU margin.</p>
<p>It is also available on phone, tablet and desktop.</p>
<p>Useful in displaying previews of a news stories.</p>
</div>
<div class="four-col last-col">
<div class="four-col"><img class="alignnone size-large wp-image-10918" src="/assets/images/Card-size-3-1024x537.png" alt="Card size 3" width="1024" height="537" /></div>
<h3>Small</h3>
<p>Three cards are 12GU each on a 40GU device &#8211; with a 1GU margin. It is available on devices smaller than 60GU width.</p>
<p>Useful in displaying music art and track titles.</p>
</div>
<div class="eight-col box box-grey">
<div class="one-col last-col align-centre"><img class="alignnone size-full wp-image-10437" src="/assets/images/developer_links..png" alt="developer_links." width="32" height="32" /></div>
<p>On bigger form factors, a small size is automatically converted to a medium size.</p>
</div>
</div>
<div class="row">
<div class="link-top"><a href="#">Back to top</a></div>
<div class="eight-col">
<h2 id="designing-cards">Designing cards</h2>
<p>There are two classes of card template: vertical and horizontal.</p>
</div>
<div class="eight-col last-col box box-grey">
<div class="one-col last-col align-centre"><img class="alignnone size-full wp-image-10414" src="/assets/images/information-link.png" alt="information-link" width="32" height="32" /></div>
<p>You must choose a card template that is compatible with the category layout. In case of layout errors, we try to gracefully fall back to defaults.</p>
</div>
<div class="eight-col">
<h3>Vertical</h3>
</div>
<div class="four-col">
<div class="four-col"><img class="alignnone wp-image-11396 size-medium" src="/assets/images/Art-header-sum-vertical-204x300.png" alt="Art header sum vertical" width="204" height="300" /></div>
<h4>Art, Header and Attribute</h4>
</div>
<div class="four-col">
<div class="four-col"><img class="alignnone wp-image-11398 size-medium" src="/assets/images/art2-204x300.png" alt="art" width="204" height="300" /></div>
<h4>Art</h4>
</div>
<div class="four-col last-col">
<div class="four-col"><img class="alignnone wp-image-11422 size-medium" src="/assets/images/Header-Summary-Vertical-204x300.png" alt="Header Summary Vertical" width="204" height="300" /></div>
<h4>Header, Attribute and Summary</h4>
</div>
<div class="four-col">
<div class="four-col"><img class="alignnone wp-image-11397 size-medium" src="/assets/images/Art-header-summary-vertical2-204x300.png" alt="Art header summary vertical" width="204" height="300" /></div>
<h4>Art, Header, Attribute and Summary</h4>
</div>
<div class="four-col last-col">
<div class="four-col"><img class="alignnone wp-image-11444 size-medium" src="/assets/images/sm-art-header-vertical3-204x300.png" alt="sm art header vertical" width="204" height="300" /></div>
<h4>Small Art, Header and Attribute</h4>
</div>
<table>
<thead>
<tr>
<th scope="row"><strong>Category layout</strong></th>
<td>Grid</td>
<td>Horizontal-list</td>
</tr>
<tr>
<th scope="row"><strong>Header overlay</strong></th>
<td>No</td>
<td>Yes</td>
</tr>
<tr>
<th scope="row"><strong>Grid size</strong></th>
<td>S. M. L</td>
<td>S. M. L</td>
</tr>
</thead>
</table>
<h3>Horizontal</h3>
<div class="equal-heights">
<div class="six-col"><img class="alignnone size-full wp-image-11494" src="/assets/images/Card-design-horizontal-header-1.png" alt="Card design horizontal header 1" width="970" height="271" /></div>
<div class="six-col last-col"><img class="alignnone size-full wp-image-11495" src="/assets/images/Card-design-horizontal-header-2.png" alt="Card design horizontal header 2" width="970" height="350" /></div>
</div>
<div class="six-col">
<h4>Art, Header (Emblem on the right) and Attribute</h4>
</div>
<div class="six-col last-col">
<h4>Art, Header (Emblem on the right), Attribute and Summary</h4>
</div>
<table>
<thead>
<tr>
<th scope="row"><strong>Category layout</strong></th>
<td>Grid</td>
<td>Horizontal-list</td>
</tr>
<tr>
<th scope="row"><strong>Header overlay</strong></th>
<td>No</td>
<td>No</td>
</tr>
<tr>
<th scope="row"><strong>Grid size</strong></th>
<td>L</td>
<td>L</td>
</tr>
<tr>
<th scope="row"><strong>Inside a shape</strong></th>
<td>No</td>
<td>No</td>
</tr>
</thead>
</table>
</div>
<div class="row no-border">
<div class="link-top"><a href="#">Back to top</a></div>
<div class="eight-col">
<h2>Placing components</h2>
<p>One card displays one result (data/content item). It is made up of a maximum of three components:</p>
<ul>
<li>Art (of varying types and sizes)</li>
<li>Header (one or more title text fields)</li>
<li>Summary (additional info, ratings, associated buttons, etc)</li>
</ul>
</div>
<div class="eight-col box box-grey">
<div class="one-col last-col align-centre"><img class="alignnone size-full wp-image-11489" src="/assets/images/information-link.png" alt="information-link" width="32" height="32" /></div>
<p>One component must be present in any given card.</p>
</div>
<div class="six-col">
<div class="six-col"><img class="alignnone size-large wp-image-10921" src="/assets/images/Placing-components-2-1024x855.png" alt="Placing components 2" width="1024" height="855" /></div>
<h3>One configuration</h3>
<p>You can have the art on its own e.g. a promotional banner.</p>
</div>
<div class="six-col last-col">
<div class="six-col"><img class="alignnone size-full wp-image-10965" src="/assets/images/Placing-components-1.png" alt="Placing components 1" width="953" height="805" /></div>
<h3>Maximum configurations</h3>
<p>Can be the art, header and summary together.</p>
</div>
</div>
