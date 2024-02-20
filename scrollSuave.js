export default class ScrollSuave {
  constructor(seletor) {
    this.linksInternos = document.querySelectorAll(seletor);
    this.options = { behavior: 'smooth', block: 'start' };
    this.scrollToView = this.scrollToView.bind(this);
  }

  scrollToView(event) {
    event.preventDefault();
    const href = event.target.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  }

  init() {
    this.linksInternos.forEach((link) => {
      link.addEventListener('click', this.scrollToView);
      link.scroll;
    });
    return this;
  }
}
