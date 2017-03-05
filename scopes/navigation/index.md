---
layout: post-with-banner
title: Navigation
body-id: scopes
body-class: scopes
---

<div class="p-strip">
  <div class="row">
    <div class="col-8">
      <h1 id="navigation">Navigation</h1>
      <p>Allow the user to retrieve and browse content easily within your scope through great structure and a consistent feel.</p>
    </div>
    <div class="col-6 combined-list">
      <ul class="p-list--divided">
        <li class="p-list__item"><a href="#scope-header">Scope header&nbsp;&rsaquo;</a></li>
        <li class="p-list__item"><a href="#category-header">Category header&nbsp;&rsaquo;</a></li>
        <li class="p-list__item"><a href="#departments">Departments&nbsp;&rsaquo;</a></li>
      </ul>
    </div>
  </div>

  <div class="row">
    <div class="col-12 link-top">
      <a href="#">Back to top</a>
    </div>
  </div>
</div>

<div class="p-strip">
  <div class="row">
    <div class="col-8">
      <h2 id="scope-header">Scope header</h2>

      <p>The scope header contains the main title of your scope, together with four elements that can take the user to a different screen or perform an action.</p>

      <h3>Actions</h3>

      <img src="{{ site.assets_path }}4008e9d9-Scope-header-nav-2-1024x179.png" alt="Scope header nav 2" width="1024" height="179">

      <ol>
        <li><strong>Back – </strong> present if the scope is opened via tap from an installed scope list as opposed to swiped to in the Dash.</li>
        <li><strong>Search – </strong> allows the user to input a search term.</li>
        <li><strong>Settings – </strong> will take the user to the settings page of the scope where they can enable their location and online accounts to feed the scope.</li>
      </ol>
    </div>
  </div>
  <div class="row">
    <div class="col-12 u-equal-height">
      <div class="col-6 p-card">
        <div class="col-1">
          <img src="{{ site.assets_path }}9e8b37dd-link_external.png" alt="link_external" width="32" height="32">
        </div>
        <div class="col-7">
          <p class="p-card__content">See our <a href="/components">Component</a> section on how to best place these actions inside your scope header.</p>
        </div>
      </div>

      <div class="col-6 p-card">
        <div class="col-1">
          <img src="{{ site.assets_path }}0d9d7281-developer_links..png" alt="developer_links." width="32" height="32">
        </div>
        <div class="col-7">
          <p class="p-card__content">For more information on how to implement settings in your scope, see our <a href="https://developer.ubuntu.com/en/scopes/tutorials/adding-settings-to-your-scope/">SDK</a>.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="p-strip">
  <div class="row">
    <div class="col-8">
      <h2 id="category-header">Category header</h2>
      <p>Links to child scopes can be placed within the category header.</p>
    </div>

    <div class="col-8">
      <div class="col-4">
        <p><img src="{{ site.assets_path }}79432557-Scope-links-NearBy-a2-618x1024.png" alt="Scope links NearBy a" width="618" height="1024"></p>
        <h3>NearBy scope</h3>
      </div>

      <div class="col-4">
        <p><img src="{{ site.assets_path }}02a07bd1-Scope-links-Timeout-b-1-618x1024.png" alt="Scope links Timeout b (1)" width="618" height="1024"></p>
        <h3>TimeOut scope</h3>
      </div>
    </div>

    <div class="col-8">
      <p>If the scope is invoked by an aggregator scope, then it will have a back button.</p>
    </div>

    <div class="col-8 p-card">
      <div class="col-1">
        <img src="{{ site.assets_path }}7024ba0f-information-link.png" alt="information-link" width="32" height="32">
      </div>
      <div class="col-7">
        <p class="p-card__content">You cannot swipe to navigate through a scope link. You must use a chevron to indicate to the user that it leads somewhere. As swiping may take the user to the next/previous scope.</p>
        <p class="p-card__content--footer">Scope links can only be added by the scope author.</p>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-12 link-top">
      <a href="#">Back to top</a>
    </div>
  </div>
</div>

<div class="p-strip">
  <div class="row">
    <div class="col-8">
      <h2 id="departments">Departments</h2>
      <p>Departments are an optional feature that can be placed under the scope header to give the user a more targeted and narrower search.</p>
    </div>

    <div class="col-6">
      <img src="{{ site.assets_path }}0f76e6d1-Departments-21-1024x751.png" alt="Departments 2" width="1024" height="751">
    </div>

    <div class="col-8">
      <h3>Layout:</h3>
      <ol>
        <li><strong>Department area (below the header)</strong> – section of the scope layout dedicated to departments.</li>
        <li><strong>Content area</strong> – section of the scope layout dedicated to categories.</li>
      </ol>

      <h3>Things you can change:</h3>
      <ul>
        <li>Naming the top-level department e.g. &#8216;Shop by department&#8217; or &#8216;Genres&#8217;</li>
      </ul>
    </div>

    <div class="col-8 p-card">
      <div class="col-1 ">
        <img src="{{ site.assets_path }}7024ba0f-information-link.png" alt="information-link" width="32" height="32">
      </div>
      <div class="col-7">
        <p class="p-card__content">The scope author chooses what content goes in the navigation paths. Categorize your content to give the user easy access to specific results.</p>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-12 link-top">
      <a href="#">Back to top</a>
    </div>
  </div>
