import React from "react";

import styles from './style.module.css';
import Logo from 'assets/images/logo.png'
import HeaderIcons from 'assets/images/header_icon.png'
import {Button} from "ui";

export const HeaderOrganigram = (props) => {


    return (
        <div className={styles.continer}>
            <div className={styles.cont}>
                <img src={Logo} alt={'logo'} className={styles.logo_img}/>
                <p className={styles.title}>Organigram</p>
            </div>
            <div className={styles.icons_cont}>

                <Button
                    text={'Finish'}
                    style={{
                        paddingTop: 7,
                        paddingBottom: 7,
                        paddingLeft: 54,
                        paddingRight: 54
                    }}
                />
            </div>
        </div>
    );
}
