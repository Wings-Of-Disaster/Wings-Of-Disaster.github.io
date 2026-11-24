---
layout: page
permalink: /setbacks/
title: Setbacks
description: A record of setbacks, in research and beyond.
nav: false
nav_order: 8
conference_rejections:
  - venue: ICLR 2025
    count: 1
  - venue: CVPR 2025
    count: 2
  - venue: ICME 2025
    count: 1
  - venue: ICCV 2025
    count: 1
  - venue: ACM MM 2025
    count: 1
  - venue: NeurIPS 2025
    count: 1
  - venue: AAAI 2026
    count: 4
  - venue: ICASSP 2026
    count: 2
  - venue: Eurographics 2026
    count: 1
  - venue: WWW 2026
    count: 1
  - venue: SIGMETRICS 2026
    count: 1
  - venue: CVPR 2026
    count: 2
  - venue: EDBT 2026
    count: 1
  - venue: ARR Dec 2025
    count: 1
  - venue: SIGIR 2026
    count: 1
  - venue: KDD 2026
    count: 2
  - venue: ECCV 2026
    count: 2
  - venue: UIST 2026
    count: 1
  - venue: ACM MM 2026
    count: 3
  - venue: NeurIPS 2026
    count: 3
  - venue: ARR May 2026
    count: 1
  - venue: EMNLP 2026
    count: 1
  - venue: IUI 2027
    count: 1
  - venue: WSDM 2027
    count: 1
journal_rejections:
  - year: 2025
    journals:
      - name: Engineering Applications of Artificial Intelligence
        count: 1
      - name: The Lancet
        count: 1
  - year: 2026
    journals:
      - name: Knowledge-Based Systems
        count: 1
      - name: Expert Systems with Applications
        count: 1
      - name: Neural Networks
        count: 1
      - name: Neurocomputing
        count: 1
      - name: Pattern Recognition
        count: 1
      - name: IEEE Transactions on Multimedia
        count: 2
      - name: Information Fusion
        count: 1
      - name: IEEE Transactions on Pattern Analysis and Machine Intelligence
        count: 1
