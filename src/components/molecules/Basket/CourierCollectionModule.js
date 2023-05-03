import Image from 'next/image'
import React from 'react'

function CourierCollectionModule({text, price}) {

  return (
    <div>
                <div className="box py-0 is-clickable">
                  <div className="is-flex">
                    <figure>
                      <Image
                        src="/icons/pallet.svg"
                        height="200px"
                        width="200px"
                      />
                    </figure>
                    <span className="is-size-4 mt-6 is-uppercase">
                      {text}
                    </span>
                  </div>
                </div>
                <div className="has-text-weight-bold is-size-4 mx-5 mb-5">
                  {price} ZŁ
                </div>
                </div>
  )
}

export default CourierCollectionModule