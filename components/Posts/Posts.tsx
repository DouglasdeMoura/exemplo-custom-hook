import React, { useEffect, useState } from "react";
import { IArticle } from "../../types";
import Article from "../Posts/components/Article/Article";
import getPosts from "../Posts/services/getPosts";

const Posts = () => {
  const [posts, setPosts] = useState<IArticle[]>([]);

  useEffect(() => {
    getPosts(setPosts);
  }, []);

  return (
    <main>
      {posts.length > 0 &&
        posts.map(post => <Article {...post} key={post.id} />)}
    </main>
  );
};

export default Posts;
