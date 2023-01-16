---
wrapper_template: '_layouts/page.html'
context:
  title: Ubuntu font
---

<div class="p-strip is-shallow u-no-padding--top">
  <div class="row">
    <div class="col-9">
      <p>The way typography is used says as much about our brand as the words themselves.</p>
      <p>The Ubuntu typeface has been specially created to complement the Ubuntu tone of voice. It has a contemporary style and contains characteristics unique to the Ubuntu brand that convey a precise, reliable and free attitude.</p>
    </div>
  </div>
</div>
<div class="p-strip u-no-padding--top is-bordered">
  <div class="row u-equal-height">
    <div class="col-4 p-card">
      <h3 class="p-card__title">Ubuntu</h3>
      <p style="font-size: 24px;">It’s no use going back to yesterday, because I was a different person then.</p>
    </div>
    <div class="col-4 p-card">
      <h3 class="p-card__title" style="font-family: 'Ubuntu Condensed';">Ubuntu Condensed</h3>
      <p style="font-family: 'Ubuntu Condensed'; font-size: 24px;">Why, sometimes I've believed as many as six impossible things before breakfast.</p>
    </div>
    <div class="col-4 p-card">
      <h3 class="p-card__title" style="font-family: 'Ubuntu Mono';">Ubuntu Monospace</h3>
      <p style="font-family: 'Ubuntu Mono'; font-size: 16px;">
        A: Would you tell me, please, which way I ought to go from here?<br /> C: That depends a good deal on where you want to get to.
      </p>
    </div>
  </div>
</div>

<div class="p-strip--light is-deep ">
  <div class="row">
    <div class="col-8">
      <h2>Ubuntu font tester</h2>
    </div>
  </div>
  <div class="row">
    <form class="font-tester">
      <div class="col-3">
        <label for="size">Size</label>
        <select class="font-tester__option js-font-select" name="size">
          <option value="16" selected>16px</option>
          <option value="21">21px</option>
          <option value="24">24px</option>
          <option value="36">36px</option>
          <option value="48">48px</option>
        </select>
      </div>
      <div class="col-3">
        <label for="family">Family</label>
        <select class="font-tester__option js-font-select" name="family">
          <option value="ubuntu" selected>Ubuntu</option>
          <option value="condensed">Ubuntu Condensed</option>
          <option value="monospace">Ubuntu Monospace</option>
        </select>
      </div>
      <div class="col-2">
        <label for="weight">Weight</label>
        <select class="font-tester__option js-font-select" name="weight">
          <option value="thin">Thin</option>
          <option value="light">Light</option>
          <option value="regular" selected>Regular</option>
          <option value="medium">Medium</option>
          <option value="bold">Bold</option>
        </select>
      </div>
      <div class="col-2">
        <label for="style">Style</label>
        <select class="font-tester__option js-font-select" name="style">
          <option value="normal" selected>Normal</option>
          <option value="italic">Italic</option>
        </select>
      </div>
      <div class="col-2">
        <label for="color">Color</label>
        <select class="font-tester__option js-font-select" name="color">
          <option value="black" selected>Black</option>
          <option value="aubergine">Aubergine</option>
          <option value="orange">Orange</option>
        </select>
      </div>
      <textarea class="font-tester__demo js-font-demo" data-size="16" data-family="ubuntu" data-weight="light" data-style="normal" data-color="black">
Type your text here

Latin sample:
Lorem ipsum dolor sit amet, quo tacimates dissentiet no at.

Cyrillic sample:
Лорем ипсум долор сит амет, видит елигенди перпетуа усу еу.

Greek sample:
Λορεμ ιπσθμ δολορ σιτ αμετ, μεα νατθμ ηαβεμθσ νο σιτ.

</textarea>
    </form>
  </div>
</div>

