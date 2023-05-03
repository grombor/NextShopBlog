//  
// import { useRouter } from 'next/router';
// import React, { useState } from 'react';
// import EditIcons from './EditIcons';

// function GalleryTable({ data, label }) {
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
//     router.push(`/cms/panelStrony/galerie/${id}`);
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
//         {Array.from(data).map((gallery, index) => {
//           return (
//             <tr className="ml-5" key={`tr-${index}`}>
//               <td className="is-clickable" key={gallery.name}>
//                 <div className="is-flex is-justify-content-space-between is-align-items-center">
//                   <p className='is-uppercase'>{gallery.name}</p>
//                   <div className="my-2">
//                     <EditIcons
//                       remove={true}
//                       handleRemove={() => handleRemove(gallery.name)}
//                       edit={true}
//                       handleEdit={() => handleEditIcon(gallery.name)}
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

// export default GalleryTable;

import {useRouter} from 'next/router';
import React, {useState} from 'react';
import EditIcons from './EditIcons';
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';
import {Button} from '../atoms/Button';

function GalleryTable({ data, label }) {
  const router = useRouter();
  const [categories, setCategories] = useState(data);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleRemove = (id) => {
    categories?.map((cat) => {
      if (cat.name === id) {
        const newArray = categories.filter((obj) => obj.name !== id);
        setCategories(newArray);
      }
    });
  };

  const handleEditIcon = (id) => {
    router.push(`/cms/panelStrony/galerie/${id}`);
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
        <Droppable droppableId="categories">
          {(provided) => (
            <tbody {...provided.droppableProps} ref={provided.innerRef}>
              {categories.map((category, index) => {
                return (
                  <Draggable
                    key={category.name}
                    draggableId={category.name}
                    index={index}
                  >
                    {(provided) => (
                      <tr
                        className="ml-5"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <td className="is-clickable" key={`td-${category.name}`}>
                          <div className="is-flex is-justify-content-space-between is-align-items-center">
                            <p className="is-uppercase">{category.name}</p>
                            <div className="my-2">
                              <EditIcons
                                remove={true}
                                handleRemove={() => handleRemove(category.name)}
                                edit={true}
                                handleEdit={() => handleEditIcon(category.name)}
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
      <div className='has-text-centered'>
        <Button type='danger' onClick={() => console.log(JSON.stringify(categories))}>Zapisz</Button>
      </div>
    </DragDropContext>
  );
}

export default GalleryTable;
