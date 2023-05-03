import Hero from '../../components/atoms/Hero';
import GalleryOfInspirations from '../../components/templates/GalleryOfInspirations';
import Layout from '../../components/templates/Layout';
import PostTemplate from '../../components/templates/PostTemplate';
import axiosWithAuth from "../../axios-config";
import axios from "axios";

export async function getStaticPaths() {
  const result = await axiosWithAuth.get(
    process.env.NEXT_PUBLIC_API_URL + '/api/cms/section-data/sections-uuid'
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
    fallback: 'blocking',
  };
}

export async function getStaticProps(context) {
  try {
    const id = context.params.id;
    const [home, inspiracje, zaufali] = await axios.all([
      axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/cms/section-data/by-uuid/' + id),
      axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/cms/gallery/inspiracje'),
      axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/cms/gallery/zaufali_nam'),
      axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/bestseller'),
    ]);
    return {
      props: {
        pageData: home.data.data,
        galleryData: inspiracje.data.data,
        trustUs: zaufali.data.data,
      },
      revalidate: 5
    };
  } catch (error) {
    console.log(error);
  }
}

function Posts({ pageData, trustUs, galleryData }) {
  return (
    <Layout trustUs={trustUs}>
      <Hero imageURL="/images/WIEDZA_HERO.PNG" />
      <PostTemplate postData={pageData} />
      <div className="container my-5">
        <GalleryOfInspirations data={galleryData} />
      </div>`
    </Layout>
  );
}

export default Posts;
