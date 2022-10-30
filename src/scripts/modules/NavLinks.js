class NavLinks {
  constructor() {
    this.navLinks = document.querySelectorAll('.header__nav__links li a');
    this.pageSections = document.querySelectorAll('section.pageSection');
    this.events();
  }

  events() {
    this.navLinks.forEach((link) => link.addEventListener('click', this.scrollToSection.bind(this)));
    window.addEventListener('scroll', this.highlightLink.bind(this));
  }

  scrollToSection(e) {
    e.preventDefault();
    const section = Array.from(this.pageSections).find(
      (section) => section.classList[1].toLocaleLowerCase() === e.target.textContent.toLocaleLowerCase()
    );
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    });
  }

  highlightLink() {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };

    let callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0.3) {
          this.navLinks.forEach((link) => link.classList.remove('active'));
          const link = Array.from(this.navLinks).find(
            (link) => entry.target.classList[1].toLocaleLowerCase() === link.textContent.toLocaleLowerCase()
          );
          link.classList.add('active');
        }
      });
      window.removeEventListener('scroll', this.highlightLink.bind(this));
    };

    let observer = new IntersectionObserver(callback, options);
    this.pageSections.forEach((section) => observer.observe(section));
  }
}

export default NavLinks;
