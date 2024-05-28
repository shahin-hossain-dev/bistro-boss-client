import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaBook, FaDollarSign, FaUsers } from "react-icons/fa";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });
  console.log(stats);
  return (
    <div>
      <h2 className="text-3xl">
        {" "}
        Hi,{" "}
        <span className="font-bold">
          {user.displayName ? user.displayName : ""}
        </span>{" "}
        Welcome Back!
      </h2>
      <div className="mt-5">
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-secondary ">
              <FaDollarSign className="text-3xl" />
            </div>
            <div className="stat-title">Revenue</div>
            <div className="stat-value">${stats.revenue}</div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUsers className="text-3xl" />
            </div>
            <div className="stat-title"> Users</div>
            <div className="stat-value">{stats.users}</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </div>
            <div className="stat-title"> Orders</div>
            <div className="stat-value">{stats.orders}</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaBook className="text-3xl" />
            </div>
            <div className="stat-title">Menu Items</div>
            <div className="stat-value">{stats.menuItems}</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
