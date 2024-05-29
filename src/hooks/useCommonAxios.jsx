import axios from "axios";

const commonAxios = axios.create({
  baseURL: "https://y-peach-five.vercel.app/",
});

const useCommonAxios = () => {
  return commonAxios;
};

export default useCommonAxios;
