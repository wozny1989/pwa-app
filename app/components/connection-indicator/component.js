import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class ConnectionIndicatorComponent extends Component {
  @tracked onlineStatus = true;

  constructor() {
    super(...arguments);

    setInterval(() => {
      this.onlineStatus = navigator.onLine;
    }, 500);
  }
}
