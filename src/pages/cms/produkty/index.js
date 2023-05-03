import ProfileLinks from '../../../components/molecules/ProfileLinks';
import Layout from '../../../components/templates/Layout';
import ProductsTemplate from '../../../components/templates/ProductsTemplate';
import axiosWithAuth from "../../../axios-config";
import axios from "axios";

function Administration({ categoriesData, certificatesData, productsData }) {
  return (
    <Layout>
      <div className="container my-6">
        <div className="py-6">
          <ProfileLinks isActive="panel" />
          <ProductsTemplate data={categoriesData} certificates={certificatesData} productsData={productsData} />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const [products, categories] = await axios.all(
      [
        axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/products/page-cms?page=0&pageSize=100'),
        axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/distribution'),
      ]
    );
    return {
      props: {
        categoriesData: categories.data.data,
        productsData: products.data.data
      },revalidate: 5
    };
  } catch (err) {
    console.log(err);
  }
}

export default Administration;
