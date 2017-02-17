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

// Call the relevant Ajax template, filter with the metadata values
base.getFilteredResults = function(filters) {
	var container = $('#loop-' + page_class);

	// Show loader
	container.empty();
	container.append(base.getLoaderImage());

	// Ajax request
	// – Kill any existing request
	// – If no filters, use the cached first result set
	if (filters.length == 0) {
		container.html(first_result_set);
	} else {
		if (ajax_load != null) {
	        ajax_load.abort();
		}
		ajax_load = $.ajax({
	        url: 'ajax-' + page_class + '?metadata=' + filters.join('+'),
	        success: function(data) {
	        	container.html(data);
				base.createFilterLinkList(filters);

	        	// Ready overlay for examples
	        	if (page_class != 'examples') return false;
	        	base.readyOverlay();

	        	// Reset load flag
	        	ajax_load = null;
	        }
		});
	}
}

// Create a list of filter links above the results
base.createFilterLinkList = function(filters) {
	var list = $('<ol></ol>');

	$.each(filters, function(i, filter) {
		var item = $('<li></li>');
		var link = base.createFilterLink(filter);
		item.append(link);
		list.append(item);
	});

	$('#loop-status p').append(' | Your filters:');
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
