import React from "react";
import Modal from 'react-modal';

import styles from './style.module.css';
import Close from "assets/images/close.png";
import Search from "assets/images/search.png";
import {Button, Input} from "ui";

export const SkillModal = (props) => {
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
                <p className={styles.title}>Add Skill</p>
                <p className={styles.search_title}>Search Skills</p>
                <div className={styles.input_cont}>
                    <img src={Search} alt={'search'} className={styles.search_img} />
                    <Input
                        placeholder={'Search Skills'}
                        style={{
                            backgroundColor: '#F2F2F2',
                            borderWidth: 0,
                            height: 45,
                        }}
                    />
                </div>
                <p className={styles.search_title}>Suggested Skills</p>
                <div className={styles.skiles_cont}>
                    <div className={styles.skile_item_cont}>
                        <p className={styles.skile}>Suggested Skill 1</p>
                    </div>
                    <div className={styles.skile_item_cont}>
                        <p className={styles.skile}>Suggested Skill 1</p>
                    </div>
                    <div className={styles.skile_item_cont}>
                        <p className={styles.skile}>Suggested Skill 1</p>
                    </div>
                    <div className={styles.skile_item_cont}>
                        <p className={styles.skile}>Suggested Skill 1</p>
                    </div>
                    <div className={styles.skile_item_cont}>
                        <p className={styles.skile}>Suggested Skill 1</p>
                    </div>
                    <div className={styles.skile_item_cont}>
                        <p className={styles.skile}>Suggested Skill 1</p>
                    </div>
                </div>
                <Button
                    click={props.closeModal}
                    text={'Add Skill'}
                    style={{
                        marginTop: 90,
                        paddingLeft: 40,
                        paddingRight: 40,
                        paddingTop: 7,
                        paddingBottom: 7
                    }}
                />
            </div>
        </Modal>
    );
}
