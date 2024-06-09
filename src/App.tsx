import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./components/login/login";
import Register from "./components/register/register";

function App() {
     return (
          <Router>
               <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    {/* Add other routes here as needed */}
               </Routes>
          </Router>
     );
}

export default App;
