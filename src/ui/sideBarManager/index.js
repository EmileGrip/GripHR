import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import styles from './style.module.css'
import {
    ADMIN_SETTINGS_PAGE_ROUTE,
    ADMIN_SUPPORT_PAGE_ROUTE,
    LOGIN_PAGE_ROUTE,
    MANAGER_EMPLOYEES_PAGE_ROUTE,
    MANAGER_FRAMEWORK_PAGE_ROUTE,
    MANAGER_ORGANIGRAM_SKILLS_PAGE_ROUTE,
    MANAGER_ANALYTICS_USAGE_PAGE_ROUTE,
    MANAGER_ANALYTICS_PAGE_ROUTE
} from "routes/route-path";
import EmployeesIcon from 'assets/images/employeesIcon.png'
import FrameworkIcon from 'assets/images/frameworkIcon.png'
import Analytics from 'assets/images/analytics.png'
import Setting from 'assets/images/setting.png'
import Info from 'assets/images/info.png'
import LogOut from 'assets/images/logout.png'
import Logo from 'assets/images/logo.png'

export const SideBarManager = () => {
    let [analyticsFlag, setAnalyticsFlag] = useState(false)
    let [analytics] = useState([
        {
            id: 1,
            name: 'Skills Analysis',
            to: MANAGER_ORGANIGRAM_SKILLS_PAGE_ROUTE
        },
        {
            id: 2,
            name: 'Usage',
            to: MANAGER_ANALYTICS_USAGE_PAGE_ROUTE
        },
    ])

    return (
      <div className={styles.container}>
        <div>
          <img src={Logo} className={styles.logo} alt={"logo"} />
          <NavLink
            onClick={() => {
              setAnalyticsFlag(false);
            }}
            to={MANAGER_EMPLOYEES_PAGE_ROUTE}
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ""}`
            }
          >
            <img
              src={EmployeesIcon}
              className={styles.link_icon}
              alt={"link"}
            />
            Employees
          </NavLink>
          <NavLink
            onClick={() => {
              setAnalyticsFlag(false);
            }}
            to={MANAGER_FRAMEWORK_PAGE_ROUTE}
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ""}`
            }
          >
            <img
              src={FrameworkIcon}
              className={styles.link_icon}
              alt={"link"}
            />
            Organigram
          </NavLink>

          <NavLink
            onClick={() => {
              setAnalyticsFlag(true);
            }}
            to={MANAGER_ORGANIGRAM_SKILLS_PAGE_ROUTE}
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ""}`
            }
          >
            <img src={Analytics} className={styles.link_icon} alt={"link"} />
            Analytics
          </NavLink>
          <div className={styles.framework_cont}>
            {analyticsFlag
              ? analytics.map((data) => {
                  return (
                    <NavLink
                      key={data.id}
                      to={data.to}
                      className={({ isActive }) =>
                        `${styles.framework_link} ${
                          isActive ? styles.framework_active : ""
                        }`
                      }
                    >
                      {data.name}
                    </NavLink>
                  );
                })
              : null}
          </div>
        </div>
        <div className={styles.footer_cont}>
          <NavLink
            onClick={() => {
              setAnalyticsFlag(false);
            }}
            to={ADMIN_SETTINGS_PAGE_ROUTE}
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ""}`
            }
          >
            <img src={Setting} className={styles.link_icon} alt={"link"} />
            Setting
          </NavLink>
          <NavLink
            onClick={() => {
              setAnalyticsFlag(false);
            }}
            to={ADMIN_SUPPORT_PAGE_ROUTE}
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ""}`
            }
          >
            <img src={Info} className={styles.link_icon} alt={"link"} />
            Support
          </NavLink>
          <NavLink
            onClick={() => {
              setAnalyticsFlag(false);
            }}
            to={LOGIN_PAGE_ROUTE}
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ""}`
            }
          >
            <img src={LogOut} className={styles.link_icon} alt={"link"} />
            Log Out
          </NavLink>
        </div>
      </div>
    );
}
