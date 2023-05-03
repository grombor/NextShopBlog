import React, {useState} from 'react';
import CourierCollectionModule from './CourierCollectionModule';

function CourierCollection({ setIsDisabled, setShipping }) {
  const [isFirstModuleChosen, setIsFirstModuleChosen] = useState(false);
  const [isSecondModuleChosen, setIsSecondModuleChosen] = useState(true);
  const handleFirstModuleClick = () => {
    setIsFirstModuleChosen(true);
    setIsSecondModuleChosen(false);
  };
  const handleSecondModuleClick = () => {
    setIsFirstModuleChosen(false);
    setIsSecondModuleChosen(true);
  };
  const borderStyle = isBorder === true ? { border: '1px solid black' } : null;
  const [isBorder, setIsBorder] = useState(borderStyle);
  return (
    <div>
      <div className="content">
        <div className="is-size-4 my-3">DOSTAWA FIRMĄ KURIERSKĄ NA PALECE</div>

        <p className="has-text-weight-semibold">
          Wybierając dostawę kurierem możesz zamówić do 2 mebli na jednej
          palecie. W kolejnym kroku podaj potrzebne dane, a my skontaktujemy się
          z Tobą w ciągu 24 godzin w celu omówienia szczegółów i potwierdzenia
          zamówienia.
        </p>
        <p className="my-5">
          Pamiętaj, że kurier doręczy Ci zamówienie i wróci do swoich
          obowiązków. Nie wniesie Ci mebli po schodach.
        </p>
        <div
          onClick={handleFirstModuleClick}
          style={isFirstModuleChosen ? { border: '1px solid black' } : null}
        >
          <CourierCollectionModule
            price={270}
            text="DOSTAWA ZA POBRANIEM (+ 20 ZŁ, TYLKO GOTÓWKA)"
          />
        </div>

        <div
          onClick={handleSecondModuleClick}
          style={isSecondModuleChosen ? { border: '1px solid black' } : null}
        >
          <CourierCollectionModule
            price={270}
            text="Płatność z góry (karta lub przelew)"
          />
        </div>

        <div className="level my-6 is-uppercase">
          <span className="level-rigth"></span>
          <span className="level-rigth">
            <button
              className="button is-primary"
              onClick={() => {
                setIsDisabled(false);
                setShipping("DOSTAWA NA PALECIE (270 ZŁ)")
              }}
            >
              WYBIERZ TĘ OPCJĘ DOSTAWY
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default CourierCollection;
