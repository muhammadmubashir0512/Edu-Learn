import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from './Components/Login'
import Signup from './Components/Signup'
import ForgotPassword from './Components/ForgotPassword'
import ProfileSetup from './Components/ProfileSetup'
import Dashboard from './Components/Dashboard/Dashboard'
import Navbar from './Components/Dashboard/Navbar'
import SideBar from './Components/Dashboard/SideBar'
import Courses from './Components/Courses/Courses'
import CourseInfo from './Components/Courses/CoursesInfo'
import Webinars from './Components/Webinars/Webinars'
import Analytics from './Components/Analytics/Analytics'
import SubscriptionPlan from './Components/SubscribedPlan/Subscriptionplan'
import UpgradePlan from './Components/SubscribedPlan/UpgradePlan'
import Payment from './Components/SubscribedPlan/Payment'
import Settings from './Components/Settings/Settings'
import Editprofile from './Components/Settings/Editprofile'
import ChangePassword from './Components/Settings/ChangePassword'
import Notificationpref from './Components/Settings/Notificationpref'
import Logout from './Components/Settings/Logout'



function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Login/>
      },
      {
        path: '/Signup',
        element: <Signup/>
      },
      {
        path: '/ForgotPassword',
        element: <ForgotPassword/>
      },
      {
        path: '/ProfileSetup',
        element: <ProfileSetup/>
      },
      {
        path: '/Dashboard',
        element: <Dashboard/>
      },
      {
        path: '/Navbar',
        element: <Navbar/>
      },
      {
        path: '/Sidebar',
        element: <SideBar/>
      },
      {
        path: '/Courses',
        element: <Courses/>
      },
      {
        path: '/CourseInfo/:id',
        element: <CourseInfo/>
      },
      {
        path: '/Webinars',
        element: <Webinars/>
      },
      {
        path: '/Analytics',
        element: <Analytics/>
      },
      {
        path: '/SubscriptionPlan',
        element: <SubscriptionPlan/>
      },
      {
        path: '/upgradePlan',
        element: <UpgradePlan/>
      },
      {
        path: '/Payment',
        element: <Payment/>
      },
      {
        path: '/Settings',
        element: <Settings/>
      },
      {
        path: '/Editprofile',
        element: <Editprofile/>
      },
      {
        path: '/ChangePassword',
        element: <ChangePassword/>
      },
      {
        path: '/Notificationpref',
        element: <Notificationpref/>
      },
      {
        path: '/Logout',
        element: <Logout/>
      }
    ]
  )

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
