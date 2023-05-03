import styles from './ProductTemplate.module.css';
import ProductHeader from '../molecules/ProductHeader';
import ColorsPalette from '../molecules/ColorsPalette';
import ProductTabs from '../molecules/Tabs/ProductTabs';
import ProductSlider from '../molecules/Slider/ProductSlider';
import ProducentComponent from '../molecules/ProducentComponent';
import {FaMinusCircle, FaPlusCircle} from 'react-icons/fa';
import Lorrybox from '../molecules/Lorrybox';
import {useState} from 'react';
import {useRouter} from 'next/router';
import CartService from "../../services/CartService";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosWithAuth from "../../axios-config";

const Product = ({productData}) => {
  const router = useRouter();
  const [itemQuantity, setItemQuantity] = useState(1);
  const [bodyColor, setBodyColor] = useState("RAL7035");
  const [doorColor, setDoorColor] = useState("RAL7035");

  async function addToCart() {
    let body = {}
    body.anonymousOwnerId = CartService.getAnonymousUserId()
    body.productName = productData.name
    body.bodyColor = bodyColor
    body.doorColor = doorColor
    body.productsNumber = Number(itemQuantity)

    await axiosWithAuth.put(process.env.NEXT_PUBLIC_API_URL + '/api/cart/product-in-cart/add', body)
      .then(res => {
        if (res.status === 200)
          toast.success(`Produkt ${productData.name.toUpperCase()} dodano do koszyka`, {
            position: toast.POSITION.TOP_RIGHT
          });
      })

    // let body = {}
    // body.pageName = `${sectionName}`
    // body.sectionsInOrder = (list.map((item) => item.uuid))
    // await axiosInstance.put(process.env.NEXT_PUBLIC_API_URL + '/api/cms/section-cms/section/order', body)
    //   .then(result => {
    //     if (result.status === 200) {
    //       setRequestStatus(true)
    //     }
    //   })
  }

  return (
    <div>
      <div className="ml-5 mt-2 is-size-6 is-uppercase">
        {/*{productData?.breadcrumb.map((part, index) => <span> {part}{index !== productData?.breadcrumb.length - 1 ? " / " : ""}</span>)}*/}
      </div>
      <div className="columns my-6">
        <div className={`column is-8 is-desktop ${styles.box}`}>
          <ProductHeader header={productData?.name}/>
          <div className="has-text-centered">
            <ProductSlider images={productData?.images}/>
          </div>
        </div>
        <div className={`column is-4 is-desktop ${styles.box}`}>
          <ProducentComponent
            data={'PRODUCENT MEBLI METALOWYCH MALOW GRUPA LITPOL'}
          />
          <div className="columns is-multiline is-mobile is-size-7">
            {Object.entries(productData.params).map(([key, value], index) =>
              <div className={`column is-6 is-uppercase ${styles.column}`} key={`main-param-${key}-${index}`}>
                <b>{key}</b>: {value}
              </div>
            )}
          </div>
          <div className={styles.infobox}>
            <div className="is-flex is-justify-content-space-between has-text-white py-3">
              <p className="is-size-5 is-uppercase mx-3 has-text-weight-light">
                cena
              </p>
              <div className="mx-3">
                <div className="is-size-5 has-text-weight-semibold is-uppercase">
                  {productData?.nettPrice} NETTO
                </div>
                <div className="is-size-6 has-text-weight-light is-uppercase">
                  ({productData?.grossPrice} Brutto)
                </div>
              </div>
            </div>
            <hr className={styles.hr}/>
            <div className="is-flex is-justify-content-space-between has-text-white py-3">
              <p className="is-size-5 is-uppercase mt-1 mx-3 has-text-weight-light is-align-items-center">
                wybierz ilość:
              </p>
              <div className="mx-3 has-text-weight-bold">
                <span className="icon-text">
                  <span className="icon mt-1">
                    <FaMinusCircle
                      className="is-clickable"
                      onClick={() => {
                        if (itemQuantity > 1) {
                          setItemQuantity(itemQuantity - 1);
                        }
                      }}
                    />
                  </span>
                  <input
                    type="text"
                    id="item_quantity"
                    className={`input ${styles.item_quantity}`}
                    defaultValue={itemQuantity}
                  />
                  <span className="icon mt-1">
                    <FaPlusCircle
                      className="is-clickable"
                      onClick={() => {
                        setItemQuantity(itemQuantity + 1);
                      }}
                    />
                  </span>
                </span>
              </div>
            </div>
            <div className="is-flex is-justify-content-space-between has-text-white mb-5 is-size-6">
              <p className="is-uppercase mt-1 mx-3 has-text-weight-light is-align-items-center">
                czas oczekiwania:
              </p>
              <p className="is-uppercase mt-1 mx-3 has-text-weight-light is-align-items-center">
                {productData?.waitingTime}
              </p>
            </div>
            <button
              className={`button is-danger is-uppercase my-5 ${styles.button}`}
              onClick={() => {
                addToCart()
              }}
            >
              dodaj do koszyka
            </button>

            <Lorrybox/>
          </div>
        </div>
      </div>
      <div className="columns is-centered">
        <div className="column is-half">
          <ColorsPalette element="korpus" bodyColor={bodyColor} setBodyColor={setBodyColor}/>
        </div>
        <div className={`column is-half`}>
          <ColorsPalette element="drzwiczek" doorColor={doorColor} setDoorColor={setDoorColor}/>
        </div>
      </div>
      <div className="has-text-centered">
        <div className={`has-text-justified px-2 py-2 ${styles.bordered}`}>
          Jeżeli chcesz dodać kilka tych samych produktów w różnych kolorach,
          dodaj ponownie ten sam wyrób z zmienionym kolorem. W ten sposób
          utworzysz nową pozycję w wybranym koszyku.
        </div>
      </div>
      <div className="my-6">
        <ProductTabs productData={productData}/>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Product;
