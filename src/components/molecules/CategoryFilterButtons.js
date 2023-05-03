import React, {useEffect, useState} from 'react'
import CategoryDropDownButton from '../atoms/CategoryDropDownButton'
import {FaBan} from 'react-icons/fa';

function CategoryFilterButtons({data, handleParams}) {
  const [category, setCategory] = useState()
  const [subcategory, setSubcategory] = useState()
  const [family, setFamily] = useState()
  const [categoryFilter, setCategoryFilter] = useState(null)
  const [subcategoryFilter, setSubcategoryFilter] = useState(null)
  const [familyFilter, setFamilyFilter] = useState(null)
  const [label, setLabel] = useState(["kategoria", "podkategoria", "rodzina"])
  const [params, setParams] = useState({
    params: {
      page: 0,
      pageSize: 25,
      familyFilter: familyFilter
    }
  })

  useEffect(() => {
    handleCategory(category)
  }, [category])

  function handleCategory(category) {
    data.forEach(element => {
      if (element.name === category) {
        setSubcategory(element.subcategories)
      }
    });
  }

  // filter user effect
  useEffect(() => {
    let tempParams = params
    tempParams.params.categoryFilter = categoryFilter
    tempParams.params.subcategoryFilter = subcategoryFilter
    tempParams.params.familyFilter = familyFilter
    setParams(tempParams)
    handleParams(params)
  }, [categoryFilter, subcategoryFilter, familyFilter])


  const handleSetCategory = (value) => {
    setCategory(value)
    setFamilyFilter(null)
    setSubcategoryFilter(null)
    setCategoryFilter(value)
  }

  function handleSetSubcategory(subcategoryName) {
    setFamilyFilter(null)
    setSubcategoryFilter(subcategoryName)
    subcategory.forEach(element => {
      if (element.name === subcategoryName) {
        setFamily(element.families)
      }
    });
  }

  function handleSetFamily(value) {
    setFamilyFilter(value)
  }

  function clearFilters() {
    setCategoryFilter(null)
    setSubcategoryFilter(null)
    setFamilyFilter(null)
    setLabel(["kategoria", "podkategoria", "rodzina"])
  }


  return (
    <span className='is-flex is-justify-content-space-between'>
    <CategoryDropDownButton
      data={data}
      buttonLabel='kategoria'
      setFilter={handleSetCategory}
      lable={label}
      setLable={setLabel}
    />
    <CategoryDropDownButton
      data={subcategory}
      buttonLabel='podkategoria'
      setFilter={handleSetSubcategory}
      category={category}
      lable={label}
      setLable={setLabel}
    />
    <CategoryDropDownButton
      data={family}
      buttonLabel={"rodzina"}
      setFilter={handleSetFamily}
      lable={label}
      setLable={setLabel}
    />
       <span className="icon is-clickable is-size-4 mx-1" onClick={clearFilters}
             style={{margin: "18px", float: "right"}}>
         <FaBan/>
       </span>

    </span>
  )
}


export default CategoryFilterButtons