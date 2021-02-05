import { IArticle } from "../../../types";
import endpoints from "../../Posts/constants/endpoints";

const getPosts = callback => {
  fetch(endpoints.get.posts)
    .then(response => response.json())
    .then((result: IArticle[]) => {
      callback(result);
    })
    .catch(error => console.error(error));
};

export default getPosts;
