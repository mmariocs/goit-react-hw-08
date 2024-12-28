import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import s from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <main className={s.container}>
      <h1 className={s.title}>Login</h1>
      <LoginForm />
    </main>
  );
};

export default LoginPage;
