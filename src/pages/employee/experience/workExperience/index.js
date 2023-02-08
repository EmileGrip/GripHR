import React, {useState} from "react";

import styles from './style.module.css'
import {Button} from "ui";
import {WorkExperienceItem, AddJobModal} from "components";

export const WorkExperience = () => {
    let [addJobModalVisible, setAddJobModalVisible] = useState(false)
    let [data] = useState([
        {
            name: 'Marketing Manager',

        },
        {
            name: 'Marketing Manager',

        },
        {
            name: 'Marketing Manager',

        },
        {
            name: 'Marketing Manager',

        },
        {
            name: 'Marketing Manager',

        },
        {
            name: 'Marketing Manager',

        },
    ])

    let _renderWorkExperienceItem = () => {
        return data.map((item, index) => {
            return <WorkExperienceItem key={index} item={item}/>
        })
    }

    return (
        <div className={styles.container}>
            <div className={styles.head_cont}>
                <p className={styles.title}>Work Experience</p>
                <Button
                    text={'Add Job +'}
                    style={{
                        paddingLeft: 20,
                        paddingRight: 20,
                        paddingTop: 7,
                        paddingBottom: 7,
                        fontSize: 14,
                        fontWeight: '600'
                    }}
                    click={() => setAddJobModalVisible(true)}
                />
            </div>
            {_renderWorkExperienceItem()}
            <AddJobModal
                modalIsOpen={addJobModalVisible}
                closeModal={() => setAddJobModalVisible(false)}
            />
        </div>
    )
}
