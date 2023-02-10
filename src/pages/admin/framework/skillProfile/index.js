import React, {useState} from "react";
import styles from './style.module.css'
import {Button} from "ui";
import {SkillItem} from "components";
import Down from 'assets/images/down.png'
import Edit from 'assets/images/edit_2.png'

export const AdminSkillProfile = () => {
    let [data] = useState([
        {
            color: '#39A430',
            skill_count: 3
        },
        {
            color: '#F48B50',
            skill_count: 4
        },
        {
            color: '#C7493E',
            skill_count: 1
        },
        {
            color: '#F4BE50',
            skill_count: 2
        },
        {
            color: '#F48B50',
            skill_count: 4
        },
        {
            color: '#39A430',
            skill_count: 3
        },
        {
            color: '#39A430',
            skill_count: 3
        },
        {
            color: '#F48B50',
            skill_count: 4
        },
        {
            color: '#C7493E',
            skill_count: 1
        },
        {
            color: '#F4BE50',
            skill_count: 2
        },
        {
            color: '#F48B50',
            skill_count: 4
        },
        {
            color: '#39A430',
            skill_count: 3
        },
    ])

    let _renderSkill = () => {
        return data.map((item, index) => {
            return(
                <SkillItem key={index} color={item.color} skill_count={item.skill_count}/>
            )
        })
    }

    return (
        <div className={styles.container}>
            <div className={styles.header_wrap}>
                <div className={styles.header__min_cont}>
                    <div className={styles.title_cont}>
                        <p className={styles.title}>Senior UI Developer</p>
                        <img src={Down} className={styles.down_img} alt={'Down'}/>
                    </div>
                    <Button
                        text={'Add Skill +'}
                        style={{
                            paddingLeft: 82,
                            paddingRight: 82,
                            fontWeight: 600,
                            fontSize: 14,
                            color: '#FFFFFF',
                        }}
                    />
                </div>
                <div className={styles.des_cont}>
                    <p className={styles.min_title}>Change Position</p>
                    <img src={Edit} className={styles.edit_img} alt={'Edit'}/>
                </div>
            </div>
            <div className={styles.body_wrap}>
            <div className={styles.body_cont}>
                <div className={styles.titles_cont}>
                    <div className={styles.titles_min_cont}>
                        <p className={styles.titles}>Skill</p>
                    </div>
                    <div className={styles.titles_min_cont}>
                        <p className={styles.titles}>Description</p>
                    </div>
                    <div className={styles.titles_min_cont}>
                        <p className={styles.titles}>Proficiency</p>
                    </div>
                </div>
                {_renderSkill()}
            </div>

            </div>
        </div>
    )
}
