import {PostType} from "@/types/types";
import {FC} from "react";
type PropsType = {
    post: PostType
}

const Post:FC<PropsType> = ({post}) => {
    return (

            <div>
                {post.title}
            </div>


    );
};

export default Post;