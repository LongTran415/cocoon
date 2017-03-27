import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');

  this.route('projects', function() {
    this.route('project_1');
    this.route('project_2');
    this.route('project_3');
  });
});

export default Router;
