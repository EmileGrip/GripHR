import React, {useState} from "react";
import Modal from 'react-modal';

import styles from './style.module.css';
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
            <div onClick={props.closeModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                height={25}
                viewBox="0 0 25 25"
                fill="none"
                className={styles.close_img}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24.4775 0.523024C25.1748 1.22039 25.1748 2.35104 24.4775 3.0484L3.04889 24.477C2.35153 25.1743 1.22088 25.1743 0.523512 24.477C-0.173853 23.7796 -0.173853 22.649 0.523512 21.9516L21.9521 0.523024C22.6494 -0.174341 23.7801 -0.174341 24.4775 0.523024Z"
                  fill="#1E394C"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.523512 0.523024C1.22088 -0.174341 2.35153 -0.174341 3.04889 0.523024L24.4775 21.9516C25.1748 22.649 25.1748 23.7796 24.4775 24.477C23.7801 25.1743 22.6494 25.1743 21.9521 24.477L0.523512 3.0484C-0.173853 2.35104 -0.173853 1.22039 0.523512 0.523024Z"
                  fill="#1E394C"
                />
              </svg>
            </div>
          </div>
          <p className={styles.title}>Bulk Upload</p>
          <div className={styles.cont}>
            <div className={styles.title_cont}>
              <button
                className={`${styles.btn} ${active ? styles.active_btn : null}`}
                onClick={() => setActive(true)}
              >
                Download Template
              </button>
              <button
                className={`${styles.btn} ${
                  !active ? styles.active_btn : null
                }`}
                onClick={() => setActive(false)}
              >
                Upload Template
              </button>
            </div>
            {active ? (
              <div className={styles.download_cont}>
                <img src={Table} className={styles.table_img} alt={"table"} />
                <p className={styles.description}>
                  Download and fill out the Organigram Template to automatically
                  set your company’s workforce in their respecive departments,
                  levels, and positions
                </p>
                <Button
                  img_left={Download}
                  text={"Download Grip Template "}
                  imgStyle={{
                    marginRight: 10,
                    width: 16,
                    height: 16,
                  }}
                  style={{
                    paddingLeft: 17,
                    paddingRight: 17,
                    marginTop: 35,
                  }}
                />
              </div>
            ) : (
              <div className={styles.download_cont}>
                <div className={styles.upload_img_cont}>
                  <img
                    src={Upload}
                    alt={"Upload"}
                    className={styles.upload_img}
                  />
                  <p className={styles.file_name}>Drag CSV Here</p>
                  <p className={styles.file_limit}>
                    or, click to browse (4MB max)
                  </p>
                </div>
                <p className={styles.description}>
                  Upload your filled out Organigram Template to automatically
                  set your company’s workforce in their respecive departments,
                  levels, and positions
                </p>
                <Button
                  img_left={Upload_icon}
                  text={"Upload Grip Template"}
                  imgStyle={{
                    marginRight: 10,
                    width: 16,
                    height: 16,
                  }}
                  style={{
                    paddingLeft: 17,
                    paddingRight: 17,
                    marginTop: 35,
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </Modal>
    );
}
