import "./movie-item";

class MovieList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({
      mode: "open",
    });
  }

  connectedCallback() {
    this.render();
  }

  set movies(data) {
    this._movies = data;
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  render() {
    // this.shadowDOM.innerHTML = `<style>@import "src/scripts/components/movie-list/movie-list.css";</style>`;
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
        }
    
        :host {
          display: block;
        }
        
        .flex-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
        
        movie-item {
          width: 23%;
          margin: 5px;
          padding: 10px;
          transition: 0.1s;
          border-radius: 5px;
          box-sizing: border-box;
          border: 1px solid gray;
          background-color: #f6f8f5;
        }
        
        movie-item:hover {
          opacity: 85%;
          transform: scale(1.03);
        }
        
        movie-item img {
          width: 100%;
          border-radius: 5px;
        }
        
        .pagination {
          margin-top: 10px;
        }
        
        .pagination button {
          width: 100px;
          padding: 5px;
          border: none;
          color: white;
          cursor: pointer;
          margin: 3px 3px;
          font-size: 1.1em;
          text-align: center;
          border-radius: 5px;
          background-color: #6842f5;
        }
        
        .pagination button:hover {
          background-color: #5c3ec7;
        }
        
        .pagination button:active {
          background-color: #4f37a7;
        }
        
        @media screen and (max-width: 900px) {
          movie-item {
            width: 31%;
          }
        }
        
        @media screen and (max-width: 700px) {
          movie-item {
            width: 47%;
          }
        }
        
        @media screen and (max-width: 500px) {
          movie-item {
            width: 95%;
          }
        }
      </style>
    `;

    if (this._movies) {
      this.shadowDOM.innerHTML += `<div class="flex-container"></div>`;

      this._movies.data.forEach((movie) => {
        const movieItem = document.createElement("movie-item");
        movieItem.movie = movie;
        this.shadowDOM.children[1].appendChild(movieItem);
      });

      this.shadowDOM.innerHTML += `
        <hr>
        <div class="pagination">
          ${this._movies.links.first ? '<button class="first">First</button>' : ""}
          ${this._movies.links.prev ? '<button class="prev">&laquo; Previous</button>' : ""}
          ${this._movies.links.next ? '<button class="next">Next &raquo;</button>' : ""}
          ${this._movies.links.last ? '<button class="last">Last</button>' : ""}
        </div>
      `;

      this.shadowDOM
        .querySelector(".pagination")
        .addEventListener("click", this._clickEvent);
    } else {
      this.shadowDOM.innerHTML = "<h3>Sedang Memproses...</h3>";
    }
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `<h3 class="placeholder">${message}</h3>`;
  }
}

customElements.define("movie-list", MovieList);
