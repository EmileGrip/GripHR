import {
    Routes,
    Route,
    Navigate,
    BrowserRouter as Router,
} from 'react-router-dom';

import {
    NOT_FOUND_ROUTE,
    LOGIN_PAGE_ROUTE,
    ADMIN_EMPLOYEES_PAGE_ROUTE,
    ADMIN_FRAMEWORK_PAGE_ROUTE,
    ADMIN_PAGE_ROUTE,
    ADMIN_ANALYTICS_PAGE_ROUTE,
    ADMIN_SETTINGS_PAGE_ROUTE,
    ADMIN_SUPPORT_PAGE_ROUTE,
    ADMIN_ORGANIGRAM_PAGE_ROUTE,
    ADMIN_SKILLPROFILE_PAGE_ROUTE,
    ADMIN_ANALYTICS_USAGE_PAGE_ROUTE,
    ADMIN_ORGANIGRAM_SKILLS_PAGE_ROUTE,
    MANAGER_PAGE_ROUTE,
    MANAGER_EMPLOYEES_PAGE_ROUTE,
    MANAGER_FRAMEWORK_PAGE_ROUTE,
    MANAGER_ANALYTICS_PAGE_ROUTE,
    MANAGER_ORGANIGRAM_SKILLS_PAGE_ROUTE,
    MANAGER_ANALYTICS_USAGE_PAGE_ROUTE,
    EMPLOYEE_PAGE_ROUTE,
    EMPLOYEE_SKILLS_PAGE_ROUTE,
    EMPLOYEE_SKILLS_MY_PAGE_ROUTE,
    EMPLOYEE_SKILLS_DEVELOPMENT_PAGE_ROUTE,
    EMPLOYEE_EXPERIENCE_PAGE_ROUTE,
    EMPLOYEE_EXPERIENCE_LEARNING_PAGE_ROUTE,
    EMPLOYEE_EXPERIENCE_WORK_PAGE_ROUTE,
    EMPLOYEE_ORGANIGRAM_PAGE_ROUTE
} from 'routes/route-path';
import {NotFoundPage} from 'pages/404';
import {ScrollToTop} from './scroll-to-top';
import {
    Login,
    AdminEmployees,
    AdminDashboard,
    AnalyticsDashbord,
    AdminSettings,
    AdminSupport,
    AdminFramework,
    AdminOrganigram,
    SkillsAnalysis,
    Usage,
    AdminSkillProfile,
    ManagerDashboard,
    ManagerEmployees,
    ManagerFramework,
    EmployeeDashboard,
    Skills,
    MySkills,
    Development,
    Experience,
    LearningExperience,
    WorkExperience,
    Organigram
} from 'pages';


export function RoutesPage() {
    return (
        <Router>
            <ScrollToTop/>
            <Routes>
                <Route path={LOGIN_PAGE_ROUTE} element={<Login />} />
                <Route path={ADMIN_PAGE_ROUTE} element={<AdminDashboard />}>
                    <Route path={ADMIN_EMPLOYEES_PAGE_ROUTE} element={<AdminEmployees />} />
                    <Route path={ADMIN_FRAMEWORK_PAGE_ROUTE} element={<AdminFramework />}>
                        <Route path={ADMIN_ORGANIGRAM_PAGE_ROUTE} element={<AdminOrganigram />} />
                        <Route path={ADMIN_SKILLPROFILE_PAGE_ROUTE} element={<AdminSkillProfile />} />
                    </Route>
                    <Route path={ADMIN_ANALYTICS_PAGE_ROUTE} element={<AnalyticsDashbord />}>
                        <Route path={ADMIN_ORGANIGRAM_SKILLS_PAGE_ROUTE} element={<SkillsAnalysis />} />
                        <Route path={ADMIN_ANALYTICS_USAGE_PAGE_ROUTE} element={<Usage />} />
                    </Route>
                    <Route path={ADMIN_SETTINGS_PAGE_ROUTE} element={<AdminSettings />} />
                    <Route path={ADMIN_SUPPORT_PAGE_ROUTE} element={<AdminSupport />} />

                </Route>
                <Route path={MANAGER_PAGE_ROUTE} element={<ManagerDashboard />}>
                    <Route path={MANAGER_EMPLOYEES_PAGE_ROUTE} element={<ManagerEmployees />} />
                    <Route path={MANAGER_FRAMEWORK_PAGE_ROUTE} element={<ManagerFramework />} />
                    <Route path={MANAGER_ANALYTICS_PAGE_ROUTE} element={<AnalyticsDashbord />}>
                        <Route path={MANAGER_ORGANIGRAM_SKILLS_PAGE_ROUTE} element={<SkillsAnalysis />} />
                        <Route path={MANAGER_ANALYTICS_USAGE_PAGE_ROUTE} element={<Usage />} />
                    </Route>
                </Route>

                <Route path={EMPLOYEE_PAGE_ROUTE} element={<EmployeeDashboard />}>
                    <Route path={EMPLOYEE_SKILLS_PAGE_ROUTE} element={<Skills />}>
                        <Route path={EMPLOYEE_SKILLS_MY_PAGE_ROUTE} element={<MySkills />} />
                        <Route path={EMPLOYEE_SKILLS_DEVELOPMENT_PAGE_ROUTE} element={<Development />} />
                    </Route>
                    <Route path={EMPLOYEE_EXPERIENCE_PAGE_ROUTE} element={<Experience />}>
                        <Route path={EMPLOYEE_EXPERIENCE_LEARNING_PAGE_ROUTE} element={<LearningExperience />} />
                        <Route path={EMPLOYEE_EXPERIENCE_WORK_PAGE_ROUTE} element={<WorkExperience />} />
                    </Route>
                    <Route path={EMPLOYEE_ORGANIGRAM_PAGE_ROUTE} element={<Organigram />} />
                </Route>
                <Route path={NOT_FOUND_ROUTE} element={<NotFoundPage />} />
                <Route path='*' element={<Navigate to={NOT_FOUND_ROUTE} />} />
            </Routes>
        </Router>
    );
}
