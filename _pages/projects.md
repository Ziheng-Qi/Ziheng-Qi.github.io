---
layout: page
title: projects
permalink: /projects/
description:
nav: true
nav_order: 3
---

<div class="publications">
  {% assign sorted_projects = site.projects | sort: "importance" %}
  
  {% for project in sorted_projects %}
  <div class="row">
    <div class="col col-sm-2 abbr">
      {% if project.category %}
        <abbr class="badge rounded w-100">{{ project.category | upcase }}</abbr>
      {% endif %}
      {% if project.img %}
        {% if project.img contains '://' %}
          <img class="preview z-depth-1 rounded" src="{{ project.img }}">
        {% else %}
          {%
            include figure.liquid
            loading="eager"
            path=project.img
            sizes="200px"
            class="preview z-depth-1 rounded"
            zoomable=true
            alt=project.title
          %}
        {% endif %}
      {% endif %}
    </div>

    <div class="col-sm-8">
      <div class="title">{{ project.title }}</div>
      <div class="author">{{ project.institution }}</div>
      <div class="periodical">{{ project.description }}</div>
      <div class="periodical"><em>{{ project.tech }}</em></div>
      
      <div class="links">
        {% if project.github %}
          <a href="{{ project.github }}" class="btn btn-sm z-depth-0" role="button">GitHub</a>
        {% endif %}
        {% if project.demo %}
          <a href="{{ project.demo }}" class="btn btn-sm z-depth-0" role="button">Demo</a>
        {% endif %}
        {% if project.paper %}
          <a href="{{ project.paper }}" class="btn btn-sm z-depth-0" role="button">Paper</a>
        {% endif %}
      </div>
    </div>
  </div>
  {% endfor %}
</div>
