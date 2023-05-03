import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import {useEffect, useState} from "react";
import styles from "./DDList.module.css"

function DDList({data, mapFunction, parentListUpdateState, requestStatusFromParent}) {
  /*
  data - dane do generowania list
  mapFunction - funkcja mapująca data na obikety html
  parentListUpdateState - setState przekazany z rodzicam obsługujący aktulizację kolejności na liście
  requestStatusFunction - state pochodzący z rodzica, który zwraca infromację o powodzeniu requesta
   */

  // List danych do generowania listy
  const [positionsOnList, updatePositionsOnList] = useState(data)
  // Lista oczekująca w pamięci na załadowanie, gdy z BE przyjdzie status 200
  const [listWaitingForLoading, setListWaitingForLoading] = useState(data)

  // Gdy request się powiedzie wtedy aktualizujemy widok
  useEffect(() => {
    if (requestStatusFromParent === true) {
      updatePositionsOnList(listWaitingForLoading)
    }
  }, [requestStatusFromParent])

  useEffect(() => {
    setListWaitingForLoading(data)
  }, [data])

  //Gdy elment zostanie podniesiony i uposzczony wtedy aktualizujemy jego pozycję na liście
  function handleOnDragEnd(result) {
    // Aktualizacja pozycji
    let items = Array.from(positionsOnList);
    const [changedSection] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, changedSection)
    // Przesłanie do rodzica informacji o tym, że element został zaktualizowany
    parentListUpdateState(items)
    // Zapisanie aktualnego stau elementów na liście tymaczasowej, zostanie ona załadowana do widoku gdy backend zwróci 200
    setListWaitingForLoading(items)
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="characters">
        {(provided) => (<ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
          {positionsOnList?.map((singlePosition, index) => (
            <Draggable key={`pos-${index}`} draggableId={`pos-${index}`} index={index}>
              {(provided) => (
                <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                  {
                    <table className={styles.tab}>
                      <tbody>
                      <tr key={`img-${index}`}>
                        {mapFunction(singlePosition, index)}
                      </tr>
                      </tbody>
                    </table>
                  }
                </li>)}
            </Draggable>))}
          {/*element umieszczany na miejscu aktualnie podniesionego elementu, żeby cała tabela nie ulegała zmniejszeniu*/}
          {provided.placeholder}
        </ul>)}
      </Droppable>
    </DragDropContext>
  );
}

export default DDList;
