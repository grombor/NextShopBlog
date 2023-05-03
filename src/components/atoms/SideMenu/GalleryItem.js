import MenuButton from './MenuButton';
import {resetServerContext} from "react-beautiful-dnd";
import React from "react";

function GalleryItem({data}) {
  // const [list, setList] = useState(data)
  // const [requestStatus, setRequestStatus] = useState(false)
  //
  // useEffect(() => {
  //   updatedOrder()
  // }, [list])
  //
  // const handleHome = () => {
  //   const element = document.getElementById(`list-parent-${sectionName}`);
  //   element.classList.toggle('is-hidden');
  //   const parent = document.getElementById(`home-button-${sectionName}`);
  //   parent.classList.toggle('is-active');
  // };
  //
  // function mapFunction(section, index) {
  //   return (<a style={{color: section.hidden === true ? "lightgrey" : "hsl(0deg, 0%, 29%)"}}
  //              href={`/cms/panelStrony/sekcje/${section.uuid}`}>
  //     {`${index + 1}. ${section?.headerName}`}
  //   </a>)
  // }
  //
  // async function updatedOrder() {
  //   setRequestStatus(false)
  //   let body = {}
  //   body.pageName = `${sectionName}`
  //   body.sectionsInOrder = (list.map((item) => item.uuid))
  //   await axiosInstance.put(process.env.NEXT_PUBLIC_API_URL + '/api/cms/section-cms/section/order', body)
  //     .then(result => {
  //       if (result.status === 200) {
  //         setRequestStatus(true)
  //       }
  //     })
  // }

  resetServerContext()
  return (
    <div className="menu-list">
      <a href={`/cms/panelStrony/galerie/${data.name}`}>
        <MenuButton angle={null}>{data.header}</MenuButton>
      </a>
    </div>);
}

export default GalleryItem;
