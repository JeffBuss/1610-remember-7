import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.get('store').findRecord('reminder', this.model.id);
  },

  action: {
    saveReminder() {
      this.transitionTo("/reminders")
    }
  }
});
//
