import React from 'react';

function PersonalCollection({ setIsDisabled, setShipping }) {
  return (
    <div id="second-content">
      <div className="content">
        <div className="is-size-4 my-3">
          ODBIÓR OSOBISTY Z NASZEGO MAGAZYNU W WARSZAWIE
        </div>

        <p className="has-text-weight-semibold">
          W ciągu 24 godzin skontaktujemy się z Tobą w celu omówienia szczegółów
          i dostępności. W kolejnym kroku zostaw adres e - mail i telefon w
          kolejnym kroku.
        </p>
        <div className="level my-6 is-uppercase">
          <span className="level-left is-size-5 has-text-weight-bold">
            0 zł
          </span>
          <span className="level-rigth">
            <button
              className="button is-primary"
              onClick={() => {
                setIsDisabled(false);
                setShipping("ODBIÓR OSOBISTY (O ZŁ)")
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

export default PersonalCollection;
