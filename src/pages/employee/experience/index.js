import React from "react";
import {Outlet} from "react-router-dom";
import styles from './style.module.css'

export const Experience = () => {

    return (
        <div className={styles.container}>
            <Outlet/>
        </div>
    )
}
