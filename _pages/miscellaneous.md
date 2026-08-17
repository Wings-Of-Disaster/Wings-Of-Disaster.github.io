---
layout: miscellaneous
permalink: /miscellaneous/
title: Miscellaneous
description: "Training, games, world titles, and an ever-growing video journal."
nav: true
nav_order: 7
---

{% assign misc = site.data.miscellaneous %}

<section class="misc-hero" aria-labelledby="misc-title">
  <div class="misc-hero__copy">
    <p class="misc-eyebrow">{{ misc.hero.eyebrow }}</p>
    <h1 id="misc-title" class="misc-hero__title">
      {{ misc.hero.title_lead }}
      <strong>{{ misc.hero.title_accent }}</strong>
    </h1>
    <p class="misc-hero__intro">{{ misc.hero.intro }}</p>
    <a class="misc-text-link" href="#video-journal">
      Watch the highlights
      <i class="fa-solid fa-arrow-down" aria-hidden="true"></i>
    </a>
  </div>

  <aside class="misc-index" aria-label="Player profile">
    <header class="misc-index__header">
      <span>PLAYER PROFILE</span>
      <span class="misc-index__status"><i aria-hidden="true"></i> ONLINE</span>
    </header>
    <ol>
      {% for interest in misc.interests %}
        <li class="misc-index__item misc-index__item--{{ interest.theme }}">
          <span>{{ interest.number }}</span>
          <strong>{{ interest.name }}</strong>
          <small>{{ interest.detail }}</small>
        </li>
      {% endfor %}
    </ol>
  </aside>
</section>

<div class="misc-spectrum" aria-hidden="true"></div>

<section class="misc-section" aria-labelledby="stories-title">
  <header class="misc-section__header">
    <div>
      <p class="misc-eyebrow">SELECTED SIDE QUESTS</p>
      <h2 id="stories-title">Life outside the lab.</h2>
    </div>
    <p>Four interests. Questionable skill allocation. No regrets.</p>
  </header>

  <div class="misc-story-grid">
    {% for story in misc.stories %}
      <article class="misc-story misc-story--{{ story.theme }}">
        <header class="misc-story__header">
          <span class="misc-story__number">{{ story.number }}</span>
          <span class="misc-story__label">{{ story.label }}</span>
          <i class="{{ story.icon }}" aria-hidden="true"></i>
        </header>
        <div class="misc-story__copy">
          <h3>{{ story.title }}</h3>
          <p>{{ story.body }}</p>
        </div>
        <footer class="misc-story__footer">
          {% if story.note %}
            <span>{{ story.note }}</span>
          {% endif %}
          {% if story.link_url %}
            <a href="{{ story.link_url }}" target="_blank" rel="noopener noreferrer">
              {{ story.link_label }}
              <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
            </a>
          {% endif %}
        </footer>
      </article>
    {% endfor %}
  </div>
</section>

<section id="video-journal" class="misc-section misc-section--videos" aria-labelledby="videos-title">
  <header class="misc-section__header">
    <div>
      <p class="misc-eyebrow">VIDEO JOURNAL</p>
      <h2 id="videos-title">A small screen, for now.</h2>
    </div>
    <p>More training logs, game clips, and everyday chaos will arrive over time.</p>
  </header>

  <div class="misc-video-grid">
    {% for video in misc.videos %}
      <article class="misc-video">
        <div class="misc-video__player">
          <iframe
            src="{{ video.embed }}"
            title="{{ video.title }}"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div class="misc-video__copy">
          <span>{{ video.label }}</span>
          <h3>{{ video.title }}</h3>
          <p>{{ video.description }}</p>
          <a href="{{ video.src }}" target="_blank" rel="noopener noreferrer" aria-label="Watch {{ video.title }} on the source site">
            Watch source
            <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
          </a>
        </div>
      </article>
    {% endfor %}
  </div>
</section>

<footer class="misc-footer">
  <span>The archive is still growing.</span>
  <span>More life, more clips, more side quests.</span>
</footer>
