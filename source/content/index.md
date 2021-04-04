---
layout: template.njk
---
# favicons!

<ul>
{% for page in pages %}
<li><a href="{{ page.permalink }}">{{ page.title }}</a></li>
{% endfor %}
</ul>
