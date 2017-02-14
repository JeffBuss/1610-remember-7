import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  title: '',
  date: '',
  notes: '',

  action:  {
    editReminder() {
      console.log("Button does thing!");
    }
  }
});
