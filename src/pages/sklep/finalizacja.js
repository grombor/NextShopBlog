import Layout from '../../components/templates/Layout';
import BasketTopPanel from '../../components/molecules/Basket/BasketTopPanel';
import H2 from '../../components/atoms/CMS/H2';
import Summary from '../../components/molecules/Basket/Summary';
import {useRouter} from "next/router";

function Dostawa({data}) {
  const router = useRouter();
  const border = { border: '1px solid black' };
  return (
    <Layout>
      <BasketTopPanel check={true} />
      <div className="container">
        <div className="columns my-6">
          <div className="column is-8 my-3">
            <H2>dziękujemy za zakupy w sklepie lorem</H2>

            <div className="has-text-centered px-3 py-3" style={border}>
              <H2>
                na twój adres e-mail wysłano potwierdzenie zamówienia nr <br/> <b>{router.query.id}</b>
              </H2>

              <p>
                Na twój adres e - mail została wysłana wiadomość z
                potwierdzeniem transakcji. Nie wpłacaj pieniędzy przed
                potwierdzeniem zamówienia. W ciągu 24 godzin skontaktujemy sie z
                Tobą.
              </p>

              {/*<p>*/}
              {/*  Do twojej listy transakcji została dodana pozycja{' '}*/}
              {/*  <a href="#" className="is-uppercase is-underlined">*/}
              {/*    koszyk 2 (nr 1883)*/}
              {/*  </a>*/}
              {/*</p>*/}

              {/*<div className="is-flex my-5 is-justify-content-space-evenly">*/}
              {/*  <Button>zobacz listę transakcji</Button>*/}
              {/*  <Button>wróć do sklepu</Button>*/}
              {/*</div>*/}
            </div>

            {/*<div className="my-6 py-3 px-3" style={border}>*/}
            {/*  <div className="is-flex is-justify-content-space-between is-align-items-flex-start">*/}
            {/*    <H2>twoje zamówienie: koszyk 2 nr 1883</H2>*/}
            {/*    <Button>wygeneruj pdf</Button>*/}
            {/*  </div>*/}
            {/*  <table className='table is-uppercase'>*/}
            {/*    <thead>*/}
            {/*    <tr>*/}
            {/*        <th style={{width: '100%'}}>nazwa</th>*/}
            {/*        <th>szt.</th>*/}
            {/*        <th>cena</th>*/}
            {/*        <th>suma</th>*/}
            {/*      </tr>*/}
            {/*    </thead>*/}
            {/*    <tbody>*/}
            {/*      <tr>*/}
            {/*        <td>swm 201</td>*/}
            {/*        <td>1</td>*/}
            {/*        <td>1999</td>*/}
            {/*        <td>1999</td>*/}
            {/*      </tr>*/}
            {/*      <tr>*/}
            {/*        <td>VAT (23%)</td>*/}
            {/*        <td></td>*/}
            {/*        <td>230</td>*/}
            {/*        <td>1230</td>*/}
            {/*      </tr>*/}
            {/*      <tr>*/}
            {/*        <td>dostawa kurier na palecie</td>*/}
            {/*        <td></td>*/}
            {/*        <td>270</td>*/}
            {/*        <td>1230</td>*/}
            {/*      </tr>*/}
            {/*      <tr>*/}
            {/*        <td>wartość zamówienia</td>*/}
            {/*        <td></td>*/}
            {/*        <td></td>*/}
            {/*        <td>1600</td>*/}
            {/*      </tr>*/}
            {/*      <tr>*/}
            {/*        <td>sposób płatności</td>*/}
            {/*        <td colSpan='3'>przelew bankowy</td>*/}
            {/*      </tr>*/}
            {/*      <tr>*/}
            {/*        <td>preferowany kontakt</td>*/}
            {/*        <td colSpan='3'>telefoniczny</td>*/}
            {/*      </tr>*/}
            {/*        /!*<tr className='is-size-7 has-text-grey'>*!/*/}
            {/*        /!*  <td className='pt-4'>koszyk 2 nr 1883</td>*!/*/}
            {/*        /!*</tr>*!/*/}
            {/*    </tbody>*/}
            {/*  </table>*/}
            {/*</div>*/}
          </div>

          <div className="column is-4">
            <Summary id={router.query.id}/>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dostawa;
