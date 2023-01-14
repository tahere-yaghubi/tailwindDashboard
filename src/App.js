import { useContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/modules/Main";
import MainNav from "./components/modules/MainNav";
import Sidebar from "./components/modules/Sidebar";
import { Context } from "./context/contextProvider";
import NotFound from "./pages/404";
import Cart from "./pages/Cart";
import Dashboard from "./pages/Dashboard";
import Dates from "./pages/Dates/indx";
import Login from "./pages/Login";
import Messages from "./pages/Messages";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Users from "./pages/Users";

const ROUTES = [
  {
    id: 1,
    Component: Dashboard,
    path: "/",
  },
  {
    id: 2,
    Component: Reports,
    path: "/reports",
  },
  {
    id: 3,
    Component: Settings,
    path: "/settings",
  },
  {
    id: 4,
    Component: Messages,
    path: "/messages",
  },
  {
    id: 5,
    Component: Users,
    path: "/users",
  },
  {
    id: 6,
    Component: Cart,
    path: "/cart",
  },
  {
    id: 7,
    Component: Dates,
    path: "/dates",
  },
];

function App() {
  const [isMobile, setISMobile] = useState(false);
  const { isLogin } = useContext(Context);
  if (!isLogin) {
    return (
      <Routes>
        <Route path="*" element={<Login />} />
      </Routes>
    );
  } else {
    return (
      <div className="flex text-black flex-col-reverse h-screen w-full lg:flex-row md:flex-row sm:flex-col overflow-hidden relative">
        <div className="w-full h-screen flex flex-grow flex-col ">
          <MainNav />
          <Routes>
            {ROUTES.map(({ path, Component, id }) => (
              <Route key={id} path={path} element={<Component />} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        <Sidebar isMobile={isMobile} setISMobile={setISMobile} />
      </div>
    );
  }
}
export default App;
