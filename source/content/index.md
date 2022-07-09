---
layout: template.njk
---
# favicons!

## pages with single `<link>` element

### formats

<ul>
{% for item in format %}
<li><a href="{{ item.permalink }}">{{ item.title }}</a></li>
{% endfor %}
</ul>

### markup

<ul>
{% for item in markup %}
<li><a href="{{ item.permalink }}">{{ item.title }}</a></li>
{% endfor %}
</ul>

### type mismatch

<ul>
{% for item in typeMismatch %}
<li><a href="{{ item.permalink }}">{{ item.title }}</a></li>
{% endfor %}
</ul>

### file extension spoofing

<ul>
{% for item in extSpoofing %}
<li><a href="{{ item.permalink }}">{{ item.title }}</a></li>
{% endfor %}
</ul>

## pages with two `<link>` elements

<ul>
{% for item in 2formats %}
<li><a href="{{ item.permalink }}">{{ item.title }}</a></li>
{% endfor %}
</ul>

## pages with three `<link>` elements

<ul>
{% for item in 3formats %}
<li><a href="{{ item.permalink }}">{{ item.title }}</a></li>
{% endfor %}
</ul>

## multiple `<link>` elements with or without type attributes

<ul>
{% for item in typeAttribute %}
<li><a href="{{ item.permalink }}">{{ item.title }}</a></li>
{% endfor %}
</ul>
