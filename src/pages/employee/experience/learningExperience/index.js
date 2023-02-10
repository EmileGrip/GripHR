import React, {useState} from "react";

import styles from './style.module.css'
import {Button} from "ui";
import {EducationItem, AddEducationModal} from "components";

export const LearningExperience = () => {
    let [visibilityAdd, setVisibilityAdd] = useState(false)
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
    ])

    let _renderEducationItem = () => {
        return data.map((item, index) => {
            return <EducationItem key={index}/>
        })
    }

    return (
        <div className={styles.container}>
            <div className={styles.head_cont}>
                <p className={styles.title}>Education</p>
                <Button
                    text={'Add Education +'}
                    style={{
                        paddingLeft: 20,
                        paddingRight: 20,
                        paddingTop: 7,
                        paddingBottom: 7,
                        fontSize: 14,
                        fontWeight: '600'
                    }}
                    click={() => setVisibilityAdd(true)}
                />
            </div>
            <div className={styles.education_cont}>
                {_renderEducationItem()}
            </div>
            <div className={styles.head_cont}>
                <p className={styles.title}>Courses</p>
                <Button
                    text={'Add Course +'}
                    style={{
                        paddingLeft: 20,
                        paddingRight: 20,
                        paddingTop: 7,
                        paddingBottom: 7,
                        fontSize: 14,
                        fontWeight: '600'
                    }}
                    click={() => setVisibilityAdd(true)}
                />
            </div>
            <div className={styles.education_cont}>
                {_renderEducationItem()}
            </div>
            <AddEducationModal
                modalIsOpen={visibilityAdd}
                onRequestClose={() => {
                    setVisibilityAdd(false)
                }}
                closeModal={() => {
                    setVisibilityAdd(false)
                }}
            />
        </div>
    )
}
