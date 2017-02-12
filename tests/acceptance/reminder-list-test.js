/* globals server */

import { test, skip } from 'qunit';
import moduleForAcceptance from 'remember/tests/helpers/module-for-acceptance';

import Ember from 'ember';

moduleForAcceptance('Acceptance | reminders list');

test('viewing the homepage', function(assert) {
  server.createList('reminder', 5);

  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/reminders', 'should redirect to /reminders');
    // we chose to complete issue 2 before 1
    assert.equal(Ember.$('.spec-reminder-item').length, 5, 'should render 5 reminders');
  });
});

test('clicking on an individual item', function(assert) {
  server.createList('reminder', 5);

  visit('/');
  click('.spec-reminder-item:first');

  andThen(function() {
    assert.equal(currentURL(), '/reminders/1', 'should redirect to the first item');
    assert.equal(Ember.$('.spec-reminder-item:first').text().trim(), Ember.$('.spec-reminder-title:first').text().trim(), 'should find the title of the reminder item');
  });
});

test('clicking to add a new note', function(assert) {
  visit('/');
  click('button');

  andThen(function() {
    assert.equal(currentURL(), '/reminders/new', 'should redirect to add a new item');
    assert.equal(find('input').text(), '', "the input fields are empty" );
  })

  fillIn('input.value', 'Words');
  andThen(function() {
    assert.equal(this.$('input').text(), 'Words', "the input field has text")
  })
})