</div>


<div class="p-strip">
  <div class="row">
    <div class="col-8">
      <h2 id="hierarchy">Hierarchy</h2>
      <p>Users can navigate through a scope in a single hierarchy navigation or multiple levels.</p>
    </div>
  </div>

  <div class="row">
    <div class="col-12">
      <div class="col-4">
        <img src="{{ site.assets_path }}3b0eb504-Hierarchy-13-618x1024.png" alt="Hierarchy 1">
      </div>
      <div class="col-4">
        <img src="{{ site.assets_path }}6a4c92d1-Hierarchy-22-618x1024.png" alt="Hierarchy 2">
      </div>
      <div class="col-4">
        <img src="{{ site.assets_path }}b3b11c0d-Hierarchy-32-618x1024.png" alt="Hierarchy 3">
      </div>
    </div>
  </div>

<div class="row">
  <div class="col-8">
    <h3>Single hierarchy</h3>
    <ul>
      <li>A chevron is used to indicate to the user that there are options available.</li>
      <li>A checkmark is used to show the user what they have selected.</li>
    </ul>

    <h3>Behavior of departments:</h3>
    <ul>
      <li>They collapse or expand by default.</li>
      <li>The widget shows departments returned by the scope per query (including “null” query).</li>
      <li>When the top-level department is open a maximum of 5 departments can be shown with a &#8216;show more&#8217; button included.</li>
    </ul>
  </div>
</div>

<div class="row">
  <div class="col-12 u-equal-height">
    <div class="col-6 p-card">
      <div class="col-1">
        <img src="{{ site.assets_path }}7024ba0f-information-link.png" alt="information-link" width="32" height="32">
      </div>
      <div class="col-7">
        <p class="p-card__content">We use it in some of core scopes such as Music and Shopping, where users can browse by genre or departments.</p>
      </div>
    </div>
    <div class="col-6 p-card">
      <div class="col-1">
        <img src="{{ site.assets_path }}0d9d7281-developer_links..png" alt="developer_links." width="32" height="32">
      </div>
      <div class="col-7">
        <p class="p-card__content">Learn how to create departments and use them in queries in our <a href="https://developer.ubuntu.com/en/scopes/tutorials/adding-departments-to-your-scope/">SDK</a>.</p>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-12 link-top">
      <a href="#">Back to top</a>
    </div>
  </div>
</div>

<div class="p-strip">
  <div class="row">
    <div class="col-8">
      <h2>Multiple level hierarchy</h2>
      <p>Where there are multiple choices in each department branch, the branch is displayed with a chevron to show that tapping it will open a list of its children, rather than selecting an option and closing the menu.</p>
    </div>
  </div>

  <div class="row">
    <div class="col-12">
      <h3>Department menu</h3>
    </div>

    <div class="col-12">
      <div class="col-4">
        <img src="{{ site.assets_path }}98605bd3-multiply-level-12-618x1024.png" alt="multiply level 1" width="618" height="1024">
        <p>When the user first comes to the scope they will be presented with an &#8216;all departments&#8217; menu.</p>
      </div>

      <div class="col-4">
        <img src="{{ site.assets_path }}726cf267-multiply-level-22-618x1024.png" alt="multiply level 2" width="618" height="1024">
        <p>On tap, the menu will expand and reveal a list of available departments.</p>
      </div>

      <div class="col-4">
        <img src="{{ site.assets_path }}45d43336-multiply-level-51-618x1024.png" alt="multiply level 5" width="618" height="1024">
        <p>The menu will then split into two rows”Featured” and the selected department.</p>
        <p>In the department view the user can navigate back to &#8216;all departments&#8217; using the back chevron, or select another category or department.</p>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-12">
      <h3>Featured menu</h3>
    </div>

    <div class="col-12">
      <div class="col-4">
        <img src="{{ site.assets_path }}e78d262c-multiple-level-41-618x1024.png" alt="multiple level 4" width="618" height="1024">
        <p>When the user has selected a department, the &#8216;Featured&#8217; menu will appear on the left hand side of the &#8216;Department&#8217; menu.</p>
      </div>
      <div class="col-4">
        <img src="{{ site.assets_path }}45d43336-multiply-level-52-618x1024.png" alt="multiply level 5" width="618" height="1024">
        <p>The &#8216;Featured&#8217; menu allows the user to sort results by order e.g.”Price: high to low”, which changes the view of the results.</p>
      </div>
      <div class="col-4">
        <img src="{{ site.assets_path }}d3367513-multiple-level-61-618x1024.png" alt="multiple level 6" width="618" height="1024">
        <p>Once the user has selected a feature, the scope page will rearrange the results according to the feature selected.</p>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-8 p-card">
      <div class="col-1">
        <img src="{{ site.assets_path }}7024ba0f-information-link.png" alt="information-link" width="32" height="32">
      </div>
      <div class="col-7">
        <p class="p-card__content">Where there are multiple choices in each department branch a chevron is used to indicate to the user that there are options available.</p>
      </div>
    </div>
  </div>
  
  <div class="row">
    <div class="col-12 link-top">
      <a href="#">Back to top</a>
    </div>
  </div>
</div>
