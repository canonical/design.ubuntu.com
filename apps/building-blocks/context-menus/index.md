---
layout: post
title: Context menus
body-id: apps
body-class: guidelines
---

{% include side-nav-apps.html %}

<div id="loop-guidelines" class="ten-col last-col">
  <section class="row no-padding-top no-padding-right no-padding-left">
  <div class="ten-col">
  <h3>Use a context menu to provide quick access to important actions within your application.</h3>
  <div class="image-container">
  <img src="https://assets.ubuntu.com/v1/942b2526-750w_Menus_MainImage.png" alt="750w_Menus_MainImage" width="679" height="334">
</div>
  <ul class="list ten-col">
  <li><a href="#overview">Overview&nbsp;&rsaquo;</a></li>
  <li><a href="#revealing-actions">Revealing actions&nbsp;&rsaquo;</a></li>
  <li><a href="#layouts">Layouts&nbsp;&rsaquo;</a></li>
  <li><a href="#behavior">Behavior&nbsp;&rsaquo;</a></li>
</ul>
</div>
</section>
  <section class="row no-padding-right no-padding-left">
  <div class="ten-col">
  <h2 id="overview">Overview</h2>
  <p>The toolkit includes convergent menu components that can be applied across all devices to provide a shortcut to the most relevant actions within your app.</p>
  <p>A context menu can contain shortcuts to primary actions or commands that are relevant to the user&#8217;s current context.</p>
</div>
  <div class="ten-col">
  <h4>Staged</h4>
  <p>A contextual menu reveals relevant commands using long-press, such as saving an image in a web browser.</p>
</div>
  <div class="five-col">
  <div class="image-container">
  <img src="https://assets.ubuntu.com/v1/ceed065d-366w_Menus_ContextualStaged-2.png" alt="366w_Menus_ContextualStaged (2)" width="336" height="490">
</div>
</div>
  <div class="ten-col">
  <h4>Windowed</h4>
  <p>The same context menu appears with more commands when a user right-clicks on a web image.</p>
  <div class="image-container">
  <img src="https://assets.ubuntu.com/v1/ff2be64e-750w_Menus_PointerEnvironment.png" alt="750w_Menus_PointerEnvironment" width="679" height="359">
</div>
</div>
  <div class="ten-col box-grey vertical-align vertical-align--image-left">
  <p>
  <img class="vertical-align__image" src="https://assets.ubuntu.com/v1/75f60d24-link_external.png" alt="" width="32" height="32">
</p>
  <div class="vertical-align__content">
  <p><a href="/apps/building-blocks/list-items">See how context menus behave in List items</a>.</p>
</div>
</div>
  <div class="ten-col">
  <h3>Cascading menus</h3>
  <p>Cascading menus act as sub-menus within your main contextual or application menu.</p>
</div>
  <div class="ten-col box-grey vertical-align vertical-align--image-left">
  <p>
  <img class="vertical-align__image" src="https://assets.ubuntu.com/v1/e9f11635-information-link.png" alt="" width="32" height="32">
</p>
  <div class="vertical-align__content">
  <p>Try to limit nesting to one level deep, because it can be difficult for the user to navigate through multiple nested submenus in staged environments.</p>
</div>
</div>
  <div class="ten-col">
  <h3>Use case</h3>
</div>
  <div class="ten-col">
  <h4>Larger screen (tablet, desktop)</h4>
  <div class="image-container">
  <img src="https://assets.ubuntu.com/v1/6fcee709-750w_Menus_CascadeLarge.png" width="679" height="359">
</div>
</div>
</section>
  <section class="row no-padding-right no-padding-left">
  <div class="link-top not-for-small">
  <a href="#">Back to top</a>
</div>
  <div class="ten-col">
  <h2 id="revealing-actions">Revealing actions</h2>
  <p>Touch and pointer interactions perform the same functions for familiarity and consistency across convergent devices.</p>
  <p>On a touch screen, a context menu is revealed by long tapping or swiping the list item from left to right. Swiping right may reveal a button for the leading action, such as &#8216;Delete&#8217; or similar. Swiping left may reveal buttons for up to three other important actions, which are the trailing actions. When a pointer device is attached, right-clicking an item will reveal the context menu, and click and drag will reveal the leading and trailing actions either side of the item – giving the same experience as swiping.</p>
</div>
  <div class="ten-col">
  <h3>Context menu</h3>
  <p>For medium to large screens, long-press (touch) and right click (pointer) can be used to reveal a context menu. For instance, if you have a touch screen desktop monitor, you can long press a list item to reveal a context menu, or if you have a mouse connected then you can right click.</p>
