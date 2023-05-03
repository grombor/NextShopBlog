import ProfileLinks from '../../../../components/molecules/ProfileLinks';
import Layout from '../../../../components/templates/Layout';
import EditProductTemplate from '../../../../components/templates/EditProductTemplate';
import axiosWithAuth from "../../../../axios-config";
import axios from "axios";

function Administration({ pageData, familyTreeData, certificatesData, itemData }) {
  return (
    <Layout>
      <div className="container my-6">
        <div className="py-6">
          <ProfileLinks isActive="panel" />
          <EditProductTemplate pageData={pageData} familyTreeData={familyTreeData} itemData={itemData} />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const result = await axiosWithAuth.get(
    process.env.NEXT_PUBLIC_API_URL + '/api/products/all-products'
  );
  const sections = result.data.data;
  const paths = sections.map((section) => {
    return {
      params: {
        id: section.toString(),
      },
    };
  });
  return {
    paths: paths,
    fallback: "blocking",
  };
}


export async function getStaticProps(context) {
  const id = context.params.id;
  try {
    const [empty, categories, product] = await axios.all(
      [
        axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/products-cms/empty'),
        axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/distribution'),
        axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL +'/api/products-cms?productName=' + id),
      ]);
    return {
      props: {
        pageData: empty.data.data,
        familyTreeData: categories.data.data,
        itemData: product.data.data,
        id: id,
      },revalidate: 5
    };
  } catch (error) {
    console.log(error);
  }
}

export default Administration;