<div class="p-strip--accent is-dark is-deep">
  <div class="row">
    <div class="col-8">
      <h2>About the Ubuntu font family</h2>
      <p>The Ubuntu font family are a set of matching new libre/open fonts. The development is being funded by <a href="http://www.canonical.com/" class="p-link--inverted">Canonical</a> on behalf the wider Free Software community and the Ubuntu project.
        The technical font design work and implementation is being undertaken by <a href="http://www.daltonmaag.com/" class="p-link--inverted">Dalton&nbsp;Maag</a>.</p>
      <p>Both the final font Truetype/OpenType files and the design files used to produce the font family are distributed under an <a href="http://www.ubuntu.com/legal/terms-and-policies/font-licence" class="p-link--inverted">open licence</a> and you are
        expressly encouraged to experiment, modify, share and improve. The typeface is sans-serif, uses OpenType features and is manually hinted for clarity on desktop and mobile computing screens.</p>
      <p>The scope of the Ubuntu Font Family includes all the languages used by the various Ubuntu users around the world in tune with Ubuntu&apos;s philosophy which states that every user should be able to use their software in the language of their choice.
        So the Ubuntu Font Family project will be extended to cover many more written languages.</p>
    </div>
  </div>
</div>

<div class="p-strip--light is-deep is-bordered">
  <div class="row">
    <div class="col-7">
      <h2>Facts and figures</h2>
      <p>The Ubuntu font family is a sans-serif typeface family with an intended coverage of thirteen fonts.</p>
    </div>
  </div>
  <div class="row">
    <div class="col-6">
      <div>
      <h3>Coverage</h3>
      <p>1,200 glyphs, 200-250 languages (native languages of 3 billion people!).</p>
      <h3>Technology</h3>
      <ul class="p-list">
        <li class="p-list__item is-ticked">OpenType-based TTF (TrueType)</li>
        <li class="p-list__item is-ticked">Alternative glyphs (e.g. proportional/non-proportional/superscript/subscript numerals)</li>
        <li class="p-list__item is-ticked">Debugging glyphs (U+EFFD, U+EFFE, U+EFFF, U+F000) giving face, version, grayscale level and pixels-per-em digit display</li>
      </ul>
      <p>The pixels-per-em 7-segment digits are driven by the hint engine (substituted from the DejaVu fonts), so if hinting is by default off (e.g. Firefox) then the output will show as a pair of &ldquo;88&rdquo; numerals.</p>
    </div>
    </div>
    <div class="col-6">
      <h3>Design</h3>
      <p>The four Latin characters, &apos;n o H O&apos; helped to define a guide for around 80-percent of the remaining characters. Extensive manual hinting has been performed for rendered sizes below 60 pixels-per-em.</p>
      <p>Software used:</p>
      <ul class="p-list">
        <li class="p-list__item is-ticked">Fontlab Studio</li>
        <li class="p-list__item is-ticked">Microsoft Visual Truetype (VTT)</li>
        <li class="p-list__item is-ticked">In-house Python-based accent placement scripts</li>
      </ul>
    </div>
  </div>
</div>

<div class="p-strip is-deep">
  <div class="row">
    <div class="col-8">
      <h2>Resources</h2>
      <ul class="p-list--divided">
        <li class="p-list__item"><a href="https://assets.ubuntu.com/v1/0cef8205-ubuntu-font-family-0.83.zip">Download the Ubuntu Font Family</a> (2.2MB)</li>
        <li class="p-list__item"><p><a href="https://assets.ubuntu.com/v1/0f5898c1-ubuntu-font-family-sources_0.83.orig.tar.gz">Download the Ubuntu Font Family source code</a></p> (For font designers with a copy of Font Lab Studio, 8.4MB)</li>
        <li class="p-list__item"><a href="https://fonts.google.com/?query=Ubuntu">Google Fonts</a></li>
        <li class="p-list__item"><a href="http://launchpad.net/ubuntu-font-family">Launchpad</a></li>
        <li class="p-list__item"><a href="http://wiki.ubuntu.com/Ubuntu_Font_Family">Wiki documentation</a></li>
      </ul>
      <p><a href="https://assets.ubuntu.com/v1/0cef8205-ubuntu-font-family-0.83.zip" class="p-button--positive">Download for free</a></p>
    </div>
  </div>
</div>
