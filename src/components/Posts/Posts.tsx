import {PostType} from "@/types/types";
import {FC} from "react";
import Link from "next/link";

type PropsType = {
    posts: PostType[]
}
export const Posts: FC<PropsType> = ({posts}) => {

    return (
        <div>
            {posts.length && posts.map(p=> <div key={p.id}>
                {p.title}
                <Link href={`/posts/${p.id}`}>{p.id}</Link>
            </div>)}
        </div>
    );
};

