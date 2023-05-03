//  
// import { useRouter } from 'next/router';
// import React, { useState } from 'react';
// import EditIcons from './EditIcons';

// function SectionTable({ data, label }) {
//   const router = useRouter();
//   const [categories, setCategories] = useState(data);
//   const [isDisabled, setIsDisabled] = useState(true);

//   const handleRemove = (id) => {
//     categories?.map((cat) => {
//       if (cat.uuid === id) {
//         axios
//           .delete(process.env.NEXT_PUBLIC_API_URL +'/api/cms/section-cms/section/' + id)
//           .then((response) => {
//             if (response.status === 200) {
//               window.location.reload();
//             }
//           })
//           .catch((err) => {
//             console.log(err?.response?.status);
//           });
//       }
//     });
//   };

//   const handleEditIcon = (id) => {
//     router.push(`/cms/panelStrony/sekcje/${id}`);
//   };

//   return (
//     <table className="table is-bordered is-hoverable is-fullwidth">
//       <thead>
//         <tr>
//           <th>
//             <p className="is-uppercase py-2">{label}</p>
//           </th>
//         </tr>
//       </thead>
//       <tbody>
//         {Array.from(data).map((section, index) => {
//           return (
//             <tr className="ml-5" key={`tr-${index}`}>
//               <td className="is-clickable" key={section.uuid}>
//                 <div className="is-flex is-justify-content-space-between is-align-items-center">
//                   <p>{section.headerName}</p>
//                   <div className="my-2">
//                     <EditIcons
//                       remove={true}
//                       handleRemove={() => handleRemove(section.uuid)}
//                       edit={true}
//                       handleEdit={() => handleEditIcon(section.uuid)}
//                     />
//                   </div>
//                 </div>
//               </td>
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// }

// export default SectionTable;

// Oto przykładowy kod z zaimplementowaną biblioteką react-beautiful-dnd, aby umożliwić przeciąganie i upuszczanie elementów <tr> w komponencie SectionTable:

import {useRouter} from 'next/router';
import React, {useState} from 'react';
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';
import {Button} from '../atoms/Button';
import EditIcons from './EditIcons';
import axiosWithAuth from "../../axios-config";

function SectionTable({ data, label }) {
  const router = useRouter();
  const [categories, setCategories] = useState(data);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleRemove = (id) => {
    categories?.map((cat) => {
      if (cat.uuid === id) {
        axiosWithAuth
          .delete(process.env.NEXT_PUBLIC_API_URL +'/api/cms/section-cms/section/' + id)
          .then((response) => {
            if (response.status === 200) {
              window.location.reload();
            }
          })
          .catch((err) => {
            console.log(err?.response?.status);
          });
      }
    });
  };

  const handleEditIcon = (id) => {
    router.push(`/cms/panelStrony/sekcje/${id}`);
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(categories);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setCategories(items);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <table className="table is-bordered is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>
              <p className="is-uppercase py-2">{label}</p>
            </th>
          </tr>
        </thead>
        <Droppable droppableId="sections">
          {(provided) => (
            <tbody {...provided.droppableProps} ref={provided.innerRef}>
              {categories.map((section, index) => {
                return (
                  <Draggable
                    key={section.uuid}
                    draggableId={section.uuid}
                    index={index}
                  >
                    {(provided) => (
                      <tr
                        className="ml-5"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <td className="is-clickable" key={section.uuid}>
                          <div className="is-flex is-justify-content-space-between is-align-items-center">
                            <p>{section.headerName}</p>
                            <div className="my-2">
                              <EditIcons
                                remove={true}
                                handleRemove={() => handleRemove(section.uuid)}
                                edit={true}
                                handleEdit={() => handleEditIcon(section.uuid)}
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </tbody>
          )}
        </Droppable>
      </table>
      <div className="has-text-centered">
        <Button
          type="danger"
          onClick={() => console.log(JSON.stringify(categories))}
        >
          Zapisz
        </Button>
      </div>
    </DragDropContext>
  );
}

export default SectionTable;
