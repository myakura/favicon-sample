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

## type mismatch

<ul>
{% for item in typeMismatch %}
<li><a href="{{ item.permalink }}">{{ item.title }}</a></li>
{% endfor %}
</ul>

## spoofing file extensions

<ul>
{% for item in extSpoofing %}
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

## with or without `type` attributes

<ul>
{% for item in typeAttribute %}
<li><a href="{{ item.permalink }}">{{ item.title }}</a></li>
{% endfor %}
</ul>

## data: URLs

<ul>
{% for item in dataUrl %}
<li><a href="{{ item.permalink }}">{{ item.title }}</a></li>
{% endfor %}
</ul>

## pointing to 404

<ul>
{% for item in notFound %}
<li><a href="{{ item.permalink }}">{{ item.title }}</a></li>
{% endfor %}
</ul>
