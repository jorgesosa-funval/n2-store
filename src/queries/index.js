// import { QueryClient } from "@tanstack/react-query";

import { QueryClient } from "react-query";

let queryClient;

export const getQueryClient = () => {
  if (!queryClient) {
    queryClient = new QueryClient();
  }
  return queryClient;
};
