import { Link, Route, Routes } from "react-router-dom";
import Admin from "./Admin";
import Menu from "./Menu";

export default function App() {
  return (
    <>
      <h1 className="text-3xl font-bold">Hello world!</h1>
      <nav className="bg-pink-200">
        <Link to="/">Home</Link>
        <span> </span>
        <Link to="/admin">Admin</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}
