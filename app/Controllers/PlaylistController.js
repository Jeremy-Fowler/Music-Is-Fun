import { ProxyState } from "../AppState.js";
import { axiosService } from "../Services/AxiosService.js";

function _drawPlaylist() {
    let template = ''
    ProxyState.playlist.forEach(p => template += p.Template)
    document.getElementById('playlist').innerHTML = template
 }
export class PlaylistController{
    constructor(){
        console.log("playlist controller is working")
    }
    async getPlaylist(){
        try {
            await axiosService.getPlaylist()
        } catch (error) {
            error.log("it's an error", error)
        }
    }
}