import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class MenuComponent extends Component {
  @service router;

  get showSwitcher() {
    return this.router.currentRouteName !== 'index';
  }

  @action
  handleSwitcherMenu() {
    if (this.showSwitcher) {
      this.args.onClickItem(!this.args.showMenu);
    }
  }
}
