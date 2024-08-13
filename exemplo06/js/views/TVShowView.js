import { search } from "../controllers/TVShowController.js";

const $ = document.getElementById.bind(document);

const printCard = (show) => {
  const showCard = `
    <div class="show-card">
        <a href="/details.html?id=${show.id}">
            <img src="${show.imageURL}" alt="${show.name}">
        </a>

        <a href="/details.html?id=${show.id}">
            <p>${show.name}</p>
        </a>
    </div>
  `;

  const showsArea = $("shows-area");
  showsArea.insertAdjacentHTML("beforeend", showCard);
};

export const searchShows = async () => {
  const query = $("query").value.trim();

  if (query) {
    $("not-found-message").style.display = "none";

    const loadingAnimation = `<img src="/img/loading.gif" alt="Procurando">`;
    $("shows-area").innerHTML = loadingAnimation;

    // Não sabemos quanto tempo a instrução abaixo demorará para completar
    const shows = await search(query);

    $("shows-area").innerHTML = "";

    // Se tem resultados para exibir...
    if (shows.length > 0) {
      shows.forEach((s) => printCard(s));
    } else {
      $("not-found-message").style.display = "block";
    }
  }
};
