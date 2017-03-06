---
layout: post
title: Layouts
body-id: apps
body-class: guidelines
---

<div class="row">
  <div class="col-8">
    <p>Make your app consistent and adaptive across all screen sizes with just one API.</p>

    <img src="{{ site.assets_path }}a7a07787-750w_Layout_MainImage.png" alt="750w_Layout_MainImage" width="770" height="416">

    <ul class="p-list--divided">
      <li class="p-list__item"><a href="#grid-unit-system">Grid unit system &rsaquo;</a></li>
      <li class="p-list__item"><a href="#layouts">Layouts &rsaquo;</a></li>      <li class="p-list__item"><a href="#good-practice">Good practice &rsaquo;</a></li>
    </ul>
  </div>
</div>


<div class="row">
  <div class="col-6 p-card u-vertically-center">
    <div class="col-1">
      <img src="{{ site.assets_path }}608696e3-developer_links.png" alt="" width="32" height="32">
    </div>
    <div class="col-5">
      <p class="p-card__content">The <a href="https://developer.ubuntu.com/api/apps/qml/sdk-15.04.1/Ubuntu.Components.AdaptivePageLayout/">Adaptive Layout API</a> allows you to add multiple columns to a page (under heavy development).</p>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-8">
    <h2 id="grid-unit">Grid Unit System</h2>
    <p>A Grid Unit (GU) is a virtual measure of the screen space that is calculated according to the device&#8217;s width in pixels and the predefined layout. They have been designed to suit a range of screen sizes.</p>

    <h3>Placing elements</h3>
    <p>Use Grid Units to help visualise how much space you have in order to create a consistent and proportionate UI. It proves beneficial for when you are placing components and labels within your app.</p>
  </div>
  <div class="col-10">
    <div class="six-col">
      <span class="image-container"><img src="{{ site.assets_path }}d0b08da7-750w_Layouts_GridUnitSystem.png" alt="750w_Layouts_GridUnitSystem" width="679" height="679"></span>
    </div>
  </div>
  <div class="col-8">
    <h3>Predefined grid unit layouts</h3>
    <p>The layout is calculated by taking the short edge of the screen and dividing the amount of pixels by one of the chosen predefined layouts, which are:</p>
    <ul class="p-list">
      <li class="p-list__item is-ticked">40/50GU for mobile and phablets screens</li>
      <li class="p-list__item is-ticked">90GU for tablets, desktop and larger screens.</li>
    </ul>

    <h4>Example of 50GU layout for mobile</h4>
    <p>A mobile device would typically suit a 50 GU-wide virtual portrait screen, because it offers the right balance of content to screen real estate for palm-sized viewing.</p>
  </div>
  <div class="col-8">
    <div class="col-5">
      <span class="image-container"><img src="{{ site.assets_path }}07c68cbd-366w_layout_PanelsMusic_50gu.png" alt="366w_layout_PanelsMusic_50gu" width="335" height="335"></span>
    </div>
  </div>
  <div class="col-8">
    <h4>Example of 90GU layout on tablet in portrait mode</h4>
    <p>90GU is ideal for tablet sized screens, because it offers more real-estate for panels.</p>

    <span class="image-container"><img src="{{ site.assets_path }}360dd366-750w_Layouts_PanelsMusicPortrait.png" alt="750w_Layouts_PanelsMusicPortrait" width="675" height="675"></span>
  </div>
</div>

<div class="row">
  <div class="col-6 p-card u-vertically-center">
    <div class="col-1">
      <img src="{{ site.assets_path }}75f60d24-link_external.png" alt="" width="32" height="32">
    </div>
    <div class="col-5">
      <p class="p-card__content">See the <a class="external" href="http://design.canonical.com/2015/06/the-grid-system-in-detail/">design blog</a> for developer specifications of Grid Units and layouts.</p>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-10 link-top">
    <a href="#">Back to top</a>
  </div>
</div>

<div class="row">
  <div class="col-8">
    <h2 id="grid-unit">Layouts</h2>

    <h3 id="panels">Panels</h3>
    <p>A panel is a way of grouping together Grid Units to split the screen into different windows. Panels of predefined layouts can be joined together to create a multi-functionally interface from portrait to landscape.</p>

    <span class="image-container"><img src="{{ site.assets_path }}dc2c8f6d-750w_Layouts_Panels.png" alt="750w_Layouts_Panels" width="680" height="680"></span>

    <p>For example, placing a 50 and 40 grid unit layout in portrait mode can easily be translated to landscape mode for larger surfaces, such as desktop.</p>
  </div>
