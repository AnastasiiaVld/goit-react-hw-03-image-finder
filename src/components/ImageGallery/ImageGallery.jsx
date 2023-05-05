import s from './ImageGallery.module.css'
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem'
import PropTypes from 'prop-types';


export const ImageGallery = ({ pictures, openModal}) => {

    return (
        <ul className={s.gallery}> 
            {pictures.map(picture => <ImageGalleryItem picture={picture} openModal={openModal}  key={picture.id}/>
            )}
        </ul>
    )
}

ImageGallery.propTypes = {
    openModal: PropTypes.func,
    pictures: PropTypes.array,
}
