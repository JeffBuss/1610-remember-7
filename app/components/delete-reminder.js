import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    deleteReminder() {
      this.get('store')
      .findRecord('reminder', this.model.id)
      .then(reminder => {
        reminder.destroy()
      })
    }
  }
});
