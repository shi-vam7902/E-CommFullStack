import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AuthlayOut } from "./components/auth/layout";
import { AuthLogin } from "./pages/auth/login";
import { AuthRegister } from "./pages/auth/register";

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/*comman*/}
      <h1>Header Component</h1>
      <Routes>
        <Route path="/auth" element={<AuthlayOut />}>
          <Route path="login" element={<AuthLogin />}></Route>
          <Route path="register" element={<AuthRegister />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
