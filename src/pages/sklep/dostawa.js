import {useState} from 'react';
import Shipmentbox from '../../components/molecules/Shipmentbox';
import Layout from '../../components/templates/Layout';
import Summary from '../../components/molecules/Basket/Summary';
import PersonalCollection from '../../components/molecules/Basket/PersonalCollection';
import CourierCollection from '../../components/molecules/Basket/CourierCollection';
import AbesTransport from '../../components/molecules/Basket/AbesTransport';
import {FaPallet, FaStoreAlt, FaTruck} from "react-icons/fa";
import {useRouter} from 'next/router';
import BasketTopPanel from '../../components/molecules/Basket/BasketTopPanel';
import axiosWithAuth from "../../axios-config";

function Dostawa() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [isAbesTransportHidden, setIsAbesTransportHidden] = useState(false);
  const [isPersonalCollectionHidden, setIsPersonalCollectionHidden] =
    useState(true);
  const [isCourierCollectionHidden, setIsCourierCollectionHidden] =
    useState(true);
  const [shipping, setShipping] = useState()
  const handleClickFirstComp = () => {
    setIsPersonalCollectionHidden(true);
    setIsCourierCollectionHidden(true);
    setIsAbesTransportHidden(false);
  };
  const handleClickSecondComp = () => {
    setIsPersonalCollectionHidden(false);
    setIsCourierCollectionHidden(true);
    setIsAbesTransportHidden(true);
  };
  const handleClickThirdComp = () => {
    setIsCourierCollectionHidden(false);
    setIsPersonalCollectionHidden(true);
    setIsAbesTransportHidden(true);
  };
  const router = useRouter();

  const handleBasketButton = async () => {
    const body = {cartId: router.query.id, shipping: shipping}
    await axiosWithAuth.put(process.env.NEXT_PUBLIC_API_URL + '/api/cart/shipping', body)
      .then(async (response) => {
        if (response.status === 200) {
          router.push(`/sklep/adres?id=${router.query.id}`)
        }
      })
  }

  return (
    <Layout>
      <BasketTopPanel truck={true}/>
      <div className="container">
        <div className="columns my-6">
          <div className="column is-8">
            <div className="is-flex is-align-items-center is-justify-content-space-around my-6">
              <span onClick={() => handleClickFirstComp()}>
                <Shipmentbox
                  context="Kompleksowa usługa z wniesieniem i montażem. Skontaktujemy się, aby omówić szczegóły i zrobić wszystko za Ciebie."
                  isDarkTheme={!isAbesTransportHidden}
                  header="dostawa lorem"
                  key="shipbox1"
                >
                  <FaTruck className='is-size-1'/>
                </Shipmentbox>
              </span>
              <span onClick={() => handleClickSecondComp()}>
                <Shipmentbox
                  context="Jesteśmy otwarci na nowe znajomości. Jeżeli masz własny transport możesz odebrać swoje zamówienie z naszego magazynu."
                  isDarkTheme={!isPersonalCollectionHidden}
                  key="shipbox2"
                  header="odbiór osobisty"
                >
                  <FaStoreAlt className='is-size-1'/>
                  </Shipmentbox>
              </span>
              <span onClick={() => handleClickThirdComp()}>
                <Shipmentbox
                  context="Transport na palecie pozwala na przewiezienie dwóch mebli jednocześnie. Wysyłka realizowana jest kurierem."
                  isDarkTheme={!isCourierCollectionHidden}
                  key="shipbox3"
                  header="kurier na palecie"
                >
                  <FaPallet className='is-size-1'/>
                  </Shipmentbox>
              </span>
            </div>

            {!isAbesTransportHidden ? <AbesTransport setIsDisabled={setIsDisabled} setShipping={setShipping}/> : null}
            {!isPersonalCollectionHidden ? <PersonalCollection setIsDisabled={setIsDisabled} setShipping={setShipping}/> : null}
            {!isCourierCollectionHidden ? <CourierCollection setIsDisabled={setIsDisabled} setShipping={setShipping}/> : null}
          </div>

          <div className="column is-4">
            <Summary isDisabled={isDisabled} setIsDisabled={setIsDisabled} handleBasketButton={handleBasketButton}
                     id={router.query.id}/>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dostawa;
