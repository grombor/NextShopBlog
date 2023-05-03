import Searchbar from '../atoms/Searchbar';
import MenuLabel from '../atoms/SideMenu/MenuLabel';
import MenuLink from '../atoms/SideMenu/MenuLink';
import ShopMenu from './ShopMenu';

function NavbarLinks({ isActive }) {
  return (
    <div className="mx-auto mt-1" style={{ width: '100%' }}>
      <Searchbar />
      <span className={`navbar-menu is-uppercase ${isActive}`}>
        <ShopMenu>Sklep</ShopMenu>
        <a href="/urzadzimy" className="navbar-item">
          Urządzimy!
        </a>
        <a href="/biznes" className="navbar-item">
          Biznes
        </a>
        <a href="/o_nas" className="navbar-item">
          o nas
        </a>
        <a href="/wiedza" className="navbar-item">
          wiedza
        </a>
        <a href="/galeria" className="navbar-item">
          galeria
        </a>
        <a href="/kontakt" className="navbar-item">
          kontakt
        </a>
        <a className="navbar-item is-uppercase is-hidden-desktop">---------------</a>
        <aside className="navbar-item menu is-hidden-desktop">
          <MenuLabel>MEBLE SOCJALNE</MenuLabel>
          <ul className="navbar-item menu-list">
            <MenuLink link="/sklep/podkategoria#elektryka">MEBLE Z ELEKTRYKĄ I DO SUSZENIA ODZIEŻY</MenuLink>
            <MenuLink link="/sklep/podkategoria#bhp">SZAFY UBRANIOWE BHP</MenuLink>
            <MenuLink link="/sklep/podkategoria#skrytkowe">SZAFKI SKRYTKOWE</MenuLink>
            <MenuLink link="/sklep/podkategoria#wyposazenie">WYPOSAŻENIE DO SZAF SOCJALNYCH</MenuLink>
            <MenuLink link="/sklep/podkategoria#gospodarcze">MEBLE GOSPODARCZE I ŚMIETNIKI</MenuLink>
          </ul>
          <MenuLabel>MEBLE BIUROWE</MenuLabel>
          <ul className="navbar-item menu-list">
            <MenuLink link="#">WÓZKI NA LAPTOPY I MEBLE Z ELEKTRYKĄ</MenuLink>
            <MenuLink link="#">SZAFY AKTOWE RODO I NADSTAWKI DO SZAF</MenuLink>
            <MenuLink link="#">SZAFKI KARTOTEKOWE RODO I NADSTAWKI DO SZAFEK</MenuLink>
            <MenuLink link="#">REGAŁY NA SEGREGATORY</MenuLink>
            <MenuLink link="#">STOŁY BIUROWE I KONTENERKI NA KÓŁKACH</MenuLink>
          </ul>
          <MenuLabel>MEBLE MEDYCZNE</MenuLabel>
          <ul className="navbar-item menu-list">
            <MenuLink link="#">SZAFY LEKARSKIE PRZESZKLONE</MenuLink>
            <MenuLink link="#">SZAFKI KARTOTEKOWE RODO I NADSTAWKI DO SZAFEK</MenuLink>
            <MenuLink link="#">BIURKA LEKARSKIE I KONTENERKI NA KÓŁKACH</MenuLink>
            <MenuLink link="#">STOLIKI CHIRURGICZNE I SZAFKI PRZYŁÓŻKOWE</MenuLink>
            <MenuLink link="#">PARAWANY I KOZETKI</MenuLink>
          </ul>
          <MenuLabel>MEBLE WARSZTATOWE</MenuLabel>
          <ul className="navbar-item menu-list">
            <MenuLink link="#">STOŁY WARSZTATOWE</MenuLink>
            <MenuLink link="#">SZAFY WARSZTATOWE</MenuLink>
            <MenuLink link="#">WÓZKI WARSZTATOWE</MenuLink>
            <MenuLink link="#">REGAŁY MAGAZYNOWE</MenuLink>
            <MenuLink link="#">SZAFY NA KOMPUTER PRZEMYSŁOWY</MenuLink>
          </ul>
          <MenuLabel>MEBLE SZKOLNE</MenuLabel>
          <ul className="navbar-item menu-list">
            <MenuLink link="#">SZAFKI DO SZATNI</MenuLink>
            <MenuLink link="#">SZATNIE OTWARTE</MenuLink>
            <MenuLink link="#">WÓZKI DO  ŁADOWANIA LAPTOPÓW I MEBLE Z ELEKTRYKĄ</MenuLink>
            <MenuLink link="#">WYPOSAŻENIE KLASY LEKCYJNEJ</MenuLink>
            <MenuLink link="#">WYPOSAŻENIE SEKRETARIATU</MenuLink>
          </ul>
          <MenuLabel>WYPOSAŻENIE DODATKOWE I CZĘŚCI ZAMIENNE</MenuLabel>
          <ul className="navbar-item menu-list">
            <MenuLink link="#">ZAMKI</MenuLink>
            <MenuLink link="#">WYPOSAŻENIE DO SZAF BIUROWYCH</MenuLink>
            <MenuLink link="#">WYPOSAŻENIE DO SZAF SOCJALNYCH</MenuLink>
            <MenuLink link="#">WYPOSAŻENIE WARSZTATOWE</MenuLink>
            <MenuLink link="#">SZAFKI NA WINO I UPOMINKI</MenuLink>
          </ul>
        </aside>
      </span>
    </div>
  );
}

export default NavbarLinks;
