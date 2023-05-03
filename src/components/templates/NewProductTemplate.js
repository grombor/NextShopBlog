import {useRouter} from 'next/router';
import React, {useEffect, useState} from 'react';
import FilterLabel from '../atoms/FilterLabel';
import AdvancedDropdown from '../molecules/AdvancedDropdown';
import EditIcons from '../molecules/EditIcons';
import styles from './EditProductTemplate.module.css';


function NewProductTemplate({ pageData, familyTreeData, certificatesData }) {
  const router = useRouter();
  const [categoriesData, setCategoriesData] = useState(familyTreeData);
  const [errorMessage, setErrorMessage] = useState()

  // useEffect
  useEffect(() => {
    // console.log('first')
  }, []);

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
  const [technicalParams, setTechnicalParams] = useState(pageData?.technicalParameters);

  // images
  let images = useState();

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
        <div className="field is-horizontal" key={`param-column-div-${index}`}>
          <div
            className="field-label is-normal"
            key={`param-column-label-div-${index}`}
          >
            <label
              className={`label ${styles.input}`}
              key={`param-column-label-${index}`}
            >
              {inputKey}
            </label>
          </div>
          <div className="field-body" key={`param-column-field-body-${index}`}>
            <div className="field" key={`param-column-field-${index}`}>
              <p
                className="control is-expanded"
                key={`param-column-p-${index}`}
              >
                <input
                  type="text"
                  name={inputKey}
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

  const generateTechParams = (inputKey, inputValue, index) => {
    return (
      <div className="column is-6" key={`tech-param-column-6-${index}`}>
        <div
          className="field is-horizontal"
          key={`tech-param-column-field-${index}`}
        >
          <div
            className="field-label is-normal"
            key={`tech-param-column-label-div-${index}`}
          >
            <label
              className={`label ${styles.input}`}
              key={`tech-param-column-label-${index}`}
            >
              {inputKey}
            </label>
          </div>
          <div
            className="field-body"
            key={`tech-param-column-field-body-${index}`}
          >
            <div className="field" key={`tech-param-column-field-${index}`}>
              <p
                className="control is-expanded"
                key={`tech-param-column-${index}`}
              >
                <input
                  type="text"
                  name={inputKey}
                  id={`tech_param-${inputKey}`}
                  defaultValue={inputValue}
                  className={`input ${styles.input}`}
                  key={`tech_param-${inputKey}`}
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
    certCheckboxes.forEach((checkbox) => {
      certificatesList.push(checkbox.name);
    });
    if (certCheckboxes.length == 0) return null;
    return certificatesList;
  }

  function createRelatedProducts() {
    let elements = [];

    for (let i = 0; i < 5; i++) {
      elements.push(
        <>
          <div className="column is-full" key={`realted-div-${i}`}>
            <input
              className="input"
              placeholder="Link"
              id={`realted_link-${i}`}
              key={`realted-${i}`}
            />
          </div>
        </>
      );
    }

    return elements;
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

  async function handleImages() {
    // Pobranie elementu input z plikami
    const fileInput = document.querySelector('input[type="file"]');

    // Stworzenie nowego obiektu FormData
    let formData = new FormData();

    // Dodanie wybranych plików do obiektu FormData
    for (const file of fileInput.files) {
      formData.append('images', file);
    }

    // Wysłanie żądania za pomocą axios
    await axiosWithAuth.post(process.env.NEXT_PUBLIC_API_URL +'/api/files/upload', formData)
      .then(response => {
        images= response.data.data
      })
      .catch(error => {
        console.error('Wystąpił błąd podczas przesyłania plików', error);
        images= []
      });
  }

  function handlePostNewProduct(body) {
    axiosWithAuth.post(process.env.NEXT_PUBLIC_API_URL +'/api/products-cms', body)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  async function initiateParams() {
    await handleImages()
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
    params.imagesUuid = images
    // if (params) console.log(JSON.stringify(params));
    // return params;
    handlePostNewProduct(params)
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
                />
              </div>
              <div className="column">
                <AdvancedDropdown
                  id="podkategoria główna"
                  data={mainSubcategories}
                  category={mainCategory}
                  setSubcategory={setMainSubCategory}
                  key={'podkategoria główna'}
                />
              </div>
              <div className="column">
                <AdvancedDropdown
                  id="rodzina główna"
                  data={mainFamilies}
                  category={mainCategory}
                  setFamily={setMainFamily}
                  key={'rodzina główna'}
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
                    key={'edit-icons-01'}
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
                />
              </div>
              <div className="column">
                <AdvancedDropdown
                  id="druga podkategoria"
                  data={secondarySubcategories}
                  category={secondaryCategory}
                  setSubcategory={setSecondarySubCategory}
                  key={'druga podkategoria'}
                />
              </div>
              <div className="column">
                <AdvancedDropdown
                  id="druga rodzina"
                  data={secondaryFamilies}
                  category={secondaryCategory}
                  setFamily={setSecondaryFamily}
                  key={'druga rodzina'}
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
                    key={'edit-icons-02'}
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
                />
              </div>
              <div className="column">
                <AdvancedDropdown
                  id="trzecia podkategoria"
                  data={tetrarySubCategories}
                  category={tetraryCategory}
                  setSubcategory={setTetrarySubCategory}
                  key={'trzecia podkategoria'}
                />
              </div>
              <div className="column">
                <AdvancedDropdown
                  id="trzecia rodzina"
                  data={tetraryFamilies}
                  category={tetrarySubCategory}
                  setFamily={setTetraryFamily}
                  key={'trzecia rodzina'}
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
                    key={'edit-icons-03'}
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
          {certificatesData?.map((cert) => {
            return (
              <div className="column is-6" key={`prod_certs-div-${cert.uuid}`}>
                {cert.name}
                <span key={`prod_certs-span-${cert.uuid}`}>
                  <input
                    type="checkbox"
                    className="checkbox mx-2"
                    name={cert.name}
                    key={`prod_certs-key-${cert.uuid}`}
                    id={`prod_certs-${cert.name}`}
                  />
                </span>
              </div>
            );
          })}
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
          {Object.entries(mainParams).map(([inputKey, inputValue], index) =>
            generateMainParams(inputKey, inputValue, index)
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
          {Object.entries(technicalParams).map(
            ([inputKey, inputValue], index) =>
              generateTechParams(inputKey, inputValue, index)
          )}
        </div>
      </section>

      <section id="5" className="py-6">
        <p className="my-4">5. Dodaj opis.</p>
        <textarea className="textarea" placeholder="Opis produktu" id="opis" />
      </section>

      <section id="6" className="py-6">
        <p>
          6. Dodaj grafiki. Pierwsza na liście pokaże się jako wizytówka
          produktu. Druga hover.
        </p>
        <div className="is-flex my-4">
          <input type="file" name="files" className="input mr-3" multiple />
          {/* <Button onClick={handleImagesButton}>wyślij</Button> */}
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
          id="nett-price"
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

export default NewProductTemplate;
