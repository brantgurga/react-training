import { Link, Route, Routes } from "react-router-dom";
import Admin from "./Admin";
import Menu from "./Menu";
import Heading from "./shared/heading";

export default function App() {
  return (
    <>
      <Heading level={2}>Hello world</Heading>
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