</div>
  <div class="five-col">
  <h4>Right-click</h4>
  <div class="image-container">
  <img src="https://assets.ubuntu.com/v1/7ba08e66-366w_ListItems_ContextualActions3.png" width="336" height="238">
</div>
</div>
  <div class="five-col">
  <h4>Long-press</h4>
  <div class="image-container">
  <img src="https://assets.ubuntu.com/v1/7438a96d-366w_Menus_ContextualActionsTouch.png" alt="366w_Menus_ContextualActionsTouch" width="336" height="241">
</div>
</div>
  <div class="five-col last-col">
  <h4>Focus</h4>
  <div class="image-container">
  <img src="https://assets.ubuntu.com/v1/26ddf7b9-366w_Menus_ContextualActionsFocus.png" alt="366w_Menus_ContextualActionsFocus" width="336" height="238">
</div>
</div>
  <div class="ten-col">
  <h3>Leading and trailing actions</h3>
  <p>On smaller screens, such as mobile, users reveal leading and trailing actions by left or right swipe. The trailing actions will contain the same contextual actions as the context menu on right-click. If there are more than three trailing actions you can provide an overflow menu inside the header, or inside the list item itself.</p>
</div>
  <div class="five-col">
  <h4>Swipe right – Leading action</h4>
  <div class="image-container">
  <img src="https://assets.ubuntu.com/v1/0238f83e-366w_ListItems_ContextualActions2-1-1.png" alt="366w_ListItems_ContextualActions2 (1)" width="336" height="220">
</div>
</div>
  <div class="five-col last-col">
  <h4>Swipe left – Trailing actions</h4>
  <div class="image-container">
  <img src="https://assets.ubuntu.com/v1/115cb70d-366w_ListItems_ContextualActions1-1.png" alt="366w_ListItems_ContextualActions1 (1)" width="336" height="220">
</div>
</div>
  <div class="ten-col box-grey vertical-align vertical-align--image-left">
  <p>
  <img class="vertical-align__image" src="https://assets.ubuntu.com/v1/75f60d24-link_external.png" alt="" width="32" height="32">
</p>
  <div class="vertical-align__content">
  <p><a href="/apps/building-blocks/list-items">For more information about leading and trailing actions see List Item</a>.</p>
</div>
</div>
</section>
  <section class="row no-padding-right no-padding-left">
  <div class="link-top not-for-small">
  <a href="#">Back to top</a>
</div>
  <div class="ten-col">
  <h2 id="layouts">Layouts</h2>
  <p>It is important that each menu retains a consistency in its layout and content when used across different devices.</p>
</div>
  <div class="five-col image-container">
  <img src="https://assets.ubuntu.com/v1/edecf53d-366w_Menus_LayoutMenuItems.png" alt="366w_Menus_LayoutMenuItems" width="305" height="319">
</div>
  <div class="ten-col">
  <ol>
  <li>Select item</li>
  <li>Region</li>
  <li>Window</li>
  <li>Application</li>
</ol>
</div>
  <div class="five-col">
  <div class="left">
  <img src="https://assets.ubuntu.com/v1/74c13c17-do_32+%281%29.png" alt="do_32" width="32" height="32">
</div>
  <h4 style="text-align: left; margin-top: 4px;">
  <span style="color: #3eb34f;">Do</span>
</h4>
  <p class="ten-col">Place the most frequently used menu items at the top of the menu. Use sentence capitalisation for each command name.</p>
</div>
  <div class="five-col last-col">
  <div class="left">
  <img src="https://assets.ubuntu.com/v1/01fb853b-dont_32.png" alt="dont_32" width="32" height="32">
</div>
  <h4 style="text-align: left; margin-top: 4px;">
  <span style="color: #ed3146;">Don&#8217;t</span>
</h4>
  <p class="five-col">Place negative actions close to positive actions, because users may accidentally trigger them.</p>
</div>
  <div class="ten-col">
  <h3>Menu items</h3>
  <p>Each menu is made up of a set items that can include text or an icon, or both, to best display your menu items.</p>
</div>
  <div class="ten-col">
  <h4>Text labels</h4>
  <p>It is important that you accurately describe the associated action or option in a succinct manner when using text labels inside your menus.</p>
</div>
  <div class="five-col">
  <div class="five-col image-container">
  <img src="https://assets.ubuntu.com/v1/e646c370-366w_Menus_TextLabelsDo-1.png" width="335" height="140">
