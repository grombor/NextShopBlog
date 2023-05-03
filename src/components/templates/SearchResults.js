import Image from 'next/image';
import {useRouter} from 'next/router';
import React, {useEffect, useState} from 'react';
import FilterButton from '../atoms/FilterButton';
import FilterLabel from '../atoms/FilterLabel';
import styles from '../templates/SearchResults.module.css';

function ProductItem() {
  const router = useRouter();
  const { query } = router;

  const [loading, setLoading] = useState();
  const [queryParams, setQueryParams] = useState({params: {page: 0, pageSize: 25 },});
  const [response, setResponse] = useState();

  const [searchValue, setSearchValue] = useState();
  const [sortValue, setSortValue] = useState();
  const [sortType, setSortType] = useState();

  const buildSortType = () => {
    if (sortType === null || sortType === "ASC")
      setSortType("DESC")
    else {
      setSortType("ASC")
    }
  }

  const handleParams = (value) => {
    let newParam = { ...value };
    value.params.page = 0;
    value.params.globalFilter = searchValue;
    value.params.sortParam = sortValue;
    value.params.sortType = sortType;
    setQueryParams(newParam);
  };

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

  async function sendRequest() {
    try {
      await axios
        .get('http://46.41.149.166:8080/api/products/page-cms', queryParams)
        .then((resp) => {
          setResponse(resp.data.data);
        });
    } catch (error) {
      console.error(error);
    }
  }

  async function getSearchData(searchParams) {
    try {
      setLoading(true);
      await axios
        .get(`http://46.41.149.166:8080/api/products/page-cms`, searchParams)
        .then((response) => {
          setResponse(response.data.data);
        });
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  const changeSort = (value) => {
    buildSortType();
    setSortValue(value);
    handleParams(queryParams);
  };

  function handleClick(itemData) {
    router.push(`/sklep/produkt/${itemData}`)
  }

  function generateItem(itemData, index) {
    return (
      <tr
        id={`list-item-${itemData.name}`}
        name={itemData.name}
        key={`list-item-${itemData.name + index}`}
        onClick={() => {handleClick(itemData.logicName)}}
        className='is-clickable'
      >
        <td className={styles.cell1}>
          <div className="is-flex is-align-items-center">
            <Image
              src={'/images/galeria/aranzacje/1.jpg'}
              width={126}
              height={126}
            />
            <div className="ml-5 has-text-left">
              <div>{itemData.name}</div>
              <div>Cena netto: {itemData.nettPrice}</div>
              <div>Wymiary: {itemData.name}</div>
            </div>
          </div>
        </td>
        <td className={styles.cell2}>{itemData.category}</td>
        <td className={styles.cell3}>{itemData.subcategory}</td>
        <td className={styles.cell3}>{itemData.family}</td>
      </tr>
    );
  }

  useEffect(() => {
    setLoading(true);
    let newQuery = {
      ... queryParams
    }
    newQuery.params.globalFilter = query.klucz
    getSearchData(newQuery);
    setSearchValue(query.klucz)
    setLoading(false);
  }, [query.klucz])


  useEffect(() => {
    handleParams(queryParams)
  }, [searchValue])

  useEffect(() => {
    sendRequest()
  }, [JSON.stringify(queryParams)])


  function setPageNumber(number) {
    let newParam = {...queryParams}
    newParam.params.page = number
    setQueryParams(newParam)
  }
  

  return (
    <div>
      <div className="is-size-3 is-uppercase my-5">Wyszukane produkty dla frazy: {query.klucz}</div>

      <FilterLabel>sortowanie</FilterLabel>

      <table className="table is-striped is-hoverable is-fullwidth">
        <tbody className="has-text-centered">
          <tr>
            <th
              className={`has-text-left ${styles.cell1}`}
              onClick={sendRequest}
            >
              <FilterButton
                setSortValue={changeSort}
                buttonParameterName="NAME"
              >
                nazwa
              </FilterButton>
            </th>
            <th className={styles.cell2}>
              <FilterButton
                setSortValue={changeSort}
                buttonParameterName="CATEGORY"
              >
                kategoria
              </FilterButton>
            </th>
            <th className={styles.cell3}>
              <FilterButton
                setSortValue={changeSort}
                buttonParameterName="SUBCATEGORY"
              >
                podkategoria
              </FilterButton>
            </th>
            <th className={styles.cell4}>
              <FilterButton
                setSortValue={changeSort}
                buttonParameterName="FAMILY"
              >
                rodzina
              </FilterButton>
            </th>
          </tr>
          {response?.content.map((item, index) => {
            return generateItem(item, index);
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

export default ProductItem;
