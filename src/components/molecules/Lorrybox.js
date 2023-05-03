import Image from 'next/image'
import styles from './Lorrybox.module.css'

function Lorrybox() {
  return (
    <div className={` px-1 py-1 has-text-justified ${styles.lorrybox}`}>
        <div className='level'>
            <div className='level-left mx-2 my-2'>
            <figure className='image-text'>
            <Image src='/icons/lorry.svg' width='50px' height='50px' alt='lorry' />
        </figure>
            </div>
            <div className='level-right'>
                <span className={`is-size-7 mx-2 ${styles.lorrybox_text}`}>Realizujemy dowóz z wniesieniem i montażem. Możesz wybrać także przesyłkę kurierską na palecie lub odbiór osobisty. Sposób i koszt dostawy ustalimy w kolejnych krokach.</span>
            </div>
        </div>
  </div>
  )
}

export default Lorrybox