import { ProxyState } from "../AppState.js";
import { axiosService } from "../Services/AxiosService.js";
import songService from "../Services/SongsService.js";

//Private
/**Draws the Search results to the page */
function _drawResults() { 
  let template = ''
  ProxyState.songs.forEach(s => template += s.Template)
  document.getElementById('songs').innerHTML = template
}

/**Draws the Users saved songs to the page */
function _drawPlaylist(){
  let template = ''
  ProxyState.playlist.forEach(s => template += s.playlistTemplate)
  document.getElementById('playlist').innerHTML = template
}


//Public
export default class SongsController {
  constructor() {
    //TODO Don't forget to register your listeners and get your data
    ProxyState.on('songs', _drawResults)
    ProxyState.on('playlist', _drawPlaylist)
    this.getPlaylist()
  }

  /**Takes in the form submission event and sends the query to the service */
  search(e) {
    //NOTE You dont need to change this method
    e.preventDefault();
    try {
      songService.getMusicByQuery(e.target.query.value);
    } catch (error) {
      console.error(error);
    }
  }
  async getPlaylist(){
    try {
        await axiosService.getPlaylist()
    } catch (error) {
        error.log("it's an error", error)
    }
}

  /**
   * Takes in a song id and sends it to the service in order to add it to the users playlist
   * @param {string} songId
   */
  async addSong(songId) { 
    try {
      await axiosService.addSong(songId)
    } catch (error) {
      console.log(error)
    }
  }

  /**
   * Takes in a song id to be removed from the users playlist and sends it to the server
   * @param {string} id
   */
  async removeSong(songId) {
    try {
      await axiosService.removeSong(songId)
    } catch (error) {
      console.log('🎂🎂🎂', error)
    }
   }
}
