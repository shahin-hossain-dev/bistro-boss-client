// import { useEffect } from "react";
// import { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {
  const axiosPublic = useAxiosPublic();
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("https://y-peach-five.vercel.app/menu")
  //     .then((res) => res.json())
  //     .then((data) => setMenu(data));
  // }, []);
  // return [menu, setMenu];
  const {
    data: menu = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosPublic("/menu");

      return res.data;
    },
  });
  return [menu, refetch, isLoading];
};

export default useMenu;
