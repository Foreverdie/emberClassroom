import Controller from '@ember/controller';
import {empty} from '@ember/object/computed';

export default Controller.extend({
    isAddingSong: false,
    newSongName: '',
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
