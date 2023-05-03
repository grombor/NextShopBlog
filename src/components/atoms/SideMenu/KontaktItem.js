import MenuButton from './MenuButton';
import {FaPlusCircle} from 'react-icons/fa';

function KontaktItem() {
  const handleKontakt = () => {
    const element = document.getElementById('kontakt');
    element.classList.toggle('is-hidden');
    const parent = document.getElementById('kontaktItem');
    parent.classList.toggle('is-active');
  };

  return (
    <div>
      <ul className="menu-list">
        <li>
          <a onClick={handleKontakt} id="kontaktItem" className="is-uppercase">
            <MenuButton>Kontakt</MenuButton>
          </a>
          <ul className="is-hidden" id="kontakt">
            <li>
              <a>Item#1</a>
            </li>
            <li>
              <a>Item#2</a>
            </li>
            <li>
            <a>
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

export default KontaktItem;
