import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class SpiritLevelComponent extends Component {
  @tracked beta;
  @tracked gamma;
  @tracked alpha;
  @tracked wakeLockObj;

  constructor() {
    super(...arguments);

    this._setActiveScreen(true);

    window.addEventListener('deviceorientation', (event) => {
      this.beta = event.beta.toFixed(1);
      this.gamma = event.gamma.toFixed(1);
      this.alpha = event.alpha.toFixed(1);
    });
  }

  willDestroy() {
    super.willDestroy(...arguments);

    this._setActiveScreen(false);
  }

  get precent() {
    if (this.beta > 100) {
      return 50 - (180 - this.beta) * 10;
    }

    if (this.beta < -100) {
      return 50 + (180 + Number(this.beta)) * 10;
    }

    return 50 - this.beta * 10;
  }

  get precentLimiter() {
    if (this.precent > 95) {
      return 96;
    }

    if (this.precent < 5) {
      return 4;
    }

    return this.precent;
  }

  _setActiveScreen(flag) {
    if (flag) {
      return navigator.wakeLock.request('screen').then((wakeLock) => {
        this.wakeLockObj = wakeLock;

        this.wakeLockObj.addEventListener('release', () => {
          this.wakeLockObj = null;
        });
      });
    }

    this.wakeLockObj.release();
    this.wakeLockObj = null;
  }
}
