import React, {useEffect, useState} from 'react';
import HelpLinks from './HelpLinks';
import styles from './Summary.module.css';
import CartService from "../../../services/CartService";
import axiosWithAuth from "../../../axios-config";

function Summary({isDisabled, handleBasketButton, id, handleRefresh}) {

  const [cart, setCart] = useState()

  useEffect(() => {
    getCart(id)
  }, [id, handleRefresh]);

  async function getCart(id) {
    if (id !== undefined && CartService.getAnonymousUserId() !== undefined) {
      const parameter = {params: {uuid: id, anonymousOwnerId: CartService.getAnonymousUserId()}}
      await axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/cart', parameter)
        .then((newCartResult) => {
          if (newCartResult.status === 200) {
            setCart(newCartResult.data.data)
          }
        })
    }
  }

  const generateRows = (products) => {
    return products?.map((item, index) => {
      return (
        <tr className='is-uppercase' key={index}>
          <td className={`has-text-white px-2 ${styles.td}`}>{item.name}</td>
          <td className='has-text-white px-2'>{item.quantity}</td>
          <td className='has-text-white px-2'>{item.nettPrice}</td>
          <td className='has-text-white px-2'>{
            Number(item.quantity) * Number(item.nettPrice)}</td>
        </tr>
      )
    })
  }

  return (
    <div>
      <p className="is-uppercase mt-3">wybrany koszyk: {cart?.name}</p>
      <div className="has-text-white">
        <div className={`my-3 ${styles.infobox}`}>
          <div className="is-uppercase is-size-4 px-3 py-3">
            twoje zamowienie
          </div>
          <table className={`mx-1 ${styles.summary_table}`}>
            <tbody>
            <tr className='is-uppercase'>
              <td className={`has-text-white px-2 ${styles.td} has-text-weight-bold`}>pozycja</td>
              <td className='has-text-white px-2 has-text-weight-bold'>szt.</td>
              <td className='has-text-white px-2 has-text-weight-bold'>cena</td>
              <td className='has-text-white px-2 has-text-weight-bold'>suma</td>
            </tr>
            {generateRows(cart?.products)}
            </tbody>
          </table>
          <div className="is-flex is-justify-content-space-between mx-3 my-3">
            <p className=' is-uppercase'>dostawa</p>
            <p style={{width: '180px'}}>{cart?.shipping}</p>
          </div>
          <hr className={styles.hr}/>
          <div className="is-flex is-justify-content-space-between">
            <p className="is-uppercase px-4 mt-1">
              wartość produktów:
            </p>
            <p className="pr-4 mt-1 is-uppercase has-text-weight-bold">
              {`${cart?.sum} zł netto`}
            </p>
          </div>
          <p className="pr-4 is-uppercase has-text-right">
            {`${cart?.sumVat} zł brutto`}
          </p>
          <div className="is-flex is-justify-content-space-between py-3">
            <p className="pl-4 is-uppercase has-text-left">
              VAT (23%)
            </p>
            <p className="pr-4 is-uppercase has-text-right">
              {`${cart?.vat} zł brutto`}
            </p>
          </div>
          {/* <p className="is-uppercase px-4 py-5 has-text-centered is-clickable">
              masz kupon rabatowy?
            </p> */}
        </div>
        <button
          className={`button is-danger is-uppercase is-size-5 mt-3 ${styles.summary_button}`}
          onClick={handleBasketButton}
          disabled={isDisabled}
        >
          przejdź dalej
        </button>
        <HelpLinks/>
      </div>
    </div>
  );
}

export default Summary;
