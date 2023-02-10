import React from "react";
import Modal from 'react-modal';

import styles from './style.module.css';
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
          <p className={styles.title}>Assign Role</p>
          <div className={styles.form_cont}>
            <p className={styles.input_title}>Existing Employee</p>
            <div className={styles.input_cont}>
              <img src={Search} alt={"Search"} className={styles.icon} />
              <input className={styles.input} placeholder={"Search Employee"} />
            </div>
            <p className={styles.input_title} style={{ marginTop: 60 }}>
              Create New Employee
            </p>
            <div className={styles.upload_form_cont}>
              <div className={styles.upload_left_cont}>
                <div className={styles.form_item_cont}>
                  <p className={styles.form_item_name}>First Name</p>
                  <Input
                    style={{
                      fontSize: 10,
                      color: "#1E394C",
                      height: 28,
                      width: 150,
                    }}
                  />
                </div>
                <div className={styles.form_item_cont}>
                  <p className={styles.form_item_name}>Last Name</p>
                  <Input
                    style={{
                      fontSize: 10,
                      color: "#1E394C",
                      height: 28,
                      width: 150,
                    }}
                  />
                </div>
                <div className={styles.form_item_cont}>
                  <p className={styles.form_item_name}>Join Date</p>
                  <Input
                    style={{
                      fontSize: 10,
                      color: "#1E394C",
                      height: 28,
                      width: 150,
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
                      color: "#1E394C",
                      height: 28,
                      width: 150,
                    }}
                  />
                </div>
                <div className={styles.form_item_cont}>
                  <p className={styles.form_item_name}>Phone</p>
                  <Input
                    style={{
                      fontSize: 10,
                      color: "#1E394C",
                      height: 28,
                      width: 150,
                    }}
                  />
                </div>
                <div className={styles.form_item_cont}>
                  <p className={styles.form_item_name}>Location</p>
                  <Input
                    style={{
                      fontSize: 10,
                      color: "#1E394C",
                      height: 28,
                      width: 150,
                    }}
                  />
                </div>
              </div>
            </div>
            <Button
              text={"Finish"}
              style={{
                paddingRight: 50,
                paddingLeft: 50,
                fontSize: 14,
                fontWeight: 600,
              }}
            />
          </div>
        </div>
      </Modal>
    );
}
