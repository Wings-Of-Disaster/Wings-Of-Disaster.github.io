---
layout: miscellaneous
permalink: /miscellaneous/
title: Miscellaneous
description: "Training arcs, boss fights, world titles, and an ever-growing video vault."
nav: true
nav_order: 7
---

{% assign misc = site.data.miscellaneous %}

<section class="misc-hero" aria-labelledby="misc-title">
  <div class="misc-hero__glow misc-hero__glow--one" aria-hidden="true"></div>
  <div class="misc-hero__glow misc-hero__glow--two" aria-hidden="true"></div>

  <div class="misc-hero__copy">
    <div class="misc-eyebrow">
      <span class="misc-eyebrow__dot" aria-hidden="true"></span>
      {{ misc.hero.eyebrow }}
    </div>
    <h1 id="misc-title" class="misc-hero__title">
      <span>{{ misc.hero.title_lead }}</span>
      <span class="misc-gradient-text">{{ misc.hero.title_accent }}</span>
    </h1>
    <p class="misc-hero__intro">{{ misc.hero.intro }}</p>
    <a class="misc-hero__cta" href="#highlight-reel">
      <span>Enter the highlight reel</span>
      <i class="fa-solid fa-arrow-down" aria-hidden="true"></i>
    </a>
  </div>

  <div class="misc-orbit" aria-hidden="true">
    <div class="misc-orbit__ring misc-orbit__ring--outer"></div>
    <div class="misc-orbit__ring misc-orbit__ring--inner"></div>
    <div class="misc-orbit__core">
      <span>WOD</span>
      <small>{{ misc.hero.status }}</small>
    </div>
    <div class="misc-orbit__item misc-orbit__item--gym">
      <i class="fa-solid fa-dumbbell"></i>
    </div>
    <div class="misc-orbit__item misc-orbit__item--crown">
      <i class="fa-solid fa-crown"></i>
    </div>
    <div class="misc-orbit__item misc-orbit__item--trophy">
      <i class="fa-solid fa-trophy"></i>
    </div>
    <div class="misc-orbit__item misc-orbit__item--crosshair">
      <i class="fa-solid fa-crosshairs"></i>
    </div>
  </div>
</section>

<div class="misc-ticker" aria-label="Current side quests">
  <div class="misc-ticker__track">
    {% for repeat in (1..2) %}
      <div class="misc-ticker__group" {% if repeat == 2 %}aria-hidden="true"{% endif %}>
        {% for item in misc.ticker %}
          <span>{{ item }}</span>
          <i class="fa-solid fa-star-of-life" aria-hidden="true"></i>
        {% endfor %}
      </div>
    {% endfor %}
  </div>
</div>

<section class="misc-section misc-section--lore" aria-labelledby="lore-title">
  <div class="misc-section__heading">
    <div>
      <p class="misc-kicker">CHARACTER SELECT</p>
      <h2 id="lore-title">Choose your lore.</h2>
    </div>
    <p>Four builds. Zero sensible skill allocation.</p>
  </div>

  <div class="misc-lore-grid">
    {% for item in misc.lore %}
      <article
        class="misc-lore-card misc-lore-card--{{ item.theme }} misc-lore-card--{{ item.size }}"
        data-number="{{ item.number }}"
      >
        <div class="misc-lore-card__shine" aria-hidden="true"></div>
        <div class="misc-lore-card__top">
          <span class="misc-lore-card__number">{{ item.number }}</span>
          <span class="misc-lore-card__icon" aria-hidden="true">
            <i class="{{ item.icon }}"></i>
          </span>
        </div>
        <div class="misc-lore-card__content">
          <p class="misc-kicker">{{ item.kicker }}</p>
          <h3>{{ item.title }}</h3>
          <p class="misc-lore-card__body">{{ item.body }}</p>
          {% if item.meta %}
            <p class="misc-lore-card__meta">{{ item.meta }}</p>
          {% endif %}
          {% if item.quote %}
            <blockquote>{{ item.quote }}</blockquote>
          {% endif %}
          {% if item.link_url %}
            <a class="misc-proof-link" href="{{ item.link_url }}" target="_blank" rel="noopener noreferrer">
              <span>{{ item.link_label }}</span>
              <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
            </a>
          {% endif %}
        </div>
      </article>
    {% endfor %}
  </div>
</section>

<section id="highlight-reel" class="misc-section misc-section--reel" aria-labelledby="reel-title">
  <div class="misc-section__heading">
    <div>
      <p class="misc-kicker">THE VIDEO VAULT</p>
      <h2 id="reel-title">Proof of fun.</h2>
    </div>
    <p>More clips will spawn here over time.</p>
  </div>

  <div class="misc-video-grid">
    {% for video in misc.videos %}
      <article class="misc-video-card {% if video.featured %}misc-video-card--featured{% endif %}">
        <div class="misc-video-card__media">
          {% if video.type == 'local' %}
            <video
              class="misc-video-card__video"
              src="{{ video.src | relative_url }}"
              muted
              loop
              playsinline
              controls
              preload="metadata"
              aria-label="{{ video.title }}"
            ></video>
          {% elsif video.type == 'youtube' %}
            <iframe
              src="{{ video.embed }}"
              title="{{ video.title }}"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          {% else %}
            <div class="misc-video-card__placeholder" aria-hidden="true">
              <div class="misc-video-card__scanline"></div>
              <i class="fa-solid fa-plus"></i>
              <span>DROP NEXT CLIP</span>
            </div>
          {% endif %}
        </div>

        <div class="misc-video-card__copy">
          <p class="misc-kicker">{{ video.eyebrow }}</p>
          <h3>{{ video.title }}</h3>
          <p>{{ video.description }}</p>
          {% if video.type == 'youtube' %}
            <a href="{{ video.src }}" target="_blank" rel="noopener noreferrer" aria-label="Watch {{ video.title }} on YouTube">
              Watch source <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
            </a>
          {% endif %}
        </div>
      </article>
    {% endfor %}
  </div>
</section>

<section class="misc-outro" aria-label="End of highlight reel">
  <div>
    <p class="misc-kicker">TO BE CONTINUED</p>
    <h2>The lore is still rendering.</h2>
  </div>
  <span class="misc-outro__badge">NEW CLIPS SOON</span>
</section>
