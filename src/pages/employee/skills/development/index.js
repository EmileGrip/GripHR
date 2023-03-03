import React, {useState} from "react";
import * as jsPlumbBrowserUI from "@jsplumb/browser-ui";
import { DotEndpoint } from "@jsplumb/core";
import { FlowchartConnector } from "@jsplumb/connector-flowchart";

import styles from './style.module.css'
import {Button} from "ui";
import Plus from 'assets/images/plus.png'
import Tree from 'assets/images/tree.png'

export const Development = () => {
    let [recommended] = useState([
        {
            status: 'Very high',
            title: 'SAP Manager'
        },
        {
            status: 'Moderate',
            title: 'Product Manager'
        },
        {
            status: 'Low',
            title: 'Ops Manager'
        }
    ])

    let _renderRecommended = () => {
        return recommended.map((item, index) => {
            return(
                <div className={styles.recommended_div} key={index}>
                    <p className={styles.recommended_title}>{item.title}</p>
                    <div className={styles.recommended_status_div}>
                        <p className={styles.recommended_status_title}>Match strength: </p>
                        <p className={styles.recommended_status}>{item.status}</p>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className={styles.container}>
            <div className={styles.head_cont}>
                <p className={styles.title}>Your Career path</p>
                <Button
                    text={'Add Job +'}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 120,
                        height: 35,
                        fontSize: 14,
                        fontWeight: '600'
                    }}

                />
            </div>
            <p className={styles.role_text}>Current Role</p>
            <div className={styles.cont}>
                <img src={Tree} className={styles.tree}/>
              {/*  <div className={styles.role_div}>
                    <div className={styles.role_item_div}>
                        <p className={styles.role_item_text}>Customer Specialist</p>
                    </div>
                    <div className={styles.border_div}/>
                    <div className={styles.add_div}>
                        <img src={Plus} className={styles.plus_icon}/>
                        <p className={styles.add_text}>Add Job</p>
                    </div>
                </div>
                <div className={styles.recommend}>
                    <p className={styles.title_rec}>Recommended For You</p>
                    <div className={styles.recommended}>
                        {_renderRecommended()}
                    </div>
                </div>*/}
            </div>
        </div>
    )
}
