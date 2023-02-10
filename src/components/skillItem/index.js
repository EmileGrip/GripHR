import React from "react";

import styles from './style.module.css'
import Dots from 'assets/images/dots_2.png'
export const  SkillItem =(props)=>{
    return (
        <div className={styles.container}>
            <div className={styles.min_cont}>
                <img src={Dots} alt={'Dots'} className={styles.dots_img}/>
                <p className={styles.name}>Critical Thinking</p>
            </div>
            <div className={styles.min_cont}>
                <p className={styles.description}>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa...
                </p>
            </div>
            <div className={styles.min_cont}>
                <div className={styles.skill_cont}>
                    <div className={styles.skill_item_left}
                         style={props.skill_count - 1 >= 0 ?  {backgroundColor: props.color} : {backgroundColor: '#EAEAEA'}}
                    />
                    <div
                        className={styles.skill_item}
                        style={props.skill_count - 2 >= 0 ?  {backgroundColor: props.color} : {backgroundColor: '#EAEAEA'}}
                    />
                    <div
                        className={styles.skill_item}
                        style={props.skill_count - 3 >= 0 ?  {backgroundColor: props.color} : {backgroundColor: '#EAEAEA'}}
                    />
                    <div
                        className={styles.skill_item_right}
                        style={props.skill_count - 4 >= 0 ?  {backgroundColor: props.color} : {backgroundColor: '#EAEAEA'}}
                    />
                </div>
                <p className={styles.skill_name}>Expert</p>
            </div>
        </div>
    )
}
