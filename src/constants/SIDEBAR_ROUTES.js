import { Dashboard, Dates, Messages, Reports, UsersIcon } from "../assets/icons";

export const SIDEBAR_ROUTES = [
  {
    id: 1,
    title: "داشبورد",
    Icon: Dashboard,
    path : 'reports'
  },
  {
    id: 2,
    title: "گزارش",
    Icon: Reports,
    path : 'cart'
  },
  {
    id: 3,
    title: "کاربران",
    Icon: UsersIcon,
    path:'users'
  },
  // {
  //   id: 4,
  //   title: "تنظیمات",
  //   icon: "settings-outline",
  //   path:'settings'
  // },
  {
    id: 5,
    title: "یادآوری",
    Icon: Dates,
    path :'dates'
  },
  {
    id: 6,
    title: "پیام ها",
    Icon: Messages,
    path:'messages'

  },
];
