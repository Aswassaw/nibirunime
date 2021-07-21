class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({
      mode: "open",
    });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector(".search-input").value;
  }

  render() {
    // this.shadowDOM.innerHTML = `<style>@import "src/scripts/components/search-bar/search-bar.css";</style>`;
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
        }
        
        .search-input-container {
          flex-grow: 3;
        }
        
        .search-button-container {
          flex-grow: 1;
        }
        
        input {
          width: 100%;
          padding: 5px;
          font-size: 1.1em;
          border: none;
          outline: none;
        }
        
        .search-input {
          border-bottom: 1px solid black;
        }
        
        .search-button {
          background-color: #6842f5;
          color: white;
          cursor: pointer;
          text-align: center;
          border-radius: 5px;
        }
        
        .search-button:hover {
          background-color: #5c3ec7;
        }
        
        .search-button:active {
          background-color: #4f37a7;
        }
      </style>
    `;
    this.shadowDOM.innerHTML += `
      <div class="flex-container">
        <div class="search-input-container">
            <input type="search" class="search-input" placeholder="Cari Anime..." autofocus>
        </div>
        <div class="search-button-container">
            <input type="submit" class="search-button" value="Search">
        </div>
      </div>
    `;

    this.shadowDOM
      .querySelector(".search-button")
      .addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-bar", SearchBar);
