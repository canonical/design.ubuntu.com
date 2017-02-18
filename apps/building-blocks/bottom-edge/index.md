---
layout: post
title: Bottom edge
body-id: apps
body-class: guidelines
---

{% include side-nav-apps.html %}

<div id="loop-guidelines" class="ten-col last-col">
  <section class="row no-padding-top no-padding-right no-padding-left">
  <div class="ten-col">
  <h3>Create something special with a unique bottom edge that belongs to your app from the bottom of the screen.</h3>
  <div class="ten-col">
  <div class="image-container">
  <img src="https://assets.ubuntu.com/v1/792099e5-750w_BottomEdge_Dekko3.png" alt="750w_BottomEdge_Dekko3" width="673" height="280">
</div>
</div>
  <h4 class="five-col">Quick access to new content</h4>
  <ul class="list ten-col">
  <li><a href="#overview">Overview&nbsp;&rsaquo;</a></li>
  <li><a href="#use-cases">Use cases&nbsp;&rsaquo;</a></li>
  <li><a href="#hints">Hints&nbsp;&rsaquo;</a></li>
</ul>
  <div class="ten-col box-grey vertical-align vertical-align--image-left">
  <img class="vertical-align__image" src="https://assets.ubuntu.com/v1/608696e3-developer_links.png" alt="" width="32" height="32">
  <div class="vertical-align__content">
  <p>The <a class="external" href="https://developer.ubuntu.com/api/apps/qml/sdk-15.04.4/Ubuntu.Components.BottomEdge/">BottomEdge API</a> provides bottom edge content handling. See also the <a class="external" href="https://developer.ubuntu.com/api/apps/qml/sdk-15.04.4/Ubuntu.Components.BottomEdgeHint/">BottomEdgeHint API</a>, which displays a label or an icon, or both, at the bottom of the component it is attached to.</p>
</div>
</div>
</div>
</section>
  <section class="row no-padding-right no-padding-left">
  <div class="ten-col">
  <h2 id="overview">Overview</h2>
  <p>The bottom edge allows for a very natural transition through a progressive gesture from the bottom of the screen. The gesture should take logical steps to reach a point of interest for the user. It can provide access to a view via page stack, important actions, or access to app settings and features.</p>
</div>
  <div class="ten-col">
  <div class="image-container">
  <img src="https://assets.ubuntu.com/v1/7a805f7a-750w_BottomEdge_MainImage.png" alt="750w_BottomEdge_MainImage" width="602" height="387">
</div>
</div>
  <div class="ten-col box-grey vertical-align vertical-align--image-left">
  <p><img class="vertical-align__image" src="https://assets.ubuntu.com/v1/75f60d24-link_external.png" alt="" width="32" height="32"></p>
  <div class="vertical-align__content">
  <p>You can create your own customised bottom edge and add different content depending on the context of your app. <a class="external" href="http://design.canonical.com/2014/03/loving-the-bottom-edge/">See ‘Loving the bottom edge’ for more information.</a></p>
</div>
</div>
</section>
  <section class="row no-padding-right no-padding-left">
  <div class="link-top not-for-small">
  <a href="#">Back to top</a>
</div>
  <h2 id="use-cases">Use cases</h2>
  <p>The bottom edge can be used to give access to the most important features inside your app.</p>
  <div class="ten-col">
  <h3>Is your app often used to create new content?</h3>
  <p>Use the bottom edge to quickly create or draft new content, such as composing a new email or text message.</p>
</div>
  <div class="ten-col image-container">
  <img src="https://assets.ubuntu.com/v1/e1872a29-750w_BottomEdge_Dekko1.png" alt="750w_BottomEdge_Dekko1" width="673" height="295">
</div>
  <div class="ten-col image-container">
  <img src="https://assets.ubuntu.com/v1/e71cac0e-750w_BottomEdge_Dekko2.png" alt="750w_BottomEdge_Dekko2" width="673" height="295">
</div>
  <div class="ten-col image-container">
  <img src="https://assets.ubuntu.com/v1/792099e5-750w_BottomEdge_Dekko3.png" alt="750w_BottomEdge_Dekko3" width="673" height="280">
