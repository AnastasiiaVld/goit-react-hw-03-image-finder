import { ThreeDots } from 'react-loader-spinner';
import s from "./Loader.module.css"


export const Loader = () => {
    return (
        <div className={s.loader}>
            <ThreeDots 
            height="80" 
            width="80" 
            radius="9"
            color="#4d7ea9" 
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
 />
        </div>
    )
}

