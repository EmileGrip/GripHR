import React, {useState} from "react";

import styles from './style.module.css'
import { Button } from "ui";
import { SkillDeveloperItem, SkillModal } from "components";
export const MySkillsStepTwo = () => {
    let [skillOpenModal, setSkillOpenModal] = useState(false)
    let [data] = useState([
        {
            color: '#39A430',
            skill_count: 3,
            status: 'done',
            origin: 'Linkedin'
        },
        {
            color: '#F48B50',
            skill_count: 4,
            status: -1,
            origin: 'Resume'
        },
        {
            color: '#C7493E',
            skill_count: 1,
            status: -2,
            origin: 'Job Position'
        },
        {
            color: '#F4BE50',
            skill_count: 2,
            status: 'done',
            origin: 'Linkedin'
        },
        {
            color: '#F48B50',
            skill_count: 4,
            status: 'done',
            origin: 'Resume'
        },
        {
            color: '#39A430',
            skill_count: 3,
            status: '-3',
            origin: 'Job Position'
        },
    ])

    let _renderSkill = () => {
        return data.map((item, index) => {
            return(
                <SkillDeveloperItem key={index} color={item.color} origin={item.origin} status={item.status} skill_count={item.skill_count}/>
            )
        })
    }

    return (
        <div className={styles.container}>
            <div className={styles.header_cont}>
                <div className={styles.title_cont}>
                    <p className={styles.title}>Initial Setup</p>
                    <p className={styles.title_right}>- Basic Info</p>
                </div>
                <div className={styles.btn_cont}>
                    <button className={styles.btn}>Reupload Resumé</button>
                    <button className={styles.btn}>Reconnect Linkedin</button>
                    <Button
                        text={'Add Skill +'}
                        style={{
                            paddingLeft: 70,
                            paddingRight: 70,
                            paddingTop: 7,
                            paddingBottom: 7
                        }}
                        click={() => setSkillOpenModal(true)}
                    />
                </div>

            </div>
            <p className={styles.title_senior}>Senior UI Developer</p>
            <p className={styles.title_slills}>Skills based on your job, your Linkedin Profile and Resumé</p>
            <div className={styles.body_cont}>
                <div className={styles.titles_cont}>
                    <div className={styles.titles_min_cont}>
                        <p className={styles.titles}>Skill Name</p>
                    </div>
                    <div className={styles.titles_min_cont}>
                        <p className={styles.titles}>Origin</p>
                    </div>
                    <div className={styles.titles_min_cont}>
                        <p className={styles.titles}>Proficiency level</p>
                    </div>
                    <div className={styles.titles_min_cont_left}>
                        <p className={styles.titles}>Status</p>
                    </div>
                </div>
                {_renderSkill()}
            </div>
            <SkillModal
                modalIsOpen={skillOpenModal}
                closeModal={() => setSkillOpenModal(false)}
            />
        </div>
    )
}
