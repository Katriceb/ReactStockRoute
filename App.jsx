import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import About from "./Page/About";
import Dashboard from "./Page/DashBoard";
import Stock from "./Page/Stock";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Stock" element={<Dashboard />} />
        <Route path="/Stock/:symbol" element={<Stock />} />
      </Routes>
    </div>
  );
}

export default App;
