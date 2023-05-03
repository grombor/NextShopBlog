import Layout from '../../../components/templates/Layout';
import Hero from '../../../components/atoms/Hero';
import SubCategory from '../../../components/templates/SubCategory';
import GalleryOfInspirations from '../../../components/templates/GalleryOfInspirations';
import axiosWithAuth from "../../../axios-config";
import axios from "axios";

export async function getStaticPaths() {
  const result = await axiosWithAuth.get(
    process.env.NEXT_PUBLIC_API_URL + '/api/products/all-subcategories/'
  );
  const subcategories = result.data.data;
  // add "404" as default
  // const paths = posts.map(({ slug }) => ({ params: { slug: slug || '404' } }));

  const paths = subcategories.map((subcategory) => {
    return {
      params: {
        id: subcategory || '404',
      },
    };
  });
  return {
    paths: paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const ids = context.params.id.split("__")
  const id = ids[0];
  try {
    const [home, inspiracje, zaufali] = await axios.all([
      axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/products/families/' + id),
      axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/cms/gallery/inspiracje'),
      axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/cms/gallery/zaufali_nam'),
    ]);
    return {
      props: {
        pageData: home.data.data,
        galleryData: inspiracje.data.data,
        trustUs: zaufali.data.data,
        sourcePage: ids[1]
      }, revalidate: 5
    };
  } catch (err) {
    console.log(err);
  }
}

function Families({ pageData, trustUs, galleryData, sourcePage }) {
  return (
    <Layout trustUs={trustUs}>
      <Hero imageURL={`/images/sklep/banery/${sourcePage}.jpg`} />
      {pageData?.sections.map((subCategory, index) => (
        <SubCategory subCategoryData={subCategory} key={`cat${index}`} />
      ))}
      <div className="container my-5">
        <GalleryOfInspirations data={galleryData} />
      </div>
    </Layout>
  );
}

export default Families;
