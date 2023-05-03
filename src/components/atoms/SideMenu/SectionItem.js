import MenuButton from './MenuButton';
import {resetServerContext} from "react-beautiful-dnd";
import React, {useEffect, useState} from "react";
import DDList from "../DDList";
import {FaPlusCircle} from "react-icons/fa";
import axiosWithAuth from "../../../axios-config";


function SectionItem({data, sectionName}) {
  const [list, setList] = useState(data)
  const [requestStatus, setRequestStatus] = useState(false)

  useEffect(() => {
    updatedOrder()
  }, [list])

  const handleHome = () => {
    const element = document.getElementById(`list-parent-${sectionName}`);
    element.classList.toggle('is-hidden');
    const parent = document.getElementById(`home-button-${sectionName}`);
    parent.classList.toggle('is-active');
  };

  function mapFunction(section, index) {
    return (<a style={{color: section.hidden === true ? "lightgrey" : "hsl(0deg, 0%, 29%)"}}
               href={`/cms/panelStrony/sekcje/${section.uuid}`}>
      {`${index + 1}. ${section?.headerName}`}
    </a>)
  }

  async function updatedOrder() {
    setRequestStatus(false)
    let body = {}
    body.pageName = `${sectionName}`
    body.sectionsInOrder = (list.map((item) => item.uuid))
    await axiosWithAuth.put(process.env.NEXT_PUBLIC_API_URL + '/api/cms/section-cms/section/order', body)
      .then(result => {
        if (result.status === 200) {
          setRequestStatus(true)
        }
      })
  }

  resetServerContext()
  return (<div>
    <ul className="menu-list">
      <li>
        <a onClick={handleHome} id={`home-button-${sectionName}`} className="is-uppercase">
          <MenuButton>{sectionName.replaceAll("_", " ")}</MenuButton>
        </a>
      </li>
      <li className="is-hidden" id={`list-parent-${sectionName}`}>
        <DDList data={data} mapFunction={mapFunction} parentListUpdateState={setList} requestStatusFromParent={requestStatus}></DDList>
        <a href={`/cms/panelStrony/sekcje/nowa?target=${sectionName}`}>
          <span className="icon-text mr-3"><FaPlusCircle/></span>
          DODAJ
        </a>
      </li>
    </ul>
  </div>);
}

export default SectionItem;
