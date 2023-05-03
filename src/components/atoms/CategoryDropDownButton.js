import React from 'react';
import {FaAngleDown} from 'react-icons/fa';
import styles from './CategoryDropDownButton.module.css';

function CategoryDropDownButton({data, buttonLabel, setFilter, lable, setLable}) {
  const name = buttonLabel + '-dropdown';

  const handleClick = () => {
    document.getElementById(name).classList.toggle('is-active');
  };

  const handleDropdownClick = (item) => {
    if (buttonLabel === 'kategoria') {
      setLable([item.name, "podkategoria", "rodzina"])
    } else if (buttonLabel === 'podkategoria') {
      setLable([lable[0], item.name, "rodzina"])
    } else if (buttonLabel === 'rodzina') {
      setLable([lable[0], lable[1], item.name])
    }
    document.getElementById(name).classList.toggle('is-active');
  };

  return (
    <div className="dropdown" id={`${buttonLabel}-dropdown`}>
      <div className="dropdown-trigger">
        <button
          style={{width: "auto", minWidth: "230px", margin: "10px"}}
          className={`button ${styles.button}`}
          aria-haspopup="true"
          aria-controls="category-dropdown"
          onClick={handleClick}
        >
          <span id="dropdown-value" className="is-uppercase">{
            buttonLabel === 'kategoria' ? lable[0] : buttonLabel === 'podkategoria' ? lable[1] : lable[2]
          }</span>
          <span className="icon is-small">
            <FaAngleDown/>
          </span>
        </button>
      </div>
      <div className="dropdown-menu is-uppercase" role="menu">
        <div className={`dropdown-content ${styles.button}`}>
          {data?.map((item, index) => {
            return (
              <span
                className="dropdown-item is-uppercase is-clickable"
                key={index}
                onClick={() => {
                  setFilter(item.name)
                  handleDropdownClick(item)
                }}
              >
              {item.name}
            </span>)
          })}
        </div>
      </div>
    </div>
  );
}

export default CategoryDropDownButton;
