import { Route, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";
import Login from "./components/login/login";
import Register from "./components/register/register";
import ProtectedRoute from "./protectrouter";

function App() {
     return (
          <Router>
               <Route
                    path="/"
                    element={
                         <ProtectedRoute>
                              <Dashboard />
                              <Route path="/login" element={<Login />} />
                              <Route path="/register" element={<Register />} />
                         </ProtectedRoute>
                    }
               />
          </Router>
     );
}

export default App;
