import React, {useEffect, useState} from 'react';
import Layout from '../../components/templates/Layout';
import {Header} from '../../components/atoms/Header';
import CartCard from '../../components/molecules/cartCard';
import {useRouter} from 'next/router';
import axiosWithAuth from "../../axios-config";
import Summary from "../../components/molecules/Basket/Summary";
import CartService from "../../services/CartService";

function Koszyk() {
  const router = useRouter();
  const [cart, setCart] = useState()
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    getCart(router.query.id);
  }, [router]);

  useEffect(() => {
    setCurson()
  }, [loading]);

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

  async function updateNumber(productUuid, isIncrement) {
    setLoading(true)
    const body = {productInCartId: productUuid, isIncrement: isIncrement}
    await axiosWithAuth.put(process.env.NEXT_PUBLIC_API_URL + '/api/cart/number', body)
      .then(async (response) => {
        setLoading(false)
        if (response.status === 200) {
          getCart(router.query.id)
        }
      })
  }

  async function deletedProduct(id) {
    setLoading(true)
    await axiosWithAuth.put(process.env.NEXT_PUBLIC_API_URL + '/api/cart/product-in-cart/' + id)
      .then((response) => {
        setLoading(false)
        if (response.status === 200) {
          getCart(router.query.id)
        }
      })
  }

  function generatedDocumentButton() {
    setLoading(true)
    axiosWithAuth({
      url: process.env.NEXT_PUBLIC_API_URL + '/api/cart/offer',
      method: 'GET',
      responseType: 'blob',
      params: {cartId: router.query.id, anonymousOwnerId: CartService.getAnonymousUserId()}
    })
      .then(response => {
        console.log(response)
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', offerFileName()); // Nazwij pobierany plik
        document.body.appendChild(link);
        link.click();
      })
    setLoading(false)
  }

  const offerFileName = () => {
    const today = new Date();
    const day = today.getDate().toString().padStart(2, '0');
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const year = today.getFullYear().toString();
    const currentDate = `${day}-${month}-${year}`;

    return `ABES_${cart.name}_${currentDate}.pdf`
  }

  const handleBasketButton = () => {
    router.push(`/sklep/dostawa/?id=${router.query.id}`)
  }

  const setCurson = () => {
    const childElements = document.querySelectorAll(".my-component > *");
    childElements.forEach((child) => {
      console.log(childElements)
      child.style.cursor = loading ? "wait !important" : "default"
    });
  }

  return (

    <Layout>
      <div className="container my-6" style={{cursor: loading ? "wait" : "default"}}>
        <div className="py-6">
          <Header size="3" redText="kos" blackText="zyk"/>
          <div className="columns">
            <div className="column is-8">
              {cart?.products?.map((item, index) => {
                return (
                  <CartCard data={item} key={`basket-${index}`}
                            handleDelete={() => deletedProduct(item.uuid)}
                            handleRefres={updateNumber}
                            loading={loading} closed={cart?.isClosed}/>
                )
              })}
              <div className='has-text-right'>
                <button className='button is-primary is-uppercase'
                        onClick={generatedDocumentButton}>wygeneruj ofertę
                </button>
              </div>
            </div>
            <Summary isDisabled={cart?.isClosed} handleBasketButton={handleBasketButton} id={router.query.id}
                     handleRefresh={cart}/>
          </div>
        </div>
      </div>
    </Layout>

  );
}

export default Koszyk;