_styles: |
  .post > .post-header {
    display: none;
  }
  .setbacks-page {
    --setbacks-accent: #9b3d2f;
    --setbacks-muted: #626262;
    color: var(--global-text-color);
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
    padding: 1rem 0 3rem;
  }
  html[data-theme="dark"] .setbacks-page {
    --setbacks-accent: #eea18b;
    --setbacks-muted: #b5b5b5;
  }
  .setbacks-page .setbacks-eyebrow,
  .setbacks-page .setbacks-index,
  .setbacks-page .setbacks-count-label,
  .setbacks-page .setbacks-table thead,
  .setbacks-page .setbacks-year-count {
    color: var(--setbacks-muted);
    font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
    font-size: 0.68rem;
    font-weight: 500;
    letter-spacing: 0.09em;
    line-height: 1.6;
    text-transform: uppercase;
  }
  .setbacks-page .setbacks-eyebrow {
    margin: 0;
    padding-top: 1rem;
    border-top: 3px solid var(--global-text-color);
  }
  .setbacks-hero {
    display: grid;
    grid-template-columns: 0.95fr 1.15fr;
    align-items: center;
    gap: 2rem;
    padding: 3rem 0 4rem;
  }
  .setbacks-page .setbacks-title {
    margin: 0;
    font-size: clamp(4.5rem, 10vw, 7rem);
    font-weight: 750;
    letter-spacing: -0.065em;
    line-height: 0.87;
  }
  .setbacks-title span {
    color: var(--setbacks-accent);
  }
  .setbacks-page .setbacks-intro {
    margin: 0;
    max-width: 32rem;
    color: var(--setbacks-muted);
    font-size: 1rem;
    line-height: 1.85;
  }
  .setbacks-intro + .setbacks-intro {
    margin-top: 1rem;
    color: var(--global-text-color);
    font-weight: 500;
  }
  .setbacks-conferences {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0 2.5rem;
  }
  .setbacks-table tbody tr:hover {
    background: var(--global-code-bg-color, rgba(128, 128, 128, 0.06));
  }
  .setbacks-chapter {
    display: grid;
    grid-template-columns: 3rem minmax(0, 1fr);
    gap: 1rem;
    padding: 2.5rem 0 3rem;
    border-top: 1px solid var(--global-text-color);
  }
  .setbacks-index {
    padding-top: 0.35rem;
  }
  .setbacks-chapter-heading,
  .setbacks-year-heading {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;
  }
  .setbacks-page .setbacks-chapter-title {
    margin: 0;
    font-size: clamp(1.8rem, 5vw, 2.3rem);
    font-weight: 650;
    letter-spacing: -0.045em;
  }
  .setbacks-summary {
    display: flex;
    align-items: baseline;
    gap: 0.6rem;
    white-space: nowrap;
  }
  .setbacks-summary strong {
    color: var(--setbacks-accent);
    font-size: 2rem;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    letter-spacing: -0.04em;
  }
  .setbacks-page .setbacks-subtitle {
    margin: 2.25rem 0 1rem;
    font-size: 1rem;
    font-weight: 600;
  }
  .setbacks-page .setbacks-table {
    width: 100%;
    color: var(--global-text-color);
    margin: 0;
    border-collapse: collapse;
    table-layout: fixed;
    font-size: 0.9rem;
    line-height: 1.55;
  }
  .setbacks-table th,
  .setbacks-table td {
    padding: 0.7rem 0;
    border: 0;
    border-bottom: 1px solid var(--global-divider-color);
    background: transparent;
    text-align: left;
    vertical-align: top;
  }
  .setbacks-table th:first-child,
  .setbacks-table td:first-child {
    padding-right: 1.2rem;
    overflow-wrap: break-word;
  }
  .setbacks-table th:last-child,
  .setbacks-table td:last-child {
    width: 5.5rem;
    text-align: right;
    font-variant-numeric: tabular-nums;
  }
  .setbacks-table tbody td:last-child {
    color: var(--setbacks-accent);
    font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
  }
  .setbacks-journals {
    display: grid;
    gap: 2.5rem;
  }
  .setbacks-journals > section {
    display: grid;
    grid-template-columns: 7rem minmax(0, 1fr);
    gap: 1.5rem;
    align-items: start;
  }
  .setbacks-journals .setbacks-year-heading {
    flex-direction: column;
    gap: 0.25rem;
  }
  .setbacks-year-heading {
    margin-bottom: 0.6rem;
    padding-top: 0.8rem;
    border-top: 2px solid var(--global-text-color);
  }
  .setbacks-page .setbacks-year-heading h4 {
    margin: 0;
    font-size: 1.45rem;
    font-weight: 600;
    letter-spacing: -0.04em;
  }
  .setbacks-page .setbacks-pending {
    margin: 1.5rem 0 0;
    color: var(--setbacks-muted);
    font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
    font-size: 0.85rem;
  }
  @media (max-width: 640px) {
    .setbacks-hero {
      grid-template-columns: 1fr;
      gap: 2rem;
      padding: 2.5rem 0 3rem;
    }
    .setbacks-page .setbacks-title {
      max-width: 5ch;
      font-size: clamp(4rem, 20vw, 6rem);
      line-height: 0.95;
    }
    .setbacks-chapter {
      grid-template-columns: 1.5rem minmax(0, 1fr);
      gap: 0.5rem;
      padding-top: 2rem;
    }
    .setbacks-chapter-heading {
      align-items: flex-start;
      flex-direction: column;
      gap: 0.4rem;
    }
    .setbacks-conferences,
    .setbacks-journals > section {
      grid-template-columns: 1fr;
      gap: 1.25rem;
    }
    .setbacks-journals .setbacks-year-heading {
      flex-direction: row;
    }
    .setbacks-conferences .setbacks-table + .setbacks-table thead {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip-path: inset(50%);
    }
  }
---

{%- assign rejection_total = 0 -%}
{%- for record in page.conference_rejections -%}
{%- assign rejection_total = rejection_total | plus: record.count -%}
{%- endfor -%}
{%- for group in page.journal_rejections -%}
{%- for record in group.journals -%}
{%- assign rejection_total = rejection_total | plus: record.count -%}
{%- endfor -%}
{%- endfor -%}

