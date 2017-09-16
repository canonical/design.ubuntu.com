
(function() {
    /**
     * Toggle target elements with aria controls, hidden and expanded
     *
     * @param {String} tabCtrl
     *
     * @example
     * <button class="p-accordion__tab" id="status-tab" role="tab" aria-controls="#status" aria-expanded="false" aria-selected="false">Status</button>
     * <section class="p-accordion__panel" id="status" role="tabpanel" aria-hidden="true" aria-labelledby="status-tab">
     *     <p>Closed panel</p>
     * </section>
     */
    function accordionToggles(tabCtrl) {

        /**
         * Toggle function
         * @param {Element} toggle
         * @property {Boolean} open
         */
        function toggle (toggle, open) {
          var button = toggle.getAttribute('aria-controls');
          var panel = document.querySelector(button);

          if (open === true) {
              panel.setAttribute('aria-hidden', false);
              toggle.setAttribute('aria-expanded', true);
          } else {
              panel.setAttribute('aria-hidden', true);
              toggle.setAttribute('aria-expanded', false);
          }
        }

        /**
         * Toggle all function
         * @event event
         */
        function toggleAll (event) {
            var target = event.target;

            // Filter through all toggles and toggle visiblity
            toggles.filter(function (toggle) {
                return toggle !== target;
            }).forEach(toggle);

            // Target toggle to be shown
            toggle(target, true);
        }

        // Select all toggle control elements
        /**
         * @param {Object[]} toggles
         * @param {String} tabCtrl
         */
        var toggles = Array.prototype.slice.call(
          document.querySelectorAll(tabCtrl)
        );

        // Set click event to each toggle control element
        /**
         * Triggers a toggleAll function
         * @param {element} toggle
         * @fires toggleAll
         */
        toggles.forEach(function (toggle) {
            toggle.addEventListener('click', toggleAll);
        });
    }

    accordionToggles('.p-accordion__tab');
})()
