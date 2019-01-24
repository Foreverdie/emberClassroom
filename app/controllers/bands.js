import Controller from '@ember/controller'
import { empty } from '@ember/object/computed'

export default Controller.extend({
  isAddingBand: false, //on va pouvoir utiliser la variable dans tout le template
  newBandName: '',
  isAddButtonDisabled: empty('newBandName'), //si vide renvoie "true"
  actions: {
    addBand() {
      this.set('isAddingBand', true) // il faut utiliser le setter
    },
    cancelBand() {
      this.set('isAddingBand', false)
    },
    async saveBand(event) {
      event.preventDefault();

      let newBand = this.store.createRecord('band', {
        name: this.get('newBandName')
      });

      await newBand.save();
      // let newBand = Band.create({ name: this.get('newBandName') })
      // this.model.pushObject(newBand)
      this.setProperties({
        newBandName: '',
        isAddingBand: false,
      })
      this.transitionToRoute('bands.band.songs', newBand.id)
    }
  }
});
