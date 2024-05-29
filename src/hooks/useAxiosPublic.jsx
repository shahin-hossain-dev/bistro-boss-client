import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://y-peach-five.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
