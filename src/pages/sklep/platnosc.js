import {useState} from 'react';
import Layout from '../../components/templates/Layout';
import Summary from '../../components/molecules/Basket/Summary';
import {useRouter} from 'next/router';
import BasketTopPanel from '../../components/molecules/Basket/BasketTopPanel';
import {Button} from '../../components/atoms/Button';

function Dostawa() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [isFirstActive, setIsFirstActive] = useState(false);
  const [isSecondActive, setIsSecondActive] = useState(false);
  const [isThirdActive, setIsThirdActive] = useState(false);
  const handleClickFirstComp = () => {
    setIsDisabled(false);
    setIsFirstActive(true);
    setIsSecondActive(false);
    setIsThirdActive(false);
  };

  const handleClickSecondComp = () => {
    setIsDisabled(false);
    setIsFirstActive(false);
    setIsSecondActive(true);
    setIsThirdActive(false);
  };
  const handleClickThirdComp = () => {
    setIsDisabled(false);
    setIsFirstActive(false);
    setIsSecondActive(false);
    setIsThirdActive(true);
  };
  const router = useRouter();
  const handleBasketButton = () => {
    router.push(`/sklep/finalizacja?id=${router.query.id}`);
  };
  const borderStyle = {border: '1px solid #082333'};
  return (
    <Layout>
      <BasketTopPanel wallet={true}/>
      <div className="container">
        <div className="columns my-6">
          <div className="column is-8">
            <div
              className="is-uppercase title mt-6 py-4 px-4"
              style={isFirstActive ? borderStyle : null}
            >
              płatność gotówką
              <div className="is-uppercase subtitle pt-4">opis</div>
              <div className="has-text-right">
                <Button className="button" onClick={handleClickFirstComp}>
                  wybierz tę opcję płatności
                </Button>
              </div>
            </div>

            <div
              className="is-uppercase title mt-6 py-4 px-4"
              style={isSecondActive ? borderStyle : null}
            >
              płatność przelewem
              <div className="is-uppercase subtitle pt-4">opis</div>
              <div className="has-text-right">
                <Button className="button" onClick={handleClickSecondComp}>
                  wybierz tę opcję płatności
                </Button>
              </div>
            </div>

            <div
              className="is-uppercase title mt-6 py-4 px-4"
              style={isThirdActive ? borderStyle : null}
            >
              płatność kartą lub blik
              <div className="is-uppercase subtitle pt-4">opis</div>
              <div className="has-text-right">
                <Button className="button" onClick={handleClickThirdComp}>
                  wybierz tę opcję płatności
                </Button>
              </div>
            </div>
          </div>

          <div className="column is-4">
            <Summary
              isDisabled={isDisabled}
              setIsDisabled={setIsDisabled}
              handleBasketButton={handleBasketButton}
              id={router.query.id}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dostawa;
