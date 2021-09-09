import { ProxyState } from "../AppState.js";
import Song from "../Models/Song.js";

// @ts-ignore
export const sandBoxApi = axios.create({
  //TODO Change YOURNAME to your actual name
  baseURL: "//bcw-sandbox.herokuapp.com/api/bigheff/songs"
});

class AxiosService{
  async getPlaylist() {
    let res = await sandBoxApi.get('')
    console.log('log the res', res.data)
    ProxyState.playlist = res.data.map(s => new Song(s))
  }

}
  

export const axiosService = new AxiosService()