</div>
  <div class="ten-col">
  <h3>Does your app need access to a commonly used feature that needs a separate view?</h3>
  <p>Use the bottom edge to give the user quick access to an app setting or feature, such as setting a new alarm in the Clock app.</p>
</div>
  <div class="five-col image-container">
  <img src="https://assets.ubuntu.com/v1/c80957d2-366w_BottomEdge_Clock1-2.png" alt="366w_BottomEdge_Clock1 (2)" width="311" height="531">
</div>
  <div class="five-col last-col image-container">
  <img src="https://assets.ubuntu.com/v1/1d680866-366w_BottomEdge_Clock2-1.png" alt="366w_BottomEdge_Clock2 (1)" width="311" height="530">
</div>
  <div class="ten-col">
  <h3>Does your app allow the user to add information in a form?</h3>
  <p>Use the bottom edge to provide quick access to a form, such as adding a new contact or creating a new account.</p>
</div>
  <div class="five-col image-container">
  <img src="https://assets.ubuntu.com/v1/d838401e-366w_BottomEdge_AdditonalInfo1-1.png" alt="366w_BottomEdge_AdditonalInfo1 (1)" width="335" height="668">
</div>
  <div class="five-col last-col image-container">
  <img src="https://assets.ubuntu.com/v1/cc091cb4-366w_BottomEdge_AdditonalInfo2-1.png" alt="366w_BottomEdge_AdditonalInfo2 (1)" width="335" height="668">
</div>
  <div class="five-col image-container">
  <img src="https://assets.ubuntu.com/v1/88771047-366w_BottomEdge_AdditonalInfo3-1.png" alt="366w_BottomEdge_AdditonalInfo3 (1)" width="335" height="569">
</div>
  <div class="five-col last-col image-container">
  <img src="https://assets.ubuntu.com/v1/c5a2ff13-366w_BottomEdge_AdditonalInfo4-1.png" alt="366w_BottomEdge_AdditonalInfo4 (1)" width="335" height="569">
</div>
  <div class="ten-col">
  <h3>Does your app allow users to access more views?</h3>
  <p>You can use the bottom edge to reveal all views or tabs currently open to allows the user to switch between them easily and quickly. For example, the bottom edge in the Browser app reveals all the open tabs the user has open.</p>
</div>
  <div class="five-col image-container">
  <img src="https://assets.ubuntu.com/v1/c350019d-366w_BottomEdge_AccessMoreViews1-2.png" alt="366w_BottomEdge_AccessMoreViews1 (2)" width="332" height="656">
</div>
  <div class="five-col last-col image-container">
  <img src="https://assets.ubuntu.com/v1/e6ec7344-366w_BottomEdge_AccessMoreViews2-3.png" alt="366w_BottomEdge_AccessMoreViews2 (3)" width="332" height="656">
</div>
</section>
  <section class="row no-padding-right no-padding-left">
  <div class="link-top not-for-small">
  <a href="#">Back to top</a>
</div>
  <h2 id="hints">Hints</h2>
  <p>The toolkit provides a hint that consists of two elements: Hint 1 and Hint 2\. The hint is used to let the user know that there is something worth trying at the bottom of the screen.</p>
  <div class="five-col">
  <h4>Hint 1</h4>
  <div class="image-container">
  <img src="https://assets.ubuntu.com/v1/9f1dbb3b-366w_BottomEdge_BehaviourHints2.png" alt="366w_BottomEdge_BehaviourHints2" width="335" height="34">
</div>
</div>
  <div class="ten-col">When your application is launched for the first time, the user will see a floating icon, known as Hint 1.</div>
  <div class="five-col">
  <h4>Hint 2</h4>
  <div class="image-container">
  <img src="https://assets.ubuntu.com/v1/fab43755-366w_BottomEdge_BehaviourHints1-1.png" alt="366w_BottomEdge_BehaviourHints1 (1)" width="336" height="34">
