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
        posts.map(post => (
          <Article
            author={post.author}
            content={post.content}
            date={post.date}
            id={post.id}
            image={post.image}
            title={post.title}
            key={post.id}
          />
        ))}
    </main>
  );
};

export default Posts;
