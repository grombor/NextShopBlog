import {FaPlusCircle} from 'react-icons/fa';
import MenuButton from './MenuButton';

function UrzadzimyItem({ data }) {
  const handleUrzadzimy = () => {
    const element = document.getElementById('urzadzimy');
    element.classList.toggle('is-hidden');
    const parent = document.getElementById('urzadzimyItem');
    parent.classList.toggle('is-active');
  };

  return (
    <div>
      <ul className="menu-list">
        <li>
          <a
            onClick={handleUrzadzimy}
            id="urzadzimyItem"
            className="is-uppercase"
          >
            <MenuButton>Urządzimy</MenuButton>
          </a>
          <ul className="is-hidden" id="urzadzimy">
          {data?.map((section, index) => (
              <li key={`list${index}`}>
                <a style={{color:section.hidden===true ? "lightgrey" : "hsl(0deg, 0%, 29%)"}} href={`/cms/panelStrony/sekcje/${section.uuid}`} key={`link${index}`}>{`${index + 1}. ${section.headerRed + section.headerBlack
                }`}</a>
              </li>
            ))}
            <li>
              <a href='/cms/panelStrony/sekcje/nowa?target=urzadzimy'>
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

export default UrzadzimyItem;
