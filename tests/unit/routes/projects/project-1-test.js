import { moduleFor, test } from 'ember-qunit';

moduleFor('route:projects/project-1', 'Unit | Route | projects/project 1', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
