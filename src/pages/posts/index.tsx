import {getLayout} from "@/components/Layout/Layout";
import {Posts} from "@/components/Posts/Posts";
import {NextPageWithLayout} from "@/pages/_app";
import {PostType} from "@/types/types";
import {GetServerSideProps, GetStaticProps} from 'next'
import {postsApi} from "@/services/postApi/postApi";
import Meta from "@/components/Seo/Meta";
type PropsType = {
    posts: PostType[]
}
// export const getServerSideProps: GetServerSideProps<PropsType> = async ()=>{
//
//     const products = await postsApi.getPosts()
//     return {
//         props: {products}
//     }
// }
export const getStaticProps:GetStaticProps<PropsType>  = async ()=>{

    const posts = await postsApi.getPosts()
    return {
        props: {posts},
        revalidate: 60
    }
}
const PostsPage: NextPageWithLayout<PropsType> = ({posts}) => {
    return <>
        <Meta title={'posts'} description={'desc'}/>
        <Posts posts={posts}/>
    </>

};




PostsPage.getLayout = getLayout
export default PostsPage