import axios from "axios";
import {PostType} from "@/types/types";


axios.defaults.baseURL='https://jsonplaceholder.typicode.com'

export const postsApi = {

    async getPosts() {
        const {data} = await axios.get<PostType[]>('/posts')
        return data
    },
    async getPostById(id:number) {
        const {data} = await axios.get<PostType>(`/posts/${id}`)
        return data
    }
}