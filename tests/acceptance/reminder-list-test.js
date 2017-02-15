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
    assert.equal(Ember.$('.active').length, 2, 'the reminder clicked has an active class')
  });
});

test('add new note prompt', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(find('.spec-no-reminder-prompt').length, 1, 'should display a prompt to create a reminder when none are present')
  })
})

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
    fillIn('.spec-title-input', 'Brenna owes me an organic gatorade');

    click('.spec-submit-new-btn');

    andThen(function() {
      assert.equal(find('.spec-reminder-item').length, 1, 'should append a new reminder to the page when clicked')
      assert.equal(find('.spec-reminder-title').text().trim(), 'Brenna owes me an organic gatorade', 'should display the correct title')
    })
  })
})

test('editing notes', function(assert) {
  server.createList('reminder', 5);

  visit('/reminders/1');
  click('.edit-button');

  andThen(function() {
    assert.equal(currentURL(), '/reminders/1/edit', 'should redirect to the edit page');

    andThen(function() {
      fillIn('.spec-title-input', 'I can change the title');
      click('.spec-save-btn');

      andThen(function() {
        assert.equal(find('.spec-reminder-title').test().trim(), 'I can change the title', 'should match the new title')
      })
    })
  })
})
