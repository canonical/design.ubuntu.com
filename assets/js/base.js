/**
 * @project		Ubuntu Brand Guidelines
 * @author		Canonical Web Team: Steve Edwards
 */

base = {};
ajax_load = null;
page_class = null;
first_result_set = null;
template_dir = '/wp-content/themes/ubuntu-brand-guidelines';

$(document).ready(function() {
  base.setPageClass();
  base.getFirstResultSet();
  base.readySearch();
  base.readyAccordion();
  base.readyOverlay();
  base.readyCheckboxes();
  base.readySliders();
  base.readySliderCheckboxes();
  base.createSectionMenu();
});

/* polyfills */

/* Polyfill functions
 * =================== */

/**
 * Array.prototype.forEach polyfill
 * from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 */
if (!Array.prototype.forEach) {
    Array.prototype.forEach = function(fun) {
        if (
            this === void 0
            || this === null
            || typeof fun !== "function"
        ) { throw new TypeError(); }

        var t = Object(this);
        var len = t.length >>> 0;

        var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
        for (var i = 0; i < len; i++) {
            if (i in t) {
                fun.call(thisArg, t[i], i, t);
            }
        }
    };
}

/**
 * Add Array methods to NodeList
 */
Object.getOwnPropertyNames(Array.prototype).forEach(
  function (methodName) {
    if(!(methodName in NodeList.prototype)) {
      NodeList.prototype[methodName] = Array.prototype[methodName];
    }
  }
);

/* Element.prototype.classList polyfill, by Eli Grey, http://eligrey.com
 * https://github.com/eligrey/classList.js */
