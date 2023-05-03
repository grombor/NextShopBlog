import React, {useEffect, useState} from "react";

import {SpinnerCircularFixed} from "spinners-react";
import EditIcons from "../molecules/EditIcons";
import Layout from "../templates/Layout";
import ProfileLinks from "../molecules/ProfileLinks";
import PanelTemplate from "../templates/PanelStrony/PanelTemplate";
import H1 from "./CMS/H1";
import {Button} from "./Button";
import DDList from "./DDList";
import {useRouter} from "next/router";
import axiosWithAuth from "../../axios-config";

function DistributionUnitList({data, buildSubUnitLink, label, path, parentId}) {

  const router = useRouter();

  const [list, setList] = useState(data);

  const [isActiveEditModal, setIsActiveEditModal] = useState(false);
  const [editId, setEditId] = useState();
  const [editName, setEditName] = useState();

  const [requestOrderStatus, setRequestOrderStatus] = useState(true);
  const [isFirstRender, setIsFirstRender] = useState(true);

// const [isNewItemActive, setIsNewItemActive] = useState(false);

  useEffect(() => {
    if (!isFirstRender) {
      setRequestOrderStatus(false);
      axiosWithAuth.put(process.env.NEXT_PUBLIC_API_URL + '/api/distribution' + (typeof parentId != 'undefined' ? '?parentId=' + parentId : ""), list)
        .then((result) => {
          if (result.status === 200) {
            setRequestOrderStatus(true);
            setIsActiveEditModal(false);
          }
        });
    } else {
      setIsFirstRender(false);
    }
  }, [list]);

  const handleClickEditIcon = (id) => {
    setEditId(id)
    setIsActiveEditModal(true)
  };

  const handleChangeName = (event) => {
    setEditName(event.target.value);
  }

  const handleConfirmChangeName = () => {
    const unitIndex = list.findIndex((unit) => unit.uuid === editId);
    const newList = [...list]; // utworzenie nowej kopii listy
    newList[unitIndex] = {...newList[unitIndex], name: editName}; // aktualizacja nazwy jednostki
    setList(newList);
  }


  const modal = (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title is-uppercase">edytuj nazwę</p>
          <button className="delete" aria-label="close"
                  onClick={() => {
                    setIsActiveEditModal(false)
                  }}></button>
        </header>
        <section className="modal-card-body">
          <input type='text' className='input' placeholder='Podaj nową nazwę' onChange={handleChangeName}/>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success" onClick={handleConfirmChangeName}>
            {!requestOrderStatus ? <SpinnerCircularFixed size={24} thickness={200} speed={120} color="#BC1725"
                                                         secondaryColor="#082333"/> : "Zapisz"}
          </button>
          <button className="button" onClick={() => {
            setIsActiveEditModal(false)
          }}>Anuluj
          </button>
        </footer>
      </div>
    </div>
  )

// const handleAdd = () => {
//   let newArray = [...list, {
//     uuid: "",
//     name: editName
//   }];
//   setList(newArray);
//   setIsNewItemActive(false);
// }

// const newItemModal = (
//   <div className="modal is-active">
//     <div className="modal-background"></div>
//     <div className="modal-card">
//       <header className="modal-card-head">
//         <p className="modal-card-title is-uppercase">edytuj nazwę</p>
//         <button className="delete" aria-label="close" onClick={() => {
//           setIsNewItemActive(false)
//         }}></button>
//       </header>
//       <section className="modal-card-body">
//         <input type='text' className='input' placeholder='Podaj nową nazwę dla rodziny' onChange={handleChangeName}/>
//       </section>
//       <footer className="modal-card-foot">
//         <button className="button is-success" onClick={handleAdd}>Zapisz</button>
//         <button className="button" onClick={() => {
//           setIsNewItemActive(false)
//         }}>Anuluj
//         </button>
//       </footer>
//     </div>
//   </div>
// )

  function mapFunction(cat) {
    return (
      <div>
        <td style={{width: '95%', verticalAlign: 'middle'}}
            onClick={() => buildSubUnitLink != null ? router.push(buildSubUnitLink(cat)) : {}}>
          {cat.name}
        </td>
        <td style={{verticalAlign: 'middle'}}>
          <EditIcons
            remove={true}
            // handleRemove={() => handleRemove(cat.uuid)}
            edit={true}
            handleEdit={() => handleClickEditIcon(cat.uuid)}
          />
        </td>
      </div>
    );
  }

  return (
    <Layout>
      <div className="container">
        <div className="py-4">
          <ProfileLinks isActive="panel"/>
          <PanelTemplate data={list}>
            <H1>Edytuj {label}</H1>
            <p className="mb-6">
              Przeciagnij kafelek, aby ustalić kolejność wyświetlania. Po
              kliknięciu w kafelek przeniesiesz się poziom niżej.
            </p>
            <div className="my-5">
              <Button
                type="danger"
                // onClick={() => {
                //   setIsNewItemActive(true)
                // }}
                isDisabled={true}>
                Stwórz {label}
              </Button>
              {/*{isNewItemActive ? newItemModal : null}*/}
              {isActiveEditModal === true ? modal : null}
            </div>
            <p className='is-uppercase is-size-4 has-text-weight-bold'>{path}</p>
            {!requestOrderStatus
              ?
              <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <SpinnerCircularFixed size={120} thickness={200} speed={120} color="#BC1725" secondaryColor="#082333"/>
              </div>
              :
              <DDList
                data={list}
                mapFunction={mapFunction}
                parentListUpdateState={setList}
                requestStatusFromParent={requestOrderStatus}
              ></DDList>}
          </PanelTemplate>
        </div>
      </div>
    </Layout>
  );
}

export default DistributionUnitList;
