---
title: "Glossary"
description: "Glossary of terms used around Docker"
keywords: "glossary, docker, terms, definitions"
notoc: true
layout: glossary
noratings: true
skip_read_time: true
redirect_from:
- /engine/reference/glossary/
- /reference/glossary/
---
<table>
  <thead>
    <tr><th>Term</th><th>Definition</th></tr>
  </thead>
  <tbody>
  {%- for entry in site.data.glossary -%}
    {%- assign id = entry[0] | slugify -%}
    <tr>
      <td><a class="glossary" id="{{ id }}" href="#{{ id }}">{{ entry[0] }}</a></td>
      <td>{{ entry[1] | markdownify }}</td>
    </tr>
  {%- endfor -%}
  </tbody>
</table>
