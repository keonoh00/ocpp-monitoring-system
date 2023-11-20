import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_CLIENT_STATUS } from "../api/gql";
import { POLL_INTERVAL } from "../constants/query";

export interface IClientStatus {
  id: number;
  status?: string;
  value?: string;
}

export interface IGQLClientStatus {
  clientStatus: IClientStatus[];
}

const useClientStatus = () => {
  const [clientStatus, setClientStatus] = useState<IClientStatus[]>([]);
  const { loading, data } = useQuery<IGQLClientStatus>(GET_CLIENT_STATUS, {
    pollInterval: POLL_INTERVAL,
  });

  useEffect(() => {
    if (data) {
      setClientStatus(data.clientStatus);
    }
  }, [data]);

  return { data: clientStatus, isLoading: loading };
};

export default useClientStatus;
