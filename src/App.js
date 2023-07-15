import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/login.js";
import ResetPassword from "./components/reset-password.js";
import SavePassword from "./components/save-password.js";
import Register from "./components/Register";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/save-new-password/:resetToken" element={<SavePassword />}/>
        <Route />
      </Routes>
    </div>
  );
}

export default App;