</div>
</div>
  <div class="ten-col">After the user has interacted with Hint 1, the hint will morph to become Hint 2, which contains a label, icon or a combination of the two. Using a label with an icon gives the user more detail of the content it will show.</div>
  <div class="ten-col">
  <h3>Hint labels</h3>
  <p>It is important that your hint label is concise and clear to avoid confusing the user.</p>
</div>
  <div class="five-col image-container">
  <img src="https://assets.ubuntu.com/v1/f501816b-366w_BottomEdge_HintLabelsRight.png" alt="366w_BottomEdge_HintLabelsRight" width="336" height="160">
</div>
  <div class="five-col last-col image-container">
  <img src="https://assets.ubuntu.com/v1/e50550fc-366w_BottomEdge_HintLabelsWrong.png" alt="366w_BottomEdge_HintLabelsWrong" width="336" height="160">
</div>
  <div class="five-col">
  <div class="left">
  <img src="https://assets.ubuntu.com/v1/74c13c17-do_32.png" alt="do_32" width="32" height="32">
</div>
  <h4 style="text-align: left; margin-top: 10px; margin-bottom: 10px;">
  <span style="color: #3eb34f;">Do</span>
</h4>
</div>
  <div class="five-col last-col">
  <div class="left">
  <img src="https://assets.ubuntu.com/v1/01fb853b-dont_32.png" alt="dont_32" width="32" height="32">
</div>
  <h4 style="text-align: left; margin-top: 10px; margin-bottom: 10px;">
  <span style="color: #ed3146;">Don’t</span>
</h4>
</div>
  <div class="ten-col">
  <h4>Step 1\. Unfolding hint</h4>
  <p>Hint 1 is visible when the user first interacts with your app. By short swiping from Hint 1; Hint 2 starts to replace Hint 1 which then becomes fully visible.</p>
</div>
  <div class="five-col image-container">
  <img src="https://assets.ubuntu.com/v1/0b542b2e-366w_BottomEdge_Step1UnfoldingHint1-1.png" alt="366w_BottomEdge_Step1UnfoldingHint1 (1)" width="343" height="689">
</div>
  <div class="five-col last-col image-container">
  <img src="https://assets.ubuntu.com/v1/af151c33-366w_BottomEdge_Step1UnfoldingHint2-1.png" alt="366w_BottomEdge_Step1UnfoldingHint2 (1)" width="343" height="688">
</div>
  <div class="five-col image-container">
  <img src="https://assets.ubuntu.com/v1/606fd284-366w_BottomEdge_Step1UnfoldingHint3-1.png" alt="366w_BottomEdge_Step1UnfoldingHint3 (1)" width="343" height="648">
</div>
  <div class="five-col last-col image-container">
  <img src="https://assets.ubuntu.com/v1/154a894d-366w_BottomEdge_Step1UnfoldingHint4-1.png" alt="366w_BottomEdge_Step1UnfoldingHint4 (1)" width="343" height="638">
</div>
  <div class="ten-col">
  <h4>Step 2\. Collapsing</h4>
  <p>Hint 2 is now fully visible; however if the user doesn’t interact with the content or screen for a period time, then Hint 1 it will automatically fade in and replace Hint 2.</p>
  <div class="ten- col image-container">
  <img class="alignnone size-full" src="https://assets.ubuntu.com/v1/7e1040d0-750w_BottomEdge_CollapsingHints-1.png" alt="750w_BottomEdge_CollapsingHints (1)" width="677" height="119">
</div>
  <div class="ten-col">
  <h3>Hiding the hint</h3>
  <p>You can choose to have the bottom edge hint hidden from view when the user scrolls the content on the screen. This would work well for apps that need the whole screen, such as the Camera app, because the primary goal is to take a picture.</p>
</div>
  <div class="ten-col image-container">
  <img class="alignnone size-full" src="https://assets.ubuntu.com/v1/e6120d50-750w_BottomEdge_HidingHints.png" alt="750w_BottomEdge_HidingHints" width="680" height="218">
</div>
</div>
</section>
  <section class="row no-padding-right no-padding-left bottom-edge no-border">
  <div class="link-top not-for-small">
  <a href="#">Back to top</a>
</div>
</section>
</div>
