import { FaCalendar, FaHome, FaList, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { MdPostAdd } from "react-icons/md";
const Dashboard = () => {
  return (
    <div className="flex">
      {/* dashboard right side bar */}
      <div className="w-64 p-5  font-bold min-h-full bg-orange-300">
        <ul className="manu space-y-3 ">
          <li>
            <NavLink to={"/dashboard/user-home"}>
              <span className="flex gap-2 items-center">
                <FaHome /> <span>User Home</span>
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/reservation"}>
              <span className="flex gap-2 items-center">
                <FaCalendar /> <span>Reservation</span>
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/cart"}>
              <span className="flex gap-2 items-center">
                <FaShoppingCart /> <span>My Cart</span>
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/cart"}>
              <span className="flex gap-2 items-center">
                <MdPostAdd /> <span>Add Review</span>
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/my-bookings"}>
              <span className="flex gap-2 items-center">
                <FaList /> <span>My Bookings</span>
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
