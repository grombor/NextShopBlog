import Image from 'next/image';
import {useRouter} from 'next/router';

function ProductTabs({ productData }) {

  const router = useRouter();

  function hideAll() {
    const others = document
      .getElementById('product-description')
      .querySelectorAll(':scope div');
    Array.from(others).map((div) => {
      div.classList.add('is-hidden');
    });
  }

  const handleDesc = () => {
    const element = document.getElementById('desc');
    hideAll();
    element.classList.remove('is-hidden');
  };
  const handleEquip = () => {
    const element = document.getElementById('equip');
    hideAll();
    element.classList.remove('is-hidden');
  };
  const handleFeatures = () => {
    const element = document.getElementById('features');
    hideAll();
    element.classList.remove('is-hidden');
  };
  const handleCertificates = () => {
    const element = document.getElementById('certficates');
    hideAll();
    element.classList.remove('is-hidden');
  };
  const handleContact = () => {
    const element = document.getElementById('contact');
    hideAll();
    element.classList.remove('is-hidden');
  };

  return (
    <div>
      <div className="tabs is-centered">
        <ul>
          <li>
            <a>
              <span className="is-uppercase" onClick={handleDesc}>
                opis
              </span>
            </a>
          </li>
          <li>
            <a>
              <span className="is-uppercase" onClick={handleFeatures}>
                parametry techniczne
              </span>
            </a>
          </li>
          <li>
            <a>
              <span className="is-uppercase" onClick={handleEquip}>
                wyposażenie dodatkowe
              </span>
            </a>
          </li>
          <li>
            <a>
              <span className="is-uppercase" onClick={handleCertificates}>
                certyfikaty i atesty
              </span>
            </a>
          </li>
          <li>
            <a>
              {/* <span className="is-uppercase" onClick={handleContact}>
                kontakt
              </span> */}
              <span className="is-uppercase" onClick={() => {window.open("/kontakt")}}>
                kontakt
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div className="content mx-6" id="product-description">
        <div id="desc">
          <h3 className="title is-size-5 is-uppercase">{productData.name}</h3>
          <p>{productData?.description}</p>
        </div>
        <div className="is-hidden" id="equip">
          <h3 className="title is-size-5">Wyposażenie dodatkowe</h3>
          <p className="has-text-justified mx-0 px-0">
            <table className="table is-striped is-bordered is-uppercase">
              {Object.entries(productData?.additionalEquipment).map(
                ([key, value]) => {
                  return (
                    <tr>
                      <td><a href={value} className='has-text-link is-underlined'>{key}</a></td>
                    </tr>
                  );
                }
              )}
            </table>
          </p>
        </div>
        <div className="is-hidden" id="features">
          <h3 className="title is-size-5">parametry techniczne</h3>
          <p className="has-text-justified mx-0 px-0">
            <table className="table is-striped is-bordered is-uppercase">
              {Object.entries(productData?.technicalParameters).map(
                ([key, value]) => {
                    return (
                      <tr>
                        <td><b>{key}</b></td>
                        <td>{value}</td>
                        </tr>
                    );
                }
              )}
            </table>
          </p>
        </div>
        <div className="is-hidden" id="certficates">
          <h3 className="title is-size-5">certyfikaty i atesty</h3>
          <table className="table is-striped is-bordered is-uppercase">
          {productData?.certificates.map(
                (cert) => {
                  return (
                    <tr>
                      <td className='is-flex is-align-items-center'>
                          <Image src={cert?.image} width='96' height='96' />
                        <b>{cert?.description}</b>
                        </td>
                    </tr>
                  );
                }
              )}
          </table>
        </div>
        <div className="is-hidden" id="contact">
          {/* <h3 className="title is-size-5">Zadaj pytanie</h3> */}
          {/* <p className="has-text-justified mx-0 px-0">{productData?.contact}</p> */}
        </div>
      </div>
    </div>
  );
}

export default ProductTabs;
