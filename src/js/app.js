;(() => {
  const menuRefs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    overlay: document.querySelector('[data-menu-overlay]'),
    menu: document.querySelector('[data-menu]'),
  }

  menuRefs.openMenuBtn?.addEventListener('click', toggleMenu)
  menuRefs.closeMenuBtn?.addEventListener('click', toggleMenu)
  menuRefs.overlay?.addEventListener('click', toggleMenu)

  function toggleMenu() {
    menuRefs.menu?.classList.toggle('is-open')
    menuRefs.overlay?.classList.toggle('is-open')
  }

  const header = document.querySelector('[data-header]')

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      header?.classList.add('scrolled')
    } else {
      header?.classList.remove('scrolled')
    }
  })

  const menuItems = document.querySelectorAll('.navigation-link');

  function setActiveMenu() {
    const currentHash = window.location.hash;

    menuItems.forEach((item) => {
      if (item.getAttribute('href') === currentHash) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  window.addEventListener('hashchange', setActiveMenu);
  window.addEventListener('load', setActiveMenu);
})()
