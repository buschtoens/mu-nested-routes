# mu-nested-routes

This repo demos a bug in the Module Unification resolver. It does not work for routes which are nested three levels deep and have an auto-generated `Route` or `Controller`.

This is the `router.js`:

```js
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
```

### Instructions

```
git clone git@github.com:buschtoens/mu-nested-routes.git
cd mu-nested-routes
yarn
ember s
```

Open http://localhost:4200/

You don't need to pass the MU env flag, since `.ember-cli.js` already does that for you.
