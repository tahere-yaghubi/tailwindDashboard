
import {
  
  DashboardIcon,
  ReportsIcon,
  DatesIcon,
  MessagesIcon,
  UsersIcon,
} from "../assets/icons";
import Dashboard from "../pages/Dashboard";
import Dates from "../pages/Dates/indx";
import Messages from "../pages/Messages";
import Reports from "../pages/Reports";
import Users from "../pages/Users";




export const ROUTES = [
  {
    id: 1,
    title: "داشبورد",
    Component: Dashboard,
    path: "/",
    Icon: DashboardIcon,
  },
  {
    id: 2,
    title: "گزارش",
    Component: Reports,
    Icon: ReportsIcon,
    path: "cart",
  },
  {
    id: 3,
    title: "کاربران",
    Component: Users,
    Icon: UsersIcon
    ,
    path: "users",
  },
  {
    id: 5,
    title: "یادآوری",
    Icon: DatesIcon,
    Component: Dates,
    path: "dates",
  },
  {
    id: 6,
    title: "پیام ها",
    Icon: MessagesIcon,
    Component:Messages ,
    path: "messages",
  },
];

