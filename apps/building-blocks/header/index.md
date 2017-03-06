---

layout: post
title: "Header"
body-id: "apps"
body-class: "guidelines"
---

<div class="row">
  <div class="col-8">
    <p>Use the header to let the user know where they are, what they can do, and where they can go inside your application.</p>

    <span class="image-container"><img src="{{ site.assets_path }}8ec7cc1c-750w_Header_Orientation-3.png" alt="750w_Header_Orientation (3)" width="679" height="205" /></span>

    <ul class="p-list is-split">
      <li class="p-list__item"><a href="#usage">Usage&nbsp;&rsaquo;</a></li>
      <li class="p-list__item"><a href="#slots">Slots&nbsp;&rsaquo;</a></li>
      <li class="p-list__item"><a href="#toolbar">Toolbar&nbsp;&rsaquo;</a></li>
      <li class="p-list__item"><a href="#edit-mode">Edit mode&nbsp;&rsaquo;</a></li>
      <li class="p-list__item"><a href="#responsive-layout">Responsive layout&nbsp;&rsaquo;</a></li>
      <li class="p-list__item"><a href="#header-appearance">Header appearance&nbsp;&rsaquo;</a></li>
      <li class="p-list__item"><a href="#header-section">Header section&nbsp;&rsaquo;</a></li>
      <li class="p-list__item"><a href="#best-practices">Best practices&nbsp;&rsaquo;</a></li>
    </ul>
  </div>
</div>


<div class="row">
  <div class="col-6 p-card u-vertically-center">
    <div class="col-1">
      <img src="{{ site.assets_path }}608696e3-developer_links.png" alt="" width="32" height="32">
    </div>
    <div class="col-5">
      <p class="p-card__content">The <a class="external" href="https://developer.ubuntu.com/api/apps/qml/sdk-15.04.1/Ubuntu.Components.Header/">Header API</a> includes the exposed, flickable and moving properties of the header.</p>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-8">
    <h2 id="usage">Usage</h2>
    <p>The header area can contain the main navigation options and actions inside your app. It is used to enhance the user experience in specific device layouts.</p>

    <h3>When should I use a header?</h3>

    <ul class="p-list">
      <li class="p-list__item is-ticked">If your app has multiple sections</li>
      <li class="p-list__item is-ticked">If your app performs an action that requires the full screen, such as a camera, then don&#8217;t use a header.</li>
    </ul>

    <p>Multiple panels may appear when the surface or window increases in size. When this happens, each panel can contain its own header. For example, on a mobile surface, one panel is present at a time as the pages are stacked on top of each other in a hierarchical order. However, when translated onto a medium to large surface the panels become adjacent to each other and will contain their own header, while still remaining in a hierarchical order.</p>
  </div>


  <div class="col-5">
    <span class="image-container"><img src="{{ site.assets_path }}8311396f-366w_Header_Usage1panel.png" alt="l" width="340" height="209" /></span>
  </div>

  <div class="col-10">
    <span class="image-container"><img src="{{ site.assets_path }}0d024d94-750w_Header_Usage2panels.png" alt="750w_Header_Usage2panels" width="672" height="154" /></span>
  </div>

  <div class="col-8">
    <ul class="p-list">
      <li class="p-list__item"><strong>Navigational options </strong>on the left</li>
    </ul>

    <p>The navigation area can include a Back Button, title, a subtitle or a navigation drawer for when there is no room to fit all buttons for major views.</p>

    <ul class="p-list">
      <li class="p-list__item is-ticked"><strong>Actions </strong>on the right</li>
    </ul>

    <p>The action area can include actions such as settings, search, views, or an action drawer for when there&#8217;s no room to place further actions.</p>
  </div>
</div>


<div class="row">
  <div class="col-6 p-card u-vertically-center">
    <div class="col-1">
      <img src="{{ site.assets_path }}e9f11635-information-link.png" alt="" width="32" height="32">
    </div>
    <div class="col-5">
      <p class="p-card__content">Don&#8217;t use a navigation drawer and an action drawer at the same time, because users are unlikely to distinguish between them.</p>
    </div>
  </div>
</div>


<div class="row">
  <div class="col-12 link-top">
    <a href="#">Back to top</a>
  </div>
</div>

<div class="row">
  <div class="col-8">
    <h2 id="slot-placement">Slots</h2>

    <p>The header contains a number of slots that can hold actions or navigational options. Depending on the surface or window size, additional slots can be added to show the actions otherwise hidden in drawers.</p>

    <scan class="image-container"><img src="{{ site.assets_path }}bc59f393-750w_Header_HeaderComponents.png" alt="750w_Header_HeaderComponents" width="688" height="367" /></scan>
  </div>
