import RALColorsPalette from '../../helpers/RALColors';
import styles from './ColorsPalette.module.css';

const ColorsPalette = ({ element, bodyColor, setBodyColor, doorColor, setDoorColor }) => {
  const handleClick = (e) => {
    let color = e.target.getAttribute('code');
    if (element === 'korpus') {
      setBodyColor(color)
    } else {
      setDoorColor(color)
    }
    const elems = document.querySelectorAll(`#${element} *`);
    const elem = document.getElementById(e.target.id)
    if (elem.style.border !== '3px solid black') {
      elems.forEach((elem) => {
        elem.style.border = '0px solid black'
      })
      elem.style.border = '3px solid black'
    } else {
      elem.style.border = '0px solid black'
      
    }
  }
  return (
    <div className='ml-5'>
      <h4 className="subtitle is-size-5 is-uppercase has-text-left">
        wybierz kolor {element === 'korpus' ? "korpusu" : "drzwiczek"}
      </h4>
      <div className={`is-flex is-flex-wrap-wrap`} id={element}>
        {RALColorsPalette.map((item) => (
          <span 
            className={`${styles.color_item}`} 
            key={item.id}
            id={element + '-' + item.id}
            style={{backgroundColor: item.valueHEX}}
            data-tooltip={`${item.id} - ${item.name}`}
            code={item.id}
            onClick={(e) => handleClick(e)}
            />
        ))}
      </div>
    </div>
  );
};

export default ColorsPalette;
