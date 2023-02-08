import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

import styles from './style.module.css'
import Search from "assets/images/search.png";
import {Button} from "ui";
import Filter from "assets/images/filter.png";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Usage Analysis',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octorber', 'Nobember', 'December'];


export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 45000 })),
            backgroundColor: '#327efc',
            borderRadius: 20
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 45000 })),
            backgroundColor: '#327efc',
            borderRadius: 20
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 45000 })),
            backgroundColor: '#327efc',
            borderRadius: 20
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 45000 })),
            backgroundColor: '#327efc',
            borderRadius: 20
        },
    ],
};
export const  SkillsAnalysis =()=>{

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
                <p className={styles.title}></p>
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
            <div className={styles.analysis_cont}>
                <Bar options={options} data={data} />;
            </div>

        </div>
    )
}