</div>


<div class="row">
  <div class="col-6 p-card u-vertically-center">
    <div class="col-1">
      <img src="{{ site.assets_path }}e9f11635-information-link.png" alt="" width="32" height="32">
    </div>
    <div class="col-5">
      <p class="p-card__content">Think about the most important actions and views you want the user to perform and make it easy for them to find by using the header.</p>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-8">
    <p>For smaller surfaces, such as on mobile, the SDK provides a maximum of four slots per header that can be arranged in two ways.</p>

    <span class="image-container"><img src="{{ site.assets_path }}1340e785-750w_Header_Slots-2.png" alt="750w_Header_Slots (2)" width="660" height="227" /></span>

  </div>
</div>

<div class="row">
  <div class="col-8">
    <h3>Slot arrangement</h3>
    <p>Slots can be arranged in a variety of ways to surface actions and navigational options to best suit the user experience of your application.</p>
  </div>
</div>

<div class="row">
  <div class="col-10">
    <div class="col-5">
      <h4>Slot A</h4>
      <span class="image-container"><img src="{{ site.assets_path }}625656cf-366w_Header_SlotAexample1-3.png" alt="366w_Header_SlotAexample1 (3)" width="336" height="315" /></span>
      <ul class="p-list">
        <li class="p-list__item">First position on the left hand side</li>
        <li class="p-list__item">When slot A is not needed, slot B should move to this position</li>
        <li class="p-list__item">A navigation drawer can displays all main views in an application</li>
      </ul>
    </div>
    <div class="col-5">
      <h4>Slot B</h4>
      <span class="image-container"><img src="{{ site.assets_path }}132ac0cf-366w_Header_SlotBexample1-3.png" alt="366w_Header_SlotBexample1 (3)" width="336" height="315" /></span>
      <ul class="p-list">
        <li class="p-list__item">Mandatory title of your app or view, only one line</li>
        <li class="p-list__item">An optional subtitle can sit below the title, which can be two lines</li>
      </ul>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-8">
    <h4>Slot C</h4>
    <p>Slot C can have any action inside it, such as &#8216;Add new contact&#8217; or a &#8216;Call&#8217; action.</p>
  </div>
  <div class="col-10">
    <div class="col-5">
      <h4 class="col-5">Search</h4>
      <span class="image-container"><img src="{{ site.assets_path }}d9aca9a6-366w_Header_SlotCexample1-3.png" alt="366w_Header_SlotCexample1 (3)" width="336" height="295" /></span>
      <p>If you are using Slot C for Settings, then it should always be positioned last.</p>
    </div>
    <div class="col-5">
      <h4 class="col-5">Settings</h4>
      <span class="image-container"><img src="{{ site.assets_path }}f645dd1d-366w_Header_SlotCexample2-2-1.png" alt="366w_Header_SlotCexample2 (2)" width="336" height="295" /></span>
      <p>If you are using Slot C to place a Search icon, or any other action, then place it to the right of the title.</p>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-8">
    <h3>Action drawer</h3>
    <p>An action drawer can be used for when no other slots are available to show them. However, when your app is on a larger surface, like on a desktop, then actions will appear in the slots.</p>
  </div>
  <div class="col-10">
    <div class="col-5">
      <span class="image-container"><img src="{{ site.assets_path }}601b7473-366w_Header_ActionDrawerExpanded-1.png" alt="366w_Header_ActionDrawerExpanded (1)" width="318" height="165" /></span>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-8">
    <h3>Responsive layout</h3>
    <p>As the header gains width across screen sizes, additional slots become visible and actions in the drawer will appear automatically.</p>
  </div>
  <div class="col-10">
    <div class="col-5">
      <h4>3 slot layout</h4>
      <span class="image-container"><img src="{{ site.assets_path }}407df52e-Header_SlotArrangement1-2.png" alt="Header_SlotArrangement1 (2)" width="247" height="41" /></span>
    </div>
    <div class="col-5">
      <h4>4 slot layout</h4>
      <span class="image-container"><img src="{{ site.assets_path }}bf9f7a5f-Header_SlotArrangement2-2.png" alt="Header_SlotArrangement2 (2)" width="278" height="41" /></span>
    </div>
  </div>
  <div class="col-10">
    <div class="col-5">
      <h4>5 slot layout</h4>
      <span class="image-container"><img src="{{ site.assets_path }}ed3d7a0b-Header_SlotArrangement3-2.png" alt="Header_SlotArrangement3 (2)" width="311" height="41" /></span>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-10">
    <h4>6 slot layout</h4>
    <span class="image-container"><img src="{{ site.assets_path }}a2a5f31e-Header_SlotArrangement4-3.png" alt="Header_SlotArrangement4 (3)" width="534" height="41" /></span>
    <span class="image-container"><img src="{{ site.assets_path }}28d29fbc-Header_SlotArrangement5-2.png" alt="Header_SlotArrangement5 (2)" width="534" height="41" /></span>
  </div>
  <div class="col-8">
    <h4>Medium to large screens</h4>
    <p>The maximum number of visible action slots in a convergent environment is 6. If this is exceeded then additional actions will migrate to the action drawer.</p>
  </div>

  <div class="row">
    <div class="col-6 p-card u-vertically-center">
      <div class="col-1">
        <img src="{{ site.assets_path }}e9f11635-information-link.png" alt="" width="32" height="32">
      </div>
      <div class="col-5">
        <p class="p-card__content">If your header has no more slots for actions, then everything after Slot D goes into Slot E inside an action drawer.</p>
      </div>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-12 link-top">
    <a href="#">Back to top</a>
  </div>
