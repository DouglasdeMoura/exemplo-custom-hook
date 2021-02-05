import { IArticle } from "../../../types";

const getPosts = callback => {
  fetch(
    "https://raw.githubusercontent.com/DouglasdeMoura/exemplo-custom-hook/master/api/posts.json?"
  )
    .then(response => response.json())
    .then((result: IArticle[]) => {
      console.log(result[0].thumbnail);
      // callback(result);
    })
    .catch(error => console.error(error));
};

export default getPosts;
