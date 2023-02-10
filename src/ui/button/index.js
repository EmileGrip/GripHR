import styles from './style.module.css'

export const Button = (props) => {

    return (
        <button
            className={styles.btn}
            style={props.style}
            onClick={props.click}
        >
            {props.img_left ?
                <img src={props.img_left} alt={'Icon'} className={styles.img} style={props.imgStyle}/>
                :
                null
            }
            {props.text}
            {props.img ?
                <img src={props.img} alt={'Icon'} className={styles.img} style={props.imgStyle}/>
                :
                null
            }
        </button>
    );
}
