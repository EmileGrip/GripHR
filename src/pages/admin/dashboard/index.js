import React, {useState} from "react";
import {Outlet} from "react-router-dom";
import {SideBarAdmin, Header} from "ui";
import styles from './style.module.css'

export const AdminDashboard = () => {
    let [show, setShow] = useState(true)

    let changeShow = () => {
        setShow(!show)
    }

    return (
        <div className={styles.container}>
            {show ?
                <SideBarAdmin />
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
