---
layout: post
title: Activity indicators
body-id: apps
body-class: guidelines
---



<div id="loop-guidelines" class="col-10">
  <section class="row no-padding-top no-padding-right no-padding-left">
  <div class="col-10">
  <h3>Use Activity Indicators to give the user an indication of how long a running task might take and how much work has already been done.</h3>
  <div class="image-container">
  <img src="{{ site.assets_path }}1af1cdf3-750w_ActivityIndicators_MainImage-1.png" alt="750w_ActivityIndicators_MainImage (1)" width="679" height="127">
</div>
</div>
  <div class="col-10 box-grey vertical-align vertical-align--image-left">
  <p><img class="vertical-align__image" src="{{ site.assets_path }}608696e3-developer_links.png" alt="" width="32" height="32"></p>
  <div class="vertical-align__content">
  <p>The <a class="external" href="https://developer.ubuntu.com/api/qml/current/Ubuntu.Components.ActivityIndicator/">Activity Indicator API</a> visually indicates that a task of unknown or known duration is in progress.</p>
</div>
</div>
</section>
  <section class="row no-padding-right no-padding-left">
  <div class="link-top not-for-small">
  <a href="#">Back to top</a>
</div>
  <div class="col-10">
  <h2 id="types-of-indicators">Types of indicators</h2>
  <p>The toolkit provides progress bars or spinners that can either be: determinate or indeterminate. Use either state depending on whether the proportion being completed is known or not.</p>
</div>
  <div class="col-10">
  <h2>Usage</h2>
  <p>Determine if you need to use either a progress bar or a spinner on how important it is for the user to keep track of progress, and how much space you have to show it.</p>
  <p>For example, a download manager may use a progress bar so that you can easily tell that a download is continuing. But a mail client may use spinners for sending mail or updating mail folders, since that is something that can happen in the background.</p>
</div>
  <div class="col-10">
  <h3>Determinate indicators</h3>
  <p>Use a determinate progress bar or spinner for tasks where the activity can be determined at any point in time, such as downloading or importing an item. If you have space within the same screen then place the progress bar below the action that initiated it.</p>
</div>
  <div class="col-5">
  <h4>Progress bar – downloading</h4>
  <div class="image-container">
  <img src="{{ site.assets_path }}b7cc2368-366w_ActivityIndicators_ProgressBar.png" alt="366w_ActivityIndicators_ProgressBar" width="333" height="103">
</div>
</div>
  <div class="col-5">
  <h4>Spinner – transferring</h4>
  <div class="image-container">
  <img src="{{ site.assets_path }}79721f4b-366w_ActivityIndicators_DeterminateSpinner.png" alt="366w_ActivityIndicators_DeterminateSpinner" width="333" height="110">
</div>
</div>
  <div class="col-10 box-grey vertical-align vertical-align--image-left">
  <p><img class="vertical-align__image" src="{{ site.assets_path }}e9f11635-information-link.png" alt="" width="32" height="32"></p>
  <div class="vertical-align__content">
  <p>The toolkit progress bars and spinners automatically handle presence for individual tasks by waiting for two seconds. If the task takes less than that they won&#8217;t appear at all.</p>
</div>
</div>
  <div class="col-10">
  <h3>Indeterminate indicators</h3>
  <p>Use a indeterminate progress bar or spinner if the proportion complete is unknown. For instance, the loading of a screen or re-caching a browser is something the user doesn&#8217;t need further information on and can happen in the background.</p>
</div>
  <div class="col-5">
  <h4>Progress bar – updating</h4>
  <div class="image-container">
  <img src="{{ site.assets_path }}36038136-366w_ActivityIndicators_IndeterminateProgress.png" alt="366w_ActivityIndicators_IndeterminateProgress" width="339" height="628">
</div>
</div>
  <div class="col-10">
  <h4>Spinner – loading</h4>
  <div class="image-container">
  <img src="{{ site.assets_path }}31d111ac-750w_ActivityIndicators_Spinner.png" alt="750w_ActivityIndicators_Spinner" width="679" height="197">
</div>
</div>
</section>
  <section class="row no-padding-right no-padding-left">
  <div class="link-top not-for-small">
  <a href="#">Back to top</a>
</div>
  <h2 id="best-practises">Best practices</h2>
  <div class="col-10">
  <h3>Steps of completeness</h3>
  <p>A determinate progress bar or spinner with a known period of completion should always fill for a successful task, exactly once. For example when a user is downloading a new music track, then an acknowledgement that the download has been completed would be a filled progress bar.</p>
</div>
  <div class="col-5">
  <h4>Indeterminate steps</h4>
  <div class="col-5 image-container">
  <img src="{{ site.assets_path }}69824bb1-366w_ActivityIndicators_DeterminateSteps.png" alt="366w_ActivityIndicators_DeterminateSteps" width="333" height="110">
</div>
  <p>If the last step in a task is verifying its success, then allocate a fraction of the indicator to it. This communicates to the user that the software is preparing to be complete.</p>
</div>
  <div class="col-5">
  <h4>Determinate steps</h4>
  <div class="col-5 image-container">
  <img src="{{ site.assets_path }}f6bca0f9-366w_ActivityIndicators_IndeterminateSteps-1.png" alt="366w_ActivityIndicators_IndeterminateSteps" width="333" height="110">
</div>
  <p>Never let an Activity Indicator go backwards. If the task size changes part-way through, reallocate the remaining fraction of the indicator to that.</p>
</div>
  <div class="col-5">
  <h4>Use only for task progression</h4>
  <div class="col-5 image-container">
  <img src="{{ site.assets_path }}08e61720-366w_ActivityIndicators_DontSpinner.png" alt="366w_ActivityIndicators_Don'tSpinner" width="333" height="153">
</div>
  <p>Don&#8217;t use an Activity Indicator for anything that isn&#8217;t progress of a task, such as waiting for user input or as a gauge for anything else.</p>
</div>
  <div class="col-5">
  <h4>Avoid confusion</h4>
  <div class="col-5 image-container">
  <img src="{{ site.assets_path }}cb401570-366w_ActivityIndicators_AvoidConfusion.png" alt="366w_ActivityIndicators_AvoidConfusion" width="333" height="153">
</div>
  <p>Don&#8217;t fill the indicator if the task has failed, because it could confuse the user.</p>
</div>
  <div class="col-10 box-grey vertical-align vertical-align--image-left">
  <p><img class="vertical-align__image" src="{{ site.assets_path }}75f60d24-link_external.png" alt="" width="32" height="32"></p>
  <div class="vertical-align__content">
  <p>See Communicating Progress (coming soon) for best practices on labelling Activity Indicators.</p>
</div>
</div>
</section>
  <section class="row no-padding-right no-padding-left no-border no-padding-bottom">
  <div class="link-top not-for-small">
  <a href="#">Back to top</a>
</div>
</section>
</div>
