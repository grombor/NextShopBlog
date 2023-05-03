import styles from '../templates/KontaktTemplate.module.css';
import {FaMinusCircle, FaPlusCircle, FaTrash} from 'react-icons/fa';

import {useEffect, useState} from "react";
import Image from "next/image";

function CartCard({data, handleDelete, handleRefres, loading, closed}) {
  const [product, setProduct] = useState(data)

  useEffect(() => {
    setProduct(data)
  }, [data]);

  async function handleChangeNumber(isIncrement) {
    handleRefres(product.uuid, isIncrement)
  }


  return (
    <div className="card mb-4">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image">
              <Image
                src={product?.image}
                width='128px'
                height='128px'
              />
            </figure>
          </div>
          <div className="media-content">
            <div className="columns">
              <div className="column is-6">
                <p className="subtitle is-4 mb-0 is-uppercase">{product?.name}</p>
                <p className={styles.description}>
                  {product?.description}
                </p>
                <p className={`my-2 ${styles.description}`}>
                  {styles.dimmension}
                </p>
                <p className="subtitle has-text-weight-bold mt-5">{`${product?.nettPrice} ZŁ NETTO`}</p>
              </div>
              <div className="column is-offset-1">
                <div className="my-3">
                  <p className={`is-uppercase ${styles.description}`}>
                    kolor drzwi: {`${product?.bodyColor}`}
                  </p>
                  <p className={`is-uppercase ${styles.description}`}>
                    kolor korpusu: {`${product?.doorColor}`}
                  </p>
                </div>
                <div>
                  <div className={styles.multiplier}>
                    <div className="card">
                      <div className="card-header">
                        {!closed ? (<span className={`card-header-title ${!loading ? 'is-clickable' : ''}`}
                                          onClick={() => handleChangeNumber(true)}>
                          {<span className="icon">
                            <FaPlusCircle/>
                          </span>}
                        </span>) : null}
                        <span
                          className={`card-header-title has-background-primary has-text-white is-size-5 ${styles.digit}`}>
                          <span className="pl-1">{`${closed ? "ZAMÓWIONE:" : ""} ${product.quantity}`}</span>
                        </span>
                        {!closed ? (<span className={`card-header-title ${!loading ? 'is-clickable' : ''}`}
                                          onClick={() => handleChangeNumber(false)}>
                          <span className="icon">
                            <FaMinusCircle/>
                          </span>
                        </span>) : null}
                        {!closed ? (<span className={`card-header-title ${!loading ? 'is-clickable' : ''}`}>
                          <span className="icon mx-auto is-medium" onClick={handleDelete}>
                            <FaTrash/>
                          </span>
                        </span>) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
