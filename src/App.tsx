import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";
import Login from "./components/login/login";
import Register from "./components/register/register";
import ProtectedRoute from "./protectrouter";
import RedirectAuthenticated from "./redirectauth";

function App() {
     return (
          <Router>
               <Routes>
                    <Route
                         path="/login"
                         element={
                              <RedirectAuthenticated>
                                   <Login />
                              </RedirectAuthenticated>
                         }
                    />
                    <Route
                         path="/register"
                         element={
                              <RedirectAuthenticated>
                                   <Register />
                              </RedirectAuthenticated>
                         }
                    />
                    <Route
                         path="/"
                         element={
                              <ProtectedRoute>
                                   <Dashboard />
                              </ProtectedRoute>
                         }
                    />
               </Routes>
          </Router>
     );
}

export default App;
