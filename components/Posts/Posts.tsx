import React, { useEffect, useState } from "react";
import { IArticle } from "../../types";
import Article from "../Posts/components/Article/Article";
import endpoints from "../Posts/constants/endpoints";
import useFetch from "../Posts/hooks/useFetch";
import getPosts from "../Posts/services/getPosts";

const Posts = () => {
  const [posts, setPosts] = useState<IArticle[]>(null);

  useEffect(() => {
    getPosts(setPosts);
  }, []);

  const posts2 = useFetch(endpoints.get.posts);

  return (
    <main>
      {!!posts && posts.map(post => <Article {...post} key={post.id} />)}
      <hr />
      {!!posts2 && posts2.map(post => <Article {...post} key={post.id} />)}
    </main>
  );
};

export default Posts;
