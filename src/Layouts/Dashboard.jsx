import {
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { MdPostAdd } from "react-icons/md";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
const Dashboard = () => {
  const [cart] = useCart();

  //Todo: get Admin value from the database
  // const isAdmin = true;
  const [isAdmin] = useAdmin();
  // console.log(isAdmin);
  return (
    <div className="flex min-h-screen">
      {/* dashboard right side bar */}
      <div className="w-64 p-5  font-bold min-h-full bg-orange-300">
        <ul className="manu space-y-3 ">
          {isAdmin ? (
            <>
              <li>
                <NavLink to={"/dashboard/admin-home"}>
                  <span className="flex gap-2 items-center">
                    <FaHome /> <span>Admin Home</span>
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/add-item"}>
                  <span className="flex gap-2 items-center">
                    <FaUtensils /> <span>Add Item</span>
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manage-items"}>
                  <span className="flex gap-2 items-center">
                    <FaList /> <span>Manage Items</span>
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manage-bookings"}>
                  <span className="flex gap-2 items-center">
                    <FaBook /> <span>Manage Bookings</span>
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/users"}>
                  <span className="flex gap-2 items-center">
                    <FaUsers /> <span>All Users</span>
                  </span>
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to={"/dashboard/user-home"}>
                  <span className="flex gap-2 items-center">
                    <FaHome /> <span>User Home</span>
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/history"}>
                  <span className="flex gap-2 items-center">
                    <FaHome /> <span>Payment History</span>
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
                    <FaShoppingCart /> <span>My Cart ({cart.length})</span>
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
              <li>
                <NavLink to={"/dashboard/paymentHistory"}>
                  <span className="flex gap-2 items-center">
                    <FaList /> <span>Payment Real History</span>
                  </span>
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          {/* shared/common nav links */}
          <li>
            <NavLink to={"/"}>
              <span className="flex gap-2 items-center">
                <FaHome /> <span> Home</span>
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/"}>
              <span className="flex gap-2 items-center">
                <FaSearch /> <span> Menu</span>
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/"}>
              <span className="flex gap-2  items-center">
                <FaEnvelope /> <span> Contact</span>
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
