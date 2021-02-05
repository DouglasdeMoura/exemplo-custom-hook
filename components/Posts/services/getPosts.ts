import posts from "../../../api/posts.json";

const getPosts = callback => {
  fetch("/api/posts.json")
    .then(response => response.json())
    .then(result => {
      console.log("cheguei aqui");
      callback(posts);
      console.log("resyut", result);
    })
    .catch(error => {
      throw new Error(error);
    });
};

export default getPosts;
