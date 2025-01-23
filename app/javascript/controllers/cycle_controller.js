import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["span", "link"];

  connect() {
    this.currentIndex = 0;
    this.totalSpans = this.spanTargets.length;

    this.spanTargets.forEach((span, index) => {
      span.style.opacity = index === 0 ? "1" : "0";
      span.style.transition = "opacity 1s ease";
    });

    this.linkTarget.style.opacity = "0";

    this.cycleSpans();
  }

  cycleSpans() {
    if (this.currentIndex >= this.totalSpans - 1) {
      this.linkTarget.style.opacity = "1";
      return;
    }

    const currentSpan = this.spanTargets[this.currentIndex];
    const nextSpan = this.spanTargets[this.currentIndex + 1];

    const delay = parseFloat(currentSpan.dataset.seconds) || 3;

    setTimeout(() => {
      currentSpan.style.opacity = "0";
      nextSpan.style.opacity = "1";

      this.currentIndex++;
      this.cycleSpans();
    }, delay * 1000);
  }
}
