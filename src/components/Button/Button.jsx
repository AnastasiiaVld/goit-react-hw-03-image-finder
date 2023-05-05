import s from './Button.module.css'
import PropTypes from 'prop-types'; 

export const Button = ({onClick = null}) => {
    return (
        <div className={s.div}>
            <button type='button'
            onClick={onClick} className={s.btn}>Load more</button>
        </div>
    )
}


Button.propTypes = {
    onClick: PropTypes.func
}
