import React, {useEffect, useState} from "react";

import styles from './style.module.css'
import Dots from 'assets/images/dots_2.png'
import Done from 'assets/images/done.png'

export const SkillDeveloperItem = (props) => {
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        if (isShown) {

        }
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.min_cont}>
                <img src={Dots} alt={'Dots'} className={styles.dots_img}/>
                <p className={styles.name}>Critical Thinking</p>
            </div>
            <div className={styles.min_cont}>
                <p className={styles.description}>
                    {props.origin}
                </p>
            </div>
            <div className={styles.min_cont}>
                <div className={styles.skill_cont}
                     onMouseEnter={() => setIsShown(true)}
                     onMouseLeave={() => setIsShown(false)}
                >
                    <div className={styles.skill_item_left}
                         style={props.skill_count - 1 >= 0 ? {backgroundColor: props.color} : {backgroundColor: '#EAEAEA'}}
                    />
                    <div
                        className={styles.skill_item}
                        style={props.skill_count - 2 >= 0 ? {backgroundColor: props.color} : {backgroundColor: '#EAEAEA'}}
                    />
                    <div
                        className={styles.skill_item}
                        style={props.skill_count - 3 >= 0 ? {backgroundColor: props.color} : {backgroundColor: '#EAEAEA'}}
                    />
                    <div
                        className={styles.skill_item_right}
                        style={props.skill_count - 4 >= 0 ? {backgroundColor: props.color} : {backgroundColor: '#EAEAEA'}}
                    />
                </div>
                {isShown ?
                    <div className={styles.show_skill}>
                        <p className={styles.show_skill_title}>Proficiency Needed</p>
                        {props.status === 'done' ?
                            <div className={styles.skill_cont}>
                                <div className={styles.skill_item_left}
                                     style={props.skill_count - 1 >= 0 ? {backgroundColor: props.color} : {backgroundColor: '#EAEAEA'}}
                                />
                                <div
                                    className={styles.skill_item}
                                    style={props.skill_count - 2 >= 0 ? {backgroundColor: props.color} : {backgroundColor: '#EAEAEA'}}
                                />
                                <div
                                    className={styles.skill_item}
                                    style={props.skill_count - 3 >= 0 ? {backgroundColor: props.color} : {backgroundColor: '#EAEAEA'}}
                                />
                                <div
                                    className={styles.skill_item_right}
                                    style={props.skill_count - 4 >= 0 ? {backgroundColor: props.color} : {backgroundColor: '#EAEAEA'}}
                                />
                            </div>
                            :
                            <div className={styles.skill_cont}>
                                <div className={styles.skill_item_left}
                                     style={+props.status + 4 >= 0 ? {backgroundColor: props.color} : {backgroundColor: '#EAEAEA'}}
                                />
                                <div
                                    className={styles.skill_item}
                                    style={+props.status + 3 >= 0 ? {backgroundColor: props.color} : {backgroundColor: '#EAEAEA'}}
                                />
                                <div
                                    className={styles.skill_item}
                                    style={+props.status + 2 >= 0 ? {backgroundColor: props.color} : {backgroundColor: '#EAEAEA'}}
                                />
                                <div
                                    className={styles.skill_item_right}
                                    style={+props.status + 1 >= 0 ? {backgroundColor: props.color} : {backgroundColor: '#EAEAEA'}}
                                />
                            </div>
                        }
                    </div>
                    :
                    null
                }
                <p className={styles.skill_name}>Expert</p>
            </div>
            <div className={styles.min_cont} style={{justifyContent: 'end'}}>
                {props.status === 'done' ?
                    <img src={Done} alt={'Done'} className={styles.done_img}/>
                    :
                    <p className={styles.status_text}>{props.status}</p>
                }
            </div>
        </div>
    )
}
