import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./style.module.css";
import {
  ADMIN_EMPLOYEES_PAGE_ROUTE,
  ADMIN_SETTINGS_PAGE_ROUTE,
  ADMIN_SUPPORT_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
  ADMIN_ORGANIGRAM_PAGE_ROUTE,
  ADMIN_SKILLPROFILE_PAGE_ROUTE,
  ADMIN_ORGANIGRAM_SKILLS_PAGE_ROUTE,
  ADMIN_ANALYTICS_USAGE_PAGE_ROUTE,
} from "routes/route-path";
import EmployeesIcon from "assets/images/employeesIcon.png";
import FrameworkIcon from "assets/images/frameworkIcon.png";
import Analytics from "assets/images/analytics.png";
import Setting from "assets/images/setting.png";
import Info from "assets/images/info.png";
import LogOut from "assets/images/logout.png";
import Logo from "assets/images/logo.png";

export const SideBarAdmin = () => {
  let [frameworkFlag, setFrameworkFlag] = useState(false);
  let [analyticsFlag, setAnalyticsFlag] = useState(false);
  let [sidebarActive,setSidebarActive] = useState(false);

  let [framework] = useState([
    {
      id: 1,
      name: "Organigram",
      to: ADMIN_ORGANIGRAM_PAGE_ROUTE,
    },
    {
      id: 2,
      name: "Skill Profile",
      to: ADMIN_SKILLPROFILE_PAGE_ROUTE,
    },
  ]);
  let [analytics] = useState([
    {
      id: 1,
      name: "Skills Analysis",
      to: ADMIN_ORGANIGRAM_SKILLS_PAGE_ROUTE,
    },
    {
      id: 2,
      name: "Usage",
      to: ADMIN_ANALYTICS_USAGE_PAGE_ROUTE,
    },
  ]);

  const handleActive = () => {
    setSidebarActive(prev => !prev)
  }
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
            setAnalyticsFlag(false);
            setFrameworkFlag(false);
          }}
          to={ADMIN_EMPLOYEES_PAGE_ROUTE}
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ""}`
          }
        >
          <img src={EmployeesIcon} className={styles.link_icon} alt={"link"} />
          Employees
        </NavLink>
        <NavLink
          onClick={() => {
            setAnalyticsFlag(false);
            setFrameworkFlag(true);
          }}
          to={ADMIN_ORGANIGRAM_PAGE_ROUTE}
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ""}`
          }
        >
          <img src={FrameworkIcon} className={styles.link_icon} alt={"link"} />
          Framework
        </NavLink>
        <div className={styles.framework_cont}>
          {frameworkFlag
            ? framework.map((data) => {
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
            setFrameworkFlag(false);
            setAnalyticsFlag(true);
          }}
          to={ADMIN_ORGANIGRAM_SKILLS_PAGE_ROUTE}
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
            setFrameworkFlag(false);
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
            setFrameworkFlag(false);
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
            setFrameworkFlag(false);
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
};
