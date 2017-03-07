---
collection: patterns
title: Strips
---

## Strip accent
The purpose of the strip accent pattern displays content with a highlighted
site accent strip style.

<section class="p-strip--accent">
  <div class="row">
    <h2>.p-strip--accent</h2>
  </div>
  <div class="row">
    <div class="col-6">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div class="col-6">
      <img src="http://placehold.it/150x150" alt="Placeholder image" />
    </div>
  </div>
</section>

```html
<section class="p-strip--accent">
  <div class="row">
    <h2>.p-strip--accent</h2>
  </div>
  <div class="row">
    <div class="col-6">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div class="col-6">
      <img src="http://placehold.it/150x150" alt="Placeholder image" />
    </div>
  </div>
</section>
```

## Strip image
This pattern allows for an image background to be appear as a background on a strip.

**Note:** Declare the background-image as an inline style attribute in the HTML markup.

You can also add the classes '.is-light' and '.is-dark' to the strips to describe the background image.
These classes will then override the text color to ensure it remains visible.

<section class="p-strip--image is-light" style="background-image:url('https://assets.ubuntu.com/sites/ubuntu/latest/u/img/backgrounds/image-background-paper.png')">
  <div class="row">
    <h2>.p-strip--image</h2>
  </div>
  <div class="row">
    <div class="col-6">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div class="col-6">
      <img src="http://placehold.it/150x150" alt="Placeholder image" />
    </div>
  </div>
</section>

```html
<section class="p-strip--image is-light" style="background-image:url('https://assets.ubuntu.com/sites/ubuntu/latest/u/img/backgrounds/image-background-paper.png')">
  <div class="row">
    <h2>.p-strip--image</h2>
  </div>
  <div class="row">
    <div class="col-6">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div class="col-6">
      <img src="http://placehold.it/150x150" alt="Placeholder image" />
    </div>
  </div>
</section>
```
