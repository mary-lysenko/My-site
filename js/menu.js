(() => {
    const refs = {
      openMenuBtn: document.querySelector("[data-menu-open]"),
      closeMenuBtn: document.querySelector("[data-menu-close]"),
      mobileMenu: document.querySelector("[data-menu]"),
      navLinks: document.querySelectorAll(".mob-nav-link"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);
  
    refs.navLinks.forEach(link => {
      link.addEventListener("click", () => {
        refs.mobileMenu.classList.remove("is-open");
      });
    });
  
    function toggleMenu() {
      refs.mobileMenu.classList.toggle("is-open");
    }
  })();