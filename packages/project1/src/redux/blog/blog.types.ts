export interface BlogType {
  id?: string;
  title: string;
  description: string;
}

export interface BlogCollectionType {
  blogCollection: BlogType[];
  loading: boolean;
  error: string;
  message: string;
}
