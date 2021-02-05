export interface IThumbnail {
  url: string;
  caption?: string;
}

export interface IArticle {
  id: string;
  title: string;
  author: string;
  image: IThumbnail;
  date: string;
  content: string;
}

export interface IPosts {
  posts: IArticle[];
}
