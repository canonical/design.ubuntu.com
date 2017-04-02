/**
 * @fileoverview A base JS object containing site-wide methods
 *
 * @author Canonical Web Team: Steve Edwards
 * @version 1.0
 */

base = {};
page_id = null;

$(document).ready(function() {
  base.setPageId();
  base.readyFontTester();
  base.readyCharsetNav();
  base.readyGalleryLinks();
  base.readyRandomSample();
  base.getRandomSample();
});

/* Init methods */

// Set the current page ID
base.setPageId = function() {
  page_id = base.getPageId();
};

// Ready the font tester
base.readyFontTester = function() {
  if (page_id != 'fonts') return false;

  var input = $('#tester-input');
  var heading = $('#tester h1');
  var text_input = 'Write your own text!';
  var text_heading = '<span>This is the Ubuntu Font Family.</span> It is a unique, custom designed font that has a very distinctive look and feel.';

  input.bind({
    focus: function() {
      if ($(this).val() == text_input) {
        $(this).val('');
      }
    },
    blur: function() {
      if ($(this).val() == '') {
        $(this).val(text_input);
        heading.empty().append(text_heading);
      }
    },
    keyup: function() {
      heading.text(input.val());
    }
  });

  testerValidateAndUpdate = function() {
    var value = $('#tester-font').val();

    if (value === 'Ubuntu Mono') {
      $('select')
        .siblings('select')
        .children('option[value=300], option[value=500]')
        .attr('disabled', true)
        .removeAttr('selected');
      $('select')
        .children('option[value!=300][value!=500]')
        .attr('disabled', false);
    } else if (value === 'Ubuntu Condensed') {
      $('select')
        .siblings('select')
        .children('option[value=300], option[value=500], option[value=700], option[value=italic]')
        .attr('disabled', true)
        .removeAttr('selected');
      $('select')
        .children('option[value!=300][value!=500][value!=700][value!=italic]')
        .attr('disabled', false);
    } else if (value === 'Ubuntu') {
      $('select')
        .children('option')
        .attr('disabled', false);
    }
    heading.css('font-family', $('#tester-font').attr('value'));
    heading.css('font-weight', $('#tester-weight').attr('value'));
    heading.css('font-style', $('#tester-style').attr('value').toLowerCase());
    /* The size and Colour do not need forcibly re-writing each time */
    heading.css('font-size', $('#tester-size').attr('value') + 'px');
    heading.css('color', '#' + $('#tester-colour').attr('value'));
  };

  $('select').bind('change', testerValidateAndUpdate);
}

// Ready the charset links
base.readyCharsetNav = function() {
  if (page_id != 'fonts') return false;

  $('.nav-page a').bind('click', function(e) {
    var anchor = $(this);
    $('html, body').stop().animate({scrollTop: $(anchor.attr('href')).offset().top}, 1000);

    e.preventDefault();
  });
}

// Ready the gallery items (for those items that link out, ensure the whole image is clickable)
base.readyGalleryLinks = function() {
  if (page_id != 'gallery') return false;

  var items = $('#gallery li a').closest('li');
  items.css('cursor', 'pointer');
  items.bind('click', function(e) {
    location.href = $('a', this).attr('href');
  });
}

// Ready the random sample container
base.readyRandomSample = function() {
  if (page_id != 'about' && page_id != 'licence') return false;

  $('#sample').bind('click', function(e) {
    base.getRandomSample();
  });
}

// Display a random sample
base.getRandomSample = function() {
  if (page_id != 'about' && page_id != 'licence') return false;

  var samples = [
    '\u0151',
    '\u016E',
    '\u01C4',
    '\u01FD',
    '\u0221',
    '\u03A3',
    '\u0424',
    '\u042F',
    '\u04A6',
    '\u04DC',
    '\u1F97',
    '\u20B9',
    '\u2116',
    'a<em>a</em>',
    '<span lang="sr">\u0431</span><span lang="ru">\u0431</span>'
  ];
  var rand_num = Math.floor(Math.random() * (samples.length - 1));
  $('#sample').empty().append('<p>' + samples[rand_num] + '</p>');
};

/* Non-init methods */

// Get the current page ID
base.getPageId = function() {
  return $('body').attr('class');
};
