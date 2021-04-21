export interface PostList {
  _id: string;
  author: string;
  description: string;
  url: string;
  title: string;
  imageUrl: string;
  _acl: { creator: string }
}