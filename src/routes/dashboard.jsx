import Dashboard from "views/Dashboard/Dashboard";
import UserProfile from "views/UserProfile/UserProfile";
import TableList from "views/TableList/TableList";
import Icons from "views/Icons/Icons";
import Notifications from "views/Notifications/Notifications";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile
  },
  {
    path: "/table",
    name: "Tabela de Treinos",
    icon: "pe-7s-note2",
    component: TableList
  },
  { path: "/icons", 
  name: "Icons", 
  icon: "pe-7s-science", 
  component: Icons },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "pe-7s-bell",
    component: Notifications
  },
  { 
    redirect: true, 
    path: "/", 
    to: "/dashboard", 
    name: "Dashboard" 
  }
];

export default dashboardRoutes;
