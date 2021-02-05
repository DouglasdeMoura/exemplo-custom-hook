import React, { FC } from "react";
import { IProps } from "../../../Posts/components/Article/types";
import formatDate from "./utils/formatDate";

const Article: FC<IProps> = ({ id, title, author, image, date, content }) => {
  return (
    <article id={`post-${id}`}>
      <header>
        <h2>{title}</h2>
        <div>
          <p>{author}</p>
          <p>{formatDate(date, "pt-BR")}</p>
        </div>
      </header>
      <figure>
        <img src={image.url} />
        <figcaption>{image.caption}</figcaption>
      </figure>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
};

export default Article;
