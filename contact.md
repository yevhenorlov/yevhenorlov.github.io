---
layout: page
title: contact
permalink: /contact
---
<ul class="contact-list">
  <li>{{ site.title }}</li>
  <li><a href="mailto:{{ site.email }}">{{ site.email }}</a></li>
  {% if site.github_username %}
  <li>
    {% include icon-github.html username=site.github_username %}
  </li>
  {% endif %}

  {% if site.twitter_username %}
  <li>
    {% include icon-twitter.html username=site.twitter_username %}
  </li>
  {% endif %}

</ul>
