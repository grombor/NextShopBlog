function DropdownItem({ Categoryname, subCategories }) {

  function handleClick(e) {
    const myElement = document.getElementById(e.currentTarget.id);
    myElement.querySelectorAll(":scope > ul")[0].classList.toggle('is-hidden')
  }

  return (
    <ul className="menu-list" key={`catlist${Categoryname}`}>
      <div key={`cat${Categoryname}`}>
        <p
          className="menu-label is-uppercase is-size-6"
          key={`para${Categoryname}`}
        >
          {Categoryname}
        </p>
        <li key={`list${Categoryname}`}>
          {subCategories.map((item, subCategoryIndex) => (
            <div
              onClick={handleClick}
              key={`subcat${Categoryname}${subCategoryIndex}`}
              id={`${Categoryname}${subCategoryIndex}`}
            >
              <a id={`subcatlink${subCategoryIndex}`}>{item.name}</a>
              <ul
                key={`subcatlist${subCategoryIndex}`}
                className="is-hidden"
                id={`ul${Categoryname}${subCategoryIndex}`}
              >
                {item.families.map((item, familyindex) => (
                  <li key={`fam${familyindex}`}>
                    <a href={item.link}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </li>
      </div>
    </ul>
  );
}

export default DropdownItem;
