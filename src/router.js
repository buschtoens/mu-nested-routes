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
      // callback triggers the error.
      // this.route('qux');
    });
  });
  this.route('one', function() {
    this.route('two');
  });
});

export default Router;
