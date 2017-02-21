---

layout: post
title: "Header"
body-id: "apps"
body-class: "guidelines"
---

{% include side-nav-apps.html %}

<div id="loop-guidelines" class="ten-col last-col">
<section class="row no-padding-top no-padding-right no-padding-left">
<div class="ten-col">
<h3>Use the header to let the user know where they are, what they can do, and where they can go inside your application.</h3>
<div class="image-container"><img src="https://assets.ubuntu.com/v1/8ec7cc1c-750w_Header_Orientation-3.png" alt="750w_Header_Orientation (3)" width="679" height="205" /></div>
</div>
<div class="ten-col combined-list">
<ul class="list five-col">
<li><a href="#usage">Usage&nbsp;&rsaquo;</a></li>
<li><a href="#slots">Slots&nbsp;&rsaquo;</a></li>
<li><a href="#toolbar">Toolbar&nbsp;&rsaquo;</a></li>
<li class="last-item"><a href="#edit-mode">Edit mode&nbsp;&rsaquo;</a></li>
</ul>
<ul class="list five-col last-col">
<li><a href="#responsive-layout">Responsive layout&nbsp;&rsaquo;</a></li>
<li><a href="#header-appearance">Header appearance&nbsp;&rsaquo;</a></li>
<li><a href="#header-section">Header section&nbsp;&rsaquo;</a></li>
<li class="last-item"><a href="#best-practices">Best practices&nbsp;&rsaquo;</a></li>
</ul>
</div>
<div class="ten-col box-grey vertical-align vertical-align--image-left">
<p><img class="vertical-align__image" src="https://assets.ubuntu.com/v1/608696e3-developer_links.png" alt="" width="32" height="32" /></p>
<div class="vertical-align__content">
<p>The <a class="external" href="https://developer.ubuntu.com/api/apps/qml/sdk-15.04.1/Ubuntu.Components.Header/">Header API</a> includes the exposed, flickable and moving properties of the header.</p>
</div>
</div>
</section>
<section class="row no-padding-right no-padding-left">
<div class="ten-col">
<h2 id="usage">Usage</h2>
<p>The header area can contain the main navigation options and actions inside your app. It is used to enhance the user experience in specific device layouts.</p>
</div>
<div class="ten-col">
<h3>When should I use a header?</h3>
<ul>
<li>If your app has multiple sections</li>
<li>If your app performs an action that requires the full screen, such as a camera, then don&#8217;t use a header.</li>
</ul>
<p>Multiple panels may appear when the surface or window increases in size. When this happens, each panel can contain its own header. For example, on a mobile surface, one panel is present at a time as the pages are stacked on top of each other in a hierarchical order. However, when translated onto a medium to large surface the panels become adjacent to each other and will contain their own header, while still remaining in a hierarchical order.</p>
</div>
<div class="five-col">
<div class="image-container"><img src="https://assets.ubuntu.com/v1/8311396f-366w_Header_Usage1panel.png" alt="l" width="340" height="209" /></div>
</div>
<div class="ten-col">
<div class="image-container"><img src="https://assets.ubuntu.com/v1/0d024d94-750w_Header_Usage2panels.png" alt="750w_Header_Usage2panels" width="672" height="154" /></div>
</div>
<div class="ten-col">
<ul>
<li><strong>Navigational options </strong>on the left</li>
</ul>
<p>The navigation area can include a Back Button, title, a subtitle or a navigation drawer for when there is no room to fit all buttons for major views.</p>
<ul>
<li><strong>Actions </strong>on the right</li>
</ul>
<p>The action area can include actions such as settings, search, views, or an action drawer for when there&#8217;s no room to place further actions.</p>
</div>
<div class="ten-col box-grey vertical-align vertical-align--image-left">
<p><img class="vertical-align__image" src="https://assets.ubuntu.com/v1/e9f11635-information-link.png" alt="" width="32" height="32" /></p>
<div class="vertical-align__content">
<p>Don&#8217;t use a navigation drawer and an action drawer at the same time, because users are unlikely to distinguish between them.</p>
</div>
</div>
</section>
<section class="row no-padding-right no-padding-left">
<div class="ten-col">
<div class="link-top not-for-small"><a href="#">Back to top</a></div>
<div class="ten-col">
<h2 id="slot-placement">Slots</h2>
<p>The header contains a number of slots that can hold actions or navigational options. Depending on the surface or window size, additional slots can be added to show the actions otherwise hidden in drawers.</p>
</div>
<div class="ten-col">
<div class="image-container"><img src="https://assets.ubuntu.com/v1/bc59f393-750w_Header_HeaderComponents.png" alt="750w_Header_HeaderComponents" width="688" height="367" /></div>
</div>
<div class="ten-col box-grey vertical-align vertical-align--image-left">
<p><img class="vertical-align__image" src="https://assets.ubuntu.com/v1/e9f11635-information-link.png" alt="information-link" width="32" height="32" /></p>
<div class="vertical-align__content">
<p>Think about the most important actions and views you want the user to perform and make it easy for them to find by using the header.</p>
</div>
</div>
<div class="ten-col">For smaller surfaces, such as on mobile, the SDK provides a maximum of four slots per header that can be arranged in two ways.</div>
<div class="ten-col">
<div class="image-container"><img src="https://assets.ubuntu.com/v1/1340e785-750w_Header_Slots-2.png" alt="750w_Header_Slots (2)" width="660" height="227" /></div>
</div>
<div class="ten-col">
<h3>Slot arrangement</h3>
<p>Slots can be arranged in a variety of ways to surface actions and navigational options to best suit the user experience of your application.</p>
</div>
<div class="five-col">
<h4>Slot A</h4>
<div class="image-container"><img src="https://assets.ubuntu.com/v1/625656cf-366w_Header_SlotAexample1-3.png" alt="366w_Header_SlotAexample1 (3)" width="336" height="315" /></div>
</div>
<div class="five-col last-col">
<h4>Slot B</h4>
<div class="image-container"><img src="https://assets.ubuntu.com/v1/132ac0cf-366w_Header_SlotBexample1-3.png" alt="366w_Header_SlotBexample1 (3)" width="336" height="315" /></div>
</div>
<div class="five-col">
<ul>
<li>First position on the left hand side</li>
<li>When slot A is not needed, slot B should move to this position</li>
<li>A navigation drawer can displays all main views in an application</li>
</ul>
</div>
<div class="five-col last-col">
<ul>
<li>Mandatory title of your app or view, only one line</li>
<li>An optional subtitle can sit below the title, which can be two lines</li>
</ul>
</div>
<div class="ten-col">
<h4>Slot C</h4>
<p>Slot C can have any action inside it, such as &#8216;Add new contact&#8217; or a &#8216;Call&#8217; action.</p>
</div>
<h4 class="five-col">Search</h4>
<h4 class="five-col last-col">Settings</h4>
<div class="five-col">
<div class="image-container"><img src="https://assets.ubuntu.com/v1/d9aca9a6-366w_Header_SlotCexample1-3.png" alt="366w_Header_SlotCexample1 (3)" width="336" height="295" /></div>
</div>
<div class="five-col last-col">
<div class="image-container"><img src="https://assets.ubuntu.com/v1/f645dd1d-366w_Header_SlotCexample2-2-1.png" alt="366w_Header_SlotCexample2 (2)" width="336" height="295" /></div>
</div>
<div class="five-col">If you are using Slot C for Settings, then it should always be positioned last.</div>
<div class="five-col last-col">
<p>If you are using Slot C to place a Search icon, or any other action, then place it to the right of the title.</p>
</div>
<div class="ten-col">
<h3>Action drawer</h3>
<p>An action drawer can be used for when no other slots are available to show them. However, when your app is on a larger surface, like on a desktop, then actions will appear in the slots.</p>
</div>
<div class="five-col">
<div class="image-container"><img src="https://assets.ubuntu.com/v1/601b7473-366w_Header_ActionDrawerExpanded-1.png" alt="366w_Header_ActionDrawerExpanded (1)" width="318" height="165" /></div>
</div>
<div class="ten-col">
<h3>Responsive layout</h3>
<p>As the header gains width across screen sizes, additional slots become visible and actions in the drawer will appear automatically.</p>
</div>
<div class="five-col">
<h4>3 slot layout</h4>
<div class="image-container"><img src="https://assets.ubuntu.com/v1/407df52e-Header_SlotArrangement1-2.png" alt="Header_SlotArrangement1 (2)" width="247" height="41" /></div>
</div>
<div class="five-col last-col">
<h4>4 slot layout</h4>
<div class="image-container"><img src="https://assets.ubuntu.com/v1/bf9f7a5f-Header_SlotArrangement2-2.png" alt="Header_SlotArrangement2 (2)" width="278" height="41" /></div>
</div>
<div class="five-col">
<h4>5 slot layout</h4>
<div class="image-container"><img src="https://assets.ubuntu.com/v1/ed3d7a0b-Header_SlotArrangement3-2.png" alt="Header_SlotArrangement3 (2)" width="311" height="41" /></div>
</div>
<div class="ten-col">
<h4>6 slot layout</h4>
<div class="image-container"><img src="https://assets.ubuntu.com/v1/a2a5f31e-Header_SlotArrangement4-3.png" alt="Header_SlotArrangement4 (3)" width="534" height="41" /><br />
<img class="alignnone size-full" src="https://assets.ubuntu.com/v1/28d29fbc-Header_SlotArrangement5-2.png" alt="Header_SlotArrangement5 (2)" width="534" height="41" /></div>
</div>
<div class="ten-col">
<h4>Medium to large screens</h4>
<p>The maximum number of visible action slots in a convergent environment is 6. If this is exceeded then additional actions will migrate to the action drawer.</p>
</div>
<div class="ten-col box-grey vertical-align vertical-align--image-left">
<p><img class="vertical-align__image" src="https://assets.ubuntu.com/v1/e9f11635-information-link.png" alt="" width="32" height="32" /></p>
<div class="vertical-align__content">
<p>if your header has no more slots for actions, then everything after Slot D goes into Slot E inside an action drawer.</p>
</div>
</div>
</div>
</section>
<section class="row no-padding-right no-padding-left">
<div class="link-top not-for-small"><a href="#">Back to top</a></div>
<div class="ten-col">
<h2 id="-inside-the-header">Search inside the header</h2>
<p>You can use search within the main header to filter the currently displayed content; or as a global search.</p>
</div>
<div class="ten-col">
<div class="image-container"><img src="https://assets.ubuntu.com/v1/6ee0744c-750w_Header_HeaderSearchV2-4.png" alt="750w_Header_HeaderSearchV2 (4)" width="680" height="220" /></div>
</div>
<div class="ten-col">
<h4>Multi-panel layout</h4>
<p>Search can appear in both panels when two or more headers are present. For example, in a mail client you may want a filter for your inbox in the first panel, and a search in the second panel to find a recipient.</p>
</div>
<div class="ten-col">
<div class="image-container"><img src="https://assets.ubuntu.com/v1/3a50895d-750W_Header_Convergence-search-1.png" alt="750W_Header_Convergence search (1)" width="671" height="321" /></div>
</div>
<div class="ten-col">
<div class="image-container"><img src="https://assets.ubuntu.com/v1/65192f75-750w_Header_Convergence-search-box-1.png" alt="750w_Header_Convergence search box (1)" width="682" height="295" /></div>
</div>
<div class="ten-col">
<p>Avoid placing search in both panels unless necessary, because it could confuse the user as to what content is being filter. For example, they may type in the wrong field to search for a specific query if it isn&#8217;t in a hierarchical order.</p>
</div>
<div class="ten-col box-grey vertical-align vertical-align--image-left">
<p><img class="vertical-align__image" src="https://assets.ubuntu.com/v1/75f60d24-link_external.png" alt="" width="32" height="32" /></p>
<div class="vertical-align__content">
<p>Find more information on search in the header see Navigation (coming soon).</p>
</div>
</div>
</section>
<section class="row no-padding-right no-padding-left">
<div class="link-top not-for-small"><a href="#">Back to top</a></div>
<div class="ten-col">
<h2 id="toolbar">Toolbar</h2>
<p>The toolbar is an additional component that can be used to hold actions.</p>
</div>
<div class="ten-col box-grey vertical-align vertical-align--image-left">
<p><img class="vertical-align__image" src="https://assets.ubuntu.com/v1/608696e3-developer_links.png" alt="" width="32" height="32" /></p>
<div class="vertical-align__content">
<p>The <a class="external" href="https://developer.ubuntu.com/api/apps/qml/sdk-15.04.1/Ubuntu.Components.Toolbar/">Toolbar API</a> allows you to determine the action or options you want to display in the toolbar.</p>
</div>
</div>
<div class="ten-col">
<h2 id="edit-mode">Edit mode</h2>
<p>Edit mode allows users to modify a particular item or multiple items at once. To enter edit mode users can initiate it by directly interacting with a list item, title or card, or through an action inside the header.</p>
</div>
<div class="ten-col">
<h3>When should I use edit mode?</h3>
<p>Use a separate edit mode if making the information editable all the time would substantially interfere with viewing, copying, or other tasks. For example, in the Notes app, if a note were editable all the time then the OSK would take up valuable reading space, and hyperlinks in notes would be hard to click or tap.</p>
<p>A toolbar can be used below the header to provide additional actions associated with editing. When editing content the actions that appear inside the main header and toolbar are relevant to an edit state allowing the user to perform tasks on the content, such as: select, rearrange or delete.</p>
</div>
<div class="ten-col">
<h3>Use cases</h3>
<h4>Actions in the header ‐ picking and editing content</h4>
<p>If a primary action of your app is to allow users to select and move content in a list, such as a list of contacts, then surface the editing action inside the main header.</p>
<p>Once the user has initiated the editing action, the toolbar will appear below the header with the associated editing actions for the content.</p>
</div>
<div class="five-col image-container"><img src="https://assets.ubuntu.com/v1/364bc3c2-366w_Header_EditInHeader1-5.png" alt="366w_Header_EditInHeader1 (5)" width="336" height="235" /></div>
<div class="five-col last-col image-container"><img src="https://assets.ubuntu.com/v1/1b4486ee-366w_Header_EditInHeader2-3.png" alt="366w_Header_EditInHeader2 (3)" width="336" height="235" /></div>
<p class="ten-col">If you only use one text button then place it on the left hand side, because it will be easier for the user to reach with one gesture.</p>
<div class="ten-col box-grey vertical-align vertical-align--image-left">
<p><img class="vertical-align__image" src="https://assets.ubuntu.com/v1/e9f11635-information-link.png" alt="information-link" width="32" height="32" /></p>
<div class="vertical-align__content">
<p>The toolbar can contain additional actions other than editing ones, such as &#8216;Share&#8217; or &#8216;Forward&#8217;.</p>
</div>
</div>
<div class="ten-col">
<h4>Edit mode in a multi-panel layout</h4>
<p>Edit mode can be triggered through an action in the header or right-clicking or long-pressing the contextual menu.</p>
</div>
<div class="ten-col">
<div class="image-container"><img src="https://assets.ubuntu.com/v1/c341714c-750w_Header_MultiPanelLayout1-4.png" alt="750w_Header_MultiPanelLayout1 (4)" width="685" height="248" /></div>
</div>
<div class="ten-col">
<p>An activated edit mode must always apply to the panel view it is triggered in. It should not affect any other panels.</p>
</div>
<div class="ten-col">
<div class="image-container"><img src="https://assets.ubuntu.com/v1/bd08ea1b-750w_Header_MultiPanelLayout2-2.png" alt="750w_Header_MultiPanelLayout2 (2)" width="679" height="248" /></div>
</div>
<div class="ten-col">If you need a delete icon place it on the left of the toolbar. If the content you are editing needs to be saved then use two text buttons instead, such as &#8216;Cancel&#8217; and &#8216;Save&#8217;.</div>
<div class="ten-col box-grey vertical-align vertical-align--image-left">
<p><img class="vertical-align__image" src="https://assets.ubuntu.com/v1/e9f11635-information-link.png" alt="" width="32" height="32" /></p>
<div class="vertical-align__content">
<p>Place negative actions on the left and positive actions on the right in the main header for consistency across the platform. See <a href="/apps/get-started/design-values">Design values</a> for more information.</p>
</div>
</div>
<div class="ten-col">
<h3>Toolbar placement</h3>
<p>The toolbar appears below the main header when edit mode is initiated.</p>
</div>
<div class="ten-col">
<div class="image-container"><img src="https://assets.ubuntu.com/v1/301fcba0-750w_Header_ToolBar-1.png" alt="750w_Header_ToolBar (1)" width="665" height="155" /></div>
</div>
<div class="ten-col">
<ol>
<li>Main header</li>
<li>Toolbar</li>
</ol>
</div>
</section>
<section class="row no-padding-right no-padding-left">
<div class="link-top not-for-small"><a href="#">Back to top</a></div>
<div class="ten-col">
<h2 id="header-appearance">Header appearance</h2>
<p>You can decide how you want the header to appear in four ways: Fixed, Fixed and Opaque, Fixed and Transparent and Hidden.</p>
</div>
<div class="ten-col box-grey vertical-align vertical-align--image-left">
<p><img class="vertical-align__image" src="https://assets.ubuntu.com/v1/e9f11635-information-link.png" alt="information-link" width="32" height="32" /></p>
<div class="vertical-align__content">
<p>When a header is displayed in a larger surface or a window, such as in a desktop, it will be fixed, because there will be more room to display content.</p>
</div>
</div>
<div class="ten-col">
<h3>Fixed (default)</h3>
<p>A fixed header will appear at all times until the user starts to scroll down within your app&#8217;s content. Having a fixed header can be useful if you have a few sections or actions that need to be accessible even when the user scrolls. For instance, in a photo editing app the user may want the editing tools to be fixed in the header for easier access.</p>
<p>If your app displays a header section below the main header, then it will follow the defined behavior of the main header.</p>
</div>
<div class="five-col">
<div class="image-container"><img src="https://assets.ubuntu.com/v1/54decf55-366w_Header_TouchEnvironment1-1.png" alt="366w_Header_TouchEnvironment1 (1)" width="336" height="259" /></div>
</div>
<div class="five-col last-col">
<div class="image-container"><img src="https://assets.ubuntu.com/v1/a3cd80c6-366w_Header_TouchEnvironment2-2.png" alt="366w_Header_TouchEnvironment2 (2)" width="336" height="259" /></div>
</div>
<div class="ten-col">
<p>The header can be brought back into view by:</p>
<ul>
<li>scrolling up on the content</li>
<li>tapping or interacting with the content.</li>
</ul>
</div>
<div class="ten-col">
<h3>Fixed and transparent</h3>
<p>The header will be available at all times and have a transparency of 80-90%. This type of header can be useful if you don&#8217;t want it to be the focus of attention, but still available if the user wishes to have quicker access to a view or action.</p>
</div>
<div class="five-col">
<div class="image-container"><img src="https://assets.ubuntu.com/v1/665d0605-366w_Header_HeaderFixedTransparent.png" alt="366w_Header_HeaderFixedTransparent" width="336" height="217" /></div>
</div>
<div class="ten-col">
<h4>Multi-panel layout</h4>
<p>If your app is presented in a multi-panel layout, then the headers that appears in each panel will remain fixed and always visible when scrolling.</p>
</div>
<div class="ten-col">
<div class="image-container"><img src="https://assets.ubuntu.com/v1/03b1c161-750w_Header_TouchMultiPanelView1-1.png" alt="750w_Header_TouchMultiPanelView1 (1)" width="679" height="254" /></div>
</div>
<div class="ten-col">
<div class="image-container"><img src="https://assets.ubuntu.com/v1/b4b4d221-750w_Header_TouchMultiPanelView2-1.png" alt="750w_Header_TouchMultiPanelView2 (1)" width="679" height="234" /></div>
</div>
<div class="ten-col">
<p><strong>Overwritten fixed header</strong></p>
<p>If you choose to overwrite the default header, then it should:</p>
<ul>
<li>react with its associated panel</li>
<li>not affect other panels.</li>
</ul>
</div>
<div class="ten-col">
<div class="image-container"><img src="https://assets.ubuntu.com/v1/30d7a000-750w_Header_OverwrittenFixedheader1-1.png" alt="750w_Header_OverwrittenFixedheader1 (1)" width="679" height="228" /></div>
</div>
<div class="ten-col">
<div class="image-container"><img src="https://assets.ubuntu.com/v1/46f5aaf1-750w_Header_OverwrittenFixedheader2-1.png" alt="750w_Header_OverwrittenFixedheader2 (1)" width="679" height="225" /></div>
</div>
<div class="five-col">
<h3>Hidden</h3>
<div class="image-container"><img src="https://assets.ubuntu.com/v1/012020a0-366w_Header_HeaderHidden.png" alt="366w_Header_HeaderHidden" width="336" height="217" /></div>
</div>
<div class="five-col last-col">
<h3>Overlay</h3>
<div class="image-container"><img src="https://assets.ubuntu.com/v1/665d0605-366w_Header_HeaderFixedTransparent.png" alt="366w_Header_HeaderFixedTransparent" width="336" height="217" /></div>
</div>
<div class="five-col">
<p>The header is not visible to the user. This type of header is useful for full-screen applications, such as the Camera app.</p>
</div>
<div class="five-col last-col">
<p>Useful in displaying more content in a single screen.</p>
</div>
<div class="ten-col">
<h3>Apps without a header</h3>
<p>If you choose not to have a header then think about how users will navigate through your UI in a different way.</p>
</div>
<div class="five-col">
<h4>Overview</h4>
<div class="image-container"><img src="https://assets.ubuntu.com/v1/90d79b0a-366w_Header_HeaderCustumised1.png" alt="366w_Header_HeaderCustumised1" width="336" height="342" /></div>
</div>
<div class="five-col last-col">
<h4>Top level</h4>
<div class="image-container"><img src="https://assets.ubuntu.com/v1/beb45276-366w_Header_HeaderCustumised2.png" alt="366w_Header_HeaderCustumised2" width="336" height="342" /></div>
</div>
<div class="ten-col">
<p>For example, the Clock app has a customized header and uses icons at the top of the screen to take the user to different modes of the app.</p>
</div>
</section>
<section class="row no-padding-right no-padding-left">
<div class="ten-col">
<div class="link-top not-for-small"><a href="#">Back to top</a></div>
<div class="ten-col">
<h2 id="header-section">Header section</h2>
<p>The header section allow users to easily shift between category views within the same page. It has the same visibility as the main header. For example, if the header is set to default it will slide away with the sections when the user scrolls down.</p>
</div>
<div class="ten-col box-grey vertical-align vertical-align--image-left">
<p><img class="vertical-align__image" src="https://assets.ubuntu.com/v1/608696e3-developer_links.png" alt="" width="32" height="32" /></p>
<div class="vertical-align__content">
<p>The <a class="external" href="https://developer.ubuntu.com/api/apps/qml/sdk-15.04.4/Ubuntu.Components.Sections/">Section API</a> displays a list of sections that the user can select. It is strongly recommended to limit the number of sections to two or three to avoid a cultured looking header.</p>
</div>
</div>
<h4 class="ten-col">Dekko app</h4>
<div class="five-col">
<div class="image-container"><img src="https://assets.ubuntu.com/v1/87bb9446-366w_Header_ActionInHeader1-6.png" alt="366w_Header_ActionInHeader1 (6)" width="336" height="180" /></div>
</div>
<div class="five-col last-col">
<div class="image-container"><img src="https://assets.ubuntu.com/v1/c7289222-366w_Header_ActionInHeader2-2.png" alt="366w_Header_ActionInHeader2 (2)" width="336" height="180" /></div>
</div>
<div class="ten-col">
<p>For example, if your app was presenting an inbox of emails, from &#8216;All&#8217;, the sub-sections could display &#8216;Recent&#8217; and &#8216;Archive&#8217; to further filter the content. More sections on the screen can be visible by swiping right.</p>
</div>
<div class="ten-col">
<h4>When a mouse is attached</h4>
<div class="image-container"><img src="https://assets.ubuntu.com/v1/d9100a09-750w_Header_Pointer-environment.png" alt="750w_Header_Pointer environment" width="671" height="384" /></div>
</div>
<div class="ten-col">
<p>More tabs are indicated by an arrow revealed when the user interacts with the header section using a mouse.</p>
</div>
<div class="ten-col">
<div class="image-container"><img src="https://assets.ubuntu.com/v1/3d853bd3-750w_Header_HeaderSection.png" alt="750w_Header_HeaderSection" width="673" height="161" /></div>
</div>
<div class="ten-col">
<ol>
<li><strong>The main header</strong> is a separate component that can hold actions and navigational options</li>
<li><strong>The header section</strong> sits below the main header and allows for sub-navigation or filtering within the screen, which is indicated by the header above. One option is always selected</li>
</ol>
</div>
</div>
</section>
<section class="row no-padding-right no-padding-left">
<div class="link-top not-for-small"><a href="#">Back to top</a></div>
<h2 id="best-practices">Best practices</h2>
<div class="ten-col">
<h3>Header section</h3>
</div>
<div class="five-col">
<div class="image-container"><img src="https://assets.ubuntu.com/v1/4a88eac0-366w_Header_ClearHeader1-1.png" alt="366w_Header_ClearHeader1 (1)" width="336" height="120" /></div>
</div>
<div class="five-col last-col">
<div class="image-container"><img src="https://assets.ubuntu.com/v1/9beb16cf-366w_Header_ClearHeader2-2.png" alt="366w_Header_ClearHeader2 (2)" width="336" height="120" /></div>
</div>
<div class="five-col">
<div class="left"><img src="https://assets.ubuntu.com/v1/74c13c17-do_32.png" alt="" width="32" height="32" /></div>
<h4 style="text-align: left; margin-top: 10px; margin-bottom: 10px;"><span style="color: #3eb34f;">Do</span></h4>
<p class="five-col">Make your sections clear and concise.</p>
</div>
<div class="five-col last-col">
<div class="left"><img src="https://assets.ubuntu.com/v1/01fb853b-dont_32.png" alt="" width="32" height="32" /></div>
<h4 style="text-align: left; margin-top: 10px; margin-bottom: 10px;"><span style="color: #ed3146;">Don&#8217;t</span></h4>
<p class="five-col">The header section can look cluttered if you make the titles too big.</p>
</div>
<div class="ten-col">
<h3>Actions</h3>
<p>Allow users quick access to the most important actions by placing them inside the header. For example, in the Contact app: &#8216;Call&#8217; and &#8216;Add Contact&#8217; are available in the header to give quick access to the Dialler and Address book.</p>
</div>
<div class="six-col">
<div class="image-container"><img src="https://assets.ubuntu.com/v1/50dcda9a-366w_Header_ClearHeaderAction-1.png" alt="366w_Header_ClearHeaderAction (1)" width="336" height="110" /></div>
</div>
</section>
<section class="row no-padding-right no-padding-left no-border">
<div class="link-top not-for-small"><a href="#">Back to top</a></div>
</section>
</div>


</div>
