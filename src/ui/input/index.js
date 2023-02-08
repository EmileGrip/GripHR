import styles from './style.module.css'
export const Input = (props) =>  {

    return (
        <div>
            <input type={props.type}
                   onChange={(e) => props.change(e.target.value)}
                   className={styles.input}
                   style={props.style}
                   placeholder={props.placeholder}
            />
        </div>
    );
}
