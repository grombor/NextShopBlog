import styles from './Hero.module.css';
import Image from 'next/image';

function Hero({ imageURL }) {
  return (
    <div className={`hero is-primary is-medium ${styles.hero} is-hidden-touch`}>
        <div className='hero-body' style={{position: "relative", marginTop: "100px"}}>
        <Image src={imageURL} layout='fill' objectFit='cover' priority />
        </div>
    </div>
  )
}

export default Hero