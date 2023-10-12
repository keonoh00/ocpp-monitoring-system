import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../constants/query";
import { axiosInstance } from "../api";

const getChargerStatus = async (): Promise<unknown> => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const response = await axiosInstance.get("/");
  console.log(response.data);

  return response.data;
};

const useChargerStatus = () => {
  return useQuery([QUERY_KEYS.CHARGER_STATUS], getChargerStatus, {
    retry: true,
  });
};

export default useChargerStatus;
