# DramSoc Website

This repository contains all the code for the Imperial College Dramatic Society website: [dramsoc.org](dramsoc.org).

The website is hosted by GitHub Pages. Pushing to the main branch will automatically reload the website within about a minute.

GitHub Pages serves html files with their extension removed:

* index.html is served at /
* 404.html is served for any 404 error and redirects to /
* tickets.html is served at /tickets
* tickets/index.html is served at /tickets/
* etc.

Redirects are implemented using a single html meta refresh tag.

To change the current committee and recent shows, update static/data/committee.json and static/data/shows.json respectively.

Images in /wordpress and /wp-content are to make sure old image links on Wiki, Horde and email signatures don't break

CNAME is necessary to link GitHub pages with our dramsoc.org domain
