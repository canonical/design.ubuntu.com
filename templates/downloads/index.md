---
wrapper_template: '_layouts/post_no-sidebar.html'
context:
  title: "Downloads"
---

<div class="p-strip is-shallow u-no-padding--top">
  <div class="row u-equal-height">
  {% for item in downloads %}
  {% if loop.index == 1 %}
  </div>
  <div class="row u-equal-height" style="padding-top: 1rem;">
  {% endif %}
    <div class="col-3 col-medium-3 p-card u-align--center">
      <header class="p-card__header u-vertically-center u-align--center" style="min-height: 150px;">
        <a href="{{ item.download }}"><img src="{{ item.image }}" alt="{{ item.name }}" class="brand-canonical channel-web element-logo voice-canonical" width="140" /></a>
      </header>
      <p class="p-card__content"><a href="{{ item.download }}">{{ item.name }}</a></p>
    </div>
  {% endfor %}
  </div>
</div>
