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

/*
 * Initialize the DB
 */

//app related stuff
Settings = new Meteor.Collection('settings');
//make sure that we have at least the default settings in
if(Meteor.isServer)
{
    Meteor.startup(function () {
    if (Settings.find().count() === 0)
    {
        console.log('No app settings found, putting in defaults.');
        /*
        Settings.insert({map_image: "default.jpg",
                      map_name: "Struggle for Balance Universe",
                      map_width: "1920",
                      map_height: "1080"});
                      */
    }
  });
}

//fleet related stuff
Ships = new Meteor.Collection('ships');
FleetEleements = new Meteor.Collection('fleet-elements');
Fleets = new Meteor.Collection('fleets');
Organizations = new Meteor.Collection('organizations');
ShipClasses = new Meteor.Collection('ship-classes');