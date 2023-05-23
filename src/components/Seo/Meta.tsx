import {NextPage} from "next";
import {FC, PropsWithChildren} from "react";
import {MetaType} from "@/components/Seo/meta.type";
import Head from "next/head";


const getTitle= (title:string)=> `${title} | My Next`

const Meta:FC<MetaType> = ({children,title,description}) => {

    return (<>
            <Head>
                <title>{getTitle(title)}</title>
                {description
                    ?(
                        <>
                            <meta name={'description'} content={description}/>
                            <meta name={'og:title'} content={getTitle(title)}/>
                            <meta name={'og:description'} content={description}/>
                        </>
                    )
                    :(
                        <meta name={'robots'} content={'noindex, nofollow'}/>
                    )
                }
            </Head>
            {children}
        </>

    );
}
export default Meta