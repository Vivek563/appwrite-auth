import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";
import Login from "./components/login/login";
import Register from "./components/register/register";

function App() {
     return (
          <Router>
               <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    {/* Add other routes here as needed */}
               </Routes>
          </Router>
     );
}

export default App;
