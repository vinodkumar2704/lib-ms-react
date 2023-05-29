import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
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
        navigate("/home");
      } else {
        alert("invalid username or password.");
        setUser({ username: "", password: "" });
      }
    }
  };
  return (
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
    </div>
  );
};

export default Login;
