import Image from 'next/image';
import styles from './BestsellerCard.module.css';
// import { useRouter } from 'next/router';
import {useRouter} from 'next/router';

// function BestsellerCard({
//   size,
//   content,
//   buttonTitle,
//   buttonURL,
//   imageURL,
//   imageHoverURL,
//   dimmensions,
//   nettPrice,
//   grossPrice,
// }) {
//   const router = useRouter();
//   const [isActive, setIsActive] = useState();

//   const CardStyles = {
//     width: size,
//     height: '365px',
//   };

//   const priceStyles = {
//     position: 'relative',
//     top: '-6px',
//   }

//   const ButtonWithTitle = (
//     <a
//       className={`button is-primary ${styles.button}`}
//       // onClick={() => {
//       //   router.push(buttonURL)
//       // }}
//       href={buttonURL}
//     >
//       {`${buttonTitle}`}
//     </a>
//   );

//   const priceComponent = (
//     <div>
//       <span className="has-text-weight-semi-bold has-text-centered">
//         <div className="is-size-6 mt-3">{nettPrice}</div>
//         <p className={`is-size-7 has-text-weight-normal`} style={priceStyles}>{grossPrice}</p>
//       </span>
//     </div>
//   );

//   const CardPrice = (
//     <div className="media-content">
//       <div className="my-0 mx-0">
//         <div className="is-uppercase">
//           <div className="has-text-centered">
//             <div
//               className={`${styles.content} is-size-6 has-text-weight-semibold my-3`}
//             >
//               {content}
//             </div>
//             <div className={`is-size-7 ${styles.dimmensions}`}>{dimmensions}</div>
//           </div>
//           <div>
//             {priceComponent}
//             {buttonTitle === null ? null : ButtonWithTitle}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
//   return (
//     <div className={`card mx-auto`} style={CardStyles}  onMouseLeave={() => {setIsActive(false)}}>
//       <div className="card-image" style={{ position: 'relative' }}>
//         <figure className={styles.figure}>
//           <Image
//             src={imageURL}
//             layout="fill"
//             objectFit="cover"
//             onMouseOver={e => {e.currentTarget.srcset = imageHoverURL}}
//             onMouseOut={e => {e.currentTarget.srcset = imageURL}}
//           />
//         </figure>
//       </div>
//       <div className={styles.card_body}>{CardPrice}</div>
//       {isActive ? (
//         <div
//           className={`button is-danger ${styles.button}`}
//           style={redButtonStyles}
//           onMouseLeave={() => {
//             setIsActive(false);
//           }}
//           onClick={() => {
//             setIsActive(false);
//           }}
//         >
//           dodaj do koszyka
//         </div>
//       ) : null}
//     </div>
//   );
// }

// export default BestsellerCard;


function BestsellerCard({
  size,
  content,
  buttonTitle,
  buttonURL,
  imageURL,
  dimmensions,
  nettPrice,
  grossPrice,
  imageHoverURL,
}) {
  // const [isActive, setIsActive] = useState();
  const router = useRouter();

  // const containerStyles = {
  //   width: size,
  //   height: '400px',
  //   overflow: 'visible',
  //   margin: '0 auto',
  // };

  const CardStyles = {
    width: size,
    height: '340px',
    overflow: 'visible',
  };

  // const redButtonStyles = {
  //   position: 'absolute', 
  //   left: '0.5em',
  //   bottom: '-3em', 
  //   zIndex: '3', 
  //   overflow: 'visible',
  //   textTransform: 'uppercase'
  // };

  const ButtonWithTitle = (
    <>
      <div
        className={`button is-primary ${styles.button}`}
        styles={{bottom: '2em'}}
        // onMouseOver={() => { setIsActive((prevState) => !prevState); }}
        onClick={() => {router.push(`./${buttonURL}`)}}
      >
        {buttonTitle}
      </div>
      
    </>
  );

  const priceComponent = (
    <div style={{ position: 'absolute', bottom: '2.5em' }}>
      <div className="has-text-centered mb-1">{dimmensions}</div>
      <span className="has-text-weight-semi-bold has-text-centered">
        <div className="is-size-6 mb-2">{nettPrice} NETTO</div>
        <p className={`is-size-7 has-text-weight-normal ${styles.gross_price} mb-2`}>
          ({grossPrice} BRUTTO)
        </p>
      </span>
    </div>
  );

  const CardPrice = (
    <div className="media-content">
      <div className="is-uppercase">
        <div className="has-text-centered">
          <div className={`${styles.content} is-size-6 has-text-weight-semibold pt-6`}>
            {content}
          </div>
        </div>
        {nettPrice ? priceComponent : null}
        {ButtonWithTitle}
      </div>
    </div>
  );

  return (
    <div className={styles.container}
      // onMouseLeave={() => {setIsActive(false)}}
      >
    <div className={`card mx-auto`} style={CardStyles}>
      <div className="card-image" style={{ position: 'relative' }}>
        <figure className={styles.figure} style={{ position: 'relative' }} 
          onMouseOver={e => {e.currentTarget.srcset = imageHoverURL}}
          onMouseOut={e => {e.currentTarget.srcset = imageURL}}
>
          <Image src={imageURL} layout="fill" objectFit="cover" />
        </figure>
      </div>
      <div className="mx-2">{CardPrice}</div>
      {/* {isActive ? (
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
      ) : null} */}
    </div>
    </div>
  );
}

export default BestsellerCard;
