---
layout: template.njk
---
# favicons!

## pages with single `<link>`

<ul>
{% for page in pages %}
<li><a href="{{ page.permalink }}">{{ page.title }}</a></li>
{% endfor %}
</ul>

## pages with mutliple `<link>` tags

<ul>
{% for page in multipleLinks %}
<li><a href="{{ page.permalink }}">{{ page.title }}</a></li>
{% endfor %}
</ul>
