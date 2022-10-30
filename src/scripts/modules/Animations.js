class Animations {
  constructor() {
    this.heroContent = document.querySelector('.hero__content');
    this.aboutContent = document.querySelector('.about__content');
    this.aboutImage = document.querySelector('.about__img');
    this.rarityContent = document.querySelector('.rarity__content');
    this.rarityImage = document.querySelector('.rarity__img');
    this.creatorContent = document.querySelector('.creator__content');
    this.creatorImage = document.querySelector('.creator__img');
    this.ctaContent = document.querySelector('.callToAction__content');
    this.ctaImage = document.querySelector('.callToAction__img');
    this.fire();
  }

  fire() {
    this.animateHero();
    window.addEventListener('resize', this.animateHero.bind(this));
    this.animateSection(this.aboutContent, this.aboutImage);
    this.animateSection(this.rarityContent, this.rarityImage);
    this.animateSection(this.creatorContent, this.creatorImage);
    this.animateSection(this.ctaContent, this.ctaImage);
  }

  animateHero() {
    let mql = window.matchMedia('(min-width: 768px)');
    Array.from(this.heroContent.children).forEach((child) => {
      child.style.cssText += `
        opacity: 1;
        transform: ${mql.matches ? `translateY(${child.dataset.y}px)` : `translateY(0)`};
        transition: all 0.5s ${child.dataset.delay}s ease-in-out;
      `;
    });
  }

  animateSection(targetedSection, sectionImage) {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };

    let callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0.1) {
          Array.from(entry.target.children).forEach((child) => {
            child.style.cssText += `
              opacity: 1;
              transform: translateY(0);
              transition: all 0.5s ${child.dataset.delay}s ease-in-out;
            `;
          });
          sectionImage.style.scale = 1;
          sectionImage.style.transition = `all 0.5s ease-in-out`;
        }
      });
    };

    let observer = new IntersectionObserver(callback, options);
    observer.observe(targetedSection);
  }
}

export default Animations;
