HomeController = RouteController.extend({
  layoutTemplate: 'MasterLayout',

  subscriptions: function() {
    this.subscribe('items');
  },

  action: function() {
    this.render('Home');
  },
  dashboard: function () {
    this.render('dashboard');
  },
});
