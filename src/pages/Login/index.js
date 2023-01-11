import React, { useContext, useEffect, useState } from "react";
import { InputElement } from "../../components/elements/InputElement";
import { Context } from "../../context/contextProvider";
import { setItemLocalStorage } from "../../Utilities/setItemLocalStorage";

function Login() {
  const { login } = useContext(Context);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submitHandler() {
    setItemLocalStorage("userName", userName);
    setItemLocalStorage("password", password);
    setItemLocalStorage("email", email);
    login();
  }

  return (
    <div className="h-screen flex bg-gray-100">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <form onSubmit={submitHandler}>
          <InputElement
            type={"text"}
            value={userName}
            onChange={setUserName}
            name="userName"
            label="نام کاربری"
          />
          <InputElement
            type={"text"}
            value={email}
            onChange={setEmail}
            name="email"
            label="ایمیل "
          />
          <InputElement
            type={"password"}
            value={password}
            onChange={setPassword}
            name="password"
            label="رمز عبور"
          />

          <div className="flex justify-center items-center mt-6">
            <button
              type="submit"
              className={`bg-blue-500 hover:bg-blue-600 pt-2 pb-3 px-5 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
            >
              ورود
            </button>
            <p></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
