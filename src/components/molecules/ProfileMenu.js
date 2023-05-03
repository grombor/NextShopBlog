import Image from 'next/image';
import {useRouter} from 'next/router';
import React from 'react';
import {Button} from '../atoms/Button';
import styles from './ProfileMenu.module.css';

const imageURL = 'https://fakeimg.pl/280x280/?text=280x280px';

function ProfileMenu() {
  const router = useRouter();
  return (
    <div className={`${styles.menu}`}>
      <figure className='mb-6'>
        <Image src={imageURL} width={280} height={280} />
      </figure>
      <div className="my-3">
        <Button onClick={() => {router.push('/cms/panelStrony')}}>panel strony</Button>
      </div>
      <div className="my-3">
        <Button onClick={() => {router.push('/cms/zarzadzanie')}}>zarzadzanie</Button>
      </div>
      <div className="my-3 mb-6">
        <Button onClick={() => {router.push('/cms/ustawienia')}}>ustawienia</Button>
      </div>
    </div>
  );
}

export default ProfileMenu;
