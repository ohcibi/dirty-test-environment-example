import { test } from 'qunit';
import moduleForAcceptance from 'assets-test/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | index');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(find("input").val(), "");
  });

  click("button");

  andThen(function() {
    assert.notEqual(find("input").val(), "");
  });
});

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(find("input").val(), "");
  });

  click("button");

  andThen(function() {
    assert.notEqual(find("input").val(), "");
  });
});
