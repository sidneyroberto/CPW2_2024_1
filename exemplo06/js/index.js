import { loadShows, searchShows } from "./views/TVShowView.js";

loadShows();

const form = document.querySelector("#form-area form");
form.onsubmit = (e) => {
  e.preventDefault();

  searchShows();
};
