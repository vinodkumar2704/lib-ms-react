import { createRoot } from "react-dom/client";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Start from "./Start";
import Login from "./Login";
import Register from "./Register";
import ProtectedRoute from "./ProtectedRoutes";
import Library from "./Library";
// routes
// /login
// /signup
// /home => Borrowed + return
// /library =>borrow + Add book.
// /library/add-book =>
//

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/library"
          element={
            <ProtectedRoute>
              <Library />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(<App />);
