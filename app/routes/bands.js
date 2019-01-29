import Route from '@ember/routing/route';
import wait from '../utils/wait';
import AuthenticatedRoute from "ember-simple-auth/mixins/authenticated-route-mixin";

export default Route.extend(AuthenticatedRoute, {
  async model(){
    await wait(1000);

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
