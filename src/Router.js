class Router {
  #app;
  #pages;
  #currentPage;

  constructor() {
    this.#app = document.getElementById('app');

    // add hash change event
    window.onhashchange = () => {
      this.renderPage();
    };
  }

  setPage({ pages }) {
    this.#pages = pages;
    this.renderPage();
  }

  renderPage() {
    const hash = window.location.hash.replace('#', '');
    const { page } = this.#pages.find((page) => page.path === hash) || this.#pages[0];
    console.log(page)
    this.#currentPage = page;
    this.#app.innerHTML = this.#currentPage.render();
    this.#currentPage.mount();
  }

  push(hash) {
    window.location.hash = hash;
  }

}

export default Router;