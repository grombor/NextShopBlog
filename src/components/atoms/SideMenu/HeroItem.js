import MenuButton from './MenuButton';

function HeroItem({ data }) {
  const handleHero = () => {
    const element = document.getElementById('hero');
    element.classList.toggle('is-hidden');
    const parent = document.getElementById('heroItem');
    parent.classList.toggle('is-active');
  };

  return (
    <div>
      <ul className="menu-list">
        <li>
          <a onClick={handleHero} id="heroItem" className="is-uppercase">
            <MenuButton>Banner</MenuButton>
          </a>
          <ul className="is-hidden" id="hero">
            {/* {Array.from(data)?.map((section, index) => (
              <li key={`banner${index}`}>
                <a>{`${index + 1}. Banner`}</a>
              </li>
            ))} */}
              {/* <a>
                <span className="icon-text mr-3">
                  <FaPlusCircle />
                </span>
                DODAJ
              </a> */}
              <a href='/cms/panelStrony/bannery'>
                Edytuj
            </a>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default HeroItem;
