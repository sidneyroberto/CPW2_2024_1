import { searchShows } from "./views/TVShowView.js";

const form = document.querySelector("#form-area form");
form.onsubmit = (e) => {
  e.preventDefault();

  searchShows();
};
