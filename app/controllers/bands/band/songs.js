import Controller from '@ember/controller';
import {empty, sort} from '@ember/object/computed';
import {computed} from '@ember/object';

export default Controller.extend({
    queryParams:{
      sortBy:'sort',
      searchTerm:'s'
    },
    isAddingSong: false,
    newSongName: '',
    sortBy:"titleAsc",
    searchTerm:'',
    matchingSongs: computed("model.songs.@each.title","searchTerm", function(){
        let searchTerm = this.searchTerm.toLowerCase();
        return this.model.get("songs").filter((song) => {
            return song.title.toLowerCase().includes(searchTerm);
        })
    }),
    sortProperties: computed('sortBy', function(){
        let options = {
            ratingDesc : ['rating:desc', 'title:asc'],
            ratingAsc : ['rating:asc', 'title:asc'],
            titleDesc : ['title:desc'],
            titleAsc : ['title:asc'],
        }

        return options[this.sortBy];
    }),
    sortedSongs: sort('matchingSongs', 'sortProperties'),
    isAddButtonDisabled: empty('newSongName'),
    actions: {
        addSong() {
            this.set('isAddingSong', true);
        },
        cancelSong() {
            this.set('isAddingSong', false);
        },
        async saveSong(event) {
            event.preventDefault();
            let newSong = this.store.createRecord('song', { title: this.get('newSongName'), band : this.model });
            await newSong.save();

            this.setProperties({
              newSongName: '',
              isAddingSong: false,
            });
        },
        async updateRating(song, rating){
            song.set("rating",rating);
            await song.save();
        }
    }
});
