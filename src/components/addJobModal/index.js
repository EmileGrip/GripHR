import React from "react";
import Modal from 'react-modal';

import styles from './style.module.css';
import Close from 'assets/images/close.png'
import {Button, Input} from "ui";

export const AddJobModal = (props) => {
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
                <p className={styles.title}>Add Job</p>
                <div className={styles.form_cont}>
                    <div className={styles.title_input_cont}>
                        <p className={styles.title_input}>Position</p>
                        <Input
                            placeholder={'Select'}
                            style={{
                                height: 28,
                                maxWidth: 150,
                                fontSize: 10,
                                color: '#1E394C',
                                marginLeft: 46
                            }}
                        />
                    </div>
                    <div className={styles.title_input_cont}>
                        <p className={styles.title_input}>Position</p>
                        <Input
                            placeholder={'Select'}
                            style={{
                                height: 28,
                                maxWidth: 150,
                                fontSize: 10,
                                color: '#1E394C',
                                marginLeft: 46
                            }}
                        />
                    </div>
                    <div className={styles.title_input_cont}>
                        <p className={styles.title_input}>Position</p>
                        <Input
                            placeholder={'Select'}
                            style={{
                                height: 28,
                                maxWidth: 150,
                                fontSize: 10,
                                color: '#1E394C',
                                marginLeft: 46
                            }}
                        />
                    </div>
                    <div className={styles.title_input_cont}>
                        <p className={styles.title_input}>Position</p>
                        <Input
                            placeholder={'Select'}
                            style={{
                                height: 28,
                                maxWidth: 150,
                                fontSize: 10,
                                color: '#1E394C',
                                marginLeft: 46
                            }}
                        />
                    </div>
                </div>
                <p className={styles.description_text}>Description</p>
                <textarea rows="5" cols="33" className={styles.textAr} placeholder={'Type here'}/>
                <div className={styles.btn_cont}>
                    <Button
                        text={'Finish'}
                        style={{
                            paddingRight: 50,
                            paddingLeft: 50,
                            paddingTop: 7,
                            paddingBottom: 7
                        }}
                    />
                    <Button
                        text={'Cancel'}
                        style={{
                            paddingRight: 50,
                            paddingLeft: 50,
                            paddingTop: 7,
                            paddingBottom: 7,
                            backgroundColor: '#fff',
                            color: '#1E394C',
                            borderWidth: 1,
                            borderColor: '#1E394C',
                            marginLeft: 30,
                        }}
                    />
                </div>
            </div>
        </Modal>
    );
}