<div class="setbacks-page">
  <p class="setbacks-eyebrow">Junming Liu / Personal record</p>
  <header class="setbacks-hero">
    <h1 class="setbacks-title">Still<br> here<span>.</span></h1>
    <div>
      <p class="setbacks-intro">A record of things that didn’t work out, shared openly and, I hope, with some encouragement for those finding their own way. There is more to us than where we started or where we fell.</p>
      <p class="setbacks-intro">Let time decide the outcome. For now, we keep showing up.</p>
    </div>
  </header>

  <section class="setbacks-chapter" aria-labelledby="academic-setbacks">
    <span class="setbacks-index" aria-hidden="true">01</span>
    <div>
      <div class="setbacks-chapter-heading">
        <h2 class="setbacks-chapter-title" id="academic-setbacks">Academic setbacks</h2>
        <div class="setbacks-summary">
          <strong>{{ rejection_total }}</strong>
          <span class="setbacks-count-label">rejections</span>
        </div>
      </div>

      <h3 class="setbacks-subtitle" id="conference-record">Conferences &amp; ARR</h3>
      {% assign conference_half = page.conference_rejections.size | plus: 1 | divided_by: 2 %}
      <div class="setbacks-conferences">
        <table class="setbacks-table" aria-labelledby="conference-record">
          <thead><tr><th scope="col">Venue</th><th scope="col">Rejections</th></tr></thead>
          <tbody>
            {% for record in page.conference_rejections limit: conference_half %}
            <tr><td>{{ record.venue | escape }}</td><td>{{ record.count }}</td></tr>
            {% endfor %}
          </tbody>
        </table>
        <table class="setbacks-table" aria-labelledby="conference-record">
          <thead><tr><th scope="col">Venue</th><th scope="col">Rejections</th></tr></thead>
          <tbody>
            {% for record in page.conference_rejections offset: conference_half %}
            <tr><td>{{ record.venue | escape }}</td><td>{{ record.count }}</td></tr>
            {% endfor %}
          </tbody>
        </table>
      </div>

      <h3 class="setbacks-subtitle" id="journal-record">Journals</h3>
      <div class="setbacks-journals" role="group" aria-labelledby="journal-record">
        {% for group in page.journal_rejections %}
        {% assign year_total = 0 %}
        {% for record in group.journals %}
          {% assign year_total = year_total | plus: record.count %}
        {% endfor %}
        <section aria-labelledby="journal-year-{{ group.year }}">
          <div class="setbacks-year-heading">
            <h4 id="journal-year-{{ group.year }}">{{ group.year }}</h4>
            <span class="setbacks-year-count">{{ year_total }} rejections</span>
          </div>
          <table class="setbacks-table" aria-labelledby="journal-year-{{ group.year }}">
            <thead><tr><th scope="col">Journal</th><th scope="col">Rejections</th></tr></thead>
            <tbody>
              {% for record in group.journals %}
              <tr><td>{{ record.name | escape }}</td><td>{{ record.count }}</td></tr>
              {% endfor %}
            </tbody>
          </table>
        </section>
        {% endfor %}
      </div>
    </div>

  </section>

  <section class="setbacks-chapter" aria-labelledby="other-setbacks">
    <span class="setbacks-index" aria-hidden="true">02</span>
    <div>
      <h2 class="setbacks-chapter-title" id="other-setbacks">Beyond research</h2>
      <p class="setbacks-pending">TBD.</p>
    </div>
  </section>
</div>

<!--
The two IEEE Transactions on Multimedia rejections include a resubmission.
Ordering references. Conference deadlines are proxies for submission order,
not personal submission dates. ARR entries follow the author's records.
EDBT is provisionally placed in late 2025 per the author's record; its exact
position within late 2025 remains approximate until the track or date is known.
The author confirmed both KDD rejections belong to Cycle 2.
SIGMETRICS is ordered using the Fall cycle, based on the author's late-2025 submission record.
EMNLP is provisionally ordered by its latest eligible ARR submission deadline.
ICLR 2025: https://iclr.cc/Conferences/2025/CallForPapers
CVPR 2025: https://openreview.net/group?id=thecvf.com/CVPR/2025/Conference
ICME 2025: https://ieee-cas.org/event/conference/2025-ieee-international-conference-multimedia-expo
ICCV 2025: https://iccv.thecvf.com/Conferences/2025/Dates
ACM MM 2025: https://acmmm2025.org/call-for-papers/
NeurIPS 2025: https://nips.cc/Conferences/2025/Dates
AAAI 2026: https://aaai.org/conference/aaai/aaai-26/paper-modification-guidelines/
ICASSP 2026: https://2026.ieeeicassp.org/wp-content/uploads/sites/4/2019/08/ICASSP2026_CfP.pdf
Eurographics 2026: https://eg2026.github.io/call_for_full_papers/
WWW 2026: https://www2026.thewebconf.org/calls/research-tracks.html
SIGMETRICS 2026: https://sigmetrics.org/sigmetrics2026/call_for_papers.html
CVPR 2026: https://cvpr.thecvf.com/Conferences/2026/Dates
SIGIR 2026: https://www.linkedin.com/posts/sigir2026_full-papers-track-sigir-2026-activity-7420242141299322880-aONC
ECCV 2026: https://eccv.ecva.net/Conferences/2026/Dates
UIST 2026: https://uist.acm.org/2026/cfp/
ACM MM 2026: https://2026.acmmm.org/site/important-dates.html
NeurIPS 2026: https://neurips.cc/Conferences/2026/Dates
IUI 2027: https://iui.acm.org/2027/call-for-papers/
WSDM 2027: https://www.wsdm-conference.org/2027/cffp.html
EDBT 2026: https://edbticdt2026.github.io/?contents=important_dates.html
KDD 2026: https://kdd2026.kdd.org/research-track-call-for-papers/
  https://kdd2026.kdd.org/call-for-reviewers/
EMNLP 2026: https://2026.emnlp.org/calls/main_conference_papers/
-->
