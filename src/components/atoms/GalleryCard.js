import Image from 'next/image';
import styles from './GallerySliderCard.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';

function GalleryCard({ data, alt, description,  }) {
  const [isActive, setIsActive] = useState('');

  function handleClick() {
    setIsActive('is-active');
  }

  const modalContent = () => {
    return (
      <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
          <p class="image is-4by3">
            <Image
              layout="fill"
              objectFit="cover"
              priority
              src={data.expectedImage}
              alt={alt}
            />
            <div
              className="has-text-white has-text-centered"
              style={{ position: 'relative', bottom: '0', width: '100%', height: 'auto', background: 'rgba(0, 0, 0, 0.65)', }}
            >
              <h2 className="is-size-54 is-uppercase py-3 px-4">
                {description}
              </h2>
            </div>
          </p>
        </div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={() => setIsActive('')}
        ></button>
      </div>
    );
  };

  return (
    <div className={`card ${styles.card}`}>
      <div className="card-image" style={{ position: 'relative' }}>
        <figure className={`image ${styles.figure}`}>
          <Image
            src={data.expectedImage}
            layout="fill"
            objectFit="cover"
            alt={alt}
            priority
            onClick={handleClick}
          />
        </figure>
      </div>
      {isActive === 'is-active' ? modalContent() : null}
    </div>
  );
}

export default GalleryCard;
