---
layout: post
title: "Navigation"
body-id: "apps"
body-class: "guidelines"
---

<div class="row">
  <div class="col-8">
    <p>Consistent and effortless navigation is an essential element of the overall user experience.</p>
    <span class="image-container"><img src="{{ site.assets_path }}043ba3b0-750w_Navigation_MainImage-2.png" alt="750w_Navigation_MainImage (2)" width="679" height="286" /></span>
    <ul class="p-list--divided">
      <li class="p-list__item"><a href="#usage">Usage&nbsp;&rsaquo;</a></li>
      <li class="p-list__item"><a href="#structure">Structure&nbsp;&rsaquo;</a></li>
      <li class="p-list__item"><a href="#components">Components&nbsp;&rsaquo;</a></li>
    </ul>
  </div>
</div>

<div class="row">
  <div class="col-8">
    <h2 id="usage">Usage</h2>
    <p>Before building your application think about the overall structure and organize the content considering the device layout and navigation that will need to happen.</p>

    <h3>Grouping content</h3>
    <p>Categorizing content and elements into related groups will allow the user to easily scan and perform actions within your application in a way that is logical.</p>
  </div>
</div>

<div class="row">
  <div class="col-10">
    <div class="col-5">
      <span class="image-container"><img src="{{ site.assets_path }}3d5e1917-366w_Navigation_GroupingContent-2.png" alt="366w_Navigation_GroupingContent (2)" width="291" height="564" /></span>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-8">
    <h3>Signposting</h3>
    <p>Signposts are recurring UI elements that help indicate to the user of where they can go to reach their goal within your app. Using the same elements throughout your interface will create a familiar environment for the user and minimise their learning curve.</p>
  </div>
</div>

<div class="row">
  <div class="col-5">
    <span class="image-container"><img src="{{ site.assets_path }}f759cb96-366w_Navigation_SignPosting.png" alt="366w_Navigation_SignPosting" width="350" height="273" /></span>
  </div>
</div>

<div class="row">
  <div class="col-12 link-top">
    <a href="#">Back to top</a>
  </div>
</div>

<div class="row">
  <div class="col-8">
    <h2 id="structure">Structure</h2>
    <p>Structure your app by organizing the content into a logical hierarchy.</p>

    <ol>
      <li class="p-list__item"><strong>Overview</strong> &#8211; the most accessible features you want the user to have instant access to, such as a list of emails.</li>
      <li class="p-list__item"><strong>Top level</strong> &#8211; filters of the overview, such as threads or recent emails.</li>
      <li class="p-list__item"><strong>Lower level</strong> &#8211; detailed views that show detailed information, such as contact information.</li>
      <li class="p-list__item"><strong>App settings</strong> &#8211; a place for the settings of your app, such as notification settings for receiving emails.</li>
    </ol>
  </div>
</div>

