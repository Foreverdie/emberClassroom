import Route from '@ember/routing/route';

export default Route.extend({
  model(params){
    // this.store.
    // let bands = this.modelFor('bands'); //va me chercher le modele actuel de la route bands
    return this.store.findRecord('band', params.id); //et récupère le slug
  }
});
