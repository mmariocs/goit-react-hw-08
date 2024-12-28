import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { toast } from "react-hot-toast";
import s from "./LoginForm.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const { email, password } = form.elements;

    if (!email.value || !password.value) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsLoading(true);

    dispatch(
      login({
        email: email.value.trim(),
        password: password.value.trim(),
      })
    )
      .unwrap()
      .then(() => {
        toast.success("Login successful!");
        navigate("/contacts");
      })
      .catch((error) => {
        toast.error(
          error?.message || "Login failed. Please check your credentials."
        );
      })
      .finally(() => {
        setIsLoading(false);
        form.reset();
      });
  };

  return (
    <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={s.label}>
        Email
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          disabled={isLoading}
          required
        />
      </label>
      <label className={s.label}>
        Password
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          disabled={isLoading}
          required
        />
      </label>
      <button
        type="submit"
        disabled={isLoading}
        className={isLoading ? s.loadingButton : ""}
      >
        {isLoading ? "Logging in..." : "Log In"}
      </button>
    </form>
  );
};

export default LoginForm;
