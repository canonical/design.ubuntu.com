---

layout: post
title: "List items"
body-id: "apps"
body-class: "guidelines"
---

{% include side-nav-apps.html %}

<div id="loop-guidelines" class="ten-col last-col">
<section class="row no-padding-top no-padding-right no-padding-left">
<div class="ten-col">
<h3>List items can be used to make up a list of ordered scrollable items that are related to each other.</h3>
<div class="image-container"><img src="https://assets.ubuntu.com/v1/12134b24-750w_ListItems_MainImage-1.png" alt="750w_ListItems_MainImage (1)" width="679" height="210" /></div>
</div>
<div class="ten-col">
<h4>A list of emails</h4>
</div>
<div class="combined-list">
<ul class="list five-col">
<li><a href="#overview">Overview ›</a></li>
<li><a href="#contextual-actions-for-list-items">Contextual actions for list items ›</a></li>
<li><a href="#lists-in-edit-mode">Lists in edit mode ›</a></li>
<li><a href="#structure">Structure ›</a></li>
</ul>
<ul class="list five-col last-col">
<li><a href="#actions">Actions ›</a></li>
<li><a href="#communicating-feedback">Communicating feedback ›</a></li>
<li><a href="#list-item-layouts">List item layouts ›</a></li>
</ul>
</div>
<div class="ten-col box-grey vertical-align vertical-align--image-left">
<p><img class="vertical-align__image" src="https://assets.ubuntu.com/v1/608696e3-developer_links.png" alt="" width="32" height="32" /></p>
<div class="vertical-align__content">
<p><a class="external" href="https://developer.ubuntu.com/api/apps/qml/current/Ubuntu.Components.ListItemLayout/">See the ListItemLayout API that provides customisable templates</a>, and the <a class="external" href="https://developer.ubuntu.com/api/apps/qml/sdk-15.04/Ubuntu.Components.ListItem/">ListItem API</a> that provides swiping actions.</p>
</div>
</div>
</section>
<section class="row no-padding-right no-padding-left">
<div class="ten-col">
<h2 id="use-cases">Overview</h2>
<p>Lists are displayed in a single column layout and are made up of items that can contain one or more controls. Items should be grouped together in a logical way that makes sense to the user.</p>
</div>
<div class="five-col">
<h4>Items in a form</h4>
<div class="image-container"><img class="alignnone size-full wp-image-14187" src="https://assets.ubuntu.com/v1/afc631f2-366w_ListItems_UseCases1-2.png" alt="366w_ListItems_UseCases1 (2)" width="336" height="534" /></div>
</div>
<div class="five-col last-col">
<h4>A list of settings</h4>
<div class="image-container"><img class="alignnone size-full wp-image-14188" src="https://assets.ubuntu.com/v1/2903062e-366w_ListItems_UseCases2-2.png" alt="366w_ListItems_UseCases2 (2)" width="336" height="535" /></div>
</div>
<div class="five-col">
<h4>Use appropriately to the content</h4>
<div class="image-container"><img class="alignnone size-full wp-image-14184" src="https://assets.ubuntu.com/v1/755e0c6f-366w_ListItems_ImageList-1.png" alt="366w_ListItems_ImageList (1)" width="336" height="361" /></div>
</div>
<div class="five-col last-col">
<h4>Use search function</h4>
<div class="image-container"><img class="alignnone size-full wp-image-14189" src="https://assets.ubuntu.com/v1/a9e74185-366w_ListItems_UseCaseSearchFunction-2.png" alt="366w_ListItems_UseCaseSearchFunction (2)" width="336" height="361" /></div>
</div>
<div class="five-col">When images or icons are presented without text or actions, it would make more sense to show them inside a grid rather than a list; like in a photo gallery.</div>
<div class="five-col last-col">
<p class="ten-col">Consider adding a search function for lists that are likely to contain a large number of items, in order for the users to quickly search a particular item.</p>
</div>
</section>
<section class="row no-padding-right no-padding-left">
<div class="link-top not-for-small"><a href="#">Back to top</a></div>
<div class="ten-col">
<h2 id="contextual-actions-for-list-items">Contextual actions for list items</h2>
<p>Items in a list can have actions that can be placed in a context menu. The context menu can be accessed in two ways: by swiping or right-clicking the list item.</p>
<p>Touch and pointer interactions perform the same functions across convergent devices for consistency and familiarity across the platform. Swiping right may reveal a button for the leading action, such as &#8216;Delete&#8217; or something similar. Swiping left may reveal buttons for (up to) three other important actions; these are the trailing actions. When the user interacts with an item using a mouse, right-clicking will reveal the context menu, and click and drag will reveal the leading and trailing actions either side of the item. This gives the same experience as swiping.</p>
<p>The actions are placed within two categories: leading for negative actions and trailing for positive actions. Grouping actions into positive and negative areas inside your list items will reinforce familiarity inside your app; allowing users to find and identify important actions easily.</p>
</div>
<div class="five-col image-container"><img class="alignnone size-full wp-image-15540" src="https://assets.ubuntu.com/v1/f0bff2bc-366w_ListItems_ContextualActions1-3.png" alt="366w_ListItems_ContextualActions1 (3)" width="336" height="220" /></div>
<div class="five-col last-col image-container"><img class="alignnone size-full wp-image-13605" src="https://assets.ubuntu.com/v1/0238f83e-366w_ListItems_ContextualActions2.png" alt="366w_ListItems_ContextualActions2" width="336" height="220" /></div>
<div class="five-col">
<h4>Touch &#8211; Leading action</h4>
<p>Swipe left to right</p>
</div>
<div class="five-col last-col">
<h4>Touch &#8211; Trailing action</h4>
<p>Swipe right to left</p>
</div>
<div class="five-col image-container"><img class="alignnone size-full wp-image-14051" src="https://assets.ubuntu.com/v1/ffb1c374-366w_ListItems_ContextualActionsPointer-3.png" alt="366w_ListItems_ContextualActionsPointer (3)" width="336" height="211" /></div>
<div class="five-col last-col image-container"><img class="alignnone size-full wp-image-14032" src="https://assets.ubuntu.com/v1/93863db6-366w_ListItems_ContextualActionsFocus.png" alt="366w_ListItems_ContextualActionsFocus" width="336" height="211" /></div>
<div class="five-col">
<h4>Pointer</h4>
<p>A user can right-click to reveal the contextual menu, or drag right to left to reveal the leading or trailing options in an item.</p>
</div>
<div class="five-col last-col">
<h4>Focus</h4>
<p>A user can reveal the contextual menu by focusing on an item using keyboard navigation and hitting a keyboard key to reveal it.</p>
</div>
</section>
<section class="row no-padding-right no-padding-left">
<div class="link-top not-for-small"><a href="#">Back to top</a></div>
<div class="ten-col">
<h2 id="lists-in-edit-mode">Lists in edit mode</h2>
<p>Edit mode allows users to modify a particular item or multiple items at once.</p>
<p>You can use edit mode to allow users to multi-select, rearrange or delete items inside a list. When edit mode is entered the whole screen becomes an edit state and the header will show associated editing actions for the content. Alternatively, if the user long presses an item a context menu will show the associated editing actions too.</p>
</div>
<div class="ten-col">
<h3>Use case</h3>
<div class="five-col">
<div class="image-container"><img src="https://assets.ubuntu.com/v1/03e5997a-366w_ListItems_ListEditMode1-4.png" alt="366w_ListItems_ListEditMode1 (4)" width="336" height="434" /></div>
</div>
<div class="five-col last-col">
<div class="image-container"><img src="https://assets.ubuntu.com/v1/880961a6-366w_ListItems_ListEditMode2-3.png" alt="366w_ListItems_ListEditMode2 (3)" width="336" height="434" /></div>
</div>
<div class="ten-col">
<h4>Edit contacts</h4>
<p>In the Contacts app for example, the list of contacts is made editable to allow users to delete or edit a contact&#8217;s information.</p>
</div>
<div class="ten-col">
<ol>
<li>A user selects an item in the list by using the edit icon in the header.</li>
<li>The list becomes selectable with checkboxesthat provides swiping actions for multi-select mode.</li>
<li>The header changes to reveal editing actions, and the header section is replaced with a toolbar underneath the main header with further editing actions.</li>
</ol>
</div>
<div class="ten-col box-grey vertical-align vertical-align--image-left">
<p><img class="vertical-align__image" src="https://assets.ubuntu.com/v1/75f60d24-link_external.png" alt="" width="32" height="32" /></p>
<div class="vertical-align__content">
<p>For more information about how edit mode is used see <a href="/apps/building-blocks/header">Header</a>.</p>
</div>
</div>
</div>
</section>
<section class="row no-padding-right no-padding-left">
<div class="link-top not-for-small"><a href="#">Back to top</a></div>
<div class="ten-col">
<h2 id="structure">Structure</h2>
<p>The toolkit provides list item layouts that consist of 1 to 4 slots which can be arranged in a variety of ways. These slots can contain components that allow the list item to perform actions and display content.</p>
</div>
<div class="ten-col">
<h4>Slot A (mandatory)</h4>
<p>Can only contain text, such as a title with an optional subtitle.</p>
</div>
<div class="ten-col">
<div class="image-container"><img class="alignnone size-full wp-image-13639" src="https://assets.ubuntu.com/v1/334e715a-750w_ListItems_4SlotLayout.png" alt="750w_ListItems_4SlotLayout" width="694" height="92" /></div>
</div>
<div class="ten-col">
<h4>Slot B (optional)</h4>
<p>For additional text, an icon or a component.</p>
</div>
<div class="ten-col">
<div class="image-container"><img class="alignnone size-full wp-image-13640" src="https://assets.ubuntu.com/v1/8c57eddf-750w_ListItems_1SlotLayout.png" alt="750w_ListItems_1SlotLayout" width="694" height="92" /></div>
</div>
<div class="ten-col box-grey vertical-align vertical-align--image-left">
<p><img class="vertical-align__image" src="https://assets.ubuntu.com/v1/608696e3-developer_links.png" alt="developer_links." width="32" height="32" /></p>
<div class="vertical-align__content">
<p>List items must always contain at least one slot.</p>
</div>
</div>
<div class="ten-col">
<h3>Chevron (optional)</h3>
<p>If your list item allows for navigation through to an associated view, then a ProgressionSlot (chevron) is used in a fixed position in the right-most slot. No other actions is displayed in this slot, because this would conflict with the chevron navigation.</p>
</div>
<div class="ten-col box-grey vertical-align vertical-align--image-left">
<p><img class="vertical-align__image" src="https://assets.ubuntu.com/v1/608696e3-developer_links.png" alt="" width="32" height="32" /></p>
<div class="vertical-align__content">
<p>The <a class="external" href="https://developer.ubuntu.com/api/apps/qml/sdk-15.04.4/Ubuntu.Components.ProgressionSlot/">ProgressionSlot API</a> is designed to provide an easy way for developers to add a progression symbol to the list item created using ListItemLayout or SlotsLayout.</p>
</div>
</div>
<div class="five-col image-container"><img class="alignnone size-full wp-image-14221" src="https://assets.ubuntu.com/v1/08b912ae-366w_ListItems_Chevron1-4.png" alt="366w_ListItems_Chevron1 (4)" width="336" height="605" /></div>
<div class="five-col last-col image-container"><img class="alignnone size-full wp-image-14222" src="https://assets.ubuntu.com/v1/912aaefd-366w_ListItems_Chevron2-3.png" alt="366w_ListItems_Chevron2 (3)" width="336" height="605" /></div>
<div class="ten-col">
<h3>Content</h3>
<p>If you use the ListItemLayout API then Slot A can contain a 1 line title, a subtitle, and a 2 line summary. If you use SlotsLayout API, you can put whatever you choose in to Slot A. A recommendation is to place the most distinguishing content in the first line of your list item.</p>
<p>Text is always aligned according to the currently displayed language. For example, in the case of English it is left to right, whereas Arabic is right to left.</p>
</div>
<div class="ten-col image-container"><img class="alignnone size-full wp-image-14236" src="https://assets.ubuntu.com/v1/b71e1e47-750w_ListItems_Content3.png" alt="750w_ListItems_Content3" width="677" height="142" /></div>
<div class="ten-col">
<h4>ListItemLayout labels:</h4>
<ol>
<li>1 line &#8211; Title</li>
<li>1 line &#8211; Subtitle</li>
<li>2 lines &#8211; Summary</li>
</ol>
</div>
<div class="ten-col box-grey vertical-align vertical-align--image-left">
<p><img class="vertical-align__image" src="https://assets.ubuntu.com/v1/608696e3-developer_links.png" alt="" width="32" height="32" /></p>
<div class="vertical-align__content">
<p>Developers are free to override the maximum amount lines for each label. See the <a class="external" href="https://developer.ubuntu.com/api/qml/sdk-14.10/Ubuntu.Components.Label/">Label API</a> for more information.</p>
</div>
</div>
</section>
<section class="row no-padding-right no-padding-left">
<div class="link-top not-for-small"><a href="#">Back to top</a></div>
<div class="ten-col">
<h2 id="actions">Actions</h2>
<h4>Primary</h4>
<p>The primary action is the main action you want a user to perform.</p>
<h4>Secondary</h4>
<p>A secondary action is an action the user may wish to perform instead of the primary action.</p>
</div>
<div class="ten-col">
<div class="image-container"><img src="https://assets.ubuntu.com/v1/b861e52d-750w_ListItems_1action2action-3.png" alt="750w_ListItems_1action2action (3)" width="679" height="197" /></div>
</div>
<div class="ten-col">
<h4>One action</h4>
<p>Primary action: a user wants to turn their dial paid sound on or off.</p>
<h4>Two actions</h4>
<p>Primary action: a user can call using tap or click on a contacts name.<br />
Secondary action: a user can message a contact by taping or clicking on the message action icon.</p>
<h4>Two actions &#8211; with primary icon</h4>
<p>Primary action: call using tap or click on the dial action.<br />
Secondary action: message using tap or click on the message action icon.</p>
</div>
<div class="ten-col box-grey vertical-align vertical-align--image-left">
<p><img class="vertical-align__image" src="https://assets.ubuntu.com/v1/e9f11635-information-link.png" alt="information-link" width="32" height="32" /></p>
<div class="vertical-align__content">
<p>Avoid creating visual noise by repeatedly using additional actions in list items.</p>
</div>
</div>
<div class="ten-col">
<h3>Touch regions</h3>
<p>Tapping anywhere in the list item should perform the primary action. The secondary action is only triggered by touching a particular touch region where the action resides.</p>
<p>For example, user will expect to tap on the contact name or call button (primary action) to call a contact. The secondary action would be to message the contact using the message action icon.</p>
</div>
<div class="five-col image-container"><img class="alignnone size-full wp-image-14185" src="https://assets.ubuntu.com/v1/7ab1c77d-366w_ListItems_ActionsPrimary-1.png" alt="366w_ListItems_ActionsPrimary (1)" width="336" height="223" /></div>
<div class="five-col last-col image-container"><img class="alignnone size-full wp-image-14186" src="https://assets.ubuntu.com/v1/a70a0b6c-366w_ListItems_ActionsSecondary-1.png" alt="366w_ListItems_ActionsSecondary (1)" width="336" height="223" /></div>
<div class="ten-col">Primary action &#8211; call<br />
Secondary action &#8211; message</div>
</section>
<section class="row no-padding-right no-padding-left">
<div class="link-top not-for-small"><a href="#">Back to top</a></div>
<div class="ten-col">
<h2 id="communicating-feedback">Communicating feedback</h2>
<p>You can use a slot to communicate if something has changed within a list item. For example, a timestamp on a message indicates when the message was received and a tick to show the message has been read.</p>
</div>
<div class="five-col image-container"><img class="alignnone size-full wp-image-13626" src="https://assets.ubuntu.com/v1/1283edc7-366w_ListItems_InformationStates.png" alt="366w_ListItems_InformationStates" width="336" height="311" /></div>
<div class="ten-col">
<h3>Use text labels</h3>
<p>If a list item needs to provide feedback from an associated action, then the list item should not be used to communicate this.</p>
</div>
<div class="five-col image-container"><img class="alignnone size-full wp-image-14178" src="https://assets.ubuntu.com/v1/7c36aac8-366w_ListItems_CommunicatingFeedback1-1.png" alt="366w_ListItems_CommunicatingFeedback1 (1)" width="338" height="410" /></div>
<div class="five-col last-col image-container"><img class="alignnone size-full wp-image-14179" src="https://assets.ubuntu.com/v1/9c48008e-366w_ListItems_CommunicatingFeedback2-1.png" alt="366w_ListItems_CommunicatingFeedback2 (1)" width="338" height="410" /></div>
<div class="ten-col">In System Settings if a user has tried to connect to another device using Bluetooth and no device has been found, a text label within the view is used to indicate feedback.</div>
</section>
<section class="row no-padding-right no-padding-left">
<div class="link-top not-for-small"><a href="#">Back to top</a></div>
<div class="ten-col">
<h2 id="list-item-layouts">List item layouts</h2>
<p>The toolkit provides a number of layouts when creating a list item to ensure users get the best experience from your app across different surfaces.</p>
<p><strong>Consider:</strong></p>
<ul>
<li>Slot A is mandatory and should always contain text.</li>
<li>The maximum number of slots is four.</li>
</ul>
<div class="ten-col box-grey vertical-align vertical-align--image-left">
<p><img class="vertical-align__image" src="https://assets.ubuntu.com/v1/e9f11635-information-link.png" alt="information-link" width="32" height="32" /></p>
<div class="vertical-align__content">
<p>You can place what you wish inside the slots. However, these recommendations take into consideration cognitive familiarity to provide a clean and minimalist look.</p>
</div>
</div>
<div class="five-col image-container"><img class="alignnone size-full wp-image-13976" src="https://assets.ubuntu.com/v1/26479ed7-366w_ListItems_OneSlotSmall-2.png" alt="366w_ListItems_OneSlotSmall (2)" width="338" height="117" /></div>
<div class="five-col last-col image-container"><img class="alignnone size-full wp-image-13977" src="https://assets.ubuntu.com/v1/f4572937-366w_ListItems_TwoSlotSmall2.png" alt="366w_ListItems_TwoSlotSmall2" width="338" height="118" /></div>
<div class="five-col">
<h4>One slot</h4>
</div>
<div class="five-col last-col">
<h4>Two slot</h4>
</div>
<div class="five-col image-container"><img class="alignnone size-full wp-image-13979" src="https://assets.ubuntu.com/v1/0ef2a52e-366w_ListItems_ThreeSlotSmall2-1.png" alt="366w_ListItems_ThreeSlotSmall2 (1)" width="338" height="118" /></div>
<div class="five-col last-col image-container"><img class="alignnone size-full wp-image-13980" src="https://assets.ubuntu.com/v1/c161036d-366w_ListItems_FourSlotSmall2-1.png" alt="366w_ListItems_FourSlotSmall2 (1)" width="338" height="118" /></div>
<h4 class="five-col">Three slot</h4>
<h4 class="five-col last-col">Four slot</h4>
<div class="ten-col box-grey vertical-align vertical-align--image-left">
<p><img class="vertical-align__image" src="https://assets.ubuntu.com/v1/75f60d24-link_external.png" alt="" width="32" height="32" /></p>
<div class="vertical-align__content">
<p>Provide a caption under the title to give the user more information if necessary. For example, displaying a contact&#8217;s email address saves the user clicking through to find the information.</p>
</div>
</div>
<div class="ten-col">
<h3>Avoid cluttered list items</h3>
</div>
<div class="five-col image-container"><img class="alignnone size-full wp-image-13642" src="https://assets.ubuntu.com/v1/b340de77-366w_ListItems_FourSlotBad.png" alt="366w_ListItems_FourSlotBad" width="336" height="80" /></div>
<div class="ten-col">In this example, the list item is too overcrowded and it is not immediately apparent what the primary action is.</div>
</div>
</section>
<section class="row no-padding-right no-padding-left no-border">
<div class="link-top not-for-small"><a href="#">Back to top</a></div>
</section>
</div>


</div>


