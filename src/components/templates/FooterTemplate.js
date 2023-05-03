import Image from 'next/image';
import styles from './FooterTemplate.module.css';
import {RiHotelLine} from 'react-icons/ri';
import {FaFacebook, FaMobileAlt, FaShoppingBag} from 'react-icons/fa';
import {useRouter} from 'next/router';

const categories = [
  { name: 'MEBLE SOCJALNE - BHP ', link: '/sklep#socjalne' },
  { name: 'MEBLE BIUROWE', link: '/sklep#biurowe' },
  { name: 'MEBLE MEDYCZNE', link: '/sklep#medyczne' },
  { name: 'MEBLE WARSZTATOWE', link: '/sklep#warsztatowe' },
  { name: 'MEBLE SZKOLNE ', link: '/sklep#szkolne' },
];


export default function Footer() {
  const router = useRouter();
  return (
    <div className="container mt-6">
      <footer className="">
        <div className="columns is-uppercase">
          <div className={`column is-8 ${styles.dark}`}>
            <div className="columns px-3 py-6">
              <div className="column">
                <div className="menu">
                  <p className="has-text-weight-medium is-uppercase is-clickable" onClick={() => {router.push('/sklep')}}>
sklep
                  </p>
                </div>
                <ul className="mt-2">
                  {categories.map((cat, index) => (
                    <li key={`cat${index}`}>
                      <a href={cat.link} className={styles.link}>
                        {cat.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="column">
                <div className="menu">
                  <p className="has-text-weight-medium is-clickable" onClick={() => {router.push('/')}}>lorem</p>
                  <ul className="mt-2">
                    <li>
                      <a href="/urzadzimy" className={styles.link}>
                      URZĄDZIMY
                      </a>
                    </li>
                    <li>
                      <a href="/o_nas" className={styles.link}>
                      O NAS
                      </a>
                    </li>
                    <li>
                      <a href="/wiedza" className={styles.link}>
                      WIEDZA
                      </a>
                    </li>
                    <li>
                      <a href="/galeria" className={styles.link}>
                      GALERIA
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="column">
                <div className="menu">
                  <p className="has-text-weight-medium is-clickable" onClick={() => {router.push('/kontakt')}}>KONTAKT</p>
                </div>
                <ul className="mt-2">
                  <li>
                    <a href="/kontakt#dane_kontaktowe" className={styles.link}>
                    DANE KONTAKTOWE 
                    </a>
                  </li>
                  <li>
                    <a href="/kontakt#formularz_kontaktowy" className={styles.link}>
                    FORMULARZ KONTAKTOWY
                    </a>
                  </li>
                  <li>
                    <a href="/kontakt#" className={styles.link}>
                    OSBŁUGA KLIENTA
                    </a>
                  </li>
                  {/* <li>
                    <a href="/kontakt#" className={styles.link}>
                    FAQ
                    </a>
                  </li> */}
                </ul>
              </div>
              <div className="column">
                <div className="menu">
                  <p className="has-text-weight-medium">POMOC</p>
                </div>
                <ul className="mt-2">
                  <li>
                    <a href="/kontakt#faq" className={styles.link}>
                      faq
                    </a>
                  </li>
                  <li>
                    <a href="/kontakt#faq" className={styles.link}>
                      warunki gwarancji
                    </a>
                  </li>
                  <li>
                    <a href="/kontakt#faq" className={styles.link}>
                      warunki dostawy
                    </a>
                  </li>
                  <li>
                    <a href="/kontakt#faq" className={styles.link}>
                      dodatkowe uslugi
                    </a>
                  </li>
                  <li>
                    <a href="/kontakt#formularz_kontaktowy" className={styles.link}>
                      formularz kontaktowy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="is-flex is-flex-direction-column is-align-content-flex-start is-justify-content-center">
              <div className={styles.abes_logo}>
                <a href="https://www.google.com/">
                  <Image
                    src="https://fakeimg.pl/250x50/?text=Logo"
                    height={75}
                    width={365}
                    alt="brand_logo"
                  />
                  <div className="has-text-centered is-uppercase is-size-5">
                    meble metalowe
                  </div>
                </a>
              </div>
              <div className="mt-3">
                <p className="icon-text">
                  <span className="icon mx-3 my-1 pb-3">
                    <FaShoppingBag size={20} />
                  </span>
                  PN - PT 9:00 - 17:00
                </p>
              </div>
              <div>
                <p className="icon-text">
                  <span className="icon mx-3 my-1 pb-3">
                    <FaMobileAlt size={20} />
                  </span>
                  TELEFON: (99) 000991 99 / 000 262 000
                </p>
              </div>
              <div>
                <p className="icon-text">
                  <span className="icon mx-3 my-1 pb-3">
                    <RiHotelLine size={22} />
                  </span>
                  <span>Lorem ipsum dolor sit.&nbsp;| 
                  99 - 999 Lorem</span>
                </p>
              </div>
              <div onClick={()=> window.open("https://www.facebook.com")} style={{cursor:'pointer'}}>
                <p className="icon-text">
                  <span className="icon mx-3 my-1 pb-3">
                    <FaFacebook size={20} />
                  </span>
                  Facebook
                </p>
              </div>
              <div className="has-text-centered mt-3">
                <p>AUTORYZOWANY DYSTRYBUTOR MEBLI</p>
              </div>
              {/* <div className={`mt-2`}>
                <Image
                  src="https://fakeimg.pl/250x50/?text=Logo"
                  height={60}
                  width={120}
                  alt="brand_logo"
                />
              </div> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
