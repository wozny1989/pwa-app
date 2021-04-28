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
      this.beta = event.beta;
      this.gamma = event.gamma;
      this.alpha = event.alpha;
    });
  }

  willDestroy() {
    super.willDestroy(...arguments);

    this._setActiveScreen(false);
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