</div>


<div class="row">
  <div class="col-8">
    <h2 id="-inside-the-header">Search inside the header</h2>
    <p>You can use search within the main header to filter the currently displayed content; or as a global search.</p>

    <span class="image-container"><img src="{{ site.assets_path }}6ee0744c-750w_Header_HeaderSearchV2-4.png" alt="750w_Header_HeaderSearchV2 (4)" width="680" height="220" /></span>

    <h4>Multi-panel layout</h4>
    <p>Search can appear in both panels when two or more headers are present. For example, in a mail client you may want a filter for your inbox in the first panel, and a search in the second panel to find a recipient.</p>

    <span class="image-container"><img src="{{ site.assets_path }}3a50895d-750W_Header_Convergence-search-1.png" alt="750W_Header_Convergence search (1)" width="671" height="321" /></span>

    <span class="image-container"><img src="{{ site.assets_path }}65192f75-750w_Header_Convergence-search-box-1.png" alt="750w_Header_Convergence search box (1)" width="682" height="295" /></span>

    <p>Avoid placing search in both panels unless necessary, because it could confuse the user as to what content is being filter. For example, they may type in the wrong field to search for a specific query if it isn&#8217;t in a hierarchical order.</p>
  </div>
</div>


<div class="row">
  <div class="col-6 p-card u-vertically-center">
    <div class="col-1">
      <img src="{{ site.assets_path }}75f60d24-link_external.png" alt="" width="32" height="32">
    </div>
    <div class="col-5">
      <p class="p-card__content">Find more information on search in the header see Navigation (coming soon).</p>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-12 link-top">
    <a href="#">Back to top</a>
  </div>
</div>

<div class="row">
  <div class="col-8">
    <h2 id="toolbar">Toolbar</h2>
    <p>The toolbar is an additional component that can be used to hold actions.</p>
  </div>
</div>


<div class="row">
  <div class="col-6 p-card u-vertically-center">
    <div class="col-1">
      <img src="{{ site.assets_path }}608696e3-developer_links.png" alt="" width="32" height="32">
    </div>
    <div class="col-5">
      <p class="p-card__content">The <a class="external" href="https://developer.ubuntu.com/api/apps/qml/sdk-15.04.1/Ubuntu.Components.Toolbar/">Toolbar API</a> allows you to determine the action or options you want to display in the toolbar.</p>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-8">
    <h2 id="edit-mode">Edit mode</h2>
    <p>Edit mode allows users to modify a particular item or multiple items at once. To enter edit mode users can initiate it by directly interacting with a list item, title or card, or through an action inside the header.</p>

    <h3>When should I use edit mode?</h3>
    <p>Use a separate edit mode if making the information editable all the time would substantially interfere with viewing, copying, or other tasks. For example, in the Notes app, if a note were editable all the time then the OSK would take up valuable reading space, and hyperlinks in notes would be hard to click or tap.</p>
    <p>A toolbar can be used below the header to provide additional actions associated with editing. When editing content the actions that appear inside the main header and toolbar are relevant to an edit state allowing the user to perform tasks on the content, such as: select, rearrange or delete.</p>

    <h3>Use cases</h3>

    <h4>Actions in the header ‐ picking and editing content</h4>
    <p>If a primary action of your app is to allow users to select and move content in a list, such as a list of contacts, then surface the editing action inside the main header.</p>
    <p>Once the user has initiated the editing action, the toolbar will appear below the header with the associated editing actions for the content.</p>
  </div>
