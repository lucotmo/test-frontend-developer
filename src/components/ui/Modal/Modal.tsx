import './Modal.style.css'

type ModalProps = (props: {
  onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement>) => void)
    | undefined;
}) => React.ReactElement

const Modal: ModalProps = ({ onClick }) => {
  return (
    <div className="modalContainer">
      <div className="modal">
        <h2>Datos Enviados</h2>
        <p className="modal__message">Tu información fue enviada con <strong>éxito</strong>, estaremos en contacto contigo</p>
        <button 
          type="button"
          className="modal__button"
          onClick={onClick} 
        >Ok</button>
      </div>
    </div>
  )
}

export default Modal
