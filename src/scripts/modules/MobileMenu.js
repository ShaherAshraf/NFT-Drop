class MobileMenu {
  constructor() {
    this.mobileMenuIcon = document.querySelector('.header__menu-icon');
    this.headerNav = document.querySelector('.header__nav');
    this.events();
  }

  events() {
    window.addEventListener('resize', this.closeMenu.bind(this));
    this.mobileMenuIcon.addEventListener('click', this.toggleMenu.bind(this));
  }

  closeMenu() {
    if (window.innerWidth >= 768) {
      this.headerNav.classList.add('closed');
      this.mobileMenuIcon.textContent = 'menu';
    }
  }

  toggleMenu() {
    this.headerNav.classList.toggle('closed');
    this.mobileMenuIcon.textContent = this.headerNav.classList.contains('closed') ? 'menu' : 'close';
  }
}

export default MobileMenu;
