import React from 'react'
import ProductsButton from '../atoms/ProductsButton'
import Searchbar from '../atoms/Searchbar'

function ProductsTopBar({setSearchValue}) {
  return (
    <div className='columns my-5'>
      <div className='column is-4'>
        <ProductsButton/>
      </div>
      <div className='is-offset-4 column is-4'>
        <Searchbar setSearchValue={setSearchValue}/>
      </div>
    </div>
  )
}

export default ProductsTopBar