import React from "react";

import styles from './style.module.css';
import User from 'assets/images/user.png'
import Users from 'assets/images/users.png'
import Eye from 'assets/images/eye.png'
import OrganigramAvatar from 'assets/images/organigramAvatar.png'

export const TreeItem = (props) => {


    return (
        <div className={styles.container}>
            <div className={styles.avatar}>
                <img src={OrganigramAvatar} alt={'OrganigramAvatar'} className={styles.img_avatar}/>
            </div>
            <div className={styles.cont}>
                <p className={styles.title}>Empty Role</p>
                <p className={styles.description}>Empty Role</p>
                <p className={styles.description}>Empty Role</p>
            </div>
            <div className={styles.footer_cont}>
                <div className={styles.count_cont}>
                    <img src={User} alt={'user'} className={styles.user}/>
                    <p className={styles.count}>2</p>
                </div>
                <div className={styles.count_cont}>
                    <img src={Users} alt={'user'} className={styles.user}/>
                    <p className={styles.count}>2</p>
                </div>
                <img src={Eye} alt={'eye'} className={styles.eye}/>
            </div>
        </div>
    );
}
