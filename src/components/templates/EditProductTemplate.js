import {useRouter} from 'next/router';
import React, {useEffect, useState} from 'react';
import FilterLabel from '../atoms/FilterLabel';
import AdvancedDropdown from '../molecules/AdvancedDropdown';
import EditIcons from '../molecules/EditIcons';
import shortId from '../../helpers/shortId';
import styles from './EditProductTemplate.module.css';
import {Button} from '../atoms/Button';
import axiosWithAuth from "../../axios-config";

function EditProductTemplate({ pageData, familyTreeData, itemData }) {
  const router = useRouter();
  const [categoriesData, setCategoriesData] = useState(familyTreeData);
const [formData, setFormData] = useState(itemData)
const [errorMessage, setErrorMessage] = useState()

  // main
  const [mainCategory, setMainCategory] = useState();
  const [mainSubcategories, setMainSubcategories] = useState();
  const [mainSubCategory, setMainSubCategory] = useState();
  const [mainFamilies, setMainFamilies] = useState();
  const [mainFamily, setMainFamily] = useState();

  // secondary
  const [secondaryCategory, setSecondaryCategory] = useState();
  const [secondarySubcategories, setSecondarySubcategories] = useState();
  const [secondarySubCategory, setSecondarySubCategory] = useState();
  const [secondaryFamilies, setSecondaryFamilies] = useState();
  const [secondaryFamily, setSecondaryFamily] = useState();

  // tetrary
  const [tetraryCategory, setTetraryCategory] = useState();
  const [tetrarySubCategories, setTetrarySubCategories] = useState();
  const [tetrarySubCategory, setTetrarySubCategory] = useState();
  const [tetraryFamilies, setTetraryFamilies] = useState();
  const [tetraryFamily, setTetraryFamily] = useState();

  // params elements
  const [mainCategoryParam, setMainCategoryParam] = useState();
  const [secondaryCategoryParam, setSecondaryCategoryParam] = useState();
  const [tetraryCategoryParam, setTetraryCategoryParam] = useState();
  const [mainParams, setMainParams] = useState(pageData?.mainParameters);


  useEffect(() => {
    categoriesData?.map((section) => {
      if (section.name === mainCategory) {
        setMainSubcategories(section?.subcategories);
      }
    });
  }, [mainCategory]);

  useEffect(() => {
    categoriesData?.map((section) => {
      if (section.name === secondaryCategory) {
        setSecondarySubcategories(section?.subcategories);
      }
    });
  }, [secondaryCategory]);

  useEffect(() => {
    categoriesData?.map((section) => {
      if (section.name === tetraryCategory) {
        setTetrarySubCategories(section?.subcategories);
      }
    });
  }, [tetraryCategory]);

  useEffect(() => {
    mainSubcategories?.map((section) => {
      if (section.name === mainSubCategory) {
        setMainFamilies(section?.families);
      }
    });
  }, [mainSubCategory]);

  useEffect(() => {
    secondarySubcategories?.map((section) => {
      if (section.name === secondarySubCategory) {
        setSecondaryFamilies(section?.families);
      }
    });
  }, [secondarySubCategory]);

  useEffect(() => {
    tetrarySubCategories?.map((section) => {
      if (section.name === tetrarySubCategory) {
        setTetraryFamilies(section?.families);
      }
    });
  }, [tetrarySubCategory]);

  useEffect(() => {
    if (mainFamily) {
      setMainCategoryParam({
        categoryName: mainCategory,
        subcategoryName: mainSubCategory,
        familyName: mainFamily,
      });
    }
  }, [mainFamily]);

  useEffect(() => {
    if (secondaryFamily) {
      setSecondaryCategoryParam({
        categoryName: secondaryCategory,
        subcategoryName: secondarySubCategory,
        familyName: secondaryFamily,
      });
    }
  }, [secondaryFamily]);

  useEffect(() => {
    if (tetraryFamily) {
      setTetraryCategoryParam({
        categoryName: tetraryCategory,
        subcategoryName: tetrarySubCategory,
        familyName: tetraryFamily,
      });
    }
  }, [tetraryFamily]);

  useEffect(() => {
    if (tetraryFamily) {
      setTetraryCategoryParam({
        categoryName: tetraryCategory,
        subcategoryName: tetrarySubCategory,
        familyName: tetraryFamily,
      });
    }
  }, [tetraryFamily]);

  // funkcje

  const handleEditIcon = () => {
    router.push('/cms/panelStrony/kategorie/edycja');
  };

  const generateMainParams = (inputKey, inputValue, index) => {
    return (
      <div className="column is-6" key={`param-column-6-${index}`}>
        <div className="field is-horizontal" key={`param-column-field-${index}`}>
          <div
            className="field-label is-normal"
            key={`param-column-label-${index}`}
          >
            <label
              className={`label ${styles.input}`}
              key={`param-column-${index}`}
            >
              {inputKey}
            </label>
          </div>
          <div className="field-body" key={`param-column-field-body-${index}`}>
            <div className="field" key={`param-column-${index}`}>
              <p
                className="control is-expanded"
                key={`param-column-${index}`}
              >
                <input
                  type="text"
                  name={inputKey}
                  defaultValue={inputValue}
                  id={`main_param-${inputKey}`}
                  className={`input ${styles.input}`}
                  key={`main_param-${inputKey}`}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const generateTechParams = (inputKey) => {
    return (
      <div className="column is-6" key={`param-column-${shortId()}`}>
        <div className="field is-horizontal" key={`param-column-${shortId()}`}>
          <div
            className="field-label is-normal"
            key={`param-column-${shortId()}`}
          >
            <label
              className={`label ${styles.input}`}
              key={`param-column-${shortId()}`}
            >
              {inputKey}
            </label>
          </div>
          <div className="field-body" key={`param-column-${shortId()}`}>
            <div className="field" key={`param-column-${shortId()}`}>
              <p
                className="control is-expanded"
                key={`param-column-${shortId()}`}
              >
                <input
                  type="text"
                  name={inputKey}
                  id={`tech_param-${inputKey}`}
                  className={`input ${styles.input}`}
                  key={`tech_param-${inputKey}`}
                  defaultValue={formData.technicalParameters[inputKey]}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const getMainParams = () => {
    const mainParamsList = document.querySelectorAll(
      'input[type="text"][id^="main_param-"]'
    );
    let mainParams = {};
    Array.from(mainParamsList)?.map(
      (item) => (mainParams[item.name] = item.value)
    );
    return mainParams;
  };

  const getTechParams = () => {
    const mainParamsList = document.querySelectorAll(
      'input[type="text"][id^="tech_param-"]'
    );
    let techParams = {};
    Array.from(mainParamsList)?.map(
      (item) => (techParams[item.name] = item.value)
    );
    return techParams;
  };

  const handleCreateNewParamPair = () => {
    const newParamLabel = document.getElementById('new_param_label').value;
    const newParamValue = document.getElementById('new_param_value').value;
    let tempMainParameters = mainParams;
    tempMainParameters[newParamLabel] = newParamValue;
    setMainParams(tempMainParameters);
  };

  function getCertCheckboxes() {
    const certCheckboxes = document.querySelectorAll(
      'input[type="checkbox"][id^="prod_certs-"]:checked'
    );
    let certificatesList = [];
    Array.from(certCheckboxes).map((checkbox) => {
      if (checkbox) certificatesList.push(checkbox.name);
    });
    if ((certCheckboxes.length == 0)) return null;
    return certificatesList;
  }

  function generateCerts() {
    return Object.keys(formData.certificates).map((key) => {
      const id = shortId();
      const value = formData.certificates[key]
      return (
        <div className="column is-6" key={`prod_certs-${id}`}>
        {key}
        <span>
          <input
            type="checkbox"
            className="checkbox mx-2"
            name={`prod_certs-${key}`}
            key={`prod_certs-${id}`}
            id={`prod_certs-${'a'}`}
            defaultChecked={!!value}
          />
        </span>
      </div>
        )
    })
  }

  function createRelatedProducts() {
    return formData.additionalProductLinks.map((item, index) => {
      return (
        <div className="column is-full" key={`realted-${index}`}>
          <input
            className="input"
            placeholder="Link"
            id={`realted_link-${index}`}
            key={`related-${index}`}
            defaultValue={item}
          />
        </div>
      );
    });
  }

  function createProductImages() {
    return formData.imagesUuid && formData.imagesUuid.map((item) => {
      const i = shortId();
      return (
        <div className="column is-full" key={`product_images-${i}`}>
          <input
            className="input"
            placeholder="Link"
            id={`product_images-${i}`}
            key={`product_images-${i}`}
            defaultValue={item}
          />
        </div>
      );
    });
  }

  function getRelatedProducts() {
    const relatedProductsList = document.querySelectorAll(
      'input[id^="realted_link-"]'
    );
    let relatedProducts = [];
    Array.from(relatedProductsList).forEach((item) => {
      relatedProducts.push(item.value);
    });
    return relatedProducts;
  }

  function getProductDescription() {
    return document.getElementById('opis').value;
  }

  function getNettPrice() {
    return document.getElementById('nett-price').value;
  }

  function handleImagesButton() {
    // Pobranie elementu input z plikami
    const fileInput = document.querySelector('input[type="file"]');

    // Stworzenie nowego obiektu FormData
    let formData = new FormData();

    // Dodanie wybranych plików do obiektu FormData
    for (const file of fileInput.files) {
      formData.append('files[]', file);
    }

    // Wysłanie żądania za pomocą axios
    // axiosInstance.post('/upload', formData)
    //   .then(response => {
    //     console.log('Pliki zostały przesłane na serwer');
    //   })
    //   .catch(error => {
    //     console.error('Wystąpił błąd podczas przesyłania plików', error);
    //   });
  }

  function handlePutEditedProduct(params) {
    axiosWithAuth.put('/api/products-cms', params)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const initiateParams = () => {
    let params = {};
    params.distributions = [
      mainCategoryParam,
      secondaryCategoryParam,
      tetraryCategoryParam,
    ];

    params.certificates = getCertCheckboxes();
    params.mainParameters = getMainParams();
    params.technicalParameters = getTechParams();
    params.description = getProductDescription();
    params.additionalProductLinks = getRelatedProducts();
    params.mainParameters['cena katalogowa [netto]'] = getNettPrice();

    // if (params) console.log(JSON.stringify(params));
    // return params;

    handlePutEditedProduct(params);

  };

  return (
    <main>
      <section id="1" className="py-6">
        <p>
          1. Upewnij się, że dodajesz produkt do odpowiedniej rodziny. Aby
          stworzyć produkt musisz dodać go do istniejącej karuzeli lub stworzyć
          nową.
        </p>
        <div className="columns my-5 is-multiline">
          <div className="column is-full">
            <div className="columns is-full">
              <div className="column">
                <FilterLabel>KATEGORIA GŁÓWNA</FilterLabel>
              </div>
              <div className="column">
                <FilterLabel>PODKATEGORIA</FilterLabel>
              </div>
              <div className="column">
                <FilterLabel>RODZINA</FilterLabel>
              </div>
              <div className="column is-1">
                <FilterLabel>EDYTUJ KATEGORIE</FilterLabel>
              </div>
            </div>
          </div>
          <div className="column is-full">
            <div className="columns is-full">
              <div className="column">
                <AdvancedDropdown
                  id="kategoria główna"
                  data={categoriesData}
                  setCategory={setMainCategory}
                  key={'kategoria główna'}
                  defaultLabel={formData.distributions[0] && formData.distributions[0].categoryName}
                />
              </div>
              <div className="column">
                <AdvancedDropdown
                  id="podkategoria główna"
                  data={mainSubcategories}
                  category={mainCategory}
                  setSubcategory={setMainSubCategory}
                  key={'podkategoria główna'}
                  defaultLabel={formData.distributions[0] && formData.distributions[0].subcategoryName}
                />
              </div>
              <div className="column">
                <AdvancedDropdown
                  id="rodzina główna"
                  data={mainFamilies}
                  category={mainCategory}
                  setFamily={setMainFamily}
                  key={'rodzina główna'}
                  defaultLabel={formData.distributions[0] && formData.distributions[0].familyName}
                />
              </div>
              <div className="column is-1 mt-1">
                <div className="">
                  <EditIcons
                    edit={true}
                    handleEdit={handleEditIcon}
                    reset={true}
                    visibility={false}
                    remove={false}
                    key={`edit-icon-${shortId()}`}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="column is-full">
            <div className="column is-full">
              <div className="columns is-full mt-5">
                <div className="column">
                  <FilterLabel>KATEGORIe Dodatkowe</FilterLabel>
                </div>
                <div className="column">
                  <FilterLabel>Dodatkowe PODKATEGORIe</FilterLabel>
                </div>
                <div className="column">
                  <FilterLabel>Dodatkowe RODZINy</FilterLabel>
                </div>
                <div className="column is-1">
                  <FilterLabel>EDYTUJ KATEGORIE</FilterLabel>
                </div>
              </div>
            </div>
            <div className="columns is-full">
              <div className="column">
                <AdvancedDropdown
                  id="druga kategoria"
                  data={categoriesData}
                  setCategory={setSecondaryCategory}
                  key={'druga kategoria'}
                  defaultLabel={formData.distributions[1] && formData.distributions[1].categoryName}
                />
              </div>
              <div className="column">
                <AdvancedDropdown
                  id="druga podkategoria"
                  data={secondarySubcategories}
                  category={secondaryCategory}
                  setSubcategory={setSecondarySubCategory}
                  key={'druga podkategoria'}
                  defaultLabel={formData.distributions[1] && formData.distributions[1].subcategoryName}
                />
              </div>
              <div className="column">
                <AdvancedDropdown
                  id="druga rodzina"
                  data={secondaryFamilies}
                  category={secondaryCategory}
                  setFamily={setSecondaryFamily}
                  key={'druga rodzina'}
                  defaultLabel={formData.distributions[1] && formData.distributions[1].familyName}
                />
              </div>
              <div className="column is-1 mt-1">
                <div className="">
                  <EditIcons
                    edit={true}
                    handleEdit={handleEditIcon}
                    reset={true}
                    visibility={false}
                    remove={false}
                    key={`edit-icon-${shortId()}`}
                  />
                </div>
              </div>
            </div>
            <div className="columns is-full">
              <div className="column">
                <AdvancedDropdown
                  id="trzecia kategoria"
                  data={categoriesData}
                  setCategory={setTetraryCategory}
                  key={'trzecia kategoria'}
                  defaultLabel={formData.distributions[2] && formData.distributions[2].categoryName}
                />
              </div>
              <div className="column">
                <AdvancedDropdown
                  id="trzecia podkategoria"
                  data={tetrarySubCategories}
                  category={tetraryCategory}
                  setSubcategory={setTetrarySubCategory}
                  key={'trzecia podkategoria'}
                  defaultLabel={formData.distributions[2] && formData.distributions[2].subcategoryName}
                />
              </div>
              <div className="column">
                <AdvancedDropdown
                  id="trzecia rodzina"
                  data={tetraryFamilies}
                  category={tetrarySubCategory}
                  setFamily={setTetraryFamily}
                  key={'trzecia rodzina'}
                  defaultLabel={formData.distributions[2] && formData.distributions[2].familyName}
                />
              </div>
              <div className="column is-1 mt-1">
                <div className="">
                  <EditIcons
                    edit={true}
                    handleEdit={handleEditIcon}
                    reset={true}
                    visibility={false}
                    remove={false}
                    key={`edit-icon-${shortId()}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="2" className="py-6">
        <p>
          2. Dodaj odpowiednie deklaracje i certyfikaty. Będą widoczne jako
          piktogramy w zakładce na karcie produktu.
        </p>
        <div className="columns is-multiline my-5">
          {generateCerts()}
        </div>
      </section>

      <section id="3" className="py-5">
        <p>
          3. Wypełnij pola informacjami. Puste pola pozostaną ukryte.&nbsp;
          <strong>
            Wypełnione pokażą się przy zdjęciu w karcie produktu.&nbsp;
          </strong>
          Wypełnij tylko te, które , którymi można opisać ten produkt.&nbsp;
          <strong>
            PAMIĘTAJ! W tym miejscu możesz pokazać do 10 parametrów.&nbsp;
          </strong>
          Pełna specyfikacja znajduje się w danych technicznych.&nbsp;
        </p>
        <div className="my-5">
          <FilterLabel>GŁÓWNE PARAMETRY</FilterLabel>
        </div>
        <div className="columns is-multiline">
          {Object.entries(formData.mainParameters).map(([key, value], index) =>
            generateMainParams(key, value, index)
          )}
        </div>
      </section>

      <section id="4" className="py-6">
        <p>
          4. Wypełnij pola informacjami. Puste pola pozostaną ukryte. Wypełnione
          pokażą się w zakładce SPECYFIKACJA TECHNICZNA w karcie produktu.
          Wypełnij tylko te, którymi można opisać ten produkt. W tabeli
          specyfikacji wyświetlą się również dane główne.
        </p>
        <div className="my-5">
          <FilterLabel>SPECYFIKACJA TECHNICZNA</FilterLabel>
        </div>
        <div className="columns is-multiline">
          {Object.entries(formData.technicalParameters).map(([key, value]) =>
            generateTechParams(key, value)
          )}
        </div>
      </section>

      <section id="5" className="py-6">
        <p className="my-4">5. Dodaj opis.</p>
        <textarea 
        className="textarea" 
        defaultValue={formData?.description}
        id="opis" />
      </section>

      <section id="6" className="py-6">
        <p>
          6. Dodaj grafiki. Pierwsza na liście pokaże się jako wizytówka
          produktu. Druga hover.
        </p>
        <div className="is-flex my-4">
          <input type="file" name="files" className="input mr-3" multiple />
          <Button onClick={handleImagesButton}>wyślij</Button>
        </div>
        <div>
          {formData.imagesUuid !== null ?? createProductImages() }
        </div>
      </section>

      <section id="7" className="py-6">
        <p>
          7. Powiąż podobne produkty - pojawią się w wyposażeniu dodatkowym.
        </p>
        <div className="columns is-multiline my-4">
          {createRelatedProducts()}
        </div>
      </section>

      <section id="8" className="py-6">
        <p>9. Utwórz cenę.</p>
        <input 
        className="input my-4" 
        type="text" 
        placeholder="Cena netto"
        id='nett-price'
        defaultValue={formData.mainParameters['cena katalogowa [netto]']}
        key={`price-${shortId()}`}
        />
      </section>

      <div className="has-text-centered">
        { errorMessage ?
        <div className="notification is-danger" id='error'>
          <button className="delete" onClick={() => {
            document.getElementById('error').remove()
          }}></button>
          {errorMessage}
        </div>
        : null
        }
        <button className="button is-primary" onClick={initiateParams}>
          Wyślij
        </button>
      </div>
    </main>
  );
}

export default EditProductTemplate;
