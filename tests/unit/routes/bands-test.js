import { module, test } from 'qunit';
import { click, fillIn, visit, currentURL } from '@ember/test-helpers';
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

    // let bandLinks = document.querySelectorAll("[data-test-tpk=band-link]");

    // assert.equal(bandLinks.length, 2, "All bands are rendered");
    // assert.dom("[data-test-tpk=band-link]").exists({count:2, "All bands are rendered"});
    // assert.ok(bandLinks[0].textContent.includes("Pierre's band"), "Le text du premier élément est bien celui attendu");
    assert.dom("[data-test-tpk=band-link]:first-child").hasText("Pierre's band", "Le text du premier élément est bien celui attendu")
  });

  test('Create a band', async function(assert){
    await visit("/");
    await click(".show");
    await fillIn("[data-test-tpk=band-form-input-band]", "testessss");

    await click("[data-test-tpk=band-form-submit]");

    let bandLinks = document.querySelectorAll("[data-test-tpk=band-link]");

    assert.equal(bandLinks.length, 1, "All bands are rendered");
    assert.ok(bandLinks[0].textContent.includes("testessss"), "The new band link is rendered");
  });
});
