import React, {useState} from "react";
import {Outlet} from "react-router-dom";
import {SideBarManager, Header} from "ui";
import styles from './style.module.css'

export const ManagerDashboard = () => {
    let [show, setShow] = useState(true)

    let changeShow = () => {
        setShow(!show)
    }

    return (
        <div className={styles.container}>
            {show ?
                <SideBarManager />
                :
                null
            }
            <div className={styles.outlet}>
                {show ?
                    <Header/>
                    :
                    null
                }
                <div className={styles.scroll}>
                    <Outlet context={changeShow}/>
                </div>
            </div>
        </div>
    )
}
