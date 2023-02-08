import React, {useState} from "react";

import styles from './style.module.css'
import {TreeItem} from "components";

export const Organigram = () => {
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
                <div className={styles.cont_items}>
                    {_renderItem()}
                    <div className={styles.items_two_line}>
                        {_renderItem()}
                        {_renderItem()}
                        {_renderItem()}
                    </div>
                </div>
            </div>

        </div>
    )
}
