import { ProxyState } from "../AppState.js";
import Song from "../Models/Song.js";

// @ts-ignore
export const sandBoxApi = axios.create({
  //TODO Change YOURNAME to your actual name
  baseURL: "https://bcw-sandbox.herokuapp.com/api/bigheff/songs"
});

class AxiosService{
  async removeSong(songId) {
    console.log(ProxyState.playlist)
    let res = await sandBoxApi.delete(songId) 
    console.log('delete', res)
    ProxyState.playlist.filter(s => s.id != songId)
  }
  async addSong(songId) {
    const newSong = ProxyState.songs.find(s => s.id == songId)
    console.log(newSong)
    let res = await sandBoxApi.post('', newSong)
    console.log("the res is", res)
  }
  async getPlaylist() {
    let res = await sandBoxApi.get('')
    console.log('log the res', res.data)
    ProxyState.playlist = res.data.map(s => new Song(s))
  }

}
  

export const axiosService = new AxiosService()