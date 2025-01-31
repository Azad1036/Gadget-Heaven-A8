import { NavLink } from "react-router-dom";

import PropTypes from "prop-types";

const Gadgets = ({ category }) => {
  return (
    <div className="flex flex-col gap-4 bg-white p-6 rounded-xl border border-[#09080F1A]">
      {category.map((category) => (
        <NavLink
            to={`category/${category.category}`} 
          className={({ isActive }) => `btn ${isActive ? "btn-primary" : ""}`}
          key={category.category}
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

Gadgets.propTypes = {
  category: PropTypes.array,
};

export default Gadgets;