</div>

<div class="row">
  <div class="col-6 p-card u-vertically-center">
    <div class="col-1">
      <img src="{{ site.assets_path }}e9f11635-information-link.png" alt="information-link" width="32" height="32">
    </div>
    <div class="col-5">
      <p class="p-card__content">If your app can use multiple columns then use a single screen layout on mobile touch that changes to a 2 or 3 panel layout on tablet and desktop.</p>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-8">
    <p>If you think of it in screen sizes, the hierarchy would be:</p>
    <h4>Mobile 50GU – 1 panel (fixed panel)</h4>

    <span class="image-container"><img src="{{ site.assets_path }}510a8320-366w_Layouts_PanelsCalendar1.png" alt="366w_Layouts_PanelsCalendar1" width="329" height="329"></span>

    <h4>Tablet – 2 panels, very occasionally 3 panels on larger tablets</h4>

    <span class="image-container"><img src="{{ site.assets_path }}016dec66-366w_Layouts_PanelsCalendar2.png" alt="366w_Layouts_PanelsCalendar2" width="323" height="323"></span>

    <h4>Desktop – 2 or 3 panels</h4>
    <p>On a windowed environment, just like on a tablet, more than one panel can be displayed simultaneously. By joining them in the same window, we get the familiar list panel and conjoined detail panel – a pattern typical in applications like contacts, messages, and email. Of course, there can be any number of combinations of panels depending on the specific app&#8217;s needs.</p>

    <span class="image-container"><img src="{{ site.assets_path }}0f37e2e2-750_Layouts_Panels3.png" alt="750_Layouts_Panels3" width="679" height="679"></span>
  </div>
</div>

<div class="row">
  <div class="col-6 p-card u-vertically-center">
    <div class="col-1">
      <img src="{{ site.assets_path }}608696e3-developer_links.png" alt="" width="32" height="32">
    </div>
    <div class="col-5">
      <p class="p-card__content">Developers can choose to create completely adaptive 2 or 3 panel layouts for desktop if they desire.</p>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-10 link-top">
    <a href="#">Back to top</a>
  </div>
</div>

<div class="row">
  <div class="col-10">
    <h3>Adaptive layout</h3>
    <p>Use the AdaptiveLayout API to display panels in one or more columns from left to right.</p>
  </div>
</div>

<div class="row">
  <div class="col-6 p-card u-vertically-center">
    <div class="col-1">
      <img src="{{ site.assets_path }}e9f11635-information-link.png" alt="" width="32" height="32">
    </div>
    <div class="col-5">
      <p class="p-card__content">The <a class="external" href="https://developer.ubuntu.com/api/apps/qml/sdk-15.04.1/Ubuntu.Components.AdaptivePageLayout/">AdaptiveLayout API</a> provides a flexible way of viewing a stack of pages in one or more columns. Unlike in PageStack, there can be more than one Page active at a time, depending on the number of the columns in the view.</p>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-10">
    <p>Changing the size of the window resizes one or more joined panels. Typically, the right-most panel resizes and the left-most panel maintains its original dimensions. The dimensions of the right-most panel will normally be 40 or 50 grid units; though this panel may itself be resizable depending on the developer&#8217;s requirements.</p>

    <span class="image-container"><img src="{{ site.assets_path }}f89dd4c0-750w_Layouts_AdaptiveLayout.png" alt="750w_Layouts_AdaptiveLayout" width="679" height="679"></span>

    <h4>Example – 50GU phone and 50GU/variable on a desktop screen</h4>
    <p>The panel that is defined as the main panel (for example 50GU) will initially be visible in the first (leftmost) column; this will have to be specified by the developer. The subsequent columns can then be added depending on the device layout.</p>
  </div>
</div>

<div class="row">
  <div class="col-10 link-top">
    <a href="#">Back to top</a>
  </div>
</div>

<div class="row">
  <div class="col-10">
    <h2 id="good-practice">Good practice</h2>

    <h3>Use a fixed panel</h3>

    <span class="image-container"><img src="{{ site.assets_path }}00e8f48f-750w_Layouts_GoodPractice.png" alt="750w_Layouts_GoodPractice" width="697" height="697"></span>

    <p>To provide a consistent user experience across the whole platform leave at least one of the panels fixed at a minimum size of either 50 or 40GU inside each screen size. This creates a familiar experience from mobile, tablet and desktop.</p>
  </div>
</div>
