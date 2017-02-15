import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    deleteReminder() {
      console.log(this);
      this.get('store')
      .findRecord('reminder', this.model.id, {backgroundReload: false })
      .then(reminder => {
        reminder.destroyRecord()
      })
    }
  }
});
