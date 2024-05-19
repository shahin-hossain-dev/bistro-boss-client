import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
// Auth Context Hook for re-use
const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth;
