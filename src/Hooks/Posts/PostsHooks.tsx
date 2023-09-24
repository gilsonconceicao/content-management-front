import { useQuery } from "@tanstack/react-query"
import { PostType, getAllPosts } from "Services/posts/posts"

export const useGetAllPosts = () => {
  return useQuery({
    queryKey: ['get'], 
    queryFn: async () => {
      const {data} = await getAllPosts(); 
      return data as PostType[]
    }
  })
}