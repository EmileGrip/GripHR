import React, {useState} from "react";
import Modal from 'react-modal';

import styles from './style.module.css';
import {Button, Input} from "ui";
import Close from 'assets/images/close.png'
import Right from "../../assets/images/right-.png";

export const RoleModal = (props) => {
    let [data] = useState([
        {
            name: 'Suggested Role 1'
        },
        {
            name: 'Suggested Role 2'
        },
        {
            name: 'Suggested Role 3'
        },
        {
            name: 'Suggested Role 4'
        },
        {
            name: 'Suggested Role 5'
        },
        {
            name: 'Suggested Role 6'
        },
    ])
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    let _renderJob = () => {
        return data.map((item) => {
            return(
                <div key={item.name} className={styles.job_item_cont}>
                    <p className={styles.job_name}>{item.name}</p>
                </div>
            )
        })
    }

    return (
        <Modal
            isOpen={props.modalIsOpen}
            onRequestClose={props.closeModal}
            style={customStyles}
        >
            <div className={styles.container}>
                <div className={styles.close_cont}>
                    <img src={Close} className={styles.close_img} alt={'Close'}
                         onClick={props.closeModal}
                    />
                </div>
                <p className={styles.title}>Add Role</p>
                <div className={styles.form_cont}>
                    <p className={styles.input_title}>Role Name</p>
                    <Input
                        style={{
                            marginTop: 12,
                            backgroundColor: '#F2F2F2',
                            opacity: 0.9,
                            borderRadius: 10,
                            height: 45,
                            borderWidth: 0,
                            width: '80%'
                        }}
                    />
                    <p className={styles.input_title} style={{marginTop: 30}}>Department</p>
                    <Input
                        style={{
                            marginTop: 12,
                            backgroundColor: '#F2F2F2',
                            opacity: 0.9,
                            borderRadius: 10,
                            height: 45,
                            borderWidth: 0,
                            width: '80%'
                        }}
                    />
                    <p className={styles.input_title} style={{marginTop: 30}}>Suggested Job</p>
                    <div className={styles.job_cont}>
                        {_renderJob()}
                    </div>
                    <div className={styles.btn_cont}>
                        <Button
                            text={'Continue'}
                            img={Right}
                            click={() => {
                               props.next()
                            }}
                            style={{
                                fontSize: 14,
                                paddingLeft: 27,
                                paddingRight: 27,
                                marginTop: 7,
                                marginBottom: 7
                            }}
                        />
                        <p className={styles.btn_description}>Next: Departments</p>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
