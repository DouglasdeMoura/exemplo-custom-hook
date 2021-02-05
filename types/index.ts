export interface IThumbnail {
  image: string;
  caption?: string;
}

export interface IArticle {
  id: string;
  title: string;
  author: string;
  thumbnail: IThumbnail;
  date: string;
  content: string;
}
