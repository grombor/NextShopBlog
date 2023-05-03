import Image from 'next/image';
import React, {useState} from 'react';
import styles from './ProductSlider.module.css';

function ProductSlider({images}) {
  const [mainImageUrl, setMainImageUrl] = useState(images[0]);

  const changeImage = (event) => {
    setMainImageUrl(event.target.getAttribute("src"));
  };

  return (
    <div className={`box ${styles.box}`} id='mainImage'>
      <div className={styles.main_image}>
        <Image
          key='main-image'
          src={mainImageUrl}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="is-flex is-justify-content-center is-clickable">
      {images.map((image) => 
          <div className={styles.bottom_image}>
            <Image src={image} layout="fill" objectFit="cover" onClick={changeImage}/>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductSlider;