<div class="row">
  <div class="col-10">
    <div class="col-5">
      <h4>Overview &#8211; Dialer</h4>
      <span class="image-container"><img src="{{ site.assets_path }}d6f20a80-366w_Navigation_UserJoureny2-2.png" alt="366w_Navigation_UserJoureny2 (2)" width="335" height="293" /></span>
    </div>
    <div class="col-5">
      <h4>Top level &#8211; Contacts</h4>
      <span class="image-container"><img src="{{ site.assets_path }}fc0e39db-366w_Navigation_UserJourney1-1.png" alt="366w_Navigation_UserJourney1 (1)" width="337" height="293" /></span>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-10">
    <div class="col-5">
      <h4>Lower detailed level &#8211; Contact information</h4>
      <span class="image-container"><img src="{{ site.assets_path }}ba9bb1af-366w_navigation_UserJourney3-2.png" alt="366w_navigation_UserJourney3 (2)" width="336" height="282" /></span>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-8">
    <h3>Page stack</h3>
    <p>A typical structure may consist of one or more top level views, with detailed views on a lower level. Page stack navigation allows user to drill down from the top level to the detailed views through actions and navigational options within your UI.</p>

    <span class="image-container"><img src="{{ site.assets_path }}5bc13244-750w_Navigation_PageStack_HowItWorks-4.png" alt="750w_Navigation_PageStack_HowItWorks (4)" width="670" height="669" /></span>

    <p>On mobile devices, only one page is available at once. Once a page is chosen, the page will stack over the previous page. A Back Button will appear in the header to take the user back to the previous page if they wish.</p>

    <h3>Page stack in a multi-panel layout</h3>
    <p>Larger screens provide more screen estate for two or more panels to be visible at once. There are two ways page stack behaves depending on which panel the action is placed in.</p>

    <h4>Page stack over both panels</h4>
    <p>If an action is triggered in the leftmost panel, then the page will takeover all panels.</p>

    <span class="image-container"><img src="{{ site.assets_path }}b09027c1-750w_Navigation_PageStackWithTwoPanelView-3.png" alt="750w_Navigation_PageStackWithTwoPanelView (3)" width="671" height="706" /></span>

    <h4>Page stack over the right hand panel</h4>
    <p>If an action is triggered in the rightmost panel, then the page will stack over the same panel.</p>

    <span class="image-container"><img src="{{ site.assets_path }}55f5860f-750w_Navigation_PageStackWithJustRightPanelView-2.png" alt="750w_Navigation_PageStackWithJustRightPanelView (2)" width="671" height="706" /></span>

    <h4>System Settings &#8211; right panel view change</h4>
    <p>In this example, &#8216;Brightness &amp; Display&#8217; has been selected inside the left panel and takes over the rightmost panel view.</p>

    <span class="image-container"><img src="{{ site.assets_path }}a2fcbf6d-750w_Navigation_SecondPanelView-1.png" alt="750w_Navigation_SecondPanelView (1)" width="678" height="424" /></span>
  </div>
</div>

<div class="row">
  <div class="col-12 link-top">
    <a href="#">Back to top</a>
  </div>
</div>

<div class="row">
  <div class="col-10">
    <h2 id="components">Components</h2>
    <p>The Ubuntu toolkit provides a variety of components that can provide navigation within your application.</p>

    <h3>Header</h3>
    <p>Use the header to contain the most important actions and navigational options inside your app. This allows the user to know where they are and what they can do.</p>

    <span class="image-container"><img src="{{ site.assets_path }}54aa29cc-750w_Navigation_Header-3.png" alt="750w_Navigation_Header (3)" width="685" height="159" /></span>

    <h4>Slot arrangement</h4>
    <p>The header features a maximum of four slots that can be arranged and combined to fulfills the user needs.</p>

    <table>
      <thead>
        <tr>
          <th>Slot</th>
          <th>Navigational option</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>A</td>
          <td style="text-align: left;">
            <ul class="p-list">
              <li class="p-list__item"><strong>Back &#8211; </strong>use to navigate to a previous page of the app (if other pages are available)</li>
              <li class="p-list__item"><strong>Navigation drawer &#8211; </strong>use to store more pages if there is no room in the header</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>B</td>
          <td style="text-align: left;">
            <ul class="p-list">
              <li class="p-list__item"><strong>Title (mandatory) &#8211; </strong>provide a one line title of the app or view</li>
              <li class="p-list__item"><strong>Subtitle (optional) &#8211; </strong> extra explanatory text up to two lines</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>C/D</td>
          <td style="text-align: left;">
            <ul class="p-list">
              <li class="p-list__item"><strong>Search &#8211; </strong>use to search for specific content</li>
              <li class="p-list__item"><strong>Settings &#8211; </strong>use to navigate to your app&#8217;s settings page</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>


    <p>Use drawers sparingly because it:</p>
    <ul class="p-list">
      <li class="p-list__item is-ticked">Hides pages and actions from the user</li>
      <li class="p-list__item is-ticked">Conflicts with the Back Button</li>
      <li class="p-list__item is-ticked">Requires a tap to see available pages/or actions and two taps every time a user switches pages.</li>
    </ul>
  </div>
</div>

<div class="row">
  <div class="col-6 p-card u-vertically-center">
    <div class="col-1">
      <img src="{{ site.assets_path }}e9f11635-information-link.png" alt="" width="32" height="32" />
    </div>
    <div class="col-5">
      <p class="p-card__content">A Back Button would be irrelevant if your app only has one page, because there would be no pages to go back from; so it is not required.</p>
    </div>
  </div>
</div>


