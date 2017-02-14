import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  title: '',
  date: '',
  notes: '',

  actions:  {
    editReminder() {
      console.log("Button does thing!");
    }
  }
});