</div>

<div class="row">
  <div class="col-10">
    <div class="col-5">
      <span class="image-container"><img src="{{ site.assets_path }}364bc3c2-366w_Header_EditInHeader1-5.png" alt="366w_Header_EditInHeader1 (5)" width="336" height="235" /></span>
    </div>
    <div class="col-5">
      <span class="image-container"><img src="{{ site.assets_path }}1b4486ee-366w_Header_EditInHeader2-3.png" alt="366w_Header_EditInHeader2 (3)" width="336" height="235" /></span>
    </div>
  </div>
  <div class="col-8">
    <p>If you only use one text button then place it on the left hand side, because it will be easier for the user to reach with one gesture.</p>
  </div>
</div>

<div class="row">
  <div class="col-6 p-card u-vertically-center">
    <div class="col-1">
      <img src="{{ site.assets_path }}e9f11635-information-link.png" alt="" width="32" height="32">
    </div>
    <div class="col-5">
      <p class="p-card__content">The toolbar can contain additional actions other than editing ones, such as &#8216;Share&#8217; or &#8216;Forward&#8217;.</p>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-8">
    <h4>Edit mode in a multi-panel layout</h4>
    <p>Edit mode can be triggered through an action in the header or right-clicking or long-pressing the contextual menu.</p>

    <span class="image-container"><img src="{{ site.assets_path }}c341714c-750w_Header_MultiPanelLayout1-4.png" alt="750w_Header_MultiPanelLayout1 (4)" width="685" height="248" /></span>

    <p>An activated edit mode must always apply to the panel view it is triggered in. It should not affect any other panels.</p>

    <span class="image-container"><img src="{{ site.assets_path }}bd08ea1b-750w_Header_MultiPanelLayout2-2.png" alt="750w_Header_MultiPanelLayout2 (2)" width="679" height="248" /></span>

    <p>If you need a delete icon place it on the left of the toolbar. If the  content you are editing needs to be saved then use two text buttons instead, such as &#8216;Cancel&#8217; and &#8216;Save&#8217;.</p>
  </div>
</div>

<div class="row">
  <div class="col-6 p-card u-vertically-center">
    <div class="col-1">
      <img src="{{ site.assets_path }}e9f11635-information-link.png" alt="" width="32" height="32">
    </div>
    <div class="col-5">
      <p class="p-card__content">Place negative actions on the left and positive actions on the right in the main header for consistency across the platform. See <a href="/apps/get-started/design-values">Design values</a> for more information.</p>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-8">
    <h3>Toolbar placement</h3>
    <p>The toolbar appears below the main header when edit mode is initiated.</p>

    <span class="image-container"><img src="{{ site.assets_path }}301fcba0-750w_Header_ToolBar-1.png" alt="750w_Header_ToolBar (1)" width="665" height="155" /></span>

    <ol>
      <li class="p-list__item">Main header</li>
      <li class="p-list__item">Toolbar</li>
    </ol>
  </div>
</div>

<div class="row">
  <div class="col-12 link-top">
    <a href="#">Back to top</a>
  </div>
</div>

<div class="row">
  <div class="col-10">
    <h2 id="header-appearance">Header appearance</h2>
    <p>You can decide how you want the header to appear in four ways: Fixed, Fixed and Opaque, Fixed and Transparent and Hidden.</p>
  </div>
</div>

