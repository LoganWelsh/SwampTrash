import Dashboard from "views/Dashboard.jsx";
import UserProfile from "views/UserProfile.jsx";
import TableList from "views/TableList.jsx";


const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Image Upload",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "About Us",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Link to Github",
    icon: "pe-7s-science",
    component: TableList,
    layout: "/admin"
  },
];

export default dashboardRoutes;
