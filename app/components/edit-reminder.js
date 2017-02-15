import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions:  {
    editReminder() {
      console.log("Button does thing!");
    },
    saveReminder() {
      const reminder = this.getProperties('title', 'date', 'notes');
      console.log(reminder)
      this.set('reminder', reminder).save().then(() => {
        this.transitionTo('/reminders')
      })
    }
  }
});
