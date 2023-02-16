import React from "react";

import styles from './style.module.css'
import ExperienceItem from 'assets/images/experienceItem.png'
import Edit from 'assets/images/edit_2.png'

export const WorkExperienceItem = () => {

    return (
        <div className={styles.container}>
            <div className={styles.img_wrap}>
                <img src={ExperienceItem} alt={'ExperienceItem'} className={styles.experienceItem_img}/>
            </div>
            <div className={styles.cont}>
                <div className={styles.tit_cont}>
                    <p className={styles.title_name}>Marketing Manager</p>
                    <div className={styles.edit_cont}>
                        <p className={styles.edit_text}>Edit</p>
                        <img src={Edit} alt={'edit'} className={styles.edit_img}/>
                    </div>
                </div>
                <div className={styles.des_cont}>
                    <p className={styles.des_text}>Arena - Live Chat Solutions · Full Time</p>
                    <p className={styles.date_text}>abr. 2022 - today · 9 months</p>
                </div>
                <ul className={styles.ul}>
                    <li>In Charge of the Marketing Department •</li>
                    <li>Development of Standard Operating Procedures of the Design & Development Department</li>
                </ul>
                <p className={styles.more}>... Show more</p>
            </div>
        </div>
    )
}
