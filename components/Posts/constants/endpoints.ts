const endpoints = {
  get: {
    posts: `https://raw.githubusercontent.com/DouglasdeMoura/exemplo-custom-hook/master/api/posts.json?date=${new Date().toDateString()}`
  }
};

export default endpoints;
