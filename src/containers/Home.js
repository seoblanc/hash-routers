import Container from "../core/Container.js";

class Home extends Container{
  mount() {
    const button = document.querySelector('.main-button');
    button.addEventListener('click', () => {
      this.router.push('todo');
    });
  }

  render() {
    return `<div>Home</div>
    <button type="button" class="main-button">Todo</button>
    `
  }
}

export default Home;