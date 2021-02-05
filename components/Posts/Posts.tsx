import React, { useEffect, useState } from "react";
import { IArticle } from "../../types";
import Article from "../Posts/components/Article/Article";
import getPosts from "../Posts/services/getPosts";

const Posts = () => {
  const [posts, setPosts] = useState<IArticle[] | []>([]);

  useEffect(() => {
    getPosts(setPosts);
  }, []);

  return (
    <main>
      {posts?.map(post => (
        <Article {...post} />
      ))}
    </main>
  );
};

export default Posts;
