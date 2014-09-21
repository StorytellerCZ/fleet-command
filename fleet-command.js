/*
 * The routes for the app
 *
 */
Router.configure({
  layoutTemplate: 'fleet-command'
});

Router.map(function() {
  this.route('home', {path: '/', template: 'welcome'});
  this.route('office', {path: '/office', template: 'office'});
  this.route('overview', {path: '/overview', template: 'overview'});
  this.route('admin', {path: '/admin', template: 'admin'});
  this.route('about');
});