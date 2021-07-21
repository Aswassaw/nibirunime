class NavBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({
      mode: "open",
    });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    // this.shadowDOM.innerHTML = `<style>@import "src/scripts/components/nav-bar/nav-bar.css";</style>`;
    this.shadowDOM.innerHTML = `
      <style>
        * {
        margin: 0;
        padding: 0;
        }
    
        :host {
          display: block;
        }
    
        nav {
          padding: 15px;
          text-align: center;
          background-color: #5c33f6;
        }
        
        nav a {
          color: white;
          font-size: 23px;
          transition: 0.1s;
          font-weight: bold;
          text-decoration: none;
        }
        
        nav a:hover {
          padding: 7px;
          border-radius: 5px;
          background-color: rgb(83, 51, 202);
        }
      </style>
    `;
    this.shadowDOM.innerHTML += `<nav><a href="${window.location.href}">Nibirunime</a></nav>`;
  }
}

customElements.define("nav-bar", NavBar);
