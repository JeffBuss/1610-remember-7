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
    assert.equal(Ember.$('.spec-reminder-item').length, 5, 'should render 5 reminders');
  });
});

test('clicking on an individual item', function(assert) {
  server.createList('reminder', 5);

  visit('/');
  click('.spec-reminder-item:first');

  andThen(function() {
    assert.equal(currentURL(), '/reminders/1', 'should redirect to the first item');
    assert.equal(Ember.$('.spec-reminder-title:first').text().trim(), Ember.$('.spec-reminder-title:first').text().trim(), 'should find the title of the reminder item');
    assert.equal(Ember.$('.active').length, 1, 'the reminder clicked has an active class')
  });
});

test('clicking new note button', function(assert) {
  visit('/');
  click('button');

  andThen(function() {
    assert.equal(currentURL(), '/reminders/new', 'should redirect to add a new item');
    assert.equal(find('input').text(), '', "the input fields are empty" );
  })
})

test('adding new notes', function(assert) {
  visit('/reminders/new')

  andThen(function() {
    fillIn('.spec-title-input', 'Stay Thirsty');
    // fillIn('.spec-date-input', '2017-2-2');
    // fillIn('.spec-note-input', 'Brenna owes me an organic gatorade');

    click('.spec-submit-new-btn');

    andThen(function() {
      assert.equal(find('.spec-reminder-item').length, 1, 'should append a new reminder to the page when clicked')
      assert.equal(find('.spec-reminder-title').text(), 'Stay Thirsty', 'should display the correct title')
    })
  })
})
