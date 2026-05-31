import { NavLink } from "react-router-dom";

function Sidebar() {

  return (

    <div className="sidebar">

      <h2>Football Planner</h2>

      <nav>

        <NavLink to="/">Home</NavLink>

        <NavLink to="/about">About</NavLink>

        <NavLink to="/training">Training</NavLink>

        <NavLink to="/nutrition">Nutrition</NavLink>

        <NavLink to="/contact">Contact</NavLink>

      </nav>

    </div>

  );

}

export default Sidebar;