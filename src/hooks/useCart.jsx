import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
  // data fetch using tanstack query
  const axiosSecure = useAxiosSecure();
  const { data: carts = [] } = useQuery({
    queryFn: async () => {
      const res = await axiosSecure.get("/carts");
      return res.data;
    },
    queryKey: ["carts"],
  });

  return [carts];
};

export default useCart;
