import styles from './CategoryHeader.module.css';
import HeaderWithButton from './HeaderWithButton';
import {Header} from '../atoms/Header';
import {Button} from '../atoms/Button';
import Image from 'next/image';
import {useRouter} from 'next/router';

function CategoryHeader({headerData}) {
  const router = useRouter();
  const handleClick = () => {
    const link = headerData?.buttonLink;
    router.push(link)
  };
  return (
    <div className={styles.container}>
      <div>
        <Image src={headerData?.imageURL} layout='fill' objectFit='cover' />
      </div>
      <div className={styles.header}>
        <HeaderWithButton>
          <Header
            size="2"
            redText={headerData?.redText}
            blackText={headerData?.blackText}
            subHeaderSize="4"
            subHeaderText={headerData?.subHeaderText}
            className={styles.header}
          />
          <span className={styles.button}>
            <Button type="danger" onClick={handleClick}>{headerData?.buttonTitle}</Button>
          </span>
        </HeaderWithButton>
      </div>
    </div>
  );
}

export default CategoryHeader;
