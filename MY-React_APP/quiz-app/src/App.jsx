import { Routes, Routes } from "react-router-dom";
import { Home } from "./components/Home";
imp;
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<h1>Login Page</h1>}></Route>
        <Route path="/logout" element={<h1>Logout Page</h1>}></Route>
      </Routes>
    </>
  );
}

export default App;
