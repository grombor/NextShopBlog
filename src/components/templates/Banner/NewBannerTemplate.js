import React from 'react'
import H1 from '../../atoms/CMS/H1'
import SideMenu from '../../molecules/Accordion/SideMenu'
import ProfileLinks from '../../molecules/ProfileLinks'

function NewBannerTemplate({ data }) {
  return (
    <div className="container my-6">
    <div className="py-6">
      <div className="my-6">
        <ProfileLinks isActive="panel" />
      </div>
      <div className="columns my-6">
        <div className="column is-3 is-offset-1">
          <SideMenu data={data} />
        </div>
        <div className="column is-8">
        <H1>edycja sekcji banner</H1>

        <H2>lista bannerów (max 5 widocznych)</H2>

        <div className='my-4'>
        ni mam pojęcia co tu zrobić
        </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default NewBannerTemplate