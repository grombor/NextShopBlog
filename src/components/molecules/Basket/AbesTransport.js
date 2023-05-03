import React from 'react';

function AbesTransport({ setIsDisabled, setShipping }) {
  return (
    <div id="first-content">
      <div className="content">
        <div className="is-size-4 my-3">
          TRANSPORT, WNIESIENIE I PRZYGOTOWANIE DO UŻYTKU
        </div>

        <p className="has-text-weight-semibold">
          Wystarczy, że w kolejnym kroku podasz swój adres, a my skontaktujemy
          się z Tobą w ciągu 24 godzin w celu omówienia szczegółów i
          najbliższego terminu dostawy Twoich mebli. Uwielbiamy nowe znajomości,
          a trudne zadania to nasza specjalność
        </p>
        <p>
          Wybierając tę opcję możesz być spokojny. Przywieziemy, wniesiemy,
          ustawimy i rozpakujemy Twoje metalowe meble dokładnie tam, gdzie
          chcesz!
        </p>
        <p>
          Ta opcja dostawy realizowana jest pojazdem dostawczym o DMC do 3,5 t.
        </p>
        <div className="level my-6 is-uppercase">
          <span className="level-left">
            <div>
              <p className="is-size-4 has-text-weight-bold">DO NEGOCJACJI</p>
            </div>
          </span>
          <span className="level-rigth">
            <button
              className="button is-primary"
              onClick={() => {
                setIsDisabled(false);
                setShipping("TRANSPORT I WNIESIENIE (DO NEGOCJACJI)")
              }}
            >
              WYBIERZ TĘ OPCJĘ DOSTAWY
            </button>
          </span>
        </div>
      </div>
      <div className="pt-6">
        <div className="content">
          <div className="is-size-4 my-3">TRANSPORT NIESTANDARDOWY</div>
          <p className="has-text-weight-semibold">
            Dowozimy meble wszędzie. Uwielbiamy wyprawy za miasto, świetnie
            radzimy sobie w ciasnych centrach miast i w razie potrzeby możemy
            wysłać Twoje meble samochodem ciężarowym z naczepą! Podaj adres
            dostawy i numer telefonu w kolejnym kroku, a my skontaktujemy się z
            Tobą w ciągu 24 godzin w celu omówienia szczegółów.
          </p>
          <p>
            Ta opcja przewiduje wszystkie okoliczności. Zaznacz ją, jeżeli
            chcesz omówić opcje dostawy indywidualnie.
          </p>
          <div className="level my-6 is-uppercase">
            <span className="level-left">
              <div>
                <p className="is-size-4 has-text-weight-bold">DO NEGOCJACJI</p>
              </div>
            </span>
            <span className="level-right">
              <button
                className="button is-primary"
                onClick={() => {
                  setIsDisabled(false);
                  setShipping("TRANSPORT NIESTANDARDOWY (DO NEGOCJACJI)")
                }}
              >
                WYBIERZ TĘ OPCJĘ DOSTAWY
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AbesTransport;
