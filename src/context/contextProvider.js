import React, { useState } from "react";

export const Context = React.createContext();
const initialUser = {
  userName: "",
  email: "",
  password: "",
};
function ContextProvider(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [user, SetUser] = useState(initialUser);

  const ToggleMenu = () => setMenuOpen(!menuOpen);
  const login = () => setIsLogin(true);
  const logout = () => setIsLogin(false);

  const contextValue = {
    // menuOpen,
    // ToggleMenu,
    login,
    isLogin,
    logout,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
}

export default ContextProvider;
