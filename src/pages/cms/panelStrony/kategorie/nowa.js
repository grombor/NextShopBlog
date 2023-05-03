import React from 'react';
import Layout from '../../../../components/templates/Layout';
import NewCategoryTemplate from '../../../../components/templates/NewCategoryTemplate';

function nowa() {
  return (
    <Layout>
      <div className="container my-6">
        <div className="py-6">
          <NewCategoryTemplate />
        </div>
      </div>
    </Layout>
  );
}

export default nowa;
