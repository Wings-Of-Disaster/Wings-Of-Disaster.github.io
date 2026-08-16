(() => {
  const page = document.querySelector(".misc-page");

  if (!page) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const localVideos = page.querySelectorAll("video");

  const updateVideoPlayback = (video, isVisible) => {
    if (prefersReducedMotion.matches || !isVisible) {
      video.pause();
      return;
    }

    const playAttempt = video.play();
    if (playAttempt) playAttempt.catch(() => {});
  };

  if ("IntersectionObserver" in window) {
    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => updateVideoPlayback(entry.target, entry.isIntersecting));
      },
      { threshold: 0.45 }
    );

    localVideos.forEach((video) => videoObserver.observe(video));
  } else {
    localVideos.forEach((video) => updateVideoPlayback(video, true));
  }

  prefersReducedMotion.addEventListener("change", () => {
    localVideos.forEach((video) => updateVideoPlayback(video, false));
  });

  page.querySelectorAll(".misc-lore-card").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const bounds = card.getBoundingClientRect();
      card.style.setProperty("--pointer-x", `${event.clientX - bounds.left}px`);
      card.style.setProperty("--pointer-y", `${event.clientY - bounds.top}px`);
    });
  });
})();
