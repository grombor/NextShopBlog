// import { useRouter } from 'next/router';
// import React, { useState } from 'react'
// import { FaPlusCircle } from 'react-icons/fa';
// import EditIcons from './EditIcons';

// function CategoryTable({ data, label }) {
//     const router = useRouter()
//     const [categories, setCategories] = useState(data);
//     const [isDisabled, setIsDisabled] = useState(true)

//     const handleRemove = (id) => {
//       categories?.map((cat) => {
//         if (cat.name === id) {
//           const newArray = categories.filter(obj => obj.name !== id);
//           setCategories(newArray)
//         }
//       })
//     }

//     const handleEditIcon = (id) => {
//         router.push(`/cms/panelStrony/podkategorie/${id}`)
//     }

//   const handleAdd = () => {
//     const newName = document.getElementById('addMe').value;
//     const newParam = {name: newName}
//     const newArray = [...categories, newParam]
//     setCategories(newArray)
//     document.getElementById('addMe').value = ''
//   }
//   return (
//     <table className="table is-bordered is-hoverable is-fullwidth">
//     <thead>
//       <tr>
//         <th>
//           <p className="is-uppercase py-2">{label}</p>
//         </th>
//       </tr>
//     </thead>
//     <tbody>
//       {categories.map((cat, index) => {
//         return (
//           <tr className="ml-5" key={`tr-${index}`}>
//             <td className="is-clickable" key={cat.uuid}>
//               <div className="is-flex is-justify-content-space-between is-align-items-center">
//                 <div className="is-uppercase">
//                 {cat.name}
//                 </div>
//                 <div className="my-2">
//                   <EditIcons
//                   remove={true}
//                   handleRemove={() => handleRemove(cat.name)}
//                   edit={true}
//                   handleEdit={() => handleEditIcon(cat.name)}/>
//                 </div>
//               </div>
//             </td>
//           </tr>
//         );
//       })}
//     </tbody>
//   </table>
//   )
// }

// export default CategoryTable

import {useRouter} from 'next/router';
import React, {useState} from 'react';
import EditIcons from './EditIcons';
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';
import {Button} from '../atoms/Button';

function CategoryTable({ data, label }) {
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
    router.push(`/cms/panelStrony/kategorie/${id}`);
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
              {categories.map((cat, index) => {
                return (
                  <Draggable
                    key={cat.uuid}
                    draggableId={cat.uuid}
                    index={index}
                  >
                    {(provided) => (
                      <tr
                        className="ml-5"
                        key={`tr-${index}`}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <td className="is-clickable">
                          <div className="is-flex is-justify-content-space-between is-align-items-center">
                            <div className="is-uppercase" onClick={() => router.push(`/cms/panelStrony/podkategorie/?category=${cat.name}`)}
                            >{cat.name}
                            </div>
                            <div className="my-2">
                              <EditIcons
                                remove={true}
                                handleRemove={() => handleRemove(cat.name)}
                                edit={true}
                                handleEdit={() => handleEditIcon(cat.name)}
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

export default CategoryTable;
