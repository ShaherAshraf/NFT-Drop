class RoadMap {
  constructor() {
    this.roadMapSection = document.querySelector('section.roadmap');
    this.roadMapImage = document.querySelector('.roadmap__img');
    this.events();
  }

  events() {
    window.addEventListener('scroll', this.rotateImage.bind(this));
  }

  rotateImage() {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    let callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0.1) {
          this.roadMapImage.style.rotate = `${(window.pageYOffset * entry.intersectionRatio) / 50}deg`;
          this.roadMapImage.style.position = 'sticky';
          this.roadMapImage.style.top = '10rem';
        }
      });
    };

    let observer = new IntersectionObserver(callback, options);
    observer.observe(this.roadMapSection);
  }
}

export default RoadMap;
