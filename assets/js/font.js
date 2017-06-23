core = core || {};

core.fontSelecter = function() {
  var options = document.querySelectorAll('.js-font-select option');
  var selects = document.getElementsByClassName('js-font-select');
  var demo = document.querySelector('.js-font-demo');

  for (var i = 0; i < selects.length; i++) {
    selects[i].onchange = function() {
      demo.setAttribute('data-' + this.name, this.value);
      filterOptions(this.value);
    }
  }

  // Disable the options that are not available with current selected options.
  function filterOptions(value) {
    options.forEach(function(option) {
      option.disabled = false;
    });

    // Disable light and medium font weight for condensed and monospace font faces
    if (value === 'condensed' || value === 'monospace') {
      options.forEach(function(option) {
        if (option.value === 'light' || option.value === 'medium') {
          option.disabled = true;
        }
      });
    }
  }
}
