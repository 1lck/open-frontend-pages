document.addEventListener("DOMContentLoaded", function () {
  // ===== MOBILE NAVIGATION =====
  const hamburgerButton = document.querySelector(".main-nav__hamburger-icon");
  const navMenu = document.querySelector(".main-nav__menu");

  if (hamburgerButton && navMenu) {
    const iconMenu = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    `;
    const iconClose = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    `;

    function updateHamburgerIcon(isExpanded) {
      hamburgerButton.innerHTML = isExpanded ? iconClose : iconMenu;
    }

    hamburgerButton.setAttribute("aria-controls", "main-navigation");
    hamburgerButton.setAttribute("aria-expanded", "false");
    hamburgerButton.setAttribute("type", "button");

    hamburgerButton.addEventListener("click", function (event) {
      event.stopPropagation();
      const isExpanded = this.getAttribute("aria-expanded") === "true";
      const newExpanded = !isExpanded;

      this.setAttribute("aria-expanded", newExpanded);
      navMenu.classList.toggle("active", newExpanded);
      updateHamburgerIcon(newExpanded);
    });

    // Close menu when click outside
    document.addEventListener("click", function (event) {
      if (navMenu.classList.contains("active")) {
        if (
          !hamburgerButton.contains(event.target) &&
          !navMenu.contains(event.target)
        ) {
          navMenu.classList.remove("active");
          hamburgerButton.setAttribute("aria-expanded", "false");
          updateHamburgerIcon(false);
        }
      }
    });

    // Close menu when resizing to desktop
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 768 && navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        hamburgerButton.setAttribute("aria-expanded", "false");
        updateHamburgerIcon(false);
      }
    });
  }
});
// ===== SCROLL TO TOP BUTTON =====
const scrollToTopBtn = document.querySelector(".scroll-to-top");

if (scrollToTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.classList.add("visible");
    } else {
      scrollToTopBtn.classList.remove("visible");
    }
  });

  scrollToTopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
