# mu-nested-routes

This repo demos a bug in the Module Unification resolver. It does not work for routes which are nested three levels deep.

This is the `router.js`:

```js
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
