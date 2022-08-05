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

## `rel="alternate"`

<ul>
{% for item in relAlternate %}
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

## media types

<ul>
{% for item in mediaAttribute %}
<li><a href="{{ item.permalink }}">{{ item.title }}</a></li>
{% endfor %}
</ul>

## media queries

<ul>
{% for item in mediaQueries %}
<li><a href="{{ item.permalink }}">{{ item.title }}</a></li>
{% endfor %}
</ul>

## light and dark modes

<ul>
{% for item in lightDark %}
<li><a href="{{ item.permalink }}">{{ item.title }}</a></li>
{% endfor %}
</ul>

## icons served as `application/octet-stream`

<ul>
{% for item in typeOctetStream %}
<li><a href="{{ item.permalink }}">{{ item.title }}</a></li>
{% endfor %}
</ul>

## icons served as `image`

<ul>
{% for item in typeImage %}
<li><a href="{{ item.permalink }}">{{ item.title }}</a></li>
{% endfor %}
</ul>

## icons served as `bogus`

<ul>
{% for item in typeBogus %}
<li><a href="{{ item.permalink }}">{{ item.title }}</a></li>
{% endfor %}
</ul>
