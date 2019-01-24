import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    
    return this.store.findAll("band");

  },
  actions:{
    // willTransition(transition){
    //   let leave = window.confirm("Are you sure to quit ?");
    //   if(!leave) {
    //     transition.abort();
    //   }
    // }
  }
});
