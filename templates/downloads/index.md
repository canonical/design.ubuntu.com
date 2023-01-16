---
wrapper_template: '_layouts/post_no-sidebar.html'
context:
  title: "Downloads"
---

<div class="p-strip is-shallow u-no-padding--top">
  <div class="row u-equal-height">
  {% for download in site.data.downloads %}{% if download.name != null %}{% assign modulo = forloop.index | modulo: 4 %}
  {% if modulo == 1 %}
  </div>
  <div class="row u-equal-height" style="padding-top: 1rem;">
  {% endif %}
    <div class="col-3 col-medium-3 p-card u-align--center">
      <header class="p-card__header u-vertically-center u-align--center" style="min-height: 150px;">
        <a href="{{ download.download }}"><img src="{{ download.image }}" alt="https://assets.ubuntu.com/v1/{{ download.name }}" class="brand-canonical channel-web element-logo voice-canonical" width="140" /></a>
      </header>
      <p class="p-card__content"><a href="{{ download.download }}">{{ download.name }}</a></p>
    </div>
  {% endif %}{% endfor %}
  </div>
</div>
