import ProductsEditor from '../../atoms/ProductsEditor';
import KontaktItem from '../KontaktItem';
import {FaAngleRight} from 'react-icons/fa';

function SideMenu() {
  const angleRight = <FaAngleRight />;

  return (
    <aside className="menu is-uppercase">
      <p className="menu-label mx-1">sklep</p>
      <ul className="menu-list">
        <ProductsEditor
          icon={angleRight}
          url={'/cms/produkty'}
          label="Edytuj produkty"
        />
        <ProductsEditor
          icon={angleRight}
          url={'/cms/panelStrony/kategorie'}
          label="Edytuj kategorie"
        />
        <ProductsEditor
          icon={angleRight}
          url={'/cms/panelStrony/certyfikaty'}
          label="Edytuj certyfikaty"
        />
      </ul>
      <p className="menu-label mx-1">bannery</p>
      <ul className="menu-list">
        <ProductsEditor
          icon={angleRight}
          url={'/cms/panelStrony/bannery'}
          label="Edytuj bannery"
        />
        <ProductsEditor
          icon={angleRight}
          url={'/cms/panelStrony/bannery/nowy'}
          label="Nowy banner"
        />
        <p className="menu-label mx-1">Wpisy</p>
        <ProductsEditor
          icon={angleRight}
          url={'/cms/panelStrony/home'}
          label="Strona główna"
        />
                <ProductsEditor
          icon={angleRight}
          url={'/cms/panelStrony/urzadzimy'}
          label="Urządzimy"
        />
                        <ProductsEditor
          icon={angleRight}
          url={'/cms/panelStrony/biznes'}
          label="Biznes"
        />
                                <ProductsEditor
          icon={angleRight}
          url={'/cms/panelStrony/o_nas'}
          label="O nas"
        />
                                        <ProductsEditor
          icon={angleRight}
          url={'/cms/panelStrony/wiedza'}
          label="wiedza"
        />
        <p className="menu-label mx-1">Galerie</p>
        <ul className="menu-list">
          <ProductsEditor
            icon={angleRight}
            url={'/cms/panelStrony/galerie'}
            label="Edytuj galerie"
          />
          <ProductsEditor
            icon={angleRight}
            url={'/cms/panelStrony/galerie/nowa'}
            label="Nowa galeria"
          />
        </ul>
        <KontaktItem />
      </ul>
    </aside>
  );
}

export default SideMenu;
