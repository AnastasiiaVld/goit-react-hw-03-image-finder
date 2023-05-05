import s from './Modal.module.css'
import PropTypes from 'prop-types';



export const Modal = ({ closeModal, largeImage }) =>  {

  const handleClose = () => (
    window.addEventListener("keydown", handelCloseByEscape)
  )

  const handelCloseByEscape = (e) => {
     if(e.code === "Escape") closeModal()
  }

  handleClose()
  
  return (

    
    <div className={s.overlay} onClick={closeModal} >
      <div className={s.modal}>
        <img src={largeImage} alt={largeImage} />
      </div>
    </div>
  )
}


Modal.propTypes = {
  closeModal: PropTypes.func,
  largeImage: PropTypes.string,
}
