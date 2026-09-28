# DramSoc Website

This repository contains all the code for the Imperial College Dramatic Society website: [dramsoc.org](dramsoc.org).

To change the current committee and recent shows, update
[`app/data/committee.ts`](app/data/committee.ts) and
[`app/data/recentShows.ts`](app/data/recentShows.ts) respectively.

The website is hosted by GitHub Pages. Pushing to the main branch will automatically
reload the website within about a minute.

The site is written in React, and automatically compiled for distribution by a
GitHub action on push to the `main` branch.

Images in [`public/wordpress`](public/wordpress/) and
[`public/wp-content`](public/wp-content/) are to make sure old image links on Wiki,
Horde and email signatures don't break.