</div>
  <div class="five-col no-margin-bottom">
  <div class="left">
  <img src="https://assets.ubuntu.com/v1/74c13c17-do_32+%281%29.png" alt="do_32" width="32" height="32">
</div>
  <h4 style="text-align: left; margin-top: 4px;"><span style="color: #3eb34f;">Do</span></h4>
</div>
  <p>Be concise and clear to avoid confusing or misinforming the user.</p>
</div>
  <div class="five-col last-col">
  <div class="five-col image-container">
  <img src="https://assets.ubuntu.com/v1/bdefc93f-366w_Menus_TextLabelsDont-1.png" width="335" height="140">
</div>
  <div class="five-col no-margin-bottom">
  <div class="left">
  <img src="https://assets.ubuntu.com/v1/01fb853b-dont_32+%281%29.png" alt="dont_32" width="32" height="32">
</div>
  <h4 style="text-align: left; margin-top: 4px;"><span style="color: #ed3146;">Don&#8217;t</span></h4>
</div>
  <p>Use over-long text labels that result in truncation (…).</p>
</div>
  <div class="ten-col box-grey vertical-align vertical-align--image-left">
  <p>
  <img class="vertical-align__image" src="https://assets.ubuntu.com/v1/e9f11635-information-link.png" alt="" width="32" height="32">
</p>
  <div class="vertical-align__content">
  <p>By default the SDK applies a truncation to long text labels, therefore avoid placing them manually.</p>
