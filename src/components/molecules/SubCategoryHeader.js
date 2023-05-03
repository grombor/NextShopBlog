import styles from './SubCategoryHeader.module.css';
import HeaderWithButton from './HeaderWithButton';
import { Header } from '../atoms/Header';
import Image from 'next/image';
import {useRouter} from 'next/router';

function SubCategoryHeader({ headerData }) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Image src={headerData?.headerImage} layout="fill" objectFit="cover" />
      <div className={styles.header} id={headerData?.headerRed+headerData?.headerBlack}>
        <HeaderWithButton>
          <Header
            size="2"
            redText={headerData?.headerRed}
            blackText={headerData?.headerBlack}
            subHeaderSize="4"
            subHeaderText={headerData?.subheader}
            className={styles.header}
          />
        </HeaderWithButton>
      </div>
    </div>
  );
}

export default SubCategoryHeader;
