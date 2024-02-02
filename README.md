# DramSoc Website

This repository contains all the code for the Imperial College Dramatic Society website: [dramsoc.org](dramsoc.org).

The website is hosted by GitHub Pages. Pushing to the main branch will automatically reload the website within about a minute.

GitHub Pages serves html files with their extension removed:

* index.html is served at /
* tickets.html is served at /tickets
* 404.html is served for any 404 error and redirects to /

Redirects are implemented using a single html meta refresh tag.

To change the current committee and recent shows, update data/committee.json and data/shows.json respectively.
