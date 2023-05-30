import { createRoot } from "react-dom/client";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import ProtectedRoute from "./ProtectedRoute";
import Library from "./Library";
import { FC } from "react";
import { ContextWrapper } from "./context";
// routes
// /login
// /signup
// /home => Borrowed + return
// /library =>borrow + Add book.
// /library/add-book =>
//

const App: FC = () => {
  return (
    <BrowserRouter>
      <ContextWrapper>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/library"
            element={
              <ProtectedRoute>
                <Library />
              </ProtectedRoute>
            }
          />
        </Routes>
      </ContextWrapper>
    </BrowserRouter>
  );
};

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(<App />);
