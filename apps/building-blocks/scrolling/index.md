---
layout: post
title: Scrolling
body-id: apps
body-class: guidelines
---

<div class="row">
  <div class="col-8">
    <p>The toolkit provides a ScrollView component that allows users to scroll content inside panels, text fields and lists across all devices.</p>

    <span class="image-container"><img src="{{ site.assets_path }}3b6f6d0a-750w_Scrollbar_MainImage.png" alt="750w_Scrollbar_MainImage" width="674" height="674"></span>
  </div>
</div>

<div class="row">
  <div class="col-6 p-card u-vertically-center">
    <div class="col-1">
      <img src="{{ site.assets_path }}608696e3-developer_links.png" alt="" width="32" height="32">
    </div>
    <div class="col-5">
      <p class="p-card__content">The <a href="https://developer.ubuntu.com/api/apps/qml/sdk-15.04.4/Ubuntu.Components.ScrollView/">ScrollView API</a> is a scrollable view that features scrollbars and scrolling when using keyboard keys.</p>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-10">
    <h2>ScrollView vs. Scrollbar APIs</h2>
    <p>The ScrollView API works by wrapping the Scrollbar API in a view and provides additional features such as:</p>

    <ul class="p-list">
      <li class="p-list__item is-ticked">keyboard navigation and focus handling for a complete convergent experience</li>
      <li class="p-list__item is-ticked">automatic positioning of vertical and horizontal scrollbars, which prevents them from overlapping one another when both are present on screen</li>
    </ul>

    <p>The Scrollbar API doesn&#8217;t handle keyboard input and has the following requirements:</p>

    <ul class="p-list">
      <li class="p-list__item is-ticked">the content position is driven through the attached Flickable item</li>
      <li class="p-list__item is-ticked">the alignment management has to adhere to the anchors for built-in alignment functionality</li>
      <li class="p-list__item is-ticked">every style implementation should drive the position through contentX/contentY properties, depending on whether the orientation is vertical or horizontal</li>
    </ul>

    <h3>Handling overlay</h3>
    <p>A ScrollView handles scrollbar placement by automatically placing the scrollbars horizontally and vertically where appropriate in the device layout.</p>
  </div>
</div>

<div class="row">
  <div class="col-10">
    <div class="row">
      <div class="col-5">
        <h4>Scrollbar</h4>
        <span class="image-container"><img src="{{ site.assets_path }}6591cecc-366w_Scrollbar_HandlingOverlay_Good.png" alt="366w_Scrollbar_HandlingOverlay_Good" width="336" height="336"></span>
        <img src="{{ site.assets_path }}74c13c17-do_32+%281%29.png" alt="do_32" width="32" height="32" style="float: left; margin-right: 1em;">
        <h4 style="text-align: left; margin-top: 4px;"><span style="color: #3eb34f;">Do</span></h4>
      </div>
      <div class="col-5">
        <h4>ScrollView</h4>
        <span class="image-container"><img src="{{ site.assets_path }}3a6877c8-366w_Scrollbar_HandlingOverlay_Bad.png" alt="366w_Scrollbar_HandlingOverlay_Bad" width="336" height="336"></span>
        <img src="{{ site.assets_path }}01fb853b-dont_32.png" alt="dont_32" width="32" height="32" style="float: left; margin-right: 1em;">
        <h4 style="text-align: left; margin-top: 4px;"><span style="color: #ed3146;">Don&#8217;t</span></h4>
      </div>
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
    <h2 id="use-cases">Use cases</h2>
    <h3>Borderless content</h3>
    <p>If the content of your app is borderless, like the camera, it wouldn&#8217;t be practical to have scrollbars because it can hinder the user&#8217;s view and primary task of taking a picture.</p>
  </div>
</div>

<div class="row">
  <div class="col-10">
    <div class="row">
      <div class="col-5">
        <h4>Borderless</h4>
        <span class="image-container"><img src="{{ site.assets_path }}4fcd5fea-366w_Scrollbar_BorderlessContent_Good.png" alt="366w_Scrollbar_BorderlessContent_Good" width="335" height="335"></span>
        <img src="{{ site.assets_path }}74c13c17-do_32+%281%29.png" alt="do_32" width="32" height="32" style="float: left; margin-right: 1em;">
        <h4 style="text-align: left; margin-top: 4px;"><span style="color: #3eb34f;">Do</span></h4>
      </div>
      <div class="col-5">
        <h4>With scrollbars</h4>
        <span class="image-container"><img src="{{ site.assets_path }}d375f85c-366w_Scrollbar_BorderlessContent_Bad.png" alt="366w_Scrollbar_BorderlessContent_Bad" width="335" height="335"></span>
        <img src="{{ site.assets_path }}01fb853b-dont_32.png" alt="dont_32" width="32" height="32" style="float: left; margin-right: 1em;">
        <h4 style="text-align: left; margin-top: 4px;"><span style="color: #ed3146;">Don&#8217;t</span></h4>
      </div>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-8">
    <h3>Avoid custom scrollers</h3>
    <p>Custom scrollers usually work poorly because they are hard to recognise, or they do not include all the functions people expect.</p>

    <span class="image-container"><img src="{{ site.assets_path }}c7a23911-750w_Scrollbar_CustomScrollbar.png" alt="750w_Scrollbar_CustomScrollbar" width="679" height="350"></span>

    <h3>Scrolling through a list</h3>
    <p>Place any ListView API inside a ScrollView to present a scrollbar when items have scrolled off-screen.</p>
  </div>
</div>

<div class="row">
  <div class="col-5">
    <span class="image-container"><img src="{{ site.assets_path }}312f5973-366w_Scrollbar_List.png" alt="366w_Scrollbar_List" width="340" height="340"></span>
  </div>
</div>

<div class="row">
  <div class="col-6 p-card u-vertically-center">
    <div class="col-1">
      <img src="{{ site.assets_path }}608696e3-developer_links.png" alt="" width="32" height="32">
    </div>
    <div class="col-5">
      <p class="p-card__content">Use the <a class="external" href="https://developer.ubuntu.com/api/apps/qml/sdk-15.04.5/QtQuick.ListView/">ListView API</a> or see <a href="/apps/building-blocks/list-items">List Items</a> for more guidance on using lists inside your application.</p>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-8">
    <h3>Scrolling within a text field</h3>
    <p>If your app allows for multi-line input inside a text field, then the user will expect to scroll the content.</p>
    <p>In a text field, such as in the Messaging app, the field automatically displays a scrollbar that overlays the content to allow users to scroll once they have entered more than five lines of text.</p>
  </div>
</div>

<div class="row">
  <div class="col-5">
    <span class="image-container"><img src="{{ site.assets_path }}a2adf439-366w_Scrollbar_Text.png" alt="366w_Scrollbar_Text" width="340" height="340"></span>
  </div>
</div>

<div class="row">
  <div class="col-8">
    <h3>Scrolling inside panels</h3>
    <p>The toolkit provides panels that can be used to display anything from images, large amount of text or videos. The user will expect to scroll either vertically or horizontally, or both to view the content.</p>
    <p>By wrapping the panel inside a ScrollView it will automatically adhere to the content in any device layout.</p>

    <span class="image-container"><img src="{{ site.assets_path }}f9e5b0bb-750w_Scrollbar_InsidePanel.png" alt="750w_Scrollbar_InsidePanel" width="680" height="680"></span>
  </div>
</div>
