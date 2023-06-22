import React from "react";
import "./App.css";
import MainProducts from "./components/MainProducts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// 리엑트쿼리 데브툴 이용하기위함
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainProducts />
      {/* 리액트쿼리 데브툴 설정 */}
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}
