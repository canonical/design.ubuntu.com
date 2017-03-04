---
layout: post
title: Convergence
body-id: apps
body-class: guidelines
---



<div id="loop-guidelines" class="col-10">
  <section class="row no-padding-top no-padding-right no-border no-padding-left">
  <div class="col-10">
  <h3>Use one operating system for all devices to provide familiar experiences from phone to tablet to desktop, and back again.</h3>
  <p>
  <img class="alignnone " src="{{ site.assets_path }}d7f88a3e-750w_Convergence_MainImage.png" alt="750w_Convergence_MainImage" width="853" height="486">
</p>
</div>
  <ul class="list col-10"><li><a href="#what-is-convergence">What is convergence?&nbsp;&rsaquo;</a></li><li><a href="#why-are-we-doing-it">Why are we doing it?&nbsp;&rsaquo;</a></li><li><a href="#how-are-we-doing-it">How are we doing it?&nbsp;&rsaquo;</a></li><li><a href="#see-for-yourself">See for yourself&nbsp;&rsaquo;</a></li></ul>
</section>
  <section class="row no-padding-right no-padding-left">
  <div class="col-10">
  <h2 id="what-is-convergence">What is convergence?</h2>
  <p>Convergence is a single user experience that spans to all form factors and adapts to the different contexts of use. It means exactly the same operating system and applications run on phones, tablets and desktops. This is done by using responsive layouts that adapt to the different screen or window sizes.</p>
  <p>Convergence supports all input types equally and simultaneously to allow users to interact using a pointer, touch or keyboard; whenever and however they choose.</p>
</div>
</section>
  <section class="row no-padding-right no-padding-left">
  <div class="link-top not-for-small">
  <a href="#">Back to top</a>
</div>
  <div class="col-10">
  <h2 id="why-are-we-doing-it">Why are we doing it?</h2>
  <p>Over the last twenty years computing has become exponentially faster, cheaper and more power efficient. As a result, phones and tablets today have the processing power to undertake tasks that only a few years ago required PC hardware. The boundaries between form factors are becoming blurred; there is very little difference in terms of hardware between an ultrabook with a touchscreen and a 12in tablet with a keyboard attached.</p>
  <p>By using convergence we breakdown the last barrier between form factors with a single operating system and app ecosystem for all different types of hardware. This enables new forms of interaction. For example, drafting an email on your phone during your journey to work, and then when you arrive at your desk you can plug the phone into a monitor and continue composing the same email in a desktop environment.</p>
</div>
</section>
  <section class="row no-padding-right no-padding-left">
  <div class="link-top not-for-small">
  <a href="#">Back to top</a>
</div>
  <div class="col-10">
  <h2 id="how-are-we-doing-it">How are we doing it?</h2>
  <p>In 2013, Ubuntu announced a crowdfunding effort to build a flagship device called the Ubuntu Edge. It was to be a next-generation smartphone that also worked as a full desktop PC. Although the device was never realized, the vision of a convergent operating system that shifts seamlessly from smartphone to desktop is still alive and well.</p>
</div>
  <div class="col-10">
  <h3>Responsiveness and consistency</h3>
  <p>When designing across different sized devices you have to bear in mind how an app will adapt to having more or less real-estate when presented in a small, medium or large screen.</p>
  <p>Where possible place panels together to take full advantage of additional screen real estate on different devices, in order to create a consistent and proportionate design that makes use of the available space.</p>
</div>
  <div class="col-10">
  <img src="{{ site.assets_path }}8591851e-Convergence-Responsivness-and-consistency-02.png" alt="Convergence - Responsivness and consistency 02" width="750">
</div>
  <div class="col-10">
  <h4>Dekko app</h4>
  <p>The Dekko app responses to more real-estate and keeps its look and feel from mobile to tablet to desktop.</p>
</div>
  <div class="col-10 image-container">
  <img src="{{ site.assets_path }}ba27a71d-750w_WhyDesignUbuntu_DekkoApp.png" alt="750w_WhyDesignUbuntu_DekkoApp" width="750">
