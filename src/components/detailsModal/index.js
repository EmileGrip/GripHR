import React from "react";
import Modal from "react-modal";

import styles from "./style.module.css";
import Avatar from "assets/images/avatar2.png";
export const DetailsModal = (props) => {
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
        <div className={styles.user_cont}>
          <img src={Avatar} alt={"Avatar"} className={styles.avatar_img} />
          <div className={styles.user_info_cont}>
            <p className={styles.name}>Maximiliam Bellingham</p>
            <p className={styles.description}>Senior UI Developer</p>
            <p className={styles.age}>He / Him</p>
            <p className={styles.title}>Contact</p>
            <div className={styles.info_item_cont} style={{ marginTop: 10 }}>
              <p className={styles.min_title}>email</p>
              <p className={styles.min_des}>max@arena.im</p>
            </div>
            <div className={styles.info_item_cont}>
              <p className={styles.min_title}>Phone</p>
              <p className={styles.min_des}>+57 565122 554</p>
            </div>
            <div className={styles.info_item_cont}>
              <p className={styles.min_title}>Location</p>
              <p className={styles.min_des}>Berlin, Germany</p>
            </div>
            <p className={styles.title}>Info</p>
            <div className={styles.info_item_cont} style={{ marginTop: 10 }}>
              <p className={styles.min_title}>Manager</p>
              <p className={styles.min_des}>Maya Norman</p>
            </div>
            <div className={styles.info_item_cont}>
              <p className={styles.min_title}>Joined</p>
              <p className={styles.min_des}>22 Aug 2020</p>
            </div>
            <div className={styles.info_item_cont}>
              <p className={styles.min_title}>Company ID</p>
              <p className={styles.min_des}>630943f7741fe703</p>
            </div>
            <p className={styles.in}>See Full Bio</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};
