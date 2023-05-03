import GalleryCard from '../../components/atoms/GalleryCard';
import {Header} from '../../components/atoms/Header';
import Hero from '../../components/atoms/Hero';
import Layout from '../../components/templates/Layout';
import axiosWithAuth from "../../axios-config";
import axios from "axios";


function GalleryView({pageData: data}) {
  return (
    <Layout>
      <Hero imageURL="/images/GALERIA_HERO.png" />
      <div className="container">
        <div className="my-6">
          <Header
            size="2"
            redText={data?.headerRed}
            blackText={data?.headerBlack}
            subHeaderSize="4"
            subHeaderText={data?.subHeader}
          />
        </div>
        <div className="is-flex is-justify-content-center is-flex-wrap-wrap">
          {data.images.map((image, index) => (
            <div className="mx-3 my-3" key={index}>
              <GalleryCard data={image} description={data?.subHeader} alt={data?.name} key={`image${index}`} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
    const result = await axiosWithAuth.get(
      process.env.NEXT_PUBLIC_API_URL + '/api/cms/gallery/list-name'
    );
    const subcategories = result.data.data;
  
    const paths = Array.from(subcategories).map((subcategory) => {
      return {
        params: {
          id: subcategory.toString(),
        },
      };
    });
  
    return {
      paths: paths,
      fallback: "blocking",
    };
  }

export async function getStaticProps(context) {
    try {
      const id = context.params.id;
      const [response] = await axios.all([
        axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/cms/gallery/' + id),
      ]);
      return {
        props: {
          pageData: response.data.data,
        },revalidate: 5
      };
    } catch (error) {
      console.log(error);
    }
  }

export default GalleryView