import s from "./ImageGalleryItem.module.css"
import PropTypes from 'prop-types';


export const ImageGalleryItem = ({ picture, openModal}) => {
    return (
        <li
           
            className={s.item}
            onClick={openModal}
            id={picture.id}
        >
        <img className={s.img} src={picture.webformatURL} alt="" />
    </li>
    )
}

ImageGalleryItem.propTypes = {
    openModal: PropTypes.func,
    pictures: PropTypes.array,
}