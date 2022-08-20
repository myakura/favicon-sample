---
layout: template.njk
---
# favicons!

## formats

<ul>
{% for item in format %}
<li><a href="{{ item.permalink }}">{{ item.title }}</a></li>
{% endfor %}
</ul>

## markup

<ul>
{% for item in markup %}
<li><a href="{{ item.permalink }}">{{ item.title }}</a></li>
{% endfor %}
</ul>

## MIME type

<ul>
{% for item in type %}
<li><a href="{{ item.permalink }}">{{ item.title }}</a></li>
{% endfor %}
</ul>

## media queries

<ul>
{% for item in media %}
<li><a href="{{ item.permalink }}">{{ item.title }}</a></li>
{% endfor %}
</ul>

## URLs

<ul>
{% for item in url %}
<li><a href="{{ item.permalink }}">{{ item.title }}</a></li>
{% endfor %}
</ul>

## `rel="alternate"`

<ul>
{% for item in relAlternate %}
<li><a href="{{ item.permalink }}">{{ item.title }}</a></li>
{% endfor %}
</ul>


## two formats

<ul>
{% for item in 2formats %}
<li><a href="{{ item.permalink }}">{{ item.title }}</a></li>
{% endfor %}
</ul>


## three formats

<ul>
{% for item in 3formats %}
<li><a href="{{ item.permalink }}">{{ item.title }}</a></li>
{% endfor %}
</ul>
