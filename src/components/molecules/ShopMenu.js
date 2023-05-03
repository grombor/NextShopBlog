import React, {useEffect, useState} from 'react';
import styles from './ShopMenu.module.css';
import {FaAngleRight, FaStop} from 'react-icons/fa';
import Link from 'next/link';
import axiosWithAuth from "../../axios-config";

function ShopMenu({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [response, setResponse] = useState();

  useEffect(() => {
    getDistributionData();
    // console.log(response);
    if (response) {
      // console.log(response);
    }
  }, []);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  async function getDistributionData() {
    try {
      const response = await axiosWithAuth.get(
        process.env.NEXT_PUBLIC_API_URL + '/api/distribution'
      );
      setResponse(response.data.data);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  const handleMouseOverCategory = (uid) => {
    const subElements = document.querySelectorAll('[id^="sub-"]');
    subElements.forEach((elem) => {
      elem.classList.add('is-hidden');
    });
    const categoryElements = document.querySelectorAll(`[id^="sub-${uid}"]`);
    categoryElements.forEach((elem) => {
      elem.classList.remove('is-hidden');
    });
  };

  const categories = (
    <div>
      <div className="columns">
        <ul>
          {response?.map((category) => {
            return (
              <li key={category.name}>
                <a
                  className={styles.menu_item}
                  href={`/sklep#${category?.name}`}
                  onMouseEnter={() => {
                    handleMouseOverCategory(category.name);
                  }}
                >
                  <span>{category.name}</span>
                  <span className="icon-text mx-4">
                    <FaAngleRight />
                  </span>
                </a>
                <hr className="my-1"></hr>
                <div className={styles.menu_item_children}>
                  {category?.subcategories.map((subcategory) => {
                    return (
                      <div
                        id={`sub-${category.name}`}
                        className="my-1 is-hidden"
                        onClick={() => {
                          window.location.href = `/${subcategory?.link}`;
                        }}
                        key={`sub-${category.name}`}
                      >
                        <Link href={`/${subcategory?.link}`}>
                          <div>
                            <span className="icon-text mx-3 is-size-8">
                              <FaStop />
                            </span>
                            {subcategory?.name}
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );

  return (
    <div>
      <a href="/sklep" className="navbar-item" onMouseEnter={handleMouseEnter}>
        {children}
      </a>
      {isOpen && (
        <div className={styles.shop_menu} onMouseLeave={handleMouseLeave}>
          {categories}
        </div>
      )}
    </div>
  );
}

export default ShopMenu;
