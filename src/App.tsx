// src/App.tsx
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";
import Login from "./components/login/login";
import Register from "./components/register/register";
import ProtectedRoute from "./protectrouter";

function App() {
     return (
          <Router>
               <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route
                         path="/dashboard"
                         element={
                              <ProtectedRoute>
                                   <Dashboard />
                              </ProtectedRoute>
                         }
                    />
                    <Route path="/" element={<Navigate to="/dashboard" />} />
               </Routes>
          </Router>
     );
}

export default App;
