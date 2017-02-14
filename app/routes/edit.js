import Ember from 'ember';

export default Ember.Route.extend({
  saveReminder() {
    this.transitionTo('/reminders')
  }
});
