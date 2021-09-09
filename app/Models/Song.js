export default class Song {
  constructor(data) {
    this.title = data.trackName || data.title;
    this.albumArt =
      data.albumArt || data.artworkUrl100.replace(/100x100/g, "300x300");
    this.artist = data.artistName || data.artist;
    this.album = data.collectionName || data.album;
    this.price = data.trackPrice || data.price;
    this.preview = data.previewUrl || data.preview;
    this.id = data.trackId || data.id;
  }

  get Template() {
    return /*html*/`
    <div class="card" style="width: 20rem;">
      <img class="card-img-top img-fluid" src="${this.albumArt}" alt="Album art should go here">
      <div class="card-body">
        <h5 class="card-title">${this.artist}</h5>
        <p class="card-text"> Song: ${this.title} Album: ${this.album}</p>
        <button class="btn btn-primary" onclick="app.songsController.addSong('${this.id}')">Add to Playlist</button>
      </div>
    </div>
        `;
  }

  get playlistTemplate() {
    return /*html*/`
        <li><span>${this.title}</span> <span onclick="app.songsController.removeSong('${this.id}')" class="selectable">😢</span></li>
        `;
  }
}
