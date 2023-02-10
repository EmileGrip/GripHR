import React from "react";
import {Input, Button} from "ui";
import styles from './style.module.css'
import Upload from 'assets/images/upload.png'
import Right from 'assets/images/right-.png'

export const OrganigramStepOne = (props) => {

    return (
        <div className={styles.container}>
            <div className={styles.title_cont}>
                <p className={styles.title_bold}>Initial Setup</p>
                <p className={styles.title}>- Basic Info</p>
            </div>
            <div className={styles.upload_form_cont}>
                <div className={styles.upload_left_cont}>
                    <p className={styles.upload_title}>Upload Logo</p>
                    <div className={styles.upload_img_cont}>
                        <img src={Upload} alt={'Upload'} className={styles.upload_img}/>
                        <p className={styles.file_name}>Drag Logo Here</p>
                        <p className={styles.file_limit}>or, click to browse (4MB max)</p>
                    </div>
                </div>
                <div className={styles.upload_right_cont}>
                    <div className={styles.form_item_cont}>
                        <p className={styles.form_item_name}>Company name</p>
                        <Input
                            placeholder={'What’s your company called'}
                            style={{
                                fontSize: 10,
                                color: '#1E394C',
                                height: 28,
                                width: 285
                            }}
                        />
                    </div>
                    <div className={styles.form_item_cont}>
                        <p className={styles.form_item_name}>Industry</p>
                        <Input
                            placeholder={'Select an Industry'}
                            style={{
                                fontSize: 10,
                                color: '#1E394C',
                                height: 28,
                                width: 285
                            }}
                        />
                    </div>
                    <div className={styles.form_item_cont}>
                        <p className={styles.form_item_name}>Website</p>
                        <Input
                            placeholder={'Your company’s website'}
                            style={{
                                fontSize: 10,
                                color: '#1E394C',
                                height: 28,
                                width: 285
                            }}
                        />
                    </div>
                    <div className={styles.form_item_cont}>
                        <p className={styles.form_item_name}>Linkedin</p>
                        <Input
                            placeholder={'Your company’s linkedin profile'}
                            style={{
                                fontSize: 10,
                                color: '#1E394C',
                                height: 28,
                                width: 285
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className={styles.upload_form_cont}>
                <div className={styles.upload_left_cont}>
                    <div className={styles.form_item_cont}>
                        <p className={styles.form_item_name}>Country</p>
                        <Input
                            placeholder={'Select Country'}
                            style={{
                                fontSize: 10,
                                color: '#1E394C',
                                height: 28,
                                width: 285
                            }}
                        />
                    </div>
                    <div className={styles.form_item_cont}>
                        <p className={styles.form_item_name}>State</p>
                        <Input
                            placeholder={'Select Country'}
                            style={{
                                fontSize: 10,
                                color: '#1E394C',
                                height: 28,
                                width: 285
                            }}
                        />
                    </div>
                    <div className={styles.form_item_cont}>
                        <p className={styles.form_item_name}>City</p>
                        <Input
                            placeholder={'Select Country'}
                            style={{
                                fontSize: 10,
                                color: '#1E394C',
                                height: 28,
                                width: 285
                            }}
                        />
                    </div>
                </div>
                <div className={styles.upload_right_cont}>
                    <div className={styles.form_item_cont}>
                        <p className={styles.form_item_name}>Address Line 1</p>
                        <Input
                            placeholder={'When was the company founded?'}
                            style={{
                                fontSize: 10,
                                color: '#1E394C',
                                height: 28,
                                width: 285
                            }}
                        />
                    </div>
                    <div className={styles.form_item_cont}>
                        <p className={styles.form_item_name}>Address Line 2</p>
                        <Input
                            placeholder={'Your company’s official website'}
                            style={{
                                fontSize: 10,
                                color: '#1E394C',
                                height: 28,
                                width: 285
                            }}
                        />
                    </div>
                    <div className={styles.form_item_cont}>
                        <p className={styles.form_item_name}>ZIP Code</p>
                        <Input
                            placeholder={'Your company’s linkedin profile'}
                            style={{
                                fontSize: 10,
                                color: '#1E394C',
                                height: 28,
                                width: 285
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.btn_cont}>
                <Button
                    text={'Continue'}
                    img={Right}
                    click={() => {
                        props.changeStep()
                        props.changeShow()
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
    )
}
