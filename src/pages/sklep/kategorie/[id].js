import Layout from '../../../components/templates/Layout';
import Hero from '../../../components/atoms/Hero';
import SubCategory from '../../../components/templates/SubCategory';
import GalleryOfInspirations from '../../../components/templates/GalleryOfInspirations';
import axiosWithAuth from "../../../axios-config";
import axios from "axios";

export async function getStaticPaths() {
  const result = await axiosWithAuth.get(
    process.env.NEXT_PUBLIC_API_URL + '/api/products/categories'
  );
  const subcategories = result.data.data.sections;

  const paths = subcategories.map((subcategory) => {
    return {
      params: {
        id: subcategory.name.toString(),
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
    const [home, inspiracje, zaufali] = await axios.all([
      axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/products/subcategories/' + id),
      axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/cms/gallery/inspiracje'),
      axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/cms/gallery/zaufali_nam'),
      axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/bestseller'),
    ]);
    return {
      props: {
        pageData: home.data.data,
        galleryData: inspiracje.data.data,
        trustUs: zaufali.data.data,
      },revalidate: 5
    };
  } catch (error) {
    console.log(error);
  }
}

function Categories({ pageData, trustUs, galleryData }) {
  return (
    <Layout trustUs={trustUs}>
      <Hero imageURL={pageData.heroImage} />
      {pageData.sections.map((subCategory, index) => (
        <SubCategory
          subCategoryData={subCategory}
          key={`subCategory${index}`}
        />
      ))}
      <div className="container my-5">
        <GalleryOfInspirations data={galleryData} />
      </div>
    </Layout>
  );
}

export default Categories;
