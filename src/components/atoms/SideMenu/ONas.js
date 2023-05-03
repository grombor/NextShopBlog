import MenuButton from './MenuButton';
import {FaPlusCircle} from 'react-icons/fa';

function ONasItem({ data }) {
  const handleONas = () => {
    const element = document.getElementById('ONas');
    element.classList.toggle('is-hidden');
    const parent = document.getElementById('ONasItem');
    parent.classList.toggle('is-active');
  };

  return (
    <div>
      <ul className="menu-list">
        <li>
          <a onClick={handleONas} id="ONasItem" className="is-uppercase">
            <MenuButton>O nas</MenuButton>
          </a>
          <ul className="is-hidden" id="ONas">
          {data?.map((section, index) => (
              <li key={`list-item${index}`}>
                <a style={{color:section.hidden===true ? "lightgrey" : "hsl(0deg, 0%, 29%)"}} href={`/cms/panelStrony/sekcje/${section.uuid}`} key={`link-item${index}`}>{`${index + 1}. ${section.headerRed + section.headerBlack
                }`}</a>
              </li>
            ))}
            <li>
              <a href='/cms/panelStrony/sekcje/nowa?target=o_nas'>
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

export default ONasItem;
