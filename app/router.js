import EmberRouter from '@ember/routing/router';
import config from 'pwa-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('poi');
  this.route('qr-scanner');
  this.route('notes');
  this.route('spirit-level');
});
