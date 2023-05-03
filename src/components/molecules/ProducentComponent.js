import Image from 'next/image';
import styles from './ProducentComponent.module.css'

function ProducentComponent({ data }) {
  return (
    <div className={`has-text-centered mb-5 ${styles.title}`}>
      <Image
        src='/images/malowLogo.png'
        height={60}
        width={120}
      />
      <h4 className="subtitle is-size-7 mx-2">{data}</h4>
    </div>
  );
}

export default ProducentComponent;
