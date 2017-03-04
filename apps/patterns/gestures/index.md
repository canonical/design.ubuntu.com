---
layout: post
title: Gestures
body-id: apps
body-class: guidelines
---



<div id="loop-guidelines" class="col-10">
  <section class="row no-padding-top no-padding-right no-padding-left">
  <div class="col-10">
  <h3>Make the most of Ubuntu&#8217;s gestures to establish consistency and familiarity within your application.</h3>
  <p>
  <img class="alignnone" src="{{ site.assets_path }}b5eb0c4c-750w_Getsures_MainImage-1.png" alt="750w_Getsures_MainImage (1)" width="762" height="434">
</p>
</div>
  <ul class="list col-10"><li><a href="#edge-gestures">Edge gesture&nbsp;&rsaquo;</a></li><li><a href="#gestural-activities">Gestural activities&nbsp;&rsaquo;</a></li><li><a href="#discoverability">Discoverability&nbsp;&rsaquo;</a></li></ul>
</section>
  <section class="row no-padding-right no-padding-left">
  <div class="col-10">
  <h2 id="edge-gestures">Edge gestures</h2>
  <p>The edge gestures provide access to system features that work outside applications and cannot be overwritten. It is important to consider these edge gestures to avoid conflict with your own application gestures. For example, of you place a gesture from the top of the screen, this may cause conflict with the indicator menu that is revealed in the same area.</p>
</div>
  <div class="col-10">
  <div class="image-container">
  <img src="{{ site.assets_path }}8739b3a4-750w_Gestures_EdgeGestures.png" alt="750w_Gestures_EdgeGestures" width="658" height="440">
</div>
</div>
  <div class="col-10">
  <h3>System</h3>
  <ol>
  <li><strong>Top edge swipe</strong> reveals the indicator menu that contains settings and notifications when swiping down.</li>
  <li><strong>Short left edge swipe </strong>reveals favorited and frequently used apps from the launcher menu.</li>
  <li><strong>Long left edge swipe </strong>takes you back to the app screen (shows all the installed apps) when you are inside an application.</li>
  <li><strong>Short right edge swipe </strong>reveals the previous app used.</li>
  <li><strong>Long right edge swipe</strong> reveals an app stack to show all the apps that are currently open; like a stack of cards.</li>
</ol>
</div>
  <div class="col-10">
  <h3>Application gestures</h3>
  <p>Application gestures happen within your application. It is how the user interacts with the content of your app with commonly used gestural activities like flicking, dragging and tapping within your application, such as selecting text to edit a message.</p>
</div>
  <div class="col-10">
  <h3>Application specific</h3>
  <p>The app specific area is reserved for the bottom edge, which can reveal actions or a view from the bottom of the screen.</p>
</div>
  <div class="col-10">
  <div class="image-container">
  <img src="{{ site.assets_path }}ca82b5f7-750w_Gestures_StackScreen.png" alt="750w_Gestures_StackScreen" width="679" height="427">
</div>
</div>
  <div class="col-10">
  <p>Avoid using a stack of screens inside an app itself, because this would confuse the overall mental model of the system. Instead consider a two-dimensional model for your app, where you pan or zoom between screens.</p>
</div>
</section>
  <section class="row no-padding-right no-padding-left">
  <div class="link-top not-for-small">
  <a href="#">Back to top</a>
</div>
  <div class="col-10">
  <h2 id="gestural-activities">Gestural activities</h2>
  <p>Certain gestures are associated with a particular movement of the finger and often come naturally to the user. Functions should map closely to the physical action implied by the gesture, such as flicking through content with one finger.</p>
</div>
  <div class="col-5">
  <h4>Tap (one finger)</h4>
  <div class="image-container">
  <img src="{{ site.assets_path }}30dd55e1-gesture_1f_tap-1.png" alt="gesture_1f_tap (1)" width="800" height="600">
</div>
</div>
  <div class="col-5">
  <h4>Double tap (one finger)</h4>
  <div class="image-container">
  <img src="{{ site.assets_path }}ac2edefd-gesture_1f_double-tap.png" alt="gesture_1f_double-tap" width="800" height="600">
</div>
</div>
  <div class="col-5">Use to activate a screen element, like a button.</div>
  <div class="col-5">
  <p>Use to double tap an item or select an area, such as selecting text in a message.</p>
</div>
  <div class="col-5">
  <h4>Long press drag (one finger)</h4>
  <div class="image-container">
  <img src="{{ site.assets_path }}d72ccece-gesture_1f_swipe-right.png" width="800" height="600">
</div>
</div>
  <div class="col-5">
  <h4>Flick (one finger)</h4>
  <div class="image-container">
  <img src="{{ site.assets_path }}5934dbfa-gesture_1f_drag-right-1.png" alt="gesture_1f_drag-right (1)" width="800" height="600">
</div>
</div>
  <div class="col-5">Use to pick up, move and select multiple items.</div>
  <div class="col-5">Use to scroll in the direction you want the screen to move.</div>
  <div class="col-5">
  <h4>Long press (one finger)</h4>
  <div class="image-container">
  <img src="{{ site.assets_path }}f4bb4e3b-gesture_1f_touch.png" alt="gesture_1f_touch" width="800" height="600">
</div>
</div>
  <div class="col-5">
  <h4>Rotate (two finger)</h4>
  <div class="image-container">
  <img src="{{ site.assets_path }}a7cc3136-gesture_2f_rotate.png" alt="gesture_2f_rotate" width="800" height="600">
