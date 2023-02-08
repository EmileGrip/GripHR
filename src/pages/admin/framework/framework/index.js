import React from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import styles from './style.module.css'

export const AdminFramework = (props) => {
    let changeShow = useOutletContext()

    return (
        <div className={styles.container}>
            <div className={styles.outlet}>
                <Outlet context={changeShow}/>
            </div>
        </div>
    )
}
