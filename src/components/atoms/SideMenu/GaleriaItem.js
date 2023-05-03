import MenuButton from './MenuButton';
import {FaPlusCircle} from 'react-icons/fa';

function GaleriaItem({ data }) {
  const handleGaleria = () => {
    const element = document.getElementById('galeria');
    element.classList.toggle('is-hidden');
    const parent = document.getElementById('galeriaItem');
    parent.classList.toggle('is-active');
  };

  return (
    <div>
      <ul className="menu-list">
        <li>
          <a onClick={handleGaleria} id="galeriaItem" className="is-uppercase">
            <MenuButton>Galeria</MenuButton>
          </a>
          <ul className="is-hidden" id="galeria">
          {data?.map((section, index) => (
              <li key={`li${index}`}>
                <a key={`gall${index}`}>{`${index + 1}. ${section.headerRed + section.headerBlack
                }`}</a>
              </li>
            ))}
            <li>
              <a href='/cms/panelStrony/sekcje/nowa?target=?'>
                <span className="icon-text mr-3">
                  <FaPlusCircle />
                </span>
                DODAJ
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default GaleriaItem;
