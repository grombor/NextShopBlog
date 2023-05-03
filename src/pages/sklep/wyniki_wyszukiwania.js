import React from 'react';
import Layout from '../../components/templates/Layout';
import SearchResults from '../../components/templates/SearchResults';
import axiosWithAuth from "../../axios-config";
import axios from "axios";


function wyniki_wyszukiwania({productsData}) {
  return (
    <div>
      <Layout>
        <div className="container my-6">
          <div className="py-6">
            <SearchResults data={productsData} />
          </div>
        </div>
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const [products] = await axios.all(
      [
        axiosWithAuth.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products/page-cms?globalFilter=sum&page=0&pageSize=100`),
      ]
    );
    return {
      props: {
        productsData: products.data.data,
      },
      revalidate: 5
    };
  } catch (err) {
    console.log(err);
    return { props: { productsData: null }, revalidate: 5 };
  }
}

export default wyniki_wyszukiwania;
