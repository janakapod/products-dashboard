import React, { ReactNode } from "react";
import { QueryClientProvider, QueryClient } from "react-query";

interface ReactQueryContextProps {
  children?: ReactNode;
}

export const ReactQueryContext: React.FC<ReactQueryContextProps> = ({
  children,
}) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
