import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import styles from './style.module.css'
import {
    ADMIN_SETTINGS_PAGE_ROUTE,
    ADMIN_SUPPORT_PAGE_ROUTE,
    LOGIN_PAGE_ROUTE,
    EMPLOYEE_SKILLS_MY_PAGE_ROUTE,
    EMPLOYEE_SKILLS_DEVELOPMENT_PAGE_ROUTE,
    EMPLOYEE_EXPERIENCE_LEARNING_PAGE_ROUTE,
    EMPLOYEE_EXPERIENCE_WORK_PAGE_ROUTE,
    EMPLOYEE_ORGANIGRAM_PAGE_ROUTE
} from "routes/route-path";
import SkillsIcon from 'assets/images/skills.png'
import ExperienceIcon from 'assets/images/employeesIcon.png'
import OrganigramIcon from 'assets/images/organigram.png'
import Setting from 'assets/images/setting.png'
import Info from 'assets/images/info.png'
import LogOut from 'assets/images/logout.png'
import Logo from 'assets/images/logo.png'

export const SidebarEmployee = () => {
    let [skilsFlag, setSkilsFlag] = useState(false)
    let [experienceFlag, setExperienceFlag] = useState(false)
    let [sidebarActive, setSidebarActive] = useState(false);
    let [skills] = useState([
        {
            id: 1,
            name: 'My Skills',
            to: EMPLOYEE_SKILLS_MY_PAGE_ROUTE
        },
        {
            id: 2,
            name: 'Development',
            to: EMPLOYEE_SKILLS_DEVELOPMENT_PAGE_ROUTE
        },
    ])
    let [experience] = useState([
        {
            id: 2,
            name: 'Learning Experience',
            to: EMPLOYEE_EXPERIENCE_LEARNING_PAGE_ROUTE
        },
        {
            id: 1,
            name: 'Work Experience',
            to: EMPLOYEE_EXPERIENCE_WORK_PAGE_ROUTE
        },

    ])
    const handleActive = () => {
      setSidebarActive((prev) => !prev);
    };

    return (
      <div
        className={`${styles.container} ${
          sidebarActive ? styles.active_sidebar : null
        }`}
      >
        <div>
          <img src={Logo} className={styles.logo} alt={"logo"} />
          <NavLink
            onClick={() => {
              setExperienceFlag(false);
              setSkilsFlag(true);
            }}
            to={EMPLOYEE_SKILLS_MY_PAGE_ROUTE}
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ""}`
            }
          >
            <img src={SkillsIcon} className={styles.link_icon} alt={"link"} />
            Skills
          </NavLink>
          <div className={styles.framework_cont}>
            {skilsFlag
              ? skills.map((data) => {
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
          <NavLink
            onClick={() => {
              setSkilsFlag(false);
              setExperienceFlag(true);
            }}
            to={EMPLOYEE_EXPERIENCE_LEARNING_PAGE_ROUTE}
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ""}`
            }
          >
            <img
              src={ExperienceIcon}
              className={styles.link_icon}
              alt={"link"}
            />
            Experience
          </NavLink>
          <div className={styles.framework_cont}>
            {experienceFlag
              ? experience.map((data) => {
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
          <NavLink
            onClick={() => {
              setSkilsFlag(false);
              setExperienceFlag(false);
            }}
            to={EMPLOYEE_ORGANIGRAM_PAGE_ROUTE}
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ""}`
            }
          >
            <img
              src={OrganigramIcon}
              className={styles.link_icon}
              alt={"link"}
            />
            Organigram
          </NavLink>
        </div>
        <div className={styles.footer_cont}>
          <NavLink
            onClick={() => {
              setSkilsFlag(false);
              setExperienceFlag(false);
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
              setSkilsFlag(false);
              setExperienceFlag(false);
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
              setSkilsFlag(false);
              setExperienceFlag(false);
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
        <div
          className={`${styles.arrow_box} ${
            sidebarActive ? styles.active_sidebar : null
          }`}
          onClick={handleActive}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0V0z" />
            <path d="M6.23 20.23L8 22l10-10L8 2 6.23 3.77 14.46 12z" />
          </svg>
        </div>
      </div>
    );
}
