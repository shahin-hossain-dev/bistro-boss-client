import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "https://y-peach-five.vercel.app",
});

const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  // interceptor request এর মাধ্যমে api call করার সময় token কে server side এ পাঠানো হচ্ছে।
  axiosSecure.interceptors.request.use(function (config) {
    const token = localStorage.getItem("access-token");
    // console.log("request stopped by interceptor", token);
    config.headers.authorization = `Bearer ${token}`;
    return config;
  }),
    function (error) {
      return Promise.reject(error);
    };

  // interceptor response কে use করা হচ্ছে কারণ server side থেকে যে response তার সাথে যদি error code 401 & 403 আসে তাহলে user কে handle করে login page পাঠিয়ে দেয়া।
  // interceptor 401 and 401 status
  axiosSecure.interceptors.response.use(
    function (response) {
      // console.log(response);
      return response;
    },
    async (error) => {
      const status = error.response.status;
      // for 401 and 403 status logout and navigate the user to login page
      if (status === 401 || status === 403) {
        await logOut();
        navigate("/login");
      }
      console.log("status error", error.response.status);
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
