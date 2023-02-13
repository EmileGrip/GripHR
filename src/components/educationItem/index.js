import React from "react";

import styles from './style.module.css'
import Edit from 'assets/images/edit_2.png'

export const EducationItem = (props) => {


    return (
        <div className={styles.container}>
            <div className={styles.title_cont}>
                <p className={styles.title_text}>Human Communication</p>
                <div className={styles.edit_cont}>
                    <p className={styles.edit_text}>Edit</p>
                    <img src={Edit} className={styles.edit_img}/>
                </div>
            </div>
            <div className={styles.description_cont}>
                <p className={styles.description_text}>Manchester University</p>
                <p className={styles.description_text_date}>abr. 2012 - oct. 2017</p>
            </div>
            {props.type === 'course' ?
                null
                :
                <p className={styles.status_text}>PHd</p>
            }
        </div>
    );
}
