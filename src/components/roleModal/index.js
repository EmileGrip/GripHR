import React, {useState} from "react";
import Modal from 'react-modal';

import styles from './style.module.css';
import {Button, Input} from "ui";
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
          <p className={styles.title}>Add Role</p>
          <div className={styles.form_cont}>
            <p className={styles.input_title}>Role Name</p>
            <Input
              style={{
                marginTop: 12,
                backgroundColor: "#F2F2F2",
                opacity: 0.9,
                borderRadius: 10,
                height: 45,
                borderWidth: 0,
                width: "80%",
              }}
            />
            <p className={styles.input_title} style={{ marginTop: 30 }}>
              Department
            </p>
            <Input
              style={{
                marginTop: 12,
                backgroundColor: "#F2F2F2",
                opacity: 0.9,
                borderRadius: 10,
                height: 45,
                borderWidth: 0,
                width: "80%",
              }}
            />
            <p className={styles.input_title} style={{ marginTop: 30 }}>
              Suggested Job
            </p>
            <div className={styles.job_cont}>{_renderJob()}</div>
            <div className={styles.btn_cont}>
              <Button
                text={"Continue"}
                img={Right}
                click={() => {
                  props.next();
                }}
                style={{
                  fontSize: 14,
                  paddingLeft: 27,
                  paddingRight: 27,
                  marginTop: 7,
                  marginBottom: 7,
                }}
              />
              <p className={styles.btn_description}>Next: Departments</p>
            </div>
          </div>
        </div>
      </Modal>
    );
}
