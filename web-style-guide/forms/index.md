---
layout: web-guidelines
title: "Forms"
body-id: "web-style-guide"
body-class: "web-style-guide"
---


<div class="row">
<h2 id="default">Default (vertical)</h2>
<p>The default form is stacked vertically (labels above inputs).</p>
<p class="smaller note"><strong>Example:</strong></p>
<div class="eight-col">
<form>
<fieldset>
<h3>1. Fieldset title</h3>
<ul class="p-list">
<li class="p-list__item">
<label for="example-1">Label:</label>
<input name="example-1" id="example-1" type="text" tabIndex="1" />
</li>
<li class="p-list__item">
<label for="example-2">Label:</label>
<select name="example-2" id="example-2" tabIndex="2">
<option value="" selected='selected'>Select</option>
<option value="1">Option 1</option>
<option value="2">Option 2</option>
</select>
</li>
<li class="p-list__item">
<label for="example-3">Label:</label>
<textarea name="example-3" id="example-3" cols='20' rows='6' tabIndex='3'></textarea>
</li>
<li class="p-list__item">
<input name="example-4" id="example-4" type="checkbox" value="1" tabindex="4">
<label for="example-4">Example of a checkbox label</label>
</li>
</ul>
</fieldset>
<fieldset class="fieldset-submit">
<ul class="p-list">
<li class="p-list__item">There is space for notes here.</li>
<li class="p-list__item">
<input type="submit" value="Submit" tabindex="5">
</li>
</ul>
</fieldset>
</form>
</div>

<div class="ten-col">
<p class="smaller note"><strong>Code:</strong></p>
<pre>&lt;form&gt;
&lt;fieldset&gt;
&lt;h3&gt;Fieldset title&lt;/h3&gt;
&lt;ul&gt;
&lt;li&gt;
&lt;label for="example-1"&gt;Label:&lt;/label&gt;
&lt;input name="example-1" id="example-1" type="text" tabIndex="1"&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;label for="example-2"&gt;Label:&lt;/label&gt;
&lt;select name="example-2" id="example-2" tabIndex="2"&gt;
&lt;option value="" selected="selected"&gt;Select&lt;/option&gt;
&lt;option value="1"&gt;Option 1&lt;/option&gt;
&lt;option value="2"&gt;Option 2&lt;/option&gt;
&lt;/select&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;label for="example-3"&gt;Label:&lt;/label&gt;
&lt;textarea name="example-3" id="example-3" cols="20" rows="6" tabIndex="3"&gt;&lt;/textarea>
&lt;/li&gt;
&lt;li&gt;
&lt;input name="example-4" id="example-4" type="checkbox" value="1" tabindex="4"&gt;
&lt;label for="example-4"&gt;Example of a checkbox label&lt;/label&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;/fieldset&gt;
&lt;fieldset class="fieldset-submit"&gt;
&lt;ul&gt;
&lt;li&gt;There is space for notes here.&lt;/li&gt;
&lt;li&gt;
&lt;input type="submit" value="Submit" tabindex="5"&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;/fieldset&gt;
&lt;/form&gt;</pre>
</div>

</div>

<div class="row no-border">
<div class="link-top"><a href="#">Back to top</a></div>
<h2 id="buttons">Buttons</h2>
<div class="eight-col">
<p>The main button style can be used in form submission buttons and other important call to actions. Apply using the class <code>.link-cta-ubuntu</code>.</p>
<p class="smaller note"><strong>Example:</strong></p>
<p><a href="#" class="link-cta-ubuntu">Main button</a></p>
<div class="col-7">
<p class="smaller note"><strong>Code:</strong></p>
<pre>&lt;a href="#" class="link-cta-ubuntu"&gt;Main button&lt;/a&gt;</pre>
</div>
</div>
<div class="four-col last-col">
<div class="box">
<p><strong>Note:</strong> Avoid using more than one call to action button per page.</p>
</div>
</div>
<div class="eight-col">
<h3>Inverted button</h3>
<p>On full-orange and full-aubergine rows, you can use the class <code>.link-cta-inverted</code> to invert the colours of the button and give it a white background.</p>
<p class="smaller note"><strong>Example:</strong></p>
<div class="row col-7 no-border" style="background: #E95420; padding: 20px 20px 10px;">
<p><a href="#" class="link-cta-inverted">Inverted button</a></p>
</div>     
<div class="col-7">
<br />
<p class="smaller note"><strong>Code:</strong></p>
<pre>&lt;a href="#" class="link-cta-inverted"&gt;Inverted button&lt;/a&gt;</pre>
</div>
</div>
<div class="eight-col">
<h3>Large buttons</h3>
<p>Where a large button is needed (for example, download pages or homepages), use the class <code>.cta-large</code> on any button style to increase font and padding size.</p>
<p class="smaller note"><strong>Example:</strong></p>
<p><a href="#" class="link-cta-ubuntu cta-large">Large Ubuntu button</a></p>
<div class="row col-7 no-border" style="background: #E95420; padding: 20px 20px 0px;">
<p><a href="#" class="link-cta-inverted cta-large">Large inverted button</a></p>
</div>
<div class="col-7">
<br />
<p class="smaller note"><strong>Code:</strong></p>
<pre>&lt;a href="#" class="link-cta-ubuntu cta-large"&gt;Large Ubuntu button&lt;/a&gt;</pre>
</div>
</div>
<div class="eight-col">
<h3>Deactivated button</h3>
<p>If necessary, apply using the class <code>.cta-deactivated</code>.</p>
<p class="smaller note"><strong>Example:</strong></p>
<p><a href="#" class="link-cta-ubuntu cta-deactivated">Deactivated button</a></p>
<div class="col-7">
<p class="smaller note"><strong>Code:</strong></p>
<pre>&lt;a href="#" class="link-cta-ubuntu cta-deactivated"&gt;Deactivated button&lt;/a&gt;</pre>
</div>
</div>
</div>

<div class="link-top"><a href="#">Back to top</a></div>
