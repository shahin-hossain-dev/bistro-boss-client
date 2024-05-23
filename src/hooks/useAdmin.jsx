import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();
  const { data: isAdmin, isPending: isAdminLogin } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      console.log(res.data.isAdmin);
      return res.data?.isAdmin;
    },
  });

  return [isAdmin, isAdminLogin];
};

export default useAdmin;
