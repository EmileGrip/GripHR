import React from "react";
import Modal from 'react-modal';

import styles from './style.module.css';
import {Button, Input} from "ui";

export const AddJobModal = (props) => {


    return (
      <Modal
        isOpen={props.modalIsOpen}
        onRequestClose={props.closeModal}
        className={styles.custom_modal_style}
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
          <p className={styles.title}>Add Job</p>
          <div className={styles.form_cont}>
            <div className={styles.title_input_cont}>
              <p className={styles.title_input}>Position</p>
              <Input
                placeholder={"Select"}
                style={{
                  height: 28,
                  maxWidth: 150,
                  fontSize: 10,
                  color: "#1E394C",
                  marginLeft: 46,
                }}
              />
            </div>
            <div className={styles.title_input_cont}>
              <p className={styles.title_input}>Position</p>
              <Input
                placeholder={"Select"}
                style={{
                  height: 28,
                  maxWidth: 150,
                  fontSize: 10,
                  color: "#1E394C",
                  marginLeft: 46,
                }}
              />
            </div>
            <div className={styles.title_input_cont}>
              <p className={styles.title_input}>Position</p>
              <Input
                placeholder={"Select"}
                style={{
                  height: 28,
                  maxWidth: 150,
                  fontSize: 10,
                  color: "#1E394C",
                  marginLeft: 46,
                }}
              />
            </div>
            <div className={styles.title_input_cont}>
              <p className={styles.title_input}>Position</p>
              <Input
                placeholder={"Select"}
                style={{
                  height: 28,
                  maxWidth: 150,
                  fontSize: 10,
                  color: "#1E394C",
                  marginLeft: 46,
                }}
              />
            </div>
          </div>
          <p className={styles.description_text}>Description</p>
          <textarea
            rows="5"
            cols="33"
            className={styles.textAr}
            placeholder={"Type here"}
          />
          <div className={styles.btn_cont}>
            <Button
              text={"Finish"}
             
            />
            <Button
              text={"Cancel"}
             
            />
          </div>
        </div>
      </Modal>
    );
}
