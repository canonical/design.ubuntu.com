---

layout: post
title: "Selection controls"
body-id: "apps"
body-class: "guidelines"
---

{% include side-nav-apps.html %}

<div id="loop-guidelines" class="ten-col last-col">
<section class="row no-padding-top no-padding-right no-padding-left">
<div class="ten-col">
<h3>The following components are used to change the state of a property or setting from a set of predefined values.</h3>
<div class="image-container"><img src="https://assets.ubuntu.com/v1/ee20c929-750w_FormElements_Alignment-1.png" alt="750w_FormElements_Alignment (1)" width="679" height="154" /></div>
</div>
<div class="combined-list">
<ul class="list five-col">
<li><a href="#checkbox">Checkbox&nbsp;&rsaquo;</a></li>
<li><a href="#radio-buttons">Radio buttons&nbsp;&rsaquo;</a></li>
<li><a href="#switches">Switches&nbsp;&rsaquo;</a></li>
<li><a href="#date-and-time-pickers">Date and time pickers&nbsp;&rsaquo;</a></li>
<li><a href="#slider">Slider&nbsp;&rsaquo;</a></li>
</ul>
</div>
</section>
<section class="row no-padding-right no-padding-left">
<div class="ten-col">
<h2 id="checkbox">Checkbox</h2>
<p>Use a checkbox to enable or select an option from a list; or as a singular option. For example, a singular option that is an instruction to the system such as &#8216;Show password&#8217;, or selecting a property to be applied or unapplied to add or change a setting; such as changing a font style to &#8216;Bold&#8217; and &#8216;Italic&#8217;.</p>
</div>
<div class="ten-col box-grey vertical-align vertical-align--image-left">
<p><img class="vertical-align__image" src="https://assets.ubuntu.com/v1/608696e3-developer_links.png" alt="" width="32" height="32" /></p>
<div class="vertical-align__content">
<p>The <a href="https://developer.ubuntu.com/api/apps/qml/sdk-15.04.4/Ubuntu.Components.CheckBox/"> Checkbox API</a> is a component with two states: checked or unchecked. It can be used to set boolean options.</p>
</div>
</div>
<div class="five-col">
<h4>Multiple options</h4>
<div class="image-container"><img src="https://assets.ubuntu.com/v1/880961a6-366w_FormElements_MultipleOptions.png" alt="366w_FormElements_MultipleOptions" width="336" height="434" /></div>
</div>
<div class="five-col last-col">
<h4>Single option</h4>
<div class="image-container"><img src="https://assets.ubuntu.com/v1/72eb1894-366w_FormElements_SingleOptions.png" alt="366w_FormElements_SingleOptions" width="336" height="434" /></div>
</div>
<div class="five-col">Use multiple checkboxes to allow users to select more than one option. For example, selecting a number of contacts from a list to delete at once.</div>
<div class="five-col last-col">Use stand-alone checkboxes for a single option where the user can turn it on or off, or select or unselect an option. For example, selecting automatic brightness adjustment in System Settings you only need one checkbox.</div>
<div class="ten-col">
<h3>Use cases</h3>
<p>If you are asking the user to turn a setting or instruction on or off, then use a switch instead. For example, turning the Bluetooth setting on or off.</p>
</div>
<div class="five-col image-container"><img src="https://assets.ubuntu.com/v1/7c36aac8-366w_ListItems_CommunicatingFeedback1-1.png" alt="366w_ListItems_CommunicatingFeedback1 (1)" width="338" height="410" /></div>
<h4 class="ten-col">Make the options clear</h4>
<div class="five-col">
<div class="five-col image-container"><img src="https://assets.ubuntu.com/v1/64679339-366w_FormElements_UseCasesDo.png" alt="366w_FormElements_UseCasesDo" width="336" height="216" /></div>
<div class="five-col no-margin-bottom">
<div class="left"><img src="https://assets.ubuntu.com/v1/74c13c17-do_32.png" alt="do_32" width="32" height="32" /></div>
<h4 style="text-align: left; margin-top: 4px; margin-bottom: 10px;"><span style="color: #3eb34f;">Do</span></h4>
</div>
</div>
<div class="five-col last-col">
<div class="five-col image-container"><img src="https://assets.ubuntu.com/v1/41fb847d-366w_FormElements_UseCasesDont-1.png" alt="366w_FormElements_UseCasesDont (1)" width="336" height="216" /></div>
<div class="five-col no-margin-bottom">
<div class="left"><img src="https://assets.ubuntu.com/v1/01fb853b-dont_32.png" alt="dont_32" width="32" height="32" /></div>
<h4 style="text-align: left; margin-top: 4px; margin-bottom: 10px;"><span style="color: #ed3146;">Don&#8217;t</span></h4>
</div>
</div>
<div class="five-col">Use radio buttons or a radio menu if you have enough space for both the label and the option at once. This gives the user a clearer understanding of the choices they can make.</div>
<div class="five-col last-col">Use a single checkbox when it is not clear what the alternative option is. For example, the user might want to set their time zone manually, so give them that option as well.</div>
<div class="five-col">
<h4>Selection</h4>
<div class="image-container"><img src="https://assets.ubuntu.com/v1/1f50798e-366w_FormElements_Selection-1.png" alt="366w_FormElements_Selection (1)" width="336" height="182" /></div>
</div>
<div class="five-col last-col">
<h4>Confirmation</h4>
<div class="image-container"><img src="https://assets.ubuntu.com/v1/a3971eaa-366w_FormElements_Confirmation-1.png" alt="366w_FormElements_Confirmation (1)" width="336" height="182" /></div>
</div>
<div class="five-col">Each checkbox is independent of each other and can be selected individually. However, if the indeterminate checkbox is checked then all checkboxes are selected and unselected, respectively.</div>
<div class="five-col last-col">Use for single selection where users confirm an action, such as accepting Terms and Conditions of a setting.</div>
<div class="ten-col box-grey vertical-align vertical-align--image-left">
<p><img class="vertical-align__image" src="https://assets.ubuntu.com/v1/e9f11635-information-link.png" alt="" width="32" height="32" /></p>
<div class="vertical-align__content">
<p>Use indeterminate checkboxes when the value is neither checked or unchecked.</p>
</div>
</div>
<div class="ten-col">
<h4>Make it obvious</h4>
<p>Don&#8217;t make it hard for the user to understand the effect of the unchecked value.</p>
</div>
<div class="five-col">
<div class="five-col image-container"><img src="https://assets.ubuntu.com/v1/7ea5ce57-366w_FormElements_MakeItObvious_Good-1.png" alt="366w_FormElements_MakeItObvious_Good (1)" width="336" height="150" /></div>
<div class="left"><img src="https://assets.ubuntu.com/v1/74c13c17-do_32.png" alt="do_32" width="32" height="32" /></div>
<h4 style="text-align: left; margin-top: 10px; margin-bottom: 10px;"><span style="color: #3eb34f;">Do</span></h4>
</div>
<div class="five-col last-col">
<div class="five-col image-container"><img src="https://assets.ubuntu.com/v1/f765e6c2-366w_FormElements_MakeItObvious_Bad-1.png" alt="366w_FormElements_MakeItObvious_Bad (1)" width="336" height="150" /></div>
<div class="left"><img src="https://assets.ubuntu.com/v1/01fb853b-dont_32.png" alt="dont_32" width="32" height="32" /></div>
<h4 style="text-align: left; margin-top: 10px; margin-bottom: 10px;"><span style="color: #ed3146;">Don&#8217;t</span></h4>
</div>
<div class="ten-col">
<h3>Alignment</h3>
<p>When aligning checkboxes with labels, or other dependent controls, it is important that the user knows which checkbox belongs to the corresponding explanation.</p>
</div>
<div class="ten-col">
<div class="image-container"><img src="https://assets.ubuntu.com/v1/ee20c929-750w_FormElements_Alignment-1.png" alt="750w_FormElements_Alignment (1)" width="679" height="154" /></div>
</div>
<div class="ten-col box-grey vertical-align vertical-align--image-left">
<p><img class="vertical-align__image" src="https://assets.ubuntu.com/v1/75f60d24-link_external.png" alt="" width="32" height="32" /></p>
<div class="vertical-align__content">
<p>For more guidance on using familiar language and the right tone of voice for labels see Writing (coming soon).</p>
</div>
</div>
</section>
<section class="row no-padding-right no-padding-left">
<div class="link-top not-for-small"><a href="#">Back to top</a></div>
<div class="ten-col">
<h2 id="radio-buttons">Radio buttons</h2>
<p>Use radio buttons when there is a list of two or more options that are exclusive of each other and only one choice can be selected.</p>
</div>
<div class="five-col">
<h4>Choosing a message tone</h4>
<div class="image-container"><img src="https://assets.ubuntu.com/v1/2374ae19-366w_FormElements_MessageTone.png" alt="366w_FormElements_MessageTone" width="336" height="220" /></div>
</div>
<div class="ten-col">Clicking a non-selected radio button will deselect whichever button was previously selected. For example, &#8216;Soft delay&#8217; will be deselected if the user selects another option.</div>
<div class="ten-col box-grey vertical-align vertical-align--image-left">
<p><img class="vertical-align__image" src="https://assets.ubuntu.com/v1/e9f11635-information-link.png" alt="" width="32" height="32" /></p>
<div class="vertical-align__content">
<p>Options presented with radio buttons require less mental effort, because users can easily compare options as they are all visible at once.</p>
</div>
</div>
<div class="five-col">
<h4>One selection &#8211; use radio buttons</h4>
<div class="image-container"><img src="https://assets.ubuntu.com/v1/ab39ea6e-366w_FormElements_OneSelection.png" alt="366w_FormElements_OneSelection" width="336" height="180" /></div>
</div>
<div class="five-col last-col">
<h4>Multiple selection &#8211; use checkboxes</h4>
<div class="image-container"><img src="https://assets.ubuntu.com/v1/b958d70a-366w_FormElements_MultipleSelection.png" alt="366w_FormElements_MultipleSelection" width="336" height="180" /></div>
</div>
<div class="ten-col">
<h3>Use other controls if necessary</h3>
</div>
<div class="ten-col">If you have a selection of options that are long to list and the user could type it faster, then use a text field instead.</div>
<div class="five-col">
<div class="five-col image-container"><img src="https://assets.ubuntu.com/v1/b74dd1e8-366w_FormElements_OtherControls_radio.png" alt="366w_FormElements_OtherControls_radio" width="336" height="250" /></div>
<div class="five-col no-margin-bottom">
<div class="left"><img src="https://assets.ubuntu.com/v1/74c13c17-do_32.png" alt="do_32" width="32" height="32" /></div>
<h4 style="text-align: left; margin-top: 4px; margin-bottom: 10px;"><span style="color: #3eb34f;">Do</span></h4>
</div>
</div>
<div class="five-col last-col">
<div class="five-col image-container"><img src="https://assets.ubuntu.com/v1/c505cfa3-366w_FormElements_OtherControls_form.png" alt="366w_FormElements_OtherControls_form" width="336" height="250" /></div>
<div class="five-col no-margin-bottom">
<div class="left"><img src="https://assets.ubuntu.com/v1/01fb853b-dont_32.png" alt="dont_32" width="32" height="32" /></div>
<h4 style="text-align: left; margin-top: 4px; margin-bottom: 10px;"><span style="color: #ed3146;">Don&#8217;t</span></h4>
</div>
</div>
<div class="ten-col">Don&#8217;t use a radio menu entirely for command items. If the menu never contains any radio items, then use a toolbutton menu instead.</div>
<div class="ten-col box-grey vertical-align vertical-align--image-left">
<p><img class="vertical-align__image" src="https://assets.ubuntu.com/v1/e9f11635-information-link.png" alt="" width="32" height="32" /></p>
<div class="vertical-align__content">
<p>A toolbutton is a borderless button, as found in the header or a bottom-edge panel. It usually consists of an icons, but may instead contain text buttons. See Buttons (coming soon) for more details.</p>
</div>
</div>
<div class="ten-col">
<h3>Radio list</h3>
<p>If you have a large set of radio buttons then place them in a list. That way users can easily navigate and scroll through the options.</p>
</div>
<div class="five-col">
<h4>A list of organizations</h4>
<div class="image-container"><img src="https://assets.ubuntu.com/v1/4adf01fa-366w_FormElements_Organisations.png" alt="366w_FormElements_Organisations" width="336" height="292" /></div>
</div>
<div class="ten-col">
<h4>Don&#8217;t interrupt the user</h4>
<p>When a user selects an option avoid hindering them from choosing another option by opening up a dialog or closing the window.</p>
<div class="image-container"><img src="https://assets.ubuntu.com/v1/48b5d7bc-750w_FormElements_DontInterupt.png" alt="750w_FormElements_DontInterupt" width="677" height="300" /></div>
</div>
</section>
<section class="row no-padding-right no-padding-left">
<div class="link-top not-for-small"><a href="#">Back to top</a></div>
<div class="ten-col">
<h2 id="switches">Switches</h2>
</div>
<div class="ten-col">The switch allows the user to perform an action by turning it on or off.</div>
<div class="ten-col">
<div class="image-container"><img src="https://assets.ubuntu.com/v1/49e2bc42-750w_FormElements_UseCasesBluetooth.png" alt="750w_FormElements_UseCasesBluetooth" width="679" height="300" /></div>
</div>
<div class="ten-col box-grey vertical-align vertical-align--image-left">
<p><img class="vertical-align__image" src="https://assets.ubuntu.com/v1/608696e3-developer_links.png" alt="" width="32" height="32" /></p>
<div class="vertical-align__content">
<p>The <a class="external" href="https://developer.ubuntu.com/api/qml/current/Ubuntu.Components.Switch/">Switch API</a> is a component with two states: checked or unchecked. It can be used to set boolean options. The behavior is the same as CheckBox, the only difference is the graphical style.</p>
</div>
</div>
<div class="ten-col">
<h3>Use cases</h3>
<p>If you are asking the user to turn a setting or instruction on or off, then use a switch.</p>
</div>
<div class="five-col">
<div class="image-container"><img src="https://assets.ubuntu.com/v1/afc631f2-366w_ListItems_UseCases1-2.png" alt="366w_ListItems_UseCases1 (2)" width="336" height="534" /></div>
</div>
<div class="ten-col">
<h3>When not to use</h3>
<p>If you asking the user to choose between options to set a value, then use checkboxes or radio buttons instead. For example, choosing a selection of font styles where you can have a combination.</p>
</div>
<div class="five-col">
<div class="image-container"><img src="https://assets.ubuntu.com/v1/35a239fa-366w_FormElements_WhenNotToUse-1.png" alt="366w_FormElements_WhenNotToUse (1)" width="336" height="172" /></div>
</div>
</section>
<section class="row no-padding-right no-padding-left">
<div class="link-top not-for-small"><a href="#">Back to top</a></div>
<div class="ten-col">
<h2 id="date-and-time-pickers">Date and time pickers</h2>
<p>The toolkit provides a combination of multiple pickers for you to use to show the time and date in your app.</p>
</div>
<div class="ten-col">
<h3>Spinner</h3>
<p>Use the spinner component to display a set of values on a reel that can be either flickable or draggable.</p>
</div>
<div class="ten-col box-grey vertical-align vertical-align--image-left">
<p><img class="vertical-align__image" src="https://assets.ubuntu.com/v1/608696e3-developer_links.png" alt="" width="32" height="32" /></p>
<div class="vertical-align__content">
<p>The <a class="external" href="https://developer.ubuntu.com/api/apps/qml/sdk-15.04.4/Ubuntu.Components.PickerPanel/">PickerPanel API</a> is a component that provides the date and time values with picking functionality.</p>
</div>
</div>
<div class="five-col">
<h4>Display month, year and day</h4>
<div class="image-container"><img src="https://assets.ubuntu.com/v1/2355f6a3-366w_FormElements_DayMonth.png" alt="366w_FormElements_DayMonth" width="335" height="337" /></div>
</div>
<div class="five-col last-col">
<h4>Display time</h4>
<div class="image-container"><img src="https://assets.ubuntu.com/v1/e0fdbcf7-366w_FormElements_time-picker.png" alt="366w_FormElements_time" width="335" height="337" /></div>
</div>
<div class="ten-col">
<h3>Layout</h3>
<p>There are three possible ways you can layout pickers: fullscreen overlay, as a popover, or embedded into the UI.</p>
</div>
<div class="ten-col">
<h4>Fullscreen overlay</h4>
<p>Use a fullscreen overlay in larger screen environments, such as tablet or desktop.</p>
<p><img src="https://assets.ubuntu.com/v1/f4f47c55-366w_FormElements_date-desktop.png" alt="366w_FormElements_date desktop" width="336" height="337" /></p>
</div>
<div class="five-col">
<h4>Popover</h4>
<div class="image-container"><img src="https://assets.ubuntu.com/v1/e0fdbcf7-366w_FormElements_time-picker.png" alt="366w_FormElements_time picker" width="336" height="337" /></div>
</div>
<div class="five-col last-col">
<h4>Embedded</h4>
<div class="image-container"><img src="https://assets.ubuntu.com/v1/9d7306e9-366w_FormElements_embedded.png" alt="366w_FormElements_embedded" width="336" height="337" /></div>
</div>
<div class="five-col">Use for popup or inline calendars when you are short of space.</div>
<div class="five-col last-col">Use for when you want the picker to be expandable and always visible. For example, inside the Clock app you will see it used for when you want to edit an alarm.</div>
<div class="ten-col">
<h3>Using multi-spinners</h3>
<p>The Time Picker supports hour, minute and seconds elements in any combination; except hours with seconds.</p>
</div>
<div class="five-col">
<h4>Three spinner time picker</h4>
<div class="image-container"><img src="https://assets.ubuntu.com/v1/75225ed8-366w_FormElements_time-3-inputs-1.png" alt="366w_FormElements_time 3 inputs (1)" width="336" height="337" /></div>
</div>
<div class="ten-col box-grey vertical-align vertical-align--image-left">
<p><img class="vertical-align__image" src="https://assets.ubuntu.com/v1/608696e3-developer_links.png" alt="" width="32" height="32" /></p>
<div class="vertical-align__content">
<p>An AM/PM selector will be added if the 12-hour clock is used.</p>
</div>
</div>
</section>
<section class="row no-padding-right no-padding-left">
<div class="link-top not-for-small"><a href="#">Back to top</a></div>
<div class="ten-col">
<h2 id="slider">Slider</h2>
<p>Use interactive sliders to select a value from a continuous or discrete range of values.</p>
</div>
<div class="ten-col box-grey vertical-align vertical-align--image-left">
<p><img class="vertical-align__image" src="https://assets.ubuntu.com/v1/608696e3-developer_links.png" alt="" width="32" height="32" /></p>
<div class="vertical-align__content">
<p>The <a class="external" href="https://developer.ubuntu.com/api/apps/qml/sdk-15.04.4/Ubuntu.Components.Slider/">Slider API</a> is a component that allow the user to select a value from a continuous range of values.</p>
</div>
</div>
<div class="ten-col">
<h3>Slider types</h3>
<p>You can choose between different slider types to allow the user to set different values.</p>
</div>
<div class="ten-col box-grey vertical-align vertical-align--image-left">
<p><img class="vertical-align__image" src="https://assets.ubuntu.com/v1/e9f11635-information-link.png" alt="" width="32" height="32" /></p>
<div class="vertical-align__content">
<p>The interactive nature of the slider makes it a great choice for settings that reflect intensity levels, such as volume, brightness, or color saturation.</p>
</div>
</div>
<div class="ten-col">
<h3>Default slider</h3>
<p>You can use this slider to select a specific value or a maximum value in a range. For example, adjusting the screens brightness percentage.</p>
</div>
<div class="five-col">
<div class="five-col image-container"><img src="https://assets.ubuntu.com/v1/c1984dd9-366w_FormElements_DefaultSlider-1.png" alt="366w_FormElements_DefaultSlider (1)" width="336" height="200" /></div>
</div>
<div class="five-col">
<h4>Minimum value slider</h4>
<div class="five-col image-container"><img src="https://assets.ubuntu.com/v1/cf51ab65-366w_FormElements_MinimumValueSlider.png" alt="366w_FormElements_MinimumValueSlider" width="336" height="150" /></div>
</div>
<div class="five-col last-col">
<h4>Interval slider</h4>
<div class="five-col image-container"><img src="https://assets.ubuntu.com/v1/b35a3137-366w_FormElements_IntervalValueSlider.png" alt="366w_FormElements_IntervalValueSlider" width="336" height="150" /></div>
</div>
<div class="five-col">Use to select a minimum value in a range, by providing two handles that can select between values. For example, set the value to a minimum price range to make it easier for the user to select between prices.</div>
<div class="five-col last-col">The interval slider has two handles that can select between values. For example, setting a price range between £20 to £40 inside a Shopping app.</div>
<div class="ten-col">
<h3>System volume control</h3>
<p>A system volume control is a control that any app can embed in its UI. You should use this slider control when your app needs only one volume control.</p>
</div>
<div class="five-col last-col">
<div class="five-col image-container"><img src="https://assets.ubuntu.com/v1/0d243a39-366w_FormElements_VolumeControl.png" alt="366w_FormElements_VolumeControl" width="336" height="171" /></div>
</div>
<div class="ten-col">
<p>For example, if you app has a media player or is a game that has sound effects, but no background music.It consists of a slider that automatically reflects and adjusts the audio volume for the current output role through the current output device.</p>
</div>
<div class="ten-col box-grey vertical-align vertical-align--image-left">
<p><img class="vertical-align__image" src="https://assets.ubuntu.com/v1/608696e3-developer_links.png" alt="" width="32" height="32" /></p>
<div class="vertical-align__content">
<p>The System volume control component is currently under heavy development because it might also include other audio features, so you won&#8217;t have to worry about developing it yourself.</p>
</div>
</div>
<div class="ten-col">
<h4>The advantages of using system volume control:</h4>
<ul>
<li>people won&#8217;t be annoyed that your app is louder or quieter than others, because your app uses the system audio volume</li>
<li>volume change notifications don&#8217;t appear in front of your app when the slider is altered (especially important for a video player)</li>
<li>you don&#8217;t need to implement your own volume-adjusting code, because Ubuntu changes the volume of your app automatically</li>
<li>any future Ubuntu features for audio routing will become available to your app automatically, without any code changes required</li>
</ul>
</div>
<div class="ten-col">
<p>If your app plays multiple types of sound, then provide a mute button and separate volume control for each type. For example, a game that plays background music as well as sound effects. Avoid labelling the system volume control because it already includes icons that indicate its purpose.</p>
</div>
</section>
<section class="row no-padding-right no-padding-left no-border">
<div class="link-top not-for-small"><a href="#">Back to top</a></div>
</section>
</div>


</div>


