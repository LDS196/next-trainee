import {getLayout} from "@/components/Layout/Layout";
import {NextPageWithLayout} from "@/pages/_app";

const Home:NextPageWithLayout=()=> {
    return (
        <main>
            Home
        </main>
    )
}
Home.getLayout = getLayout
export default Home;