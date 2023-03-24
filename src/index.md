---
title: Home
eleventyNavigation:
  key: Home
  order: 0
templateEngineOverride: njk,md

---

<div class="hero">

# Nullam quis ante. Etiam sit amet orci eget eros tinc idunt.

Integer tincidunt. Cras dapibus.

</div>


{% set cycle = cycler("odd", "even") %}
{% for section in collections.homesection %}
{% include 'partials/home-section.njk' %}
{% endfor %}
