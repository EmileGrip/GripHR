import React, {useState} from "react";
import {Outlet} from "react-router-dom";
import {SidebarEmployee, Header} from "ui";
import styles from './style.module.css'

export const EmployeeDashboard = () => {
    let [show, setShow] = useState(true)

    let changeShow = () => {
        setShow(!show)
    }

    return (
        <div className={styles.container}>
            {show ?
                <SidebarEmployee />
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
