import {useState} from "react";
import styles from './style.module.css'
import Search from 'assets/images/search.png'
import Filter from 'assets/images/filter.png'
import {Button} from "ui";
import {DetailsModal, EmployeeItem} from "components";

export const ManagerEmployees = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    let [data] = useState([
        {
            name: ''
        },
        {
            name: ''
        },
        {
            name: ''
        },
        {
            name: ''
        },
        {
            name: ''
        },
        {
            name: ''
        },
        {
            name: ''
        },
        {
            name: ''
        },
        {
            name: ''
        },
        {
            name: ''
        },
        {
            name: ''
        },
        {
            name: ''
        },
        {
            name: ''
        },
        {
            name: ''
        },
    ])

    let openModal = () => {
        setIsOpen(!modalIsOpen)
    }

    let _renderItem = () => {
        return data.map((item, index) => {
            return (
                <EmployeeItem key={index} openModal={openModal}/>
            )
        })
    }

    return (
        <div className={styles.container}>
            <div className={styles.header_filter}>
                <div className={styles.header_filter_item}>
                    <p className={styles.ilter_item_count}>230</p>
                    <p className={styles.ilter_item_name}>Total Employees</p>
                </div>
                <div className={styles.header_filter_item}>
                    <p className={styles.ilter_item_count}>81</p>
                    <p className={styles.ilter_item_name}>Total active Employees</p>
                </div>
                <div className={styles.header_filter_item}>
                    <p className={styles.ilter_item_count}>37</p>
                    <p className={styles.ilter_item_name}>Achived Employees</p>
                </div>
            </div>
            <div className={styles.filter_cont}>
                <p className={styles.title}>Overview</p>
                <div className={styles.filter}>
                    <div className={styles.input_cont}>
                        <img src={Search} alt={'Search'} className={styles.icon}/>
                        <input className={styles.input} placeholder={'Search Employee'}/>
                    </div>
                    <Button
                        text={'Filter'}
                        img_left={Filter}
                        imgStyle={{
                            marginRight: 9
                        }}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            width: 103,
                            height: 38,
                            borderWidth: 2,
                            borderColor: '#E9E9E9',
                            borderStyle: 'solid',
                            borderRadius: 4,
                            backgroundColor: '#fff',
                            color: '#353C44',
                            fontSize: 16,
                            opacity: 0.7,
                        }}
                    />
                </div>
            </div>
            <div className={styles.users_cont}>
                {_renderItem()}
            </div>
            <DetailsModal
                modalIsOpen={modalIsOpen}
                closeModal={() => {
                    setIsOpen(false)
                }}
            />
        </div>
    );
}
