export interface User {
  id: string;
  username: string;
  email: string;
  image?: string;
  bio?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  description: string;
  body: string;
  bodyRaw: string;
  tags: string[];
  author?: User;
  createdAt?: string;
  isFavorited?: boolean;
  favoritesCount?: number;
}
