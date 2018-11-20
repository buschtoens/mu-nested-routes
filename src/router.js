import EmberRouter from '@ember/routing/router';
import config from '../config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('foo', function() {
    this.route('bar', function() {
      // You don't even need to register a third-level route. Just providing the
      // callback triggers the error, because of the implicit `index` route.
      // this.route('qux');
    });
  });

  this.route('no', function() {
    this.route('auto-generated', function() {
      // Implicit `index` here works, because the `controller.js` and `route.js`
      // for `no/auto-generated/index` exist.
    });
  });

  this.route('one', function() {
    this.route('two');
  });
});

export default Router;