</div>
</div>
  <div class="col-5">
  <p>Use to start a selection of content or an item within the application window, such as selecting a URL to copy in the Browser.</p>
</div>
  <div class="col-5">
  <p>Use to move around a centre point simultaneously with two fingers to rotate an object, such as editing an image.</p>
</div>
  <div class="col-5">
  <h4>Pinch in or out (two finger)</h4>
  <div class="image-container">
  <img src="{{ site.assets_path }}f87d1a6d-gesture_2f_pinch-in.png" alt="gesture_2f_pinch-in" width="800" height="600">
</div>
</div>
  <div class="col-10">
  <p>Use to zoom in or out of something, such as an image or a view.</p>
</div>
</section>
  <section class="row no-padding-right no-padding-left">
  <div class="link-top not-for-small">
  <a href="#">Back to top</a>
</div>
  <div class="col-10">
  <h2 id="discoverability">Discoverability</h2>
  <p>Although functions should be intuitive, sometimes users may need a hand to discover new features within your interface.</p>
</div>
  <div class="col-10">
  <h3>Bottom edge hint</h3>
  <p>The bottom edge is specific to your app and can be used to reveal the most important actions, or a frequently used view.</p>
  <p>The bottom edge is made discoverable to the user by a hint at the bottom of the screen. This indicates to the user that there is a visible area by swiping up from the floating hint.</p>
</div>
  <div class="col-10">
  <h4>Hints</h4>
  <p>The bottom edge hint comprises of two elements: Hint 1 and Hint 2.</p>
</div>
  <div class="col-5">
  <h4>Hint 1</h4>
  <div class="image-container">
  <img src="{{ site.assets_path }}9f1dbb3b-366w_BottomEdge_BehaviourHints2.png" alt="366w_BottomEdge_BehaviourHints2" width="335" height="34">
</div>
</div>
  <div class="col-10">
  <p>When your application is launched for the first time, the user will see a floating icon which is known as Hint 1.</p>
</div>
  <div class="col-5">
  <h4>Hint 2</h4>
  <div class="image-container">
  <img src="{{ site.assets_path }}fab43755-366w_BottomEdge_BehaviourHints1-2.png" alt="366w_BottomEdge_BehaviourHints1 (2)" width="336" height="34">
</div>
</div>
  <div class="col-10">
  <p>After the user has  interacted with Hint 1, the hint will morph to become Hint 2\. This hint contains a label, icon or a combinations of the two. By using both a label and an icon it gives the user more detail of the content it will show, such as &#8216; + New page&#8217;.</p>
</div>
  <div class="col-10 box-grey vertical-align vertical-align--image-left">
  <img class="vertical-align__image" src="{{ site.assets_path }}75f60d24-link_external.png" alt="" width="32" height="32">
  <div class="vertical-align__content">
  <p>For more information on the behavior of the bottom edge hint see <a href="/apps/building-blocks/bottom-edge">Bottom edge</a>.</p>
</div>
</div>
  <div class="col-10">
  <h3>Instructional overlays</h3>
  <p>When the user initially opens your app you can guide them through the different features and gestures with instructional overlays to aid discoverability.</p>
  <p>The SDK toolkit provides coach marks and tutorials that you can use to illustrate gestures using text and arrows.</p>
  <p>The look and feel of an instructional overlay should differ from your UI visual style. Doing this will create a distinction between what is permanently part of the app and what is an initial overlay feature.</p>
</div>
  <div class="col-10 box-grey vertical-align vertical-align--image-left">
  <img class="vertical-align__image" src="{{ site.assets_path }}e9f11635-information-link.png" alt="" width="32" height="32">
  <div class="vertical-align__content">
  <p>For more information on instructional overlays see Coach Marks (Coming soon).</p>
</div>
</div>
  <div class="col-10">
  <h4>Coach marks</h4>
  <p>Use coach marks as a single instructional overlay to point out a particular interaction or feature that may not be obvious, or naturally discoverable.</p>
</div>
  <div class="col-5">
  <div class="image-container">
  <img src="{{ site.assets_path }}4f896bc6-366w_Gestures_CoachMarks1.png" alt="366w_Gestures_CoachMarks1" width="327" height="314">
</div>
</div>
  <div class="col-10">
  <h4>Tutorial</h4>
  <p>Use tutorials on rare occasions where you feel you need to give the user further instructions to discover gestures or features.</p>
  <p>On an environment where the interface may be a little different, a sequence of instructions can be used to point out where different features live. For example, from mobile to tablet the bottom edge can be placed in both panels.</p>
</div>
  <div class="col-10">
  <div class="image-container">
  <img src="{{ site.assets_path }}294a8035-750w_Gestures_CoachMarksTablet1.png" alt="750w_Gestures_CoachMarksTablet1" width="679" height="176">
</div>
</div>
  <div class="col-10">
  <p>The bottom edge is highlighted in the left panel with instructional text above it, together with a &#8216;Next Button to lead the user to the following instruction in the tutorial.</p>
</div>
  <div class="col-10">
  <div class="image-container">
  <img src="{{ site.assets_path }}9f9c1af3-750w_Gestures_CoachMarksTablet.png" alt="750w_Gestures_CoachMarksTablet" width="679" height="176">
</div>
</div>
</section>
  <section class="row no-padding-bottom no-padding-right no-padding-left no-border">
  <div class="link-top not-for-small">
  <a href="#">Back to top</a>
</div>
</section>
</div>