<div class="row">
  <div class="col-10">
    <h3>Headers in multi-panel layout</h3>
    <p>For a multi-panel layout, such as on a desktop, each panel can display its own header, which can contain additional slots because more real estate is presented. This can be useful to reveal actions or views that were previously hidden in drawers in a single panels screen, like on mobile.</p>

    <h4>More actions revealed</h4>
    <p>In this example, Dekko displays an action for the bottom edge, search and settings inside the lefthand panel, and in the rightmost panel it shows a delete, favourite and messaging.</p>

    <span class="image-container"><img src="{{ site.assets_path }}e8593d86-750w_Navigation_ConvergentHeader3actions-2.png" alt="750w_Navigation_ConvergentHeader3actions (2)" width="671" height="322" /></span>
  </div>
</div>


<div class="row">
  <div class="col-6 p-card u-vertically-center">
    <div class="col-1">
      <img src="{{ site.assets_path }}75f60d24-link_external.png" alt="" width="32" height="32">
    </div>
    <div class="col-5">
      <p class="p-card__content"><a href="/apps/building-blocks/header">For more slot layout examples see Header</a></p>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-10">
    <h3>Header appearance</h3>
    <p>You can decide how you want the the header to appear in four ways: Fixed, Fixed and Opaque, Fixed and Transparent, Hidden.</p>
  </div>
</div>

<div class="row">
  <div class="col-10">
    <div class="col-5">
      <h4>Fixed (default)</h4>
      <span class="image-container"><img src="{{ site.assets_path }}5e0c2524-366w_Navigation_HeaderFixed-1.png" alt="366w_Navigation_HeaderFixed (1)" width="336" height="237" /></span>
      <p>Useful for making section or action always accessible for when the user scrolls.</p>
    </div>
    <div class="col-5">
      <h4>Transparent</h4>
      <span class="image-container"><img src="{{ site.assets_path }}c0844792-366w_Navigation_HeaderTransparent-1.png" alt="366w_Navigation_HeaderTransparent (1)" width="336" height="237" /></span>
      <p>Useful if you don&#8217;t want the header to be the focus of attention, but want it readerly available if the user needs it.</p>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-10">
    <div class="col-5">
      <h4>Hidden</h4>
      <span class="image-container"><img src="{{ site.assets_path }}f2a9d47e-366w_Navigation_HeaderHidden-1.png" alt="366w_Navigation_HeaderHidden (1)" width="336" height="237" /></span>
      <p>Useful for full-screen applications, such as the Camera App.</p>
    </div>
    <div class="col-5">
      <h4>Overlay</h4>
      <span class="image-container"><img src="{{ site.assets_path }}b7fa2ab0-366w_Navigtaion_HeaderOverlay.png" alt="366w_Navigtaion_HeaderOverlay" width="336" height="237" /></span>
      <p>Useful to display more content in a single screen.</p>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-8">
    <h3>Customised header</h3>
    <p>If you choose not to have a header, then think of how users will navigate through your UI in a different way.</p>
  </div>
</div>

<div class="row">
  <div class="col-10">
    <div class="col-5">
      <h4>Overview</h4>
      <span class="image-container"><img src="{{ site.assets_path }}beb45276-366w_Navigation_HeaderCustumised1-1.png" alt="366w_Navigation_HeaderCustumised1 (1)" width="336" height="342" /></span>
    </div>
    <div class="col-5">
      <h4>Top level</h4>
      <span class="image-container"><img src="{{ site.assets_path }}90d79b0a-366w_Navigation_HeaderCustumised2-2.png" alt="366w_Navigation_HeaderCustumised2 (2)" width="336" height="342" /></span>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-8">
    <p>For example, the Clock app has a customized header where it uses icons at the top of the screen to take the user to different levels of the app.</p>

    <h3>Header sections</h3>
    <p>The header section allows users to easily shift between categories views within the same page. If the main header is set to default, then the sections will slide away when the user scrolls down.</p>

    <span class="image-container"><img src="{{ site.assets_path }}3d853bd3-750w_Navigation_HeaderSection-3.png" alt="750w_Navigation_HeaderSection (3)" width="673" height="161" /></span>

    <ol>
      <li class="p-list__item"><strong>The main header</strong> is a separate component that can hold actions and navigational options.</li>
      <li class="p-list__item"><strong>The header section</strong> sits below the main header and allows for sub-navigation or filtering within the screen indicated by the header above. One option is always selected.</li>
    </ol>

    <h4>Dekko app</h4>
    <p>For example, if your app was presenting an inbox of emails, from &#8216;All&#8217;, the sub-sections could display &#8216;Recent&#8217; and &#8216;Archive&#8217; to further filter the content for the user. More section on the screen can be visible through swipe or clicking the hint that appears when a mouse is attached.</p>
  </div>
