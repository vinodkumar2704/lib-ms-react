import { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ContextProvider } from "./context";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const { setIsLogin } = useContext(ContextProvider);
  // eslint-disable-next-line no-unused-vars
  const login = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!localStorage.getItem("user")) {
      alert("invalid username or password.");
      setUser({ username: "", password: "" });
    } else {
      const loggeduser = JSON.parse(localStorage.getItem("user") || "");
      if (
        loggeduser.username === user.username &&
        loggeduser.password === user.password
      ) {
        localStorage.setItem("logstate", "true");
        setIsLogin({ name: user.username, id: Math.random(), status: true });
        navigate("/");
      } else {
        alert("invalid username or password.");
        setUser({ username: "", password: "" });
      }
    }
  };
  return !localStorage.getItem("logstate") ? (
    <div>
      <form onSubmit={login}>
        <label htmlFor="username">
          Username
          <input
            id="username"
            name="username"
            placeholder="Username"
            type="text"
            value={user.username}
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
          ></input>
        </label>
        <label htmlFor="password">
          Password
          <input
            id="password"
            name="password"
            placeholder="Password"
            type="password"
            value={user.password}
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
          ></input>
        </label>
        <button>Submit</button>
      </form>
      <Link to={"/register"}>Register</Link>
    </div>
  ) : (
    <Navigate to={"/"} />
  );
};

export default Login;
