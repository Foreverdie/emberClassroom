import Route from '@ember/routing/route';
import wait from '../../../utils/wait';


export default Route.extend({
  async model(){
    await wait(1000);


    return this.modelFor('bands.band');
     //this.modelFor est utilisé pour récupérer le modèle de la route (ici bands.band),
     //la route est un singleton, ré-initialisé à chaque passage
  },
  resetController(controller){
    controller.setProperties({
      isAddingSong : false,
      newSongName : ""
    })
  },
  actions:{
    didTransition(){
      let band = this.modelFor(this.routeName);
      document.title = band.name;
    }
  }
});
