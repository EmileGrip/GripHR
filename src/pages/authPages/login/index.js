import {useState} from "react";
import { useNavigate } from "react-router-dom";
import {NavLink} from "react-router-dom";

import styles from './style.module.css'
import LoginImg from 'assets/images/loginImg.png'
import Logo from 'assets/images/logo.png'
import {Input, Button} from "ui";
import {ADMIN_EMPLOYEES_PAGE_ROUTE, MANAGER_PAGE_ROUTE, EMPLOYEE_PAGE_ROUTE} from "routes/route-path";

export const Login = () => {
    const navigate = useNavigate();
    let [data, setData] = useState({})

    let handleChange = (e, name) => {
        setData({...data, [name]: e})
    }

    let login = () => {
        if(data.email === 'admin' && data.password === 'admin'){
            navigate(ADMIN_EMPLOYEES_PAGE_ROUTE)
        }
        if(data.email === 'manager' && data.password === 'manager'){
            navigate(MANAGER_PAGE_ROUTE)
        }
        if(data.email === 'employee' && data.password === 'employee'){
            navigate(EMPLOYEE_PAGE_ROUTE)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.form_cont}>
                <div className={styles.form}>
                    <img src={Logo} alt={'logo'} className={styles.logo_img}/>
                    <Input
                        type={'email'}
                        change={(e) => handleChange(e, 'email')}
                        placeholder={'Email'}
                        style={{marginTop: 43}}
                    />
                    <Input
                        type={'password'}
                        style={{marginTop: 15}}
                        change={(e) => handleChange(e, 'password')}
                        placeholder={'Password'}
                    />
                    <Button
                        text={'Log In'}
                        style={{marginTop: 15, marginBottom: 15}}
                        click={login}
                    />
                        <p className={styles.text}>Don’t have an account? <NavLink to={'*'} className={styles.link_text}>Sign Up</NavLink></p>
                        <p className={styles.text}>Forgot your Password? <NavLink to={'*'} className={styles.link_text}>Recover it</NavLink></p>
                </div>
                <div className={styles.footer_cont}>
                    <p>Grip® All Rights Reserved</p>
                </div>
            </div>
            <img src={LoginImg} alt={'right'} className={styles.right_img}/>
        </div>
    );
}
