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
    <p class="misc-eyebrow">
      <span aria-hidden="true"></span>
      {{ misc.hero.eyebrow }}
    </p>
    <h1 id="misc-title" class="misc-hero__title">
      {{ misc.hero.title_lead }}
      <strong>{{ misc.hero.title_accent }}</strong>
    </h1>
    <p class="misc-hero__intro">{{ misc.hero.intro }}</p>

    <ul class="misc-interest-list" aria-label="Interests">
      {% for interest in misc.interests %}
        <li>{{ interest }}</li>
      {% endfor %}
    </ul>

    <a class="misc-hero__link" href="#video-journal">
      Explore the video journal
      <i class="fa-solid fa-arrow-down" aria-hidden="true"></i>
    </a>
  </div>

  <div class="misc-hero__visual">
    <video
      src="{{ misc.hero.video_src | relative_url }}"
      muted
      loop
      playsinline
      preload="metadata"
      aria-label="{{ misc.hero.video_title }}"
    ></video>
    <div class="misc-hero__visual-overlay" aria-hidden="true"></div>
    <div class="misc-hero__now-playing">
      <span>{{ misc.hero.video_label }}</span>
      <strong>{{ misc.hero.video_title }}</strong>
    </div>
    <div class="misc-hero__monogram" aria-hidden="true">WOD</div>
  </div>
</section>

<section class="misc-section" aria-labelledby="stories-title">
  <header class="misc-section__header">
    <div>
      <p class="misc-eyebrow">CURRENT SIDE QUESTS</p>
      <h2 id="stories-title">A few things I take seriously.</h2>
    </div>
    <p>Some achievements belong on a CV. These are more fun.</p>
  </header>

  <div class="misc-story-grid">
    {% for story in misc.stories %}
      <article class="misc-story-card misc-story-card--{{ story.theme }}">
        <div class="misc-story-card__glow" aria-hidden="true"></div>
        <div class="misc-story-card__top">
          <span class="misc-story-card__icon" aria-hidden="true">
            <i class="{{ story.icon }}"></i>
          </span>
          <span class="misc-story-card__label">{{ story.label }}</span>
        </div>
        <div class="misc-story-card__copy">
          <h3>{{ story.title }}</h3>
          <p>{{ story.body }}</p>
          {% if story.note %}
            <small>{{ story.note }}</small>
          {% endif %}
          {% if story.link_url %}
            <a href="{{ story.link_url }}" target="_blank" rel="noopener noreferrer">
              {{ story.link_label }}
              <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
            </a>
          {% endif %}
        </div>
      </article>
    {% endfor %}
  </div>
</section>

<section id="video-journal" class="misc-section misc-section--videos" aria-labelledby="videos-title">
  <header class="misc-section__header">
    <div>
      <p class="misc-eyebrow">VIDEO JOURNAL</p>
      <h2 id="videos-title">On repeat.</h2>
    </div>
    <p>A growing collection of training logs, game moments, and everyday chaos.</p>
  </header>

  <div class="misc-video-grid">
    {% for video in misc.videos %}
      <article class="misc-video-card {% if video.type == 'placeholder' %}misc-video-card--placeholder{% endif %}">
        {% if video.type == 'youtube' %}
          <div class="misc-video-card__player">
            <iframe
              src="{{ video.embed }}"
              title="{{ video.title }}"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        {% else %}
          <div class="misc-video-card__empty" aria-hidden="true">
            <i class="fa-solid fa-plus"></i>
          </div>
        {% endif %}

        <div class="misc-video-card__copy">
          <span>{{ video.label }}</span>
          <h3>{{ video.title }}</h3>
          <p>{{ video.description }}</p>
          {% if video.src %}
            <a href="{{ video.src }}" target="_blank" rel="noopener noreferrer">
              Watch video
              <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
            </a>
          {% endif %}
        </div>
      </article>
    {% endfor %}
  </div>
</section>

<footer class="misc-footer">
  <span>More life. More clips. More side quests.</span>
  <i class="fa-solid fa-bolt" aria-hidden="true"></i>
</footer>
