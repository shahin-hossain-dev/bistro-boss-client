import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import loadingImg from "../assets/home/loading.webp";
const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLogin] = useAdmin();

  const location = useLocation();

  if (loading || isAdminLogin) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <img src={loadingImg} alt="" className="w-[100px]" />
      </div>
    );
  }

  if (!(user && isAdmin)) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default AdminRoute;
