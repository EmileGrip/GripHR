import React, {useState} from "react";

import styles from './style.module.css'
import {
    AssignModal,
    RoleModal,
    TemplateModal,
    TreeItem
} from "components";
import Vector from "assets/images/Vector.png";
import Dote from "assets/images/dots.png";
import Edit from "assets/images/edit.png";

export const ManagerFramework = (props) => {
    let [templateModal, setTemplateModal] = useState(false)
    let [roleModal, setRoleModal] = useState(false)
    let [assignModal, setAssignModal] = useState(false)
    let [data] = useState([
        {
            child: [
                {},
                {},
                {},
            ]
        }
    ])

    let _renderItem = () => {
        return data.map((item, index) => {
            return (
                <div>
                    <TreeItem />
                </div>
            )
        })
    }

    return (
        <div className={styles.container}>
            <div className={styles.cont}>
                <div className={styles.icon_cont}>
                    <img src={Vector} alt={'Vector'} className={styles.icon}/>
                    <img src={Dote} alt={'Dote'} className={styles.icon}/>
                    <img src={Edit} alt={'Edit'} className={styles.icon}/>
                </div>
                <div className={styles.cont_items}>
                    {_renderItem()}
                    <div className={styles.items_two_line}>
                        {_renderItem()}
                        {_renderItem()}
                        {_renderItem()}
                    </div>
                </div>
            </div>
            <TemplateModal
                modalIsOpen={templateModal}
                closeModal={() => {
                    setTemplateModal(false)
                }}
            />
            <RoleModal
                modalIsOpen={roleModal}
                closeModal={() => {
                    setRoleModal(false)
                }}
                next={() => {
                    setRoleModal(false)
                    setAssignModal(true)
                }}
            />
            <AssignModal
                modalIsOpen={assignModal}
                closeModal={() => {
                    setAssignModal(false)
                }}
            />
        </div>
    )
}
