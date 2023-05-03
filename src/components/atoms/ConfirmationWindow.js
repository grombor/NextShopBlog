import {Button} from "./Button";

function ConfirmationWindow({deletedFunction, confirmationPromptIsActive, setConfirmationPromptIsActive}) {
  return (
    <div className={confirmationPromptIsActive ? `modal is-active` : "modal"}>
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className='is-uppercase is-size-4 px-4 py-5 my-6 has-background-primary has-text-white'>
          <p>
            <strong className='has-text-danger'>Uwaga!</strong> zapisanie zmian spowoduje nieodwracalne
            konsekwencje.
          </p>
          <p>
            usuniętych pozycji nie da się przywrócić. sprawdź wprowadzone
            zmiany przed zapisem.
          </p>
          <div className="is-flex is-justify-content-space-evenly">
            <Button type="danger" onClick={() =>{
              setConfirmationPromptIsActive(false)
              deletedFunction()
            }}>
              usuń i zapisz
            </Button>
            <Button
              type='danger'
              other='light'
              onClick={()=>{setConfirmationPromptIsActive(false)}}
            >
              przerwij usuwanie
            </Button>
          </div>
        </div>

      </div>
      <button
        type={"button"}
        className="modal-close is-large"
        aria-label="close"
        onClick={()=>{setConfirmationPromptIsActive(false)}}
      ></button>
    </div>
  );
}

export default ConfirmationWindow;