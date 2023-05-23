import {NextPageWithLayout} from "@/pages/_app";
import {getLayout} from "@/components/Layout/Layout";
import Image from "next/image";
import image404 from '../../public/404.png'
import Meta from "@/components/Seo/Meta";



const NotFound: NextPageWithLayout = () => {
    return (
      <>
         <Meta title={'Not Found'} description={'Not found'}/>
          <div style={{
              textAlign: 'center'
          }}>
              <Image src={image404} alt={'404'}/>
          </div>
      </>

    );
};
NotFound.getLayout = getLayout
export default NotFound;