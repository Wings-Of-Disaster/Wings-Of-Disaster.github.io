---
layout: page
permalink: /miscellaneous/
title: Miscellaneous
description: ""
nav: true
nav_order: 7
---

{% assign misc = site.data.miscellaneous %}

<section class="misc-chapter" aria-labelledby="sports-title">
  <header class="misc-chapter__header">
    <h2 id="sports-title">Sports</h2>
    <p>{{ misc.sports.intro }}</p>
  </header>

  <ul class="misc-sport-list" aria-label="Sports I enjoy">
    {% for activity in misc.sports.activities %}
      <li>
        <i class="{{ activity.icon }}" aria-hidden="true"></i>
        <span>{{ activity.name }}</span>
      </li>
    {% endfor %}
  </ul>

  <div class="misc-sports-note">
    <p>{{ misc.sports.team_note }}</p>
  </div>
</section>

<section class="misc-chapter" aria-labelledby="games-title">
  <header class="misc-chapter__header">
    <h2 id="games-title">Games</h2>
  </header>

  <div class="misc-game-list">
    {% for game in misc.games.achievements %}
      <article class="misc-game">
        <a class="misc-game__image" href="{{ game.link_url }}" target="_blank" rel="noopener noreferrer" aria-label="{{ game.title }}">
          <img src="{{ game.image }}" alt="{{ game.image_alt }}" loading="lazy">
        </a>
        <div class="misc-game__copy">
          <span>{{ game.label }}</span>
          <h3>{{ game.title }}</h3>
          <p>{{ game.body }}</p>
          <a href="{{ game.link_url }}" target="_blank" rel="noopener noreferrer">
            {{ game.link_label }}
            <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
          </a>
        </div>
      </article>
    {% endfor %}
  </div>
</section>
