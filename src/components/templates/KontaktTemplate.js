import Image from 'next/image';
import {useRouter} from 'next/router';
import {Button} from '../atoms/Button';
import MapComponent from '../atoms/MapComponent';
import styles from './KontaktTemplate.module.css';

function KontaktTemplate() {
  const router = useRouter();

  const handleCustomerService = () => {
    console.log('click');
  };

  return (
    <div className="content">
      <p className='is-size-4'>
        Użyj poniższego formularza kontaktowego, zadzwoń do nas, napisz maila
        lub odwiedź nas w siedzibie! Uwielbiamy nawiązywać nowe kontakty.
        Kontakt telefoniczny jest najszybszą drogą na uzyskanie odpowiedzi na
        Twoje pytanie. Pamiętaj, że jesteśmy dla Ciebie i czekam na Twojego
        maila lub telefon!
      </p>
      <div className="is-flex my-6 is-justify-content-center py-6">
        <Image
          src="https://fakeimg.pl/365x75/?text=Logo"
          height={75}
          width={365}
          alt="brand_logo"
        />
        <div
          className={`content is-uppercase ${styles.logo_suffix}`}
          id="dane_kontaktowe"
        >
          meble
          <br />
          metalowe
        </div>
      </div>
      <div className="my-6 columns is-uppercase">
        <div className="column">
          <div className="content">
            <p className="title is size-3 has-text-weight-normal">
              DANE TELEADRESOWE lorem
            </p>
            <p>TELEFON: (00) 999 00 00 / 999 999 999</p>
            <p>FAX: (00) 999 00 00 </p>
          <span id="faq"></span>
            <p>E - MAIL: lorem@lorem.com.pl </p>
            <p>SIEDZIBA: UL. Lorem, ipsum dolor. | 00 - 999 lorem</p>
            <p>SOCIAL MEDIA: </p>
            <p className="content">
              <span className=" mx-2"><Image src="/icons/facebook.svg" width={32} height={32} /></span>
              <span className=" mx-2"><Image src="/icons/instagram.svg" width={32} height={32} /></span>
              <span className=" mx-2"><Image src="/icons/linkedin.svg" width={32} height={32} /></span>
              <span className=" mx-2"><Image src="/icons/youtube.svg" width={32} height={32} /></span>
            </p>
          </div>
        </div>
        <div className="column">
          <div className="content">
            <p className="title is size-3 has-text-weight-normal">
              DANE REJESTROWE:
            </p>
            <p>lorem Przedsiębiorstwo Wielobranżowe</p>
            <p>ul. Lorem 00/21</p>
            <p>00 - 999 Lorem</p>
          </div>
        </div>
      </div>
      
      <div className="columns is-uppercase">
        <div className="column is-6">
          <p className="block mt-4">NAJCZĘŚCIEJ ZADAWANE PYTANIA (FAQ)</p>
        </div>
        <div className="column is-2">
          <Button onClick={handleCustomerService}>ZOBACZ WIĘCEJ</Button>
        </div>
      </div>
      <div className="columns is-uppercase">
        <div className="column is-6">
          <p className="block mt-4">OBSŁUGA KLIENTA I POMOC TECHNICZNA</p>
        </div>
        <div className="column is-2">
          <Button onClick={handleCustomerService}>ZOBACZ WIĘCEJ</Button>
        </div>
      </div>
      <div className="columns is-uppercase">
        <div className="column is-6">
          <p className="block mt-4">MALOW – PRODUCENT MEBLI METALOWYCH</p>
        </div>
        <div className="column is-2">
          <Button onClick={() => {router.push('https://google.com')}}>ZOBACZ WIĘCEJ</Button>
        </div>
      </div>
      <div className="is-flex is-flex-direction-column my-6 pt-6">
        <p className="title is size-3 has-text-weight-normal">
          ZNAJDŹ NAS NA MAPIE!
        </p>
        <div className="mx-auto">
        <MapComponent />
        </div>
      </div>
    </div>
  );
}

export default KontaktTemplate;
