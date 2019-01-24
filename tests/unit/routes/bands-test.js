import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest} from 'ember-qunit';
import setupMirageTest from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | bands', function(hooks) {
  setupApplicationTest(hooks)
  setupMirageTest(hooks)

  test('visiting /bands', async function(assert) {
    await visit('/bands');

    assert.equal(currentURL(), '/bands');
  });

  test('Liste Bands', async function(assert) {
    this.server.create('band', {name:"Pierre's band"});
    this.server.create('band', {name:"YOLOOOOOO's band"});
    await visit("/");

    let bandLinks = document.querySelectorAll(".band");

    assert.equal(bandLinks.length, 2, "All bands are rendered");
    assert.ok(bandLinks[0].textContent.includes("Pierre's band"), "Le text du premier élément est bien identique");
  });
});
