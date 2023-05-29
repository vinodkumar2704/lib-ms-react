import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("logstate");
    navigate("/");
  };
  return (
    <div>
      <Link to={"/library"}>Go to Library.</Link>
      <button onClick={handleLogout} type="button">
        Log out
      </button>
    </div>
  );
};

export default Home;
