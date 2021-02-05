import posts from "../../../api/posts.json";
import { IArticle } from "../../../types";

const getPosts = callback => {
  fetch(
    "https://raw.githubusercontent.com/DouglasdeMoura/exemplo-custom-hook/master/api/posts.json?"
  )
    .then(response => response.json())
    .then((result: IArticle[]) => {
      callback(result);
      // callback(posts);
    })
    .catch(error => console.error(error));
};

export default getPosts;
