document.addEventListener("DOMContentLoaded", () => {
  if (!window.gsap) return;

  // ScrollTrigger がある場合だけ登録＆スクロール演出
  if (window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".work__grid > li", {
      opacity: 0,
      y: 24,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.08,
      scrollTrigger: {
        trigger: ".work",
        start: "top 40%",
        once: true,
      },
    });

    gsap.from(".review__grid > li", {
      opacity: 0,
      y: 24,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.08,
      scrollTrigger: {
        trigger: ".review",
        start: "top 60%",
        once: true,
      },
    });
  }

  // ヒーローの演出（ScrollTriggerがなくてもOK）
  gsap.to(".hero-container", {
    duration: 0.8,
    ease: "power2.out",
    delay: 0.5,
    "--gray": "0%",
  });
});
