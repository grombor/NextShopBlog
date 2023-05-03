import React, {useEffect, useState} from 'react';
import FilterButton from '../atoms/FilterButton';
import FilterLabel from '../atoms/FilterLabel';
import CategoryFilterButtons from '../molecules/CategoryFilterButtons';
import ProductItem from '../molecules/ProductItem';
import ProductsTopBar from '../molecules/ProductsTopBar';
import styles from './ProductsTemplate.module.css';
import axiosWithAuth from "../../axios-config";

function ProductsTemplate({data}) {
  const [queryParams, setQueryParams] = useState({params: {page: 0, pageSize: 25}})
  const [response, setResponse] = useState()
  const [searchValue, setSearchValue] = useState()
  const [sortValue, setSortValue] = useState()
  const [sortType, setSortType] = useState()

  const handleParams = (value) => {
    let newParam = {...value}
    value.params.page = 0
    value.params.globalFilter = searchValue
    value.params.sortParam = sortValue
    value.params.sortType = sortType
    setQueryParams(newParam)
  }

  useEffect(() => {
    handleParams(queryParams)
  }, [searchValue])

  useEffect(() => {
    sendRequest()
  }, [JSON.stringify(queryParams)])

  async function sendRequest() {
    try {
      await axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL +'/api/products/page-cms', queryParams)
        .then(response => {
          console.log(response)
          setResponse(response.data.data)
        });
    } catch (error) {
      console.error(error);
    }
  }

  function setPageNumber(number) {
    let newParam = {...queryParams}
    newParam.params.page = number
    setQueryParams(newParam)
  }

  function pageButton(number, isSelected) {
    const isCurrentSelected = isSelected ? 'is-current' : ''
    return (
      <li>
        <a className={`pagination-link ${isCurrentSelected}`} aria-label={`Goto page 1${number}`}
           onClick={() => setPageNumber(number - 1)}>
          {number}
        </a>
      </li>)
  }

  const changeSort = (value) => {
    buildSortType()
    setSortValue(value)
    handleParams(queryParams)
  }

  const buildSortType = () => {
    if (sortType === null || sortType === "ASC")
      setSortType("DESC")
    else {
      setSortType("ASC")
    }
  }

  return (
    <div>
      <ProductsTopBar setSearchValue={setSearchValue}/>
      <div className="is-size-3 is-uppercase my-5">edytuj produkty</div>
      <FilterLabel>filtrowanie</FilterLabel>
      <div className="columns">
        <div className="column is-7">
          <CategoryFilterButtons data={data} handleParams={handleParams}/>
        </div>
      </div>

      <FilterLabel>sortowanie</FilterLabel>

      <table className="table is-striped is-hoverable is-fullwidth">
        <tbody className="has-text-centered">
        <tr>
          <th className={`has-text-left ${styles.cell}`} onClick={sendRequest}>
            <FilterButton setSortValue={changeSort} buttonParameterName="NAME">nazwa</FilterButton>
          </th>
          <th className={styles.cell}>
            <FilterButton setSortValue={changeSort} buttonParameterName="CATEGORY">kategoria</FilterButton>
          </th>
          <th className={styles.cell}>
            <FilterButton setSortValue={changeSort} buttonParameterName="SUBCATEGORY">podkategoria</FilterButton>
          </th>
          <th className={styles.cell}>
            <FilterButton setSortValue={changeSort} buttonParameterName="FAMILY">rodzina</FilterButton>
          </th>
          <th className={styles.cell} style={{width: '160px'}}>
            &nbsp;
          </th>
        </tr>
        {response?.content.map((item, index) => {
          return (
            <ProductItem itemData={item} styles={styles.cell} key={index} reload={sendRequest}/>
          );
        })}
        </tbody>
      </table>
      
      <nav
        className="pagination is-centered"
        role="navigation"
        aria-label="pagination"
      >
        <ul className="pagination-list">
          {response?.number > 1 ? pageButton(1) : null}
          {response?.number > 1 ? (<span className="pagination-ellipsis">&hellip;</span>) : null}
          {response?.number > 0 ? pageButton(response?.number) : null}
          {pageButton(response?.number + 1, true)}
          {response?.number < response?.totalPages - 1 ? pageButton(response?.number + 2) : null}
          {response?.number < response?.totalPages - 2 ? (
            <span className="pagination-ellipsis">&hellip;</span>) : null}
          {response?.number < response?.totalPages - 2 ? pageButton(response?.totalPages) : null}
        </ul>
      </nav>

    </div>
  );
}

export default ProductsTemplate;
