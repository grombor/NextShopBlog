import ProfileLinks from '../../../../components/molecules/ProfileLinks';
import Layout from '../../../../components/templates/Layout';
import NewProductTemplate from '../../../../components/templates/NewProductTemplate';
import axiosWithAuth from "../../../../axios-config";
import axios from "axios";

function NewProduct({ pageData, familyTreeData, certificatesData }) {
  return (
    <Layout>
      <div className="container my-6">
        <div className="py-6">
          <ProfileLinks isActive="panel" />
          <NewProductTemplate
            pageData={pageData}
            familyTreeData={familyTreeData}
            certificatesData={certificatesData}
          />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const [data, familyTree, certificates] = await axios.all([
      axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/products-cms/empty'),
      axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/distribution'),
      axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/certificate'),
    ]);
    return {
      props: {
        pageData: data.data.data,
        familyTreeData: familyTree.data.data,
        certificatesData: certificates.data.data,
      },revalidate: 5
    };
  } catch (err) {
    console.log(err);
  }
}

export default NewProduct;
