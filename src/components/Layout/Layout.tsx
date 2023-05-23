import {NextPage} from "next";
import {PropsWithChildren, ReactElement} from "react";
import {Header} from "../Header/Header";
import s from './Layout.module.scss'
import dynamic from "next/dynamic";

const DynamicFooter = dynamic(()=> import('../Footer/Footer'),{ssr:false})

export const Layout: NextPage<PropsWithChildren> = (props) => {
    const {children} = props

    return (
        <div className={s.container}>
            <Header/>
            <div>{children}</div>
            <DynamicFooter/>
        </div>
    );
}

export const getLayout = (page: ReactElement) =>  <Layout>{page}</Layout>