if("document"in self){if(!("classList"in document.createElement("_"))||document.createElementNS&&!("classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))){(function(t){"use strict";if(!("Element"in t))return;var e="classList",i="prototype",n=t.Element[i],s=Object,r=String[i].trim||function(){return this.replace(/^\s+|\s+$/g,"")},a=Array[i].indexOf||function(t){var e=0,i=this.length;for(;e<i;e++){if(e in this&&this[e]===t){return e}}return-1},o=function(t,e){this.name=t;this.code=DOMException[t];this.message=e},l=function(t,e){if(e===""){throw new o("SYNTAX_ERR","An invalid or illegal string was specified")}if(/\s/.test(e)){throw new o("INVALID_CHARACTER_ERR","String contains an invalid character")}return a.call(t,e)},c=function(t){var e=r.call(t.getAttribute("class")||""),i=e?e.split(/\s+/):[],n=0,s=i.length;for(;n<s;n++){this.push(i[n])}this._updateClassName=function(){t.setAttribute("class",this.toString())}},u=c[i]=[],f=function(){return new c(this)};o[i]=Error[i];u.item=function(t){return this[t]||null};u.contains=function(t){t+="";return l(this,t)!==-1};u.add=function(){var t=arguments,e=0,i=t.length,n,s=false;do{n=t[e]+"";if(l(this,n)===-1){this.push(n);s=true}}while(++e<i);if(s){this._updateClassName()}};u.remove=function(){var t=arguments,e=0,i=t.length,n,s=false,r;do{n=t[e]+"";r=l(this,n);while(r!==-1){this.splice(r,1);s=true;r=l(this,n)}}while(++e<i);if(s){this._updateClassName()}};u.toggle=function(t,e){t+="";var i=this.contains(t),n=i?e!==true&&"remove":e!==false&&"add";if(n){this[n](t)}if(e===true||e===false){return e}else{return!i}};u.toString=function(){return this.join(" ")};if(s.defineProperty){var h={get:f,enumerable:true,configurable:true};try{s.defineProperty(n,e,h)}catch(d){if(d.number===-2146823252){h.enumerable=false;s.defineProperty(n,e,h)}}}else if(s[i].__defineGetter__){n.__defineGetter__(e,f)}})(self)}else{(function(){"use strict";var t=document.createElement("_");t.classList.add("c1","c2");if(!t.classList.contains("c2")){var e=function(t){var e=DOMTokenList.prototype[t];DOMTokenList.prototype[t]=function(t){var i,n=arguments.length;for(i=0;i<n;i++){t=arguments[i];e.call(this,t)}}};e("add");e("remove")}t.classList.toggle("c3",false);if(t.classList.contains("c3")){var i=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(t,e){if(1 in arguments&&!this.contains(t)===!e){return e}else{return i.call(this,t)}}}t=null})()}}

/* Init methods */

// Set the current page class
base.setPageClass = function() {
  page_class = base.getPageClass();
};

// Get first result set and cache it
base.getFirstResultSet = function() {
  if (page_class != 'examples' && page_class != 'downloads') return false;

  var container = $('#loop-' + page_class);
  first_result_set = container.html();
};

// Prep search box and focus link
base.readySearch = function() {
  var search_box = $('#form-search input[type=text]');

  search_box.bind({
    focus: function() {
      if ($(this).val() == 'Search') {
        $(this).val('');
        $(this).css('font-style', 'normal');
      }
    },
    blur: function() {
      if ($(this).val() == '') {
        $(this).val('Search');
        $(this).css('font-style', 'italic');
      }
    }
  });

  if (page_class == '404') {
    search_box.focus();
  }
};

// Prep accordion widgets
base.readyAccordion = function() {
  $('#accordion').accordion({
    active: base.getAccordionActiveElement(),
    autoHeight: false,
    disabled: false
  });

  if ($('html').hasClass('mobile')) {
    $('#accordion').accordion({
      disabled: true
    });
  };

  // Set the active link text
  base.setAccordionActiveLinkText();
};

// Prep lightbox overlay
base.readyOverlay = function() {
  $('a.pretty-photo').attr('rel', 'prettyPhoto[pp_gal]').prettyPhoto({
    overlay_gallery: false,
    deeplinking: false
  });
};

// Prep checkboxes
base.readyCheckboxes = function() {
  // Just examples and downloads
  if (page_class != 'examples' && page_class != 'downloads') return false;

  $('input[type=checkbox]:not(".slider-check")').bind('click', function() {
    base.getFilteredResults(base.getFilterValues());
  });
}

// Prep sliders
base.readySliders = function() {
  // Just examples
  if (page_class != 'examples' && page_class != 'downloads') return false;

  $('.slider').slider({
    disabled: true, // Disabled by default
    animate: true,
    min: 0,
    max: 100,
    step: 50,
    value: 50,
    stop: function(event, ui) {
      base.getFilteredResults(base.getFilterValues());
    }
  });

  // Ensure sliders enable when clicked
  $('.slider').bind('click', function() {
    if ($(this).slider('option', 'disabled')) {
      $(this).slider('enable');
      $(this).prevAll('input:first').attr('checked', 'checked');
      base.getFilteredResults(base.getFilterValues());
    }
  });
};

// Prep slider switches
base.readySliderCheckboxes = function() {
  if (page_class != 'examples' && page_class != 'downloads') return false;

  $('.slider-check').bind('click', function() {
    base.toggleSlider($(this));
  });
}

// Build a section menu for content jumping
base.createSectionMenu = function() {
  // Just guidelines
  if (page_class != 'guidelines') return false;

  var select = $('<select></select');
  var option = $('<option value="">In this section:</option>');
  select.append(option);

  $('#loop-guidelines :header').each(function() {
    // Get number from heading tag and set matching prefix, i.e. H1 = &ndash; * 1, H2 = &ndash; * 2, etc.
    var split = $(this).get(0).nodeName.toLowerCase().split('h');
    var prefix = Array(parseInt(split[1])).join('&ndash;');
    // Get heading contents for ID, convert spaces to hyphens and remove question marks
    var content = $(this).text().toLowerCase().replace(/ /g, '-').replace(/\?/g, '');
    // Add the ID so we can jump...
    $(this).attr('id', content);
    var option = $('<option value="'  + content  + '">' + prefix + ' ' + $(this).text() + '</option>');
    select.append(option);
  });

  $('#section-menu').append(select);
  // Prep menu
  base.readySectionMenu();
};

/* Non-init methods */

// Get the current page class
base.getPageClass = function() {
  return $('body').attr('class');
};

// Get the active accordion element by parsing the URL
base.getAccordionActiveElement = function() {
  // If not guidelines, set the first element as active
  if (page_class != 'guidelines') return 0;

  var element = 0;
  var url = $(location).attr('href');
  var strings = $('#accordion h3 a').map(function() {
     return $(this).text();
  }).get();

  // Look for a channel path and compare it to the accordion headings
  $.each(strings, function(i, string) {
    var pattern = new RegExp(string.replace(/\s+/g, '-'), 'i');
    if (url.match(pattern)) {
      element = i;
    }
  });

  return element;
}

// Set the accordion active link text
base.setAccordionActiveLinkText = function() {
  var active_link = $('#accordion .current_page_item a');
  var link_text = active_link.text();
  active_link.text(link_text + '\u00a0›');
}

// Toggles a slider on/off
base.toggleSlider = function(input) {
  if (input.attr('checked') == 'checked') {
    input.nextAll('.slider:first').slider('enable');
  } else {
    input.nextAll('.slider:first').slider('disable');
  }
  base.getFilteredResults(base.getFilterValues());
}

// Convert a numerical slider value to a filter name
base.getSliderValue = function(slider_id, slider_value) {
  var values = {
    'anchor-voice': {
      0: 'voice-community',
      50: ['voice-community', 'voice-canonical'],
      100: 'voice-canonical'
    },
    'anchor-audience': {
      0: 'audience-consumer',
      50: ['audience-consumer', 'audience-enterprise'],
      100: 'audience-enterprise'
    },
    'anchor-developer': {
      0: 'developer-user',
      50: ['developer-user', 'developer-developer'],
      100: 'developer-developer'
    }
  }

  return values[slider_id][slider_value];
}

// Get all filter values, i.e. checkboxes and sliders
base.getFilterValues = function() {
  var values = [];

  // Checkboxes (ignore slider switches)
  $('input[type=checkbox]:not(".slider-check")').filter(':checked').each(function() {
    values.push($(this).attr('id'));
  });

  // Sliders
  $('.slider').each(function() {
    if ($(this).slider('option', 'disabled')) return;

    var value = $(this).slider('option', 'value');
    // Special case 50; it's an array of values
    if (value != 50) {
      values.push(base.getSliderValue($(this).attr('id'), value));
    } else {
      var slider_values = base.getSliderValue($(this).attr('id'), value);
      $.each(slider_values, function(i, value) {
        values.push(value);
      });
    }
  });

  return values;
}

base.isSubset = function(subset, superset) {
  for (var index = 0; index < subset.length; index++) {
    var item = subset[index];
    var isInSet = false;

    if (
      ('contains' in superset && !superset.contains(item)) ||
      (! 'contains' in superset && superset.indexOf(item) == -1)
    ) {
      return false;
    }
  }

  return true;
}

// Call the relevant Ajax template, filter with the metadata values
base.getFilteredResults = function(filters) {
  var container = $('#loop-' + page_class);

  base.createFilterLinkList(filters);

  var allItems = document.querySelectorAll('.loop-results li');

  allItems.forEach(
    function(item) {
      var image = item.querySelector('a img');

      item.classList.toggle('hidden', ! base.isSubset(filters, image.classList));
    }
  );
}

// Create a list of filter links above the results
base.createFilterLinkList = function(filters) {
  // Add label
  $('#loop-status p .filters-total').text(filters.length);

  // Add filter items
  var list = $('#loop-status .filters-list');
  list.empty();

  $.each(filters, function(i, filter) {
    var item = $('<li></li>');
    var link = base.createFilterLink(filter);
    item.append(link);
    list.append(item);
  });
  $('#loop-status').append(list);
}

// Create a single filter link
base.createFilterLink = function(filter) {
  var split = filter.split('-');
  var string = base.capitalizeText(split[0]) + ' → ' + base.capitalizeText(split[1]);

  var link = $('<a></a>').attr('rel', filter).attr('href', '#').text(string).bind('click', function(e) {
    base.removeFilterLink($(this));
    e.preventDefault();
  });

  return link;
}

// Remove a filter link and de-activate the associated filter
base.removeFilterLink = function(link) {
  var id = link.attr('rel');
  var filter = $('#' + id);

  // Checkbox or slider?
  if (filter.is('input[type=checkbox]')) {
    filter.attr('checked', false);
  } else {
    var split = id.split('-');
    // Any other filter link with the same name?
    var links = $('#loop-status a[rel^="' + split[0] + '"]');
    var _slider = $('#anchor-' + split[0]);
    if (links.length == 2) {
      // Two slider values, so we need to jump to the remaining position (0 or 100)
      var value = base.getSliderValue('anchor-' + split[0], 0) == id ? 100 : 0;
      _slider.slider('option', 'value', value);
    } else {
      // One slider value to remove, so disable slider
      _slider.slider('disable');
      _slider.slider('option', 'value', 50);
      _slider.prevAll('input:first').attr('checked', false);
    }
  }

  // Update result set (and remove filter link in the process)
  base.getFilteredResults(base.getFilterValues());
}

// Prep section menu
base.readySectionMenu = function() {
  $('#section-menu select').bind('change', function() {
    var value = $(this).attr('value');
    if (value.length > 0) {
      var heading = $('#' + value);
      trigger = true;
      // Assigning to both html and body triggers the event twice for FF. Using 'trigger' var to prevent second action
      $('html, body').stop().animate({scrollTop: heading.offset().top}, 1000, function() {
        if (trigger) {
          // Highlight heading
          heading.effect('highlight', {}, 2000);
          // Update hash
          $(location).attr('hash', value);
          // Remove and re-build menu after animation
          $('#section-menu select').remove();
          base.createSectionMenu();
          trigger = false;
        }
      });
    }
  });
}

// Get the loader image
base.getLoaderImage = function() {
  var loader = $('<img />').attr('src', template_dir + '/img/loader.gif').attr('width', '20').attr('height', '20').attr('alt', 'Loading, please wait');

  return loader;
}

/* Utility */

base.capitalizeText = function(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