</div>
  <div class="col-10">
  <h3>Adaptive layouts</h3>
  <p>Applications live in windows (in a windowed environment) or surfaces (in a non-windowed environment). Application layouts change in a responsive manner depending on the size of their window or surface. One common method of creating a responsive layout is to use panels. In a small window or surface, only a single panel needs to be displayed. The user can navigate through the panels by tapping on items or going back. When the window or surface size gets larger, the application can switch to displaying two or more surfaces side by side. Thus reducing the amount of navigational actions the user needs to undertake.</p>
  <p>Typical examples of this are applications like contacts, messages, and email. Of course, there can be any number of combinations of panels depending on the specific app&#8217;s needs.</p>
  <p>The AdaptivePageLayout API component eliminates guesswork for developers when adapting from one form factor to another. It works by tracking an infinite number of virtual columns that may be displayed on a screen at once. For example, an app will automatically switch between a 1-panel and 2-panel layout when the user changes the size of the window or surface, by dragging the app from the main stage to the side stage.</p>
  <p>Changing the size of the window or surface resizes one or more joined panels. Typically, the right-most panel resizes and the left-most panel maintains its original dimensions. The dimensions of the right-most panel will normally be 40 grid units or 50 grid units, though this panel may itself be resizable depending on the developer&#8217;s requirements.</p>
</div>
  <div class="col-10">
  <h4>How it works</h4>
  <p>The developer will be able to specify where panels should go and the breakpoint in which they can expand to. The adaptive layout will automatically place them.</p>
</div>
  <div class="col-10">
  <img src="{{ site.assets_path }}79e5777a-750w_Convergence_HowItWorks.png" alt="750w_Convergence_HowItWorks" width="750">
</div>
  <div class="col-10">
  <h3>Minimal changes to functionality</h3>
  <p>For a consistent and familiar user experience, the SDK maps touch, pointer, and keyboard (focus) interactions to every function.</p>
</div>
  <div class="col-10">
  <h4>Context menus</h4>
  <p>Using touch a user can swipe or long-press on a list item to reveal a contextual menu. Using a pointer (mouse or trackpad) a user can right-click the item to reveal the contextual menu. Using a keyboard a user can focus the desired item and press the MENU key to open the context menu. This is a great example of how each SDK component supports all input types equally and simultaneously.</p>
</div>
  <div class="col-10">
  <div class="col-10 image-container">
  <img class="alignnone size-full" src="{{ site.assets_path }}a2260192-750w_Design_Values_AllInputEqualv2.png" alt="750w_Design_Values_AllInputEqualv2" width="719" height="188">
</div>
</div>
  <div class="col-10 box-grey vertical-align vertical-align--image-left">
  <img class="vertical-align__image" src="{{ site.assets_path }}75f60d24-link_external.png" alt="link_external" width="32" height="32">
  <div class="vertical-align__content">
    <p>All the components in the toolkit adapt to a convergent environment. <a href="/apps/building-blocks/header">See how the header converges to provide more room for actions within different surfaces</a>.</p>
    </div>
</div>
</section>
  <section class="row no-padding-right no-padding-left">
  <div class="link-top not-for-small">
  <a href="#">Back to top</a>
</div>
  <div class="col-10">
  <h2 id="see-for-yourself">See for yourself</h2>
  <p>Ubuntu devices are shipped with built-in apps that converge over multiple devices, such as: Dekko, Calendar, Contacts and Music. They all work in the same way on your phone, tablet and desktop, giving you a seamless experience across all devices.</p>
</div>
  <div class="col-10">
  <img class="alignnone size-full" src="{{ site.assets_path }}a309ff4f-750w_Convergence_Calendar.png" alt="750w_Convergence_Calendar" width="750">
</div>
</section>
  <section class="row no-padding-right no-padding-left no-border">
  <div class="link-top not-for-small">
  <a href="#">Back to top</a>
</div>
</section>
</div>