<div class="row">
  <div class="col-6 p-card u-vertically-center">
    <div class="col-1">
      <img src="{{ site.assets_path }}e9f11635-information-link.png" alt="" width="32" height="32">
    </div>
    <div class="col-5">
      <p class="p-card__content">When a header is displayed in a larger surface or a window, such as in a desktop, it will be fixed, because there will be more room to display content.</p>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-8">
    <h3>Fixed (default)</h3>
    <p>A fixed header will appear at all times until the user starts to scroll down within your app&#8217;s content. Having a fixed header can be useful if you have a few sections or actions that need to be accessible even when the user scrolls. For instance, in a photo editing app the user may want the editing tools to be fixed in the header for easier access.</p>
    <p>If your app displays a header section below the main header, then it will follow the defined behavior of the main header.</p>
  </div>

  <div class="col-5">
    <span class="image-container"><img src="{{ site.assets_path }}54decf55-366w_Header_TouchEnvironment1-1.png" alt="366w_Header_TouchEnvironment1 (1)" width="336" height="259" /></span>

    <span class="image-container"><img src="{{ site.assets_path }}a3cd80c6-366w_Header_TouchEnvironment2-2.png" alt="366w_Header_TouchEnvironment2 (2)" width="336" height="259" /></span>

    <p>The header can be brought back into view by:</p>

    <ul class="p-list">
      <li class="p-list__item is-ticked">scrolling up on the content</li>
      <li class="p-list__item is-ticked">tapping or interacting with the content.</li>
    </ul>
  </div>

  <div class="col-8">

    <h3>Fixed and transparent</h3>
    <p>The header will be available at all times and have a transparency of 80-90%. This type of header can be useful if you don&#8217;t want it to be the focus of attention, but still available if the user wishes to have quicker access to a view or action.</p>
  </div>
  <div class="col-10">
    <div class="col-5">
      <span class="image-container"><img src="{{ site.assets_path }}665d0605-366w_Header_HeaderFixedTransparent.png" alt="366w_Header_HeaderFixedTransparent" width="336" height="217" /></span>
    </div>
  </div>

  <div class="col-8">
    <h4>Multi-panel layout</h4>
    <p>If your app is presented in a multi-panel layout, then the headers that appears in each panel will remain fixed and always visible when scrolling.</p>

    <span class="image-container"><img src="{{ site.assets_path }}03b1c161-750w_Header_TouchMultiPanelView1-1.png" alt="750w_Header_TouchMultiPanelView1 (1)" width="679" height="254" /></span>

    <span class="image-container"><img src="{{ site.assets_path }}b4b4d221-750w_Header_TouchMultiPanelView2-1.png" alt="750w_Header_TouchMultiPanelView2 (1)" width="679" height="234" /></span>

    <p><strong>Overwritten fixed header</strong></p>
    <p>If you choose to overwrite the default header, then it should:</p>
    <ul class="p-list">
      <li class="p-list__item is-ticked">react with its associated panel</li>
      <li class="p-list__item is-ticked">not affect other panels.</li>
    </ul>

    <span class="image-container"><img src="{{ site.assets_path }}30d7a000-750w_Header_OverwrittenFixedheader1-1.png" alt="750w_Header_OverwrittenFixedheader1 (1)" width="679" height="228" /></span>

    <span class="image-container"><img src="{{ site.assets_path }}46f5aaf1-750w_Header_OverwrittenFixedheader2-1.png" alt="750w_Header_OverwrittenFixedheader2 (1)" width="679" height="225" /></span>
  </div>
  <div class="col-5">
    <h3>Hidden</h3>
    <span class="image-container"><img src="{{ site.assets_path }}012020a0-366w_Header_HeaderHidden.png" alt="366w_Header_HeaderHidden" width="336" height="217" /></span>

    <h3>Overlay</h3>

    <span class="image-container"><img src="{{ site.assets_path }}665d0605-366w_Header_HeaderFixedTransparent.png" alt="366w_Header_HeaderFixedTransparent" width="336" height="217" /></span>
  </div>

  <div class="col-8">
    <p>The header is not visible to the user. This type of header is useful for full-screen applications, such as the Camera app.</p>

    <p>Useful in displaying more content in a single screen.</p>
  </div>
</div>

<div class="row">
  <div class="col-8">
    <h3>Apps without a header</h3>
    <p>If you choose not to have a header then think about how users will navigate through your UI in a different way.</p>
  </div>
  <div class="col-10">
    <div class="col-5">
      <h4>Overview</h4>
      <span class="image-container"><img src="{{ site.assets_path }}90d79b0a-366w_Header_HeaderCustumised1.png" alt="366w_Header_HeaderCustumised1" width="336" height="342" /></span>
    </div>
    <div class="col-5">
      <h4>Top level</h4>
      <span class="image-container"><img src="{{ site.assets_path }}beb45276-366w_Header_HeaderCustumised2.png" alt="366w_Header_HeaderCustumised2" width="336" height="342" /></span>
    </div>
  </div>
  <div class="col-8">
    <p>For example, the Clock app has a customized header and uses icons at the top of the screen to take the user to different modes of the app.</p>
  </div>
</div>

<div class="row">
  <div class="col-12 link-top">
    <a href="#">Back to top</a>
  </div>
</div>

