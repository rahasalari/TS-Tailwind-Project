import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Boxes from "./Boxes";
import AddTasks from "./AddTask";
import Find from "./Find";
import LearnMore from "./LearnMore";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solution" element={<Boxes />} />
        <Route path="/features" element={<AddTasks />} />
        <Route path="/pricing" element={<Find />} />
        <Route path="/support" element={<LearnMore />} />
      </Routes>
    </div>
  );
};
export default Routers;