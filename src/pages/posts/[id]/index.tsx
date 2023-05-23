import {getLayout} from "@/components/Layout/Layout";
import {Posts} from "@/components/Posts/Posts";
import {NextPageWithLayout} from "@/pages/_app";
import {PostType} from "@/types/types";
import {GetServerSideProps, GetStaticPaths, GetStaticProps} from 'next'
import {postsApi} from "@/services/postApi/postApi";
import Post from "@/components/Posts/Post/Post";
import {useRouter} from "next/router";
import {ParsedUrlQuery} from "querystring";

type PropsType = {
    post: PostType
}

interface Params extends ParsedUrlQuery {
    id: string
}

// export const getServerSideProps: GetServerSideProps = async ()=>{
//     const post = await postsApi.getPostById(3)
//     return {
//         props: {post}
//     }
// }
export const getStaticPaths:GetStaticPaths = async () => {
    const posts = await postsApi.getPosts()
    return {
        paths: posts.map(post => ({
            params: {
                id: post.id.toString()
            }
        })),
        fallback:'blocking'
    }
}
export const getStaticProps: GetStaticProps = async ({params}) => {

    const post = await postsApi.getPostById(Number(params?.id))
    return {
        props: {post}
    }
}
const PostPage: NextPageWithLayout<PropsType> = ({post}) => {
    return <Post post={post}/>
};


PostPage.getLayout = getLayout
export default PostPage