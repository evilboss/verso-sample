Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});
Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  action: 'action',
  where: 'client',
  title: 'Home'
});

Router.route('/dashboard', {
  name: 'dashboard',
  controller: 'DashboardController',
  where: 'client',
  parent: 'home',
  title: 'Dashboard'
});

Router.route('/items/new', {
  name: 'items.new'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard']
});
