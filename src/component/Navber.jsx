import { Link, NavLink, useLocation } from "react-router-dom";
import Banner from "./Banner";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Navber = ({ value, wish }) => {
  const location = useLocation();
  const [state, setState] = useState(true);

  useEffect(() => {
    if (location.pathname === "/") {
      setState(true);
    } else {
      setState(false);
    }
  }, [location]);
  const links = (
    <>
      <NavLink
        className={({ isActive }) => `${isActive ? "underline font-bold" : ""}`}
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => `${isActive ? "underline font-bold" : ""}`}
        to={"/statistics"}
      >
        Statistics
      </NavLink>
      <NavLink
        className={({ isActive }) => `${isActive ? "underline font-bold" : ""}`}
        to={"/dashboard"}
      >
        Dashboard
      </NavLink>
    </>
  );

  return (
    <div>
      <nav
        className={`${
          state && "bg-[#9538E2]"
        }  max-w-[96%] mx-auto rounded-2xl mt-5 mb-4`}
      >
        <div className="navbar px-10 pt-5">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className={`${
                  state
                    ? "menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    : "menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black"
                }`}
              >
                {links}
              </ul>
            </div>
            <Link to={"/"} className={state ? "text-white text-xl" : "text-black text-xl"}>
              Gadget Heaven
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul
              className={`${
                state
                  ? "menu menu-horizontal px-2 space-x-5 text-white"
                  : "menu menu-horizontal px-2 space-x-5  text-black"
              }`}
            >
              {links}
            </ul>
          </div>
          <div className="navbar-end space-x-4">
            <Link
              className={
                state
                  ? "bg-white p-2 rounded-full"
                  : "bg-cyan-700 p-2 rounded-full"
              }
              to={"/dashboard/cardAdded"}
            >
              <div
                className={
                  state
                    ? "bg-white flex gap-0.5 relative"
                    : "bg-cyan-700e flex gap-0.5 relative"
                }
              >
                <img
                  className="w-4"
                  src="https://img.icons8.com/?size=100&id=85112&format=png&color=000000"
                  alt=""
                />
                <div className="text-sm absolute left-5 bottom-2.5 p-1 rounded-full bg-yellow-300">
                  {value}
                </div>
              </div>
            </Link>

            <Link
              className={
                state
                  ? "bg-white p-2 rounded-full"
                  : "bg-cyan-700 p-2 rounded-full"
              }
              to={"/dashboard/wishlistAdded"}
            >
              <div
                className={
                  state
                    ? "bg-white flex gap-0.5 relative"
                    : "bg-cyan-700e flex gap-0.5 relative"
                }
              >
                <img
                  className="w-4"
                  src="https://img.icons8.com/?size=100&id=99981&format=png&color=000000"
                  alt=""
                />
                <div className="text-sm absolute left-5 bottom-2.5 p-1 rounded-full bg-yellow-300">
                  {wish}
                </div>
              </div>
            </Link>
          </div>
        </div>
        {state && <Banner />}
      </nav>
    </div>
  );
};

Navber.propTypes = {
  value: PropTypes.number,
  wish: PropTypes.number,
};

export default Navber;