</div>
</div>
  <h4 class="ten-col">Label examples</h4>
  <ul class="list ten-col"><li>Add</li><li>Edit</li><li>New (rather than &#8216;create&#8217;)</li><li>Move</li><li>Save/ Save As</li><li>Delete/ Remove</li><li>Send</li><li>Share</li></ul>
  <div class="ten-col">
  <h4>Grouping menu items</h4>
  <p>Items should be grouped in a logical manner using dividers to separate related actions that have been grouped together.</p>
</div>
  <div class="five-col">
  <div class="five-col image-container">
  <img src="https://assets.ubuntu.com/v1/9e38797b-366w_Menus_ItemGroupingDo.png" alt="366w_Menus_ItemGroupingDo" width="334" height="369">
</div>
  <div class="five-col no-margin-bottom">
  <div class="left">
  <img src="https://assets.ubuntu.com/v1/74c13c17-do_32.png" alt="do_32" width="32" height="32">
</div>
  <h4 style="text-align: left; margin-top: 4px;"><span style="color: #3eb34f;">Do</span></h4>
</div>
</div>
  <div class="five-col last-col">
  <div class="five-col image-container">
  <img src="https://assets.ubuntu.com/v1/785e56ec-menu-level-1-dont.png" alt="menu level 1 dont" width="644" height="712">
</div>
  <div class="five-col no-margin-bottom">
  <div class="left">
  <img src="https://assets.ubuntu.com/v1/01fb853b-dont_32.png" alt="dont_32" width="32" height="32">
</div>
  <h4 style="text-align: left; margin-top: 4px;"><span style="color: #ed3146;">Don&#8217;t</span></h4>
</div>
</div>
  <div class="ten-col">Divide a predictable set of commands, such as clipboard commands (Cut, Copy, Paste) from app-specific or view-specific commands.</div>
</section>
  <section class="row no-padding-right no-padding-left">
  <div class="link-top not-for-small">
  <a href="#">Back to top</a>
</div>
  <div class="ten-col">
  <h3>Placing actions</h3>
  <p>In cases where editable or configurable groups of similar items are presented to the user (for example, editing a List of contacts or a Grid of application icons) actions are placed according to the user&#8217;s interaction with the item.</p>
  <p>The top three actions inside your menu will appear as trailing actions when the user swipes right. Destruction actions inside the menu, such as delete, will be available as a leading action when the user swipes left.</p>
</div>
  <div class="ten-col box-grey vertical-align vertical-align--image-left">
  <p>
  <img class="vertical-align__image" src="https://assets.ubuntu.com/v1/e9f11635-information-link.png" alt="" width="32" height="32">
</p>
  <div class="vertical-align__content">
  <p>Developer can choose to input a burger menu to store the actions inside the header rather than inside the list item, if they wish.</p>
</div>
</div>
  <div class="ten-col">
  <h4>Avoid duplicating actions</h4>
  <p>Actions may be present within the app menu and elsewhere within the interface, such as actions within a toolbar. Care should be taken to ensure that duplicate actions are as relevant and useful as possible and represent a small, highly-relevant subset of the actions available.</p>
  <p>When the user is using touch, the most primary actions are placed inside the header area. Other actions specific to a set of list items can be found using swipe where possible. Care should be taken to avoid duplicating actions that appear in the header area within contextual actions menus.</p>
</div>
  <div class="ten-col">
  <h4>Disabling actions when inactive</h4>
  <p>Rather than removing the item completely, show the user that the action exists by disabling it within the menu, when applicable.</p>
</div>
  <div class="five-col image-container">
  <img src="https://assets.ubuntu.com/v1/0d2ec1aa-366w_Menus_DisablingActions.png" alt="366w_Menus_DisablingActions" width="336" height="307">
</div>
  <div class="ten-col">In this example, &#8216;Rename&#8217; is greyed out in order to indicate to the user that it is not possible to select this option at this time (as no name has been given).</div>
</section>
  <section class="row no-padding-right no-padding-left">
  <div class="link-top not-for-small">
  <a href="#">Back to top</a>
</div>
  <div class="ten-col">
  <h3>Flag gutters</h3>
  <p>The Flag Gutter will always be present in the context menu in order to allow flags for toggle or radio actions to be displayed. For example, if you want the user to make a selection from your context menu, you can add checkboxes for multiple selections within the flag gutter.</p>
</div>
  <div class="five-col">
  <div class="image-container">
  <img src="https://assets.ubuntu.com/v1/a2d578bc-366w_Menus_FlagGutter.png" alt="366w_Menus_FlagGutter" width="334" height="310">
</div>
</div>
  <div class="ten-col box-grey vertical-align vertical-align--image-left">
  <p>
  <img class="vertical-align__image" src="https://assets.ubuntu.com/v1/75f60d24-link_external.png" alt="" width="32" height="32">
</p>
  <div class="vertical-align__content">
  <p>For more information on checkboxes and radio buttons see <a href="/apps/building-blocks/selection-controls">Selection controls.</a></p>
</div>
</div>
</section>
  <section class="row no-padding-right no-padding-left">
  <div class="link-top not-for-small">
  <a href="#">Back to top</a>
</div>
  <div class="ten-col">
  <h2 id="behavior">Behavior</h2>
</div>
  <div class="ten-col">
  <h3>Keyboard shortcuts</h3>
  <p>Keyboard shortcuts allow users to quickly perform an action or navigate through your UI. Many shortcuts are inherently familiar to the user and should map precisely to the relevant action or option that appears within your menu.</p>
</div>
  <table><thead><tr><th>Shortcut</th><th>Function</th></tr></thead><tbody><tr><td>Ctrl+C</td><td>Copy the selected text/object.</td></tr><tr><td>Ctrl+X</td><td>Cut the selected text/object.</td></tr><tr><td>Pinch close (two finger)</td><td>Zooming out on content.</td></tr><tr><td>Long press (one finger)</td><td>Start selection of content or item.</td></tr><tr><td>Rotate (two finger)</td><td>Moving around a centre point simultaneously with two fingers.</td></tr><tr><td>Flick (one finger)</td><td>Scroll in the direction you want the screen to move.</td></tr><tr><td>Long-press drag (one finger)</td><td>To move, lift and rearrange content in a view or, in a multi-window environment, between windows whilst in edit mode.</td></tr></tbody></table>
  <div class="ten-col">
  <h3>Dismissing or closing menus</h3>
  <p>Once open, a context menu may be dismissed by either making a selection from the actions or by clicking or tapping anywhere outside of the menu area.</p>
</div>
  <div class="ten-col">
  <h4>Keyboard input</h4>
  <p>The Escape Key (esc) will dismiss the contextual actions menu, as will as any user action that results in focus shifting away from the application.</p>
</div>
  <div class="ten-col">
  <h4>Default positioning</h4>
  <p>Context menus should be positioned in a consistent and predictable fashion across all device layouts. This is to aid visibility and provide a clear touch target for when the user interacts with the screen with their finger.</p>
</div>
  <div class="ten-col image-container">
  <img src="https://assets.ubuntu.com/v1/628a5ae0-366w_Menus_DefaultPositioning.png" alt="366w_Menus_DefaultPositioning" width="664" height="262">
</div>
  <div class="ten-col">
  <h4>Touch interaction</h4>
  <p>Context menus are centrally aligned on both horizontal and vertical axes.</p>
  <h4>Pointer interaction</h4>
  <p>Menu is aligned down and to the right of the pointing device cursor point at which the user right clicked or long-pressed.</p>
</div>
</section>
  <section class="row no-padding-right no-padding-left no-padding-bottom no-border">
  <div class="link-top not-for-small">
  <a href="#">Back to top</a>
</div>
</section>
</div>
