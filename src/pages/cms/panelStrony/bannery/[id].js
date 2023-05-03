import React from 'react'

function EditBanners() {
  return (
    <Layout trustUs={trustUs}>
    <div className="container my-6">
      <div className="py-6">
        <div className="my-6">
          <ProfileLinks isActive="panel" />
        </div>
        <PanelTemplate data={data} />
      </div>
      <Bestsellers data={bestSellers} />
    </div>
  </Layout>
  )
}

export default EditBanners