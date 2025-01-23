import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="sound"
export default class extends Controller {
  static values = {
    hoverSound: String,
    clickSound: String,
  };

  connect() {
    this.hoverAudio = this.hoverSoundValue ? new Audio(this.hoverSoundValue) : null;
    this.clickAudio = this.clickSoundValue ? new Audio(this.clickSoundValue) : null;
  }

  async playHoverSound() {
    if (this.hoverAudio) {
      if (!this.hoverAudio.paused) {
        this.hoverAudio.pause(); // Stop the current playback (which does not seem to be working..)
        this.hoverAudio.currentTime = 0;
      }
      try {
        await this.hoverAudio.play();
      } catch (error) {
        console.warn("Hover sound play failed:", error);
      }
    }
  }

  async playClickSound() {
    if (this.clickAudio) {
      if (!this.clickAudio.paused) {
        this.clickAudio.pause(); // Stop the current playback (which does not seem to be working..)
        this.clickAudio.currentTime = 0;
      }
      try {
        await this.clickAudio.play();
      } catch (error) {
        console.warn("Click sound play failed:", error);
      }
    }
  }
}
