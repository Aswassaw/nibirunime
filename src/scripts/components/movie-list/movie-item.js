class MovieItem extends HTMLElement {
  set movie(data) {
    this._movie = data;
    this.render();
  }

  render() {
    this.innerHTML += `
      <img src="${this._movie.attributes.posterImage.small}" alt="${this._movie.attributes.titles.en_jp || "Anime"} Cover">
      <h5>${this._movie.attributes.titles.en_jp || this._movie.attributes.titles.en}</h5>
    `;
  }
}

customElements.define("movie-item", MovieItem);
