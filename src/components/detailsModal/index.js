import React from "react";
import Modal from "react-modal";

import styles from "./style.module.css";
import Close from "assets/images/close.png";
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
          <img
            src={Close}
            className={styles.close_img}
            alt={"Close"}
            onClick={props.closeModal}
          />
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
              <p className={styles.min_title}>ID</p>
              <p className={styles.min_des}>630943f7741fe703</p>
            </div>
            <p className={styles.in}>See Full Bio</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};
