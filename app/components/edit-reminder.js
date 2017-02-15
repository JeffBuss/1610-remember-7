import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    saveReminder() {
      this.get('store')
      .findRecord('reminder', this.model.id)
      .then(reminder => {
        reminder.save()
      })
    }
  }
});
