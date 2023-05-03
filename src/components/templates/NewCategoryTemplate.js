import React from 'react';
import styles from './NewCategoryTemplate.module.css'

function NewCategoryTemplate() {
  return (
    <div>
      <div className="is-size-4 is-uppercase has-text-weight-semibold">
        dodawanie kategorii
      </div>
      <div className="is-size-4 mb-6 mt-5 is-uppercase">tworzenie nowej kategorii</div>
      <div className="columns is-multiline">
        <div className="column is-full">
          Nazwij kategorię. Pamiętaj, że wprowadzone zmiany są nieodwracalne.
          Przemyśl przed zapisaniem.
        </div>
        <div className="column is-half">
          <input
            type="text"
            className="input"
            placeholder="NAZWA KATEGORII"
          ></input>
        </div>
        <div className="column is-half">
          <input type="text" className="input"></input>
        </div>
        <div className="column is-full">
          Wpisz krótki opis,w którym przekarzesz co jakich produktów można
          spodziewać się w kategorii. (XXX znaków MAX)
        </div>
        <div className="column">
          <input type="text" className="input"></input>
        </div>
        <div className="column is-full">
          Prześlij plik, który ma zostać bannerem kategorii. Preferowany
          rozmiair i proporcje XX:XX XXXXxXXXX
        </div>
        <div className="column is-full">
          <span className="is-flex">
            <input type="text" className="input"></input>
            <button className="button is-primary ml-5 px-6">PRZEŚLIJ</button>
          </span>
        </div>
        <div className="column is-10">
          <progress className="progress is-medium"></progress>
        </div>
        <div className='column is-one-third is-offset-two-thirds my-6'>
            <button className={`button is-danger is-uppercase ${styles.redbutton}`}>dodaj nową kategorię</button>
        </div>
      </div>
    </div>
  );
}

export default NewCategoryTemplate;
