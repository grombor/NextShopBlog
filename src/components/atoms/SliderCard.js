import Image from 'next/image';
import styles from './SliderCard.module.css';
import {useRouter} from 'next/router';
import {Header} from './Header';

function SliderCard({ size, content, price, buttonTitle, buttonURL, imageURL, dimmensions }) {
  const router = useRouter();

  const CardStyles = {
    width: size,
    backgroundColor: 'inherit',
    borderRadius: '16px',
    height: '358px'
  };

  const FigureStyles = {
    height: size,
    width: size,
    backgroundColor: 'inherit',
    borderRadius: '16px',
    margin: '10px 0',
    position: 'relative'
  };

  const ButtonWithTitle = (
    <div className={`button is-primary ${styles.button}`} onClick={()=>{
      router.push('/sklep/#' + content)
    }}>
    ZOBACZ PRODUKT
  </div>
  )

  const priceComponent = (
    <div>
      <div className='has-text-centered'>{dimmensions}</div>
          <span className="has-text-weight-bold has-text-centered">
              <Header size={5} redText={price} blackText={" NETTO"} />
              <p className='has-text-weight-normal'>(999 ZŁ BRUTTO)</p>
            </span>
    </div>

  )
  
  const CardContent = (
    <div className="media-content">
      <div className="my-0 mx-0">
        <div className="is-uppercase has-text-centered my-3">
            <span className={styles.content}>{content}</span>
          <div>
          {buttonTitle ? ButtonWithTitle : null}
          </div>
        </div>
      </div>
    </div>
  );

  const CardPrice = (
    <div className="media-content">
      <div className="my-0 mx-0">
        <div className="is-uppercase">
          <div className='has-text-centered'>
            <div className={`${styles.content} is-size-5 has-text-weight-semibold mb-2`}>{content}</div>
            {dimmensions ? (<div>wymiary</div>) : null}
          </div>
          <div>
            {price ? priceComponent : null}
            {buttonTitle ? ButtonWithTitle : null}
          </div>
        </div>
      </div>
    </div>
  );


  return (
    <div className={`card mx-auto`} style={CardStyles}>
      <div className="card-image" style={{position: "relative"}}>
        <figure style={FigureStyles}>
          <Image
            src={imageURL}
            layout='fill'
            objectFit='cover'
          />
        </figure>
      </div>
      <div className="mx-2">
        {price !== '' ? CardPrice : CardContent}
      </div>
    </div>
  );
}

export default SliderCard;
