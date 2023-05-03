import {FaTrash} from "react-icons/fa";
import ConfirmationWindow from "./ConfirmationWindow";
import {useState} from "react";

function TrashIconWithConfirmation({deletedFunction}) {
  const [isDeletePromptActive, setIsDeletePromptActive] = useState(false);

  return (
    <div>
      <FaTrash
        className="is-size-5 is-clickable mt-2"
        id="trash"
        onClick={() => setIsDeletePromptActive(true)}
      />
      <ConfirmationWindow
        deletedFunction={deletedFunction}
        confirmationPromptIsActive={isDeletePromptActive}
        setConfirmationPromptIsActive={setIsDeletePromptActive}
      />
    </div>
  )

}

export default TrashIconWithConfirmation