</div>
</div>

<div class="row">
  <div class="col-10">
    <div class="col-5">
      <span class="image-container"><img src="{{ site.assets_path }}2f59f039-366w_Navigation_Tabs-2.png" alt="366w_Navigation_Tabs (2)" width="332" height="175" /></span>
    </div>
    <div class="col-5">
      <span class="image-container"><img src="{{ site.assets_path }}e97e38a5-366w_Navigation_TabsRecent-2.png" alt="366w_Navigation_TabsRecent (2)" width="332" height="175" /></span>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-8">
    <h4>Pointer environment</h4>
    <p>More tabs are indicated by an arrow revealed when the pointer hovers over it.</p>

    <span class="image-container"><img src="{{ site.assets_path }}d9100a09-750w_Header_Pointer-environment.png" alt="750w_Header_Pointer environment" width="671" height="384" /></span>

    <h3>Search in the main header</h3>
    <p>You can use search within the main header for an additional filter for your application; or as a global search. Search is invoked in a similar way in a touch and pointer environment by tapping or clicking on the search icon.</p>

    <span class="image-container"><img src="{{ site.assets_path }}288521f2-750w_Navigation_HeaderSearchV2-3.png" alt="750w_Navigation_HeaderSearchV2 (3)" width="680" height="220" /></span>

    <h4>Multi-panel layout</h4>
    <span class="image-container"><img src="{{ site.assets_path }}44a9de6b-750w_Navigation_Convergence-search.png" alt="750w_Navigation_Convergence search" width="671" height="321" /></span>

    <span class="image-container"><img src="{{ site.assets_path }}65192f75-750w_Navigation_Convergence-search-box.png" alt="750w_Navigation_Convergence search box" width="682" height="295" /></span>
  </div>
</div>

<div class="row">
  <div class="col-12 link-top">
    <a href="#">Back to top</a>
  </div>
</div>

<div class="row">
  <div class="col-10">
    <h2>Bottom edge</h2>
    <p>The bottom edge is specific to your application. It can give users quick access to the most important actions within your app, or a related view from the bottom of the screen via a hint (on touch), or from an action inside the header (pointer).</p>
    <p>When the bottom edge is revealed the page stacks over the previous page and a chevron pointing down appears in the header to allow the user to go back to the previous page.</p>
  </div>
</div>

<div class="row">
  <div class="col-10">
    <div class="col-5">
      <h4>Hint 1</h4>
      <span class="image-container"><img src="{{ site.assets_path }}1a754799-366w_Navigation_BottomEdge1.png" alt="366w_Navigation_BottomEdge1" width="338" height="336" /></span>
      <p>Appears on application launch to hint to the user that there is a bottom edge available.</p>
    </div>
    <div class="col-5">
      <h4>Hint 2</h4>
      <span class="image-container"><img src="{{ site.assets_path }}7d755a73-366w_Navigation_BottomEdge2.png" alt="366w_Navigation_BottomEdge2" width="338" height="336" /></span>
      <p>The bar is revealed after Hint 1 has been interacted with.</p>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-10">
    <div class="col-5">
      <h4>Reveal</h4>
      <span class="image-container"><img src="{{ site.assets_path }}408eeee7-366w_Navigation_BottomEdge4-1.png" alt="366w_Navigation_BottomEdge4" width="338" height="336" /></span>
      <p>Once the user starts to swipe up from the hint. The new view starts to be revealed.</p>
    </div>
    <div class="col-5">
      <h4>New view</h4>
      <span class="image-container"><img src="{{ site.assets_path }}408eeee7-366w_Navigation_BottomEdge4.png" alt="366w_Navigation_BottomEdge4" width="338" height="336" /></span>
      <p>A new view stacks over the previous page once the user has committed to the swipe.</p>
    </div>
  </div>
</div>
