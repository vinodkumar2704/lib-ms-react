import { Link, useNavigate } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <h1>Welcome to library management system</h1>

      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/register">
        <button>Register</button>
      </Link>
    </div>
  );
};

export default Start;
