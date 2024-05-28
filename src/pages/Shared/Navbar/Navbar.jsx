import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { FaShoppingCart } from "react-icons/fa";
import useAdmin from "../../../hooks/useAdmin";
import useCart from "../../../hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [carts] = useCart();
  const [isAdmin] = useAdmin();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        //logout
        Swal.fire({
          title: "Logout Successful",
          text: "You clicked the button!",
          icon: "success",
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const navOption = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/menu"}>Our Menu</Link>
      </li>
      <li>
        <Link to={"/order/salad"}>Order Food</Link>
      </li>
      <li>
        <Link to={"/secret"}>Secret</Link>
      </li>
      {user && isAdmin && (
        <li>
          <Link to={"/dashboard/admin-home"}>Dashboard</Link>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <Link to={"/dashboard/user-home"}>Dashboard</Link>
        </li>
      )}

      <li>
        <Link to={"/dashboard/cart"}>
          <div className="relative me-10">
            <FaShoppingCart className="text-2xl" />
            <div className="badge badge-secondary absolute -top-2 border-2 border-white -right-10">
              +{carts.length}
            </div>
          </div>
        </Link>
      </li>
      {user ? (
        <>
          {/* <li>
            <p>{user?.displayName}</p>
          </li> */}

          <img
            src={user?.photoURL}
            alt=""
            className="w-[50px] rounded-[100%]"
          />

          <li>
            <button onClick={handleLogOut}>Logout</button>
          </li>
        </>
      ) : (
        <>
          {" "}
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar fixed bg-opacity-20 bg-black text-white z-10 max-w-screen-xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOption}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Bistro Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOption}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
