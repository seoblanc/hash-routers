import Container from "../core/Container.js";

class Todo extends Container{
  mount() {
    const button = document.querySelector('.main-button');
    button.addEventListener('click', () => {
      this.router.push('other');
    });
  }

  render() {
    return `<div>Todo</div>
    <button type="button" class="main-button">Home</button>
    `
  }
}

export default Todo;