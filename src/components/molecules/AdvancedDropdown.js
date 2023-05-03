import React, {useState} from 'react';
import styles from './AdvancedDropdown.module.css';
import {FaAngleDown, FaPlusCircle} from 'react-icons/fa';

function AdvancedDropdown({
  id,
  data,
  setCategory,
  setSubcategory,
  setFamily,
  defaultLabel
}) {
  const [buttonLabel, setButtonLabel] = useState(defaultLabel ?? id);
  const variants = ['kategoria główna', 'druga kategoria', 'trzecia kategoria']

  const handleButtonClick = () => {
    document.getElementById(id).classList.toggle('is-active');
  };

  const handleCategoryOptionClick = (e) => {
    setButtonLabel(e.target.innerHTML);
    document.getElementById(id).classList.toggle('is-active');
    switch (id) {
      case 'kategoria główna':
        setCategory(e.target.id);
        break;
      case 'druga kategoria':
        setCategory(e.target.id);
        break;
      case 'trzecia kategoria':
        setCategory(e.target.id);
        break;
      case 'podkategoria główna':
        setSubcategory(e.target.id);
        break;
      case 'druga podkategoria':
        setSubcategory(e.target.id);
        break;
      case 'trzecia podkategoria':
        setSubcategory(e.target.id);
        break;
      case 'rodzina główna':
        setFamily(e.target.id);
        break;
      case 'druga rodzina':
        setFamily(e.target.id);
        break;
      case 'trzecia rodzina':
        setFamily(e.target.id);
        break;
    }
  };

  const handleAddEvent = (e) => {
    if (e.key === 'Enter') {
      setButtonLabel(e.target.value);
      switch (id) {
        case 'kategoria':
          setCategory(e.target.value);
          break;
        case 'podkategoria':
          setSubcategory(e.target.value);
          break;
        case 'rodzina':
          setFamily(e.target.value);
          break;
      }
      document.getElementById(id).classList.toggle('is-active');
    }
  };

  const handlePlusIconClick = (e) => {
    const elem = document.getElementById(`add-${id}`);
    setButtonLabel(elem.value);
    document.getElementById(id).classList.toggle('is-active');
    switch (id) {
      case 'kategoria':
        setCategory(elem.value);
        break;
      case 'podkategoria':
        setSubcategory(elem.value);
        break;
      case 'rodzina':
        setFamily(elem.value);
        break;
    }
  };

  return (
    <div className="dropdown" id={id}>
      <div className="dropdown-trigger">
        <button
          className={`button ${styles.dropdown}`}
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          onClick={handleButtonClick}
        >
          <span>{buttonLabel}</span>
          <span className="icon">
            <FaAngleDown />
          </span>
        </button>
      </div>
      <div
        className={`dropdown-menu ${styles.dropdown}`}
        id="dropdown-menu"
        role="menu"
      >
        <div className="dropdown-content">
          {variants.includes(id)
            ? data?.map((section, index) => {
                return (
                  <div
                    className="dropdown-item is-clickable"
                    onClick={(e) => handleCategoryOptionClick(e)}
                    key={`kategoria główna-${index}-${section.name}`}
                    id={section?.name}
                  >
                    {section?.name}
                  </div>
                );
              })
            : null}
          {id === 'podkategoria główna' ||
          id === 'druga podkategoria' ||
          id === 'trzecia podkategoria'
            ? data?.map((section, index) => {
                return (
                  <div
                    className="dropdown-item is-clickable"
                    onClick={(e) => handleCategoryOptionClick(e)}
                    key={`podkategoria główna-${index}-${section.name}`}
                    id={section?.name}
                  >
                    {section?.name}
                  </div>
                );
              })
            : null}
          {id === 'rodzina główna' ||
          id === 'druga rodzina' ||
          id === 'trzecia rodzina'
            ? data?.map((section, index) => {
                return (
                  <div
                    className="dropdown-item is-clickable"
                    onClick={(e) => handleCategoryOptionClick(e)}
                    key={`rodzina główna-${index}-${section.name}`}
                    id={section?.name}
                  >
                    {section?.name}
                  </div>
                );
              })
            : null}
          <hr className="dropdown-divider" />
          <div className="dropdown-item">
            <div className="is-flex">
              <input
                type="text"
                className="input"
                placeholder={`Nowa ${id}`}
                id={`add-${id}`}
                onKeyUp={(e) => handleAddEvent(e)}
              />
              <span
                className="icon is-medium mt-1 ml-2 is-size-5"
                onClick={(e) => handlePlusIconClick(e)}
              >
                <FaPlusCircle />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvancedDropdown;
