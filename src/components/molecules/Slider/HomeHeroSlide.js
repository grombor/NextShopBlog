import Image from 'next/image';
import React from 'react';
import {Header} from '../../atoms/Header';
import HeaderWithButton from '../HeaderWithButton';
import styles from './HomeHero.module.css';


function HomeHeroSlide({ props }) {
  return (
    <div>
      <Image
        src={props?.imageUrl}
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className={`hero ${styles.header}`}>
        <HeaderWithButton>
          <Header
            size="2"
            redText={props.redHeader}
            blackText={props.blackHeader}
            subHeaderSize="4"
            subHeaderText={props.subheader}
            className={styles.header}
          />
        </HeaderWithButton>
      </div>
    </div>
  );
}

export default HomeHeroSlide;
