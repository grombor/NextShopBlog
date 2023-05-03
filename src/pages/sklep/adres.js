import Layout from '../../components/templates/Layout';
import H2 from '../../components/atoms/CMS/H2';
import Summary from '../../components/molecules/Basket/Summary';
import BasketTopPanel from '../../components/molecules/Basket/BasketTopPanel';
import {useRouter} from 'next/router';

function Dostawa() {
  const router = useRouter();
  const handleBasketButton = () => {
router.push(`/sklep/platnosc?id=${router.query.id}`)
  }
  return (
    <Layout>
      <BasketTopPanel user={true} />
      <div className="container">
        <div className="columns my-6">
          <div className="column is-8">
            <div className="is-size-3 mt-6 mb-5">
              DANE DO DOSTAWY I KONTAKTU
            </div>

            <H2>ADRES DOSTAWY</H2>
            <div className="columns is-multiline is-uppercase">
              <div className="column is-half">
                <div className="field is-horizontal">
                  <div className="field-label">
                    <label className="label">imię* </label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <p className="control">
                        <input className="input" type="text" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="column is-half">
                <div className="field is-horizontal">
                  <div className="field-label">
                    <label className="label">nazwisko* </label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <p className="control">
                        <input className="input" type="text" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="column is-full">
                <div className="field is-horizontal">
                  <div className="field-label">
                    <label className="label">nazwa ulicy* </label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <p className="control">
                        <input className="input" type="text" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="column is-half">
                <div className="field is-horizontal">
                  <div className="field-label">
                    <label className="label">numer budynku* </label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <p className="control">
                        <input className="input" type="text" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="column is-half">
                <div className="field is-horizontal">
                  <div className="field-label">
                    <label className="label">numer lokalu </label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <p className="control">
                        <input className="input" type="text" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="column is-half">
                <div className="field is-horizontal">
                  <div className="field-label">
                    <label className="label">miasto* </label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <p className="control">
                        <input className="input" type="text" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="column is-half">
                <div className="field is-horizontal">
                  <div className="field-label">
                    <label className="label">kod pocztowy* </label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <p className="control">
                        <input className="input" type="text" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <H2>Kontakt</H2>
            <div className="columns is-horizontal is-uppercase">
              <div className="column is-half">
                <div className="field is-horizontal">
                  <div className="field-label">
                    <label className="label">telefon* </label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <p className="control">
                        <input className="input" type="text" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="column is-half">
                <div className="field is-horizontal">
                  <div className="field-label">
                    <label className="label">e-mail* </label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <p className="control">
                        <input className="input" type="email" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="control is-uppercase">
              <div className="columns my-3">
                <div className="column is-half">
                  <p className="my-3">preferowany rodzaj kontaktu</p>

                  <div className="field is-horizontal">
                    <div className="field-label">
                      <label className="checkbox">telefon </label>
                    </div>
                    <div className="field-body">
                      <div className="field">
                        <p className="control">
                          <input type="checkbox" />
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="field is-horizontal">
                    <div className="field-label">
                      <label className="checkbox">email </label>
                    </div>
                    <div className="field-body">
                      <div className="field">
                        <p className="control">
                          <input type="checkbox" />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <H2>dane do faktury</H2>
            <div className="field is-horizontal is-uppercase my-6">
              <div className="field-label has-text-left">
                <label className="checkbox">
                  dane do faktury takie same jak adres dostawy
                </label>
              </div>
                  <input type="checkbox" />
            </div>

            <div className='columns is-multiline is-uppercase'>

            <div className="column is-half">
                <div className="field is-horizontal">
                  <div className="field-label">
                    <label className="label">nazwa firmy* </label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <p className="control">
                        <input className="input" type="text" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            

            <div className="column is-half">
                <div className="field is-horizontal">
                  <div className="field-label">
                    <label className="label">nip* </label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <p className="control">
                        <input className="input" type="text" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="column is-full">
                <div className="field is-horizontal">
                  <div className="field-label">
                    <label className="label">nazwa ulicy* </label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <p className="control">
                        <input className="input" type="text" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="column is-half">
                <div className="field is-horizontal">
                  <div className="field-label">
                    <label className="label">numer budynku* </label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <p className="control">
                        <input className="input" type="text" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="column is-half">
                <div className="field is-horizontal">
                  <div className="field-label">
                    <label className="label">numer lokalu </label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <p className="control">
                        <input className="input" type="text" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="column is-half">
                <div className="field is-horizontal">
                  <div className="field-label">
                    <label className="label">miasto* </label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <p className="control">
                        <input className="input" type="text" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="column is-half">
                <div className="field is-horizontal">
                  <div className="field-label">
                    <label className="label">kod pocztowy* </label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <p className="control">
                        <input className="input" type="text" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="column is-half">
                <div className="field is-horizontal">
                  <div className="field-label">
                    <label className="label">telefon* </label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <p className="control">
                        <input className="input" type="text" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="column is-half">
                <div className="field is-horizontal">
                  <div className="field-label">
                    <label className="label">e-mail* </label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <p className="control">
                        <input className="input" type="email" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              </div>
<p className='my-3'>Dane osobowe będą przetwarzane przez lorem - ADRES w celu realizacji zamówienia. Przysługuje Ci m.in. prawo dostępu do Twoich danych oraz ich  poprawiania. Dodatkowe informacje uzyskasz na stronie lorem OBSŁUGA KLIENTA
</p>

<div className='is-uppercase'>
<label className="checkbox">
  <input type="checkbox" />
  Akceptuję <a href="#">regulamin sklepu</a> i zapoznałem sie z jego treścią.
</label>

<label className="checkbox">
  <input type="checkbox" />
  Zgadzam się na przetwarzanie moich danych osobowych w celu wykonania zamówienia przez firmę lorem.
</label>

</div>


          </div>

          <div className="column is-4">
            <Summary handleBasketButton={handleBasketButton} id={router.query.id}/>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dostawa;
