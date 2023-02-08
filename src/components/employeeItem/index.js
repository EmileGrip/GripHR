import React from "react";

import styles from './style.module.css';
import Avatar from 'assets/images/avatar.png'
import {Button} from "ui";

export const EmployeeItem = (props) => {

    return (
        <div className={styles.container}>
            <img src={Avatar} alt={'Avatar'} className={styles.avatar}/>
            <p className={styles.name}>Jason Ruly</p>
            <p className={styles.description}>UI/UX Designer</p>
            <Button
                text={'View Profile'}
                click={props.openModal}
                style={{
                    marginTop: 24,
                    paddingRight: 30,
                    paddingBottom: 8,
                    paddingTop: 8,
                    paddingLeft: 30,
                    fontSize: 14,
                    fontWeight: '600'
                }}
            />
        </div>
    );
}
