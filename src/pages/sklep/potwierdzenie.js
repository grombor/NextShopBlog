import {useState} from 'react';
import styles from '../../components/templates/KoszykTemplate.module.css';
import Layout from '../../components/templates/Layout';

function Dostawa() {
  const [first, setFirst] = useState('dark');
  return (
    <Layout>
      <div className="container">
        <div className="columns my-6">
          <div className="column is-8">
            <div className="is-size-3 mt-6 mb-5">
              DZIĘKUJEMY ZA ZAKUPY W SKLEPIE lorem!
            </div>
            <div className="box has-text-centered">
              <div className="is-size-4 my-4">
                NA TWÓJ ADRES E-MAIL WYSŁANO POWIADOMIENIE
              </div>
              <p className="my-3">
                Na twój adres e - mail została wysłana wiadomość z
                potwierdzeniem transakcji. Skontaktujemy się z Tobą w ciągu
                najbliższych 24 godzin.
              </p>
              <p className="my-3">
                Jeżeli nie masz jeszcze konta, to doskonały moment, aby je
                założyć.
              </p>
              <div className="is-flex is-justify-content-space-evenly mb-5 mt-6">
                <button className="button is-primary">ZAŁÓŻ KONTO</button>
                <button className="button is-primary">WRÓĆ DO SKLEPU</button>
              </div>
            </div>

            <div className="is-size-5 mt-6 mb-5">
              W WIADOMOŚCI MAIL LINK DO ZAŁOŻENIA KONTA Z AKTUALNĄ TRANAKCJĄ A W
              RAZIE UŻYTKOWNIKA Z KONTEM POTIWERDZENIE ZAMÓWIENIE
            </div>
          </div>

          <div className="column is-4">
            {/* <CartDropdown /> */}
            <div className={`my-6 has-text-white`}>
              <div className={`my-5 has-text-white ${styles.infobox}`}>
                <div className="is-uppercase is-size-4 px-4 py-3">
                  podsumowanie
                </div>
                <div className="is-flex is-justify-content-space-between">
                  <p className="is-uppercase px-4 py-3 is-size-7">dostawa</p>
                  <p className="pr-4 py-3 is-size-7">
                    Koszt dostawy uzgodnimy w kolejnym kroku.
                  </p>
                </div>
                <hr className={styles.hr} />
                <div className="is-flex is-justify-content-space-between">
                  <p className="is-uppercase px-4 py-4 is-size-7">
                    wartość produktów
                  </p>
                  <p className="pr-4 pt-3 is-size-5 is-uppercase has-text-weight-bold">
                    29 004.00 zł netto
                  </p>
                </div>
                <p className="pr-4 is-size-6 is-uppercase has-text-right">
                  (35 674 zł brutto)
                </p>
                <hr className={styles.hr} />
                <div className="is-flex is-justify-content-space-between">
                  <p className="is-uppercase px-4 pt-3 is-size-7">
                    masz kupon rabatowy?
                  </p>
                </div>
              </div>
              <button
                className={`button is-danger is-uppercase is-size-5 ${styles.button}`}
              >
                przejdź dalej
              </button>
              <p className="has-text-weight-bold mt-6 mb-4 is-underlined">
                <a>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
              </p>
              <p className="has-text-weight-bold is-underlined">
                <a>
                  Mauris laoreet lacus risus, eu commodo diam elementum nec.
                  Integer porttitor, tortor nec condimentum efficitur, lorem
                  risus tristique leo, ut dictum sapien enim eget dui.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dostawa;
