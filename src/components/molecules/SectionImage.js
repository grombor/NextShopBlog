import Image from 'next/image';
import styles from './SectionImage.module.css';

function SectionImage({ sectionImage }) {
  return (
    <div className={`${styles.section}`}>
      <Image src={sectionImage} layout="fill" object-fit="cover" />
    </div>
  );
}

export default SectionImage;
