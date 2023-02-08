import React from "react";
import Modal from 'react-modal';

import styles from './style.module.css';
import Close from 'assets/images/close.png'
import Search from "../../assets/images/search.png";
import {Button, Input} from "../../ui";

export const AssignModal = (props) => {
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
                <p className={styles.title}>Assign Role</p>
                <div className={styles.form_cont}>
                    <p className={styles.input_title}>Existing Employee</p>
                    <div className={styles.input_cont}>
                        <img src={Search} alt={'Search'} className={styles.icon}/>
                        <input className={styles.input} placeholder={'Search Employee'}/>
                    </div>
                    <p className={styles.input_title} style={{marginTop: 60}}>Create New Employee</p>
                    <div className={styles.upload_form_cont}>
                        <div className={styles.upload_left_cont}>
                            <div className={styles.form_item_cont}>
                                <p className={styles.form_item_name}>First Name</p>
                                <Input
                                    style={{
                                        fontSize: 10,
                                        color: '#1E394C',
                                        height: 28,
                                        width: 150
                                    }}
                                />
                            </div>
                            <div className={styles.form_item_cont}>
                                <p className={styles.form_item_name}>Last Name</p>
                                <Input
                                    style={{
                                        fontSize: 10,
                                        color: '#1E394C',
                                        height: 28,
                                        width: 150
                                    }}
                                />
                            </div>
                            <div className={styles.form_item_cont}>
                                <p className={styles.form_item_name}>Join Date</p>
                                <Input
                                    style={{
                                        fontSize: 10,
                                        color: '#1E394C',
                                        height: 28,
                                        width: 150
                                    }}
                                />
                            </div>
                        </div>
                        <div className={styles.upload_right_cont}>
                            <div className={styles.form_item_cont}>
                                <p className={styles.form_item_name}>Emil</p>
                                <Input
                                    style={{
                                        fontSize: 10,
                                        color: '#1E394C',
                                        height: 28,
                                        width: 150
                                    }}
                                />
                            </div>
                            <div className={styles.form_item_cont}>
                                <p className={styles.form_item_name}>Phone</p>
                                <Input
                                    style={{
                                        fontSize: 10,
                                        color: '#1E394C',
                                        height: 28,
                                        width: 150
                                    }}
                                />
                            </div>
                            <div className={styles.form_item_cont}>
                                <p className={styles.form_item_name}>Location</p>
                                <Input
                                    style={{
                                        fontSize: 10,
                                        color: '#1E394C',
                                        height: 28,
                                        width: 150
                                    }}
                                />
                            </div>

                        </div>
                    </div>
                    <Button
                        text={'Finish'}
                        style={{
                            paddingRight: 50,
                            paddingLeft: 50,
                            fontSize: 14,
                            fontWeight: 600
                        }}
                    />
                </div>
            </div>
        </Modal>
    );
}