<div class="row">
  <div class="col-8">
    <h2 id="header-section">Header section</h2>
    <p>The header section allow users to easily shift between category views within the same page. It has the same visibility as the main header. For example, if the header is set to default it will slide away with the sections when the user scrolls down.</p>
  </div>
</div>


<div class="row">
  <div class="col-6 p-card u-vertically-center">
    <div class="col-1">
      <img src="{{ site.assets_path }}608696e3-developer_links.png" alt="" width="32" height="32">
    </div>
  <div class="col-5">
    <p class="p-card__content">The <a class="external" href="https://developer.ubuntu.com/api/apps/qml/sdk-15.04.4/Ubuntu.Components.Sections/">Section API</a> displays a list of sections that the user can select. It is strongly recommended to limit the number of sections to two or three to avoid a cultured looking header.</p>
  </div>
</div>
</div>

<div class="row">
  <div class="col-8">
    <h4>Dekko app</h4>
  </div>
  <div class="col-10">
    <div class="col-5">
      <span class="image-container"><img src="{{ site.assets_path }}87bb9446-366w_Header_ActionInHeader1-6.png" alt="366w_Header_ActionInHeader1 (6)" width="336" height="180" /></span>
    </div>
    <div class="col-5">
      <span class="image-container"><img src="{{ site.assets_path }}c7289222-366w_Header_ActionInHeader2-2.png" alt="366w_Header_ActionInHeader2 (2)" width="336" height="180" /></span>
    </div>
  </div>
  <div class="col-8">
    <p>For example, if your app was presenting an inbox of emails, from &#8216;All&#8217;, the sub-sections could display &#8216;Recent&#8217; and &#8216;Archive&#8217; to further filter the content. More sections on the screen can be visible by swiping right.</p>

    <h4>When a mouse is attached</h4>
    <span class="image-container"><img src="{{ site.assets_path }}d9100a09-750w_Header_Pointer-environment.png" alt="750w_Header_Pointer environment" width="671" height="384" /></span>

    <p>More tabs are indicated by an arrow revealed when the user interacts with the header section using a mouse.</p>

    <span class="image-container"><img src="{{ site.assets_path }}3d853bd3-750w_Header_HeaderSection.png" alt="750w_Header_HeaderSection" width="673" height="161" /></span>

    <ol>
      <li class="p-list__item"><strong>The main header</strong> is a separate component that can hold actions and navigational options</li>
      <li class="p-list__item"><strong>The header section</strong> sits below the main header and allows for sub-navigation or filtering within the screen, which is indicated by the header above. One option is always selected</li>
    </ol>
  </div>
</div>

<div class="row">
  <div class="col-12 link-top">
    <a href="#">Back to top</a>
   </div>
</div>

<div class="row">
  <div class="col-8">
    <h2 id="best-practices">Best practices</h2>
    <h3>Header section</h3>
  </div>
  <div class="col-10">
    <div class="col-5">
      <span class="image-container"><img src="{{ site.assets_path }}4a88eac0-366w_Header_ClearHeader1-1.png" alt="366w_Header_ClearHeader1 (1)" width="336" height="120" /></span>
      <img src="{{ site.assets_path }}74c13c17-do_32+%281%29.png" alt="do_32" width="32" height="32" style="float: left; margin-right: 1em;">
      <h4 style="text-align: left; margin-top: 4px;"><span style="color: #3eb34f;">Do</span></h4>
      <p>Make your sections clear and concise.</p>
    </div>
    <div class="col-5">
      <span class="image-container"><img src="{{ site.assets_path }}9beb16cf-366w_Header_ClearHeader2-2.png" alt="366w_Header_ClearHeader2 (2)" width="336" height="120" /></span>
      <img src="{{ site.assets_path }}01fb853b-dont_32.png" alt="dont_32" width="32" height="32" style="float: left; margin-right: 1em;">
      <h4 style="text-align: left; margin-top: 4px;"><span style="color: #ed3146;">Don&#8217;t</span></h4>
      <p>The header section can look cluttered if you make the titles too big.</p>
    </div>
  </div>
  <div class="col-8">
    <h3>Actions</h3>
    <p>Allow users quick access to the most important actions by placing them inside the header. For example, in the Contact app: &#8216;Call&#8217; and &#8216;Add Contact&#8217; are available in the header to give quick access to the Dialler and Address book.</p>
  </div>
  <div class="six-col">
    <span class="image-container"><img src="{{ site.assets_path }}50dcda9a-366w_Header_ClearHeaderAction-1.png" alt="366w_Header_ClearHeaderAction (1)" width="336" height="110" /></span>
  </div>
</div>
