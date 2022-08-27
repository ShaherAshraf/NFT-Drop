class CharactersRows {
  constructor() {
    this.row1 = document.querySelector('.characters__row--1');
    this.row2 = document.querySelector('.characters__row--2');
    this.row3 = document.querySelector('.characters__row--3');
    this.events();
  }

  events() {
    window.addEventListener('scroll', this.scrollRows.bind(this));
  }

  scrollRows() {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };

    let callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0.1) {
          this.row1.style.transform = `translateX(${-window.scrollY * 0.5}px)`;
          this.row2.style.transform = `translateX(${window.scrollY * 0.5}px)`;
          this.row3.style.transform = `translateX(${-window.scrollY * 0.5}px)`;
        }
      });
    };

    let observer = new IntersectionObserver(callback, options);
    let target = document.querySelector('.characters');
    observer.observe(target);
  }
}

export default CharactersRows;
