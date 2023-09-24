import { api } from "Services/api/api";

type Comment = {
  comment:string; 
  dateTime: Date; 
  id: string; 
  postId: string;
}

export type PostType = {
  comments: Comment[];
  id: string; 
  title: string;
  userId: string;
  description: string;
  createAt: Date;
  disableComments: boolean;
  hideLikesNumber: boolean;
}

export async function getAllPosts() {
  return await api({ 
    endpoint: "/Posts", 
    method: "GET"
  }); 
}