import React from "react";

import styles from './style.module.css'
import Camera from 'assets/images/camera.png'
import Upload from "assets/images/upload.png";
import { Button } from "ui";

export const MySkillsStepOne = ({ changeStep }) => {

    return (
        <div className={styles.container}>
            <div className={styles.title_cont}>
                <p className={styles.title}>Initial Setup</p>
                <p className={styles.title_right}>- Basic Info</p>
            </div>
            <div className={styles.upload_cont}>
                <div className={styles.camera_cont}>
                    <button className={styles.camera_btn}>
                        <img src={Camera} alt={'camera'} className={styles.camera_img}/>
                    </button>
                    <p className={styles.upload}>Upload Photo</p>
                </div>
                <p className={styles.upload_text}>Hi Maximiliam, welcome to grip</p>
            </div>
            <div className={styles.cont}>
                <div >
                    <p className={styles.upload_title}>Upload Resume</p>
                    <div className={styles.upload_img_cont}>
                        <img src={Upload} alt={'Upload'} className={styles.upload_img}/>
                        <p className={styles.file_name}>Drag Logo Here</p>
                        <p className={styles.file_limit}>or, click to browse (4MB max)</p>
                    </div>
                </div>
                <div className={styles.upload_left_cont}>
                    <p className={styles.upload_title}>Connect your Linkedin Profile</p>
                    <div className={styles.connect_cont}>
                       <input
                        className={styles.input}
                        placeholder={'Linkedin URL'}
                       />
                        <button className={styles.connect}>Connect</button>
                    </div>
                </div>
            </div>
            <Button
                text={'Next'}
                click={() => changeStep()}
                style={{
                    marginTop: 50,
                    paddingLeft: 50,
                    paddingRight: 50,
                    paddingTop: 7,
                    paddingBottom: 7
                }}
            />
        </div>
    )
}
