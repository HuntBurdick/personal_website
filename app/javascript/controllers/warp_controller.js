import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["container"];

  connect() {
    this.createStars(100);

    setTimeout(() => {
      this.fadeOut();
    }, 5000);
  }

  createStars(count) {
    for (let i = 0; i < count; i++) {
      const star = document.createElement('div');

      star.classList.add('star');
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 2}s`;
      this.containerTarget.appendChild(star);
    }
  }

  fadeOut() {
    this.containerTarget.classList.add('fade-out');
    const element2 = document.getElementById('intro_pane');

    if (element2) {
      element2.style.display = 'none';
    }

    setTimeout(() => {
      const element = document.getElementById('warp_wrapper');

      if (element) {
        element.style.display = 'none';
      }
    }, 1000);
  }
}
