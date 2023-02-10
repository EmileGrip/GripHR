import React, {useState, useEffect, useCallback} from "react";
import {useLocation} from "react-router-dom";
import {
    ADMIN_EMPLOYEES_PAGE_ROUTE,
    ADMIN_FRAMEWORK_PAGE_ROUTE,
    ADMIN_ANALYTICS_PAGE_ROUTE,
    ADMIN_ORGANIGRAM_PAGE_ROUTE,
    ADMIN_SKILLPROFILE_PAGE_ROUTE,
    ADMIN_ORGANIGRAM_SKILLS_PAGE_ROUTE,
    ADMIN_ANALYTICS_USAGE_PAGE_ROUTE,
    EMPLOYEE_SKILLS_PAGE_ROUTE,
    EMPLOYEE_EXPERIENCE_WORK_PAGE_ROUTE,
    EMPLOYEE_ORGANIGRAM_PAGE_ROUTE,
    MANAGER_ORGANIGRAM_SKILLS_PAGE_ROUTE,
    MANAGER_ANALYTICS_USAGE_PAGE_ROUTE,
    EMPLOYEE_EXPERIENCE_LEARNING_PAGE_ROUTE,
    EMPLOYEE_SKILLS_MY_PAGE_ROUTE,
    EMPLOYEE_SKILLS_DEVELOPMENT_PAGE_ROUTE,
    MANAGER_EMPLOYEES_PAGE_ROUTE, MANAGER_FRAMEWORK_PAGE_ROUTE,

} from 'routes/route-path';
import styles from './style.module.css';
import Right from 'assets/images/right.png';
import Message from 'assets/images/message.png';
import Notification from 'assets/images/notification.png';
import Avatar from 'assets/images/avatar.png';
import Down from 'assets/images/down.png';

export const Header = (props) => {
    let [route, setRoute] = useState(['Candidates', 'Progress', 'Employees'])
    let [title, setTitle] = useState('Employees')
    let location = useLocation()


    let locationRoute = useCallback(() => {
        switch (location.pathname) {
            case ADMIN_EMPLOYEES_PAGE_ROUTE:
                setRoute(["Candidates", "Progress", "Employees"]);
                setTitle('Employees')
                break
            case ADMIN_FRAMEWORK_PAGE_ROUTE:
                setRoute(['Framework',]);
                setTitle('Framework')
                break
            case ADMIN_ORGANIGRAM_PAGE_ROUTE:
                setRoute(['Framework', 'Organigram', 'Inital Setup']);
                setTitle('Framework')
                break
            case ADMIN_SKILLPROFILE_PAGE_ROUTE:
                setRoute(['Framework', 'Skill Profile', 'Senior UI Developer']);
                setTitle('Framework')
                break
            case ADMIN_ANALYTICS_PAGE_ROUTE:
                setRoute(['Analytics',]);
                setTitle('Analytics')
                break
            case ADMIN_ORGANIGRAM_SKILLS_PAGE_ROUTE:
                setRoute(['Grip', 'Analytics', 'Skills Analysis']);
                setTitle('Analytics')
                break
            case ADMIN_ANALYTICS_USAGE_PAGE_ROUTE:
                setRoute(['Grip', 'Analytics', 'Usage']);
                setTitle('Analytics')
                break
            case EMPLOYEE_SKILLS_PAGE_ROUTE:
                setRoute(['Skills', 'My Skills', 'Initial Setup']);
                setTitle('Skills')
                break
            case EMPLOYEE_SKILLS_MY_PAGE_ROUTE:
                setRoute(['Skills', 'My Skills', 'Initial Setup']);
                setTitle('Skills')
            case EMPLOYEE_SKILLS_DEVELOPMENT_PAGE_ROUTE:
                setRoute(['Skills', 'Development']);
                setTitle('Skills')
                break
            case MANAGER_EMPLOYEES_PAGE_ROUTE:
                setRoute(['Canditates', 'Progress', 'Employees']);
                setTitle('Employees')
                break
            case MANAGER_FRAMEWORK_PAGE_ROUTE:
                setRoute(['Organigram']);
                setTitle('Organigram')
                break
            case EMPLOYEE_EXPERIENCE_WORK_PAGE_ROUTE:
                setRoute(['Experience', 'Work Experience']);
                setTitle('Experience')
                break
            case EMPLOYEE_EXPERIENCE_LEARNING_PAGE_ROUTE:
                setRoute(['Experience', 'Learning Experience']);
                setTitle('Experience')
                break
            case EMPLOYEE_ORGANIGRAM_PAGE_ROUTE:
                setRoute(['Organigram']);
                setTitle('Organigram')
                break
            case MANAGER_ORGANIGRAM_SKILLS_PAGE_ROUTE:
                setRoute(['Grip', 'Analytics', 'Skills Analysis']);
                setTitle('Analytics')
                break
            case MANAGER_ANALYTICS_USAGE_PAGE_ROUTE:
                setRoute(['Grip', 'Analytics', 'Usage']);
                setTitle('Analytics')
                break
            default:

        }
    }, [location])

    useEffect(() => {
        locationRoute()
    }, [locationRoute])

    let _renderRoute = () => {
        return route.map((data, index) => {
            return (
                <div key={data} className={styles.route}>
                    <p className={styles.route_text}
                       style={!route[index + 1] ? {fontWeight: 600, color: '#292D32'} : null}
                    >{data}</p>
                    {route[index + 1] ?
                        <img src={Right} alt={'right'} className={styles.right_img}/>
                        :
                        null
                    }
                </div>
            )
        })
    }

    return (
        <div className={styles.continer}>
            <div className={styles.left_cont}>
                <p className={styles.title}>{title}</p>
                <div className={styles.route}>
                    {_renderRoute()}
                </div>
            </div>
            <div className={styles.right_cont}>
                <div className={styles.icon_cont}>
                    <img src={Message} alt={'message'} className={styles.icon}/>
                </div>
                <div className={styles.icon_cont}>
                    <img src={Notification} alt={'notification'} className={styles.icon}/>
                </div>
                <div className={styles.avatar_cont}>
                    <img src={Avatar} alt={'Avatar'} className={styles.avatar}/>
                    <p className={styles.name}>Maximiliam Bellingham</p>
                    <img src={Down} alt={'Down'} className={styles.down_img}/>
                </div>
            </div>
        </div>
    );
}
