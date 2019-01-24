import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    rating: 0,
    maxRating: 5,
    stars : computed("rating", "maxRating", function() {
        let stars = [];
        for(let i=1; i <= this.maxRating; i++){
            stars.push({
                rating: i,
                isFull: this.rating >= i
            });
        }
        return stars;
    }),
    onClick(){},
    actions:{
        setRating(newRating){
            // this.set("rating", rating);
            this.onClick(newRating);
        }
    }
});
