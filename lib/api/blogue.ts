import { TBlog } from "@/types/blog";
import { API_URL } from "./baseUrl";

export const fetchBlogue = async (
    category : string,
) => {
    try {
        const blogs:{
            status:string,
            message:string,
            data:Array<TBlog>
        } = await fetch (`${API_URL}/blog/filter?category=${category}`).then((res)=>res.json())
        return blogs
        
    } catch (error) {
        console.log(error)
    }

}

export const getBlogBySlug = async (
    slug : string,

) => {
    try {
        const blog:{
            status:string,
            message:string,
            data:TBlog

        } = await fetch (`${API_URL}/blog/slug/${slug}`).then((res)=>res.json())
        return blog
    }catch (error) {
        console.log(error)
    }
}