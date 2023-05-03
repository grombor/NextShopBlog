import Image from 'next/image';
import styles from './BestsellerCard.module.css';
import {useState} from 'react';

function BestsellerCard({
  size,
  content,
  buttonTitle,
  buttonURL,
  imageURL,
  dimmensions,
  nettPrice,
  grossPrice,
}) {
  const [isActive, setIsActive] = useState();

  const containerStyles = {
    width: size,
    height: '400px',
    overflow: 'visible',
  };

  const CardStyles = {
    width: size,
    height: '340px',
    overflow: 'visible',
  };

  const redButtonStyles = {
    position: 'absolute', 
    left: '0.5em',
    bottom: '-3em', 
    zIndex: '3', 
    overflow: 'visible',
    textTransform: 'uppercase'
  };

  const ButtonWithTitle = (
    <>
      <div
        className={`button is-primary ${styles.button}`}
        onMouseOver={() => {
          setIsActive((prevState) => !prevState);
        }}
        onClick={() => {}}
      >
        {buttonTitle}
      </div>
      
    </>
  );

  const priceComponent = (
    <div style={{ position: 'absolute', bottom: '2.5em' }}>
      <div className="has-text-centered">{dimmensions}</div>
      <span className="has-text-weight-semi-bold has-text-centered">
        <div className="is-size-5">{nettPrice} NETTO</div>
        <p className={`is-size-7 has-text-weight-normal ${styles.gross_price}`}>
          ({grossPrice} BRUTTO)
        </p>
      </span>
    </div>
  );

  const CardPrice = (
    <div className="media-content">
      <div className="is-uppercase">
        <div className="has-text-centered">
          <div
            className={`${styles.content} is-size-5 has-text-weight-semibold`}
          >
            {content}
          </div>
        </div>
        {priceComponent}
        {ButtonWithTitle}
      </div>
    </div>
  );

  return (
    <div style={containerStyles}  onMouseLeave={() => {setIsActive(false)}}>
    <div className={`card mx-auto`} style={CardStyles}>
      <div className="card-image" style={{ position: 'relative' }}>
        <figure className={styles.figure} style={{ position: 'relative' }}>
          <Image src={imageURL} layout="fill" objectFit="cover" />
        </figure>
      </div>
      <div className="mx-2">{CardPrice}</div>
      {isActive ? (
        <div
          className={`button is-danger ${styles.button}`}
          style={redButtonStyles}
          onMouseLeave={() => {
            setIsActive(false);
          }}
          onClick={() => {
            setIsActive(false);
          }}
        >
          dodaj do koszyka
        </div>
      ) : null}
    </div>
    </div>
  );
}

export default BestsellerCard;
