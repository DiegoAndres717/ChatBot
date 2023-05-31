"use client";

import { MessagesProvider } from "@/context/message";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import React, { FC } from "react";

interface ProviderProps {
  children: React.ReactNode;
}

export const Providers: FC<ProviderProps> = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <MessagesProvider>{children}</MessagesProvider>
    </QueryClientProvider>
  );
};
