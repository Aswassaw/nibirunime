// Import components
import "./components/nav-bar/nav-bar";
import "./components/search-bar/search-bar";
import "./components/movie-list/movie-list";
import API from "./data/api";

const main = () => {
  const movieListElement = document.querySelector("movie-list");
  const searchBarElement = document.querySelector("search-bar");

  const renderResults = (results) => {
    movieListElement.movies = results;
  };

  const fallbackResult = (message) => {
    movieListElement.renderError(message);
  };

  movieListElement.clickEvent = async (e) => {
    let url = null;

    if (e.target.classList.contains("first")) {
      url = movieListElement._movies.links.first;
    } else if (e.target.classList.contains("prev")) {
      url = movieListElement._movies.links.prev;
    } else if (e.target.classList.contains("next")) {
      url = movieListElement._movies.links.next;
    } else if (e.target.classList.contains("last")) {
      url = movieListElement._movies.links.last;
    }

    try {
      movieListElement.movies = null;
      const results = await API.pagination(url);
      renderResults(results);
    } catch (error) {
      fallbackResult(error);
    }
  };

  searchBarElement.clickEvent = async () => {
    try {
      movieListElement.movies = null;
      const results = await API.searchAnime(searchBarElement.value);
      renderResults(results);
    } catch (error) {
      fallbackResult(error);
    }
  };

  API.getAll()
    .then((results) => renderResults(results))
    .catch((error) => fallbackResult(error));
};

export default main;
