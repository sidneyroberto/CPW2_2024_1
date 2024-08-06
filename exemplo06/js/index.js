import { search } from "./controllers/TVShowController.js";

(async () => {
  const shows = await search("attack on titan");
  console.log(shows);
})();
