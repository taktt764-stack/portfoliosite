document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("hamburger");
  const menu = document.querySelector(".header .nav");
  if (!burger || !menu) return;

  // aria-controls が指しているIDが無い場合でも動くように補助
  let menuId = burger.getAttribute("aria-controls");
  if (!menuId) {
    menuId = "global-menu";
    burger.setAttribute("aria-controls", menuId);
  }
  if (!menu.id) menu.id = menuId;

  // オーバーレイ（暗幕）をJSで生成（HTMLを増やさなくてOK）
  let overlay = document.getElementById("menu-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "menu-overlay";
    overlay.className = "menu-overlay";
    document.body.appendChild(overlay);
  }

  const openMenu = () => {
    burger.classList.add("is-open");
    menu.classList.add("is-open");
    overlay.classList.add("is-open");
    document.body.classList.add("is-menu-open");
    burger.setAttribute("aria-expanded", "true");
  };

  const closeMenu = () => {
    burger.classList.remove("is-open");
    menu.classList.remove("is-open");
    overlay.classList.remove("is-open");
    document.body.classList.remove("is-menu-open");
    burger.setAttribute("aria-expanded", "false");
  };

  const toggleMenu = () => {
    const isOpen = burger.classList.contains("is-open");
    isOpen ? closeMenu() : openMenu();
  };

  burger.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", closeMenu);

  // メニュー内リンクを押したら閉じる（#work など）
  menu.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", closeMenu);
  });

  // ✅ 追加：SNSアイコンをタップしたらメニューも閉じる
  document.querySelectorAll(".header .sns a").forEach((a) => {
    a.addEventListener("click", closeMenu);
  });

  // Escで閉じる
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  // 画面がPC幅に戻ったら閉じる（表示崩れ防止）
  window.addEventListener("resize", () => {
    if (window.innerWidth > 767) closeMenu();
  });
});

