import React from 'react'
import Layout from '../../components/templates/Layout'
import Hero from '../../components/atoms/Hero'
import CMSNavbar from '../../components/molecules/CMSNavbar'

function manage() {
  return (
    <Layout>
        <Hero imageURL='https://via.placeholder.com/1920x780.png?text=1920x780px' />
        <div className='container'>
            <CMSNavbar />
        </div>
    </Layout>
  )
}

export default manage