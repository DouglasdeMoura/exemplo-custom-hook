import posts from "../../../api/posts.json";
import { IArticle } from "../../../types";

const getPosts = callback => {
  fetch(
    `https://raw.githubusercontent.com/DouglasdeMoura/exemplo-custom-hook/master/api/posts.json?date=${new Date().toDateString()}`
  )
    .then(response => response.json())
    .then((result: IArticle[]) => {
      callback(result);
    })
    .catch(error => console.error(error));
};

export default getPosts;
