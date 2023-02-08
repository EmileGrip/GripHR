import React, {useState} from "react";
import Modal from 'react-modal';

import styles from './style.module.css';
import Close from "assets/images/close.png";
import Table from "assets/images/table.png";
import Download from "assets/images/download.png";
import Upload from "assets/images/upload.png";
import Upload_icon from "assets/images/upload_icon.png";
import {Button} from "ui";

export const TemplateModal = (props) => {
    let [active, setActive] = useState(true)
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
                <p className={styles.title}>Bulk Upload</p>
                <div className={styles.cont}>
                    <div className={styles.title_cont}>
                        <button
                            className={`${styles.btn} ${active ? styles.active_btn : null}`}
                            onClick={() => setActive(true)}
                        >Download Template
                        </button>
                        <button
                            className={`${styles.btn} ${!active ? styles.active_btn : null}`}
                            onClick={() => setActive(false)}
                        >Upload Template
                        </button>
                    </div>
                    {active ?
                        <div className={styles.download_cont}>
                            <img src={Table} className={styles.table_img} alt={'table'}/>
                            <p className={styles.description}>
                                Download and fill out the Organigram Template to automatically set your company’s
                                workforce in their respecive departments, levels, and positions
                            </p>
                            <Button
                                img_left={Download}
                                text={'Download Grip Template '}
                                imgStyle={{
                                    marginRight: 10,
                                    width: 16,
                                    height: 16
                                }}
                                style={{
                                    paddingLeft: 17,
                                    paddingRight: 17,
                                    marginTop: 35
                                }}
                            />
                        </div>
                        :
                        <div className={styles.download_cont}>
                            <div className={styles.upload_img_cont}>
                                <img src={Upload} alt={'Upload'} className={styles.upload_img}/>
                                <p className={styles.file_name}>Drag CSV Here</p>
                                <p className={styles.file_limit}>or, click to browse (4MB max)</p>
                            </div>
                            <p className={styles.description}>
                                Upload your filled out Organigram Template to automatically set your company’s workforce
                                in their respecive departments, levels, and positions
                            </p>
                            <Button
                                img_left={Upload_icon}
                                text={'Upload Grip Template'}
                                imgStyle={{
                                    marginRight: 10,
                                    width: 16,
                                    height: 16
                                }}
                                style={{
                                    paddingLeft: 17,
                                    paddingRight: 17,
                                    marginTop: 35
                                }}
                            />
                        </div>
                    }

                </div>
            </div>
        </Modal>
    );
}
