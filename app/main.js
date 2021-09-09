import { PlaylistController } from "./Controllers/PlaylistController.js";
import SongsController from "./Controllers/SongsController.js";

class App {
  songsController = new SongsController();
  playlistController = new PlaylistController();
}

window["app"] = new App();
