//  
// import { useRouter } from 'next/router';
// import React, { useState } from 'react';
// import EditIcons from './EditIcons';

// function CertificateTable({ data, label }) {
//     console.log(data)
//   const router = useRouter();
//   const [categories, setCategories] = useState(data);
//   const [isDisabled, setIsDisabled] = useState(true);

//   const handleRemove = (id) => {
//     categories?.map((cat) => {
//       if (cat.uuid === id) {
//         axios
//         .delete(process.env.NEXT_PUBLIC_API_URL +'/api/cms/section-cms/section/' + id)
//         .then((response) => {
//           if (response.status === 200) {
//             window.location.reload()
//           }
//         })
//         .catch((err) => {
//           console.log(err?.response?.status);
//         });

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
//         {Array.from(data).map((certyficate, index) => {
//           return (
//             <tr className="ml-5" key={`tr-${index}`}>
//               <td className="is-clickable" key={certyficate.uuid}>
//                 <div className="is-flex is-justify-content-space-between is-align-items-center">
//                   <p className='is-uppercase'>{ certyficate.name }</p>
//                   <div className="my-2">
//                     <EditIcons
//                       remove={true}
//                       handleRemove={() => handleRemove(certyficate.uuid)}
//                       edit={true}
//                       handleEdit={() => handleEditIcon(certyficate.uuid)}
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

// export default CertificateTable;
import {useRouter} from 'next/router';
import React, {useState} from 'react';
import EditIcons from './EditIcons';
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';
import {Button} from '../atoms/Button';

function CertificateTable({ data, label }) {
  console.log(data);
  const router = useRouter();
  const [certificates, setCertificates] = useState(data);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleRemove = (id) => {
    certificates?.map((certificate) => {
      if (certificate.uuid === id) {
        const newArray = certificates.filter((obj) => obj.uuid !== id);
        setCertificates(newArray);
        // axios
        //   .delete(process.env.NEXT_PUBLIC_API_URL +'/api/cms/section-cms/section/' + id)
        //   .then((response) => {
        //     if (response.status === 200) {

        //     }
        //   })
        //   .catch((err) => {
        //     console.log(err?.response?.status);
        //   });
      }
    });
  };

  const handleEditIcon = (id) => {
    router.push(`/cms/panelStrony/certyfikaty/${id}`);
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(certificates);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setCertificates(items);
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
        <Droppable droppableId="certificates">
          {(provided) => (
            <tbody {...provided.droppableProps} ref={provided.innerRef}>
              {certificates.map((certificate, index) => (
                <Draggable
                  key={certificate.uuid}
                  draggableId={certificate.uuid}
                  index={index}
                >
                  {(provided) => (
                    <tr
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      className="ml-5"
                    >
                      <td className="is-clickable">
                        <div className="is-flex is-justify-content-space-between is-align-items-center">
                          <p className="is-uppercase">{certificate.name}</p>
                          <div className="my-2">
                            <EditIcons
                              remove={true}
                              handleRemove={() =>
                                handleRemove(certificate.uuid)
                              }
                              edit={true}
                              handleEdit={() =>
                                handleEditIcon(certificate.uuid)
                              }
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </tbody>
          )}
        </Droppable>
      </table>
      <div className="has-text-centered">
        <Button
          type="danger"
          onClick={() => console.log(JSON.stringify(certificates))}
        >
          Zapisz
        </Button>
      </div>
    </DragDropContext>
  );
}

export default CertificateTable;
