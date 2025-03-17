import { PageProps } from "@inertiajs/core";

export interface CommonPageProps extends PageProps {
  user?: User;
  flash: {
    info?: string;
    success?: string;
    warning?: string;
    error?: string;
  };
}

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

export interface Comment {
  id: string;
  body: string;
  user: User;
  createdAt: string;
}
