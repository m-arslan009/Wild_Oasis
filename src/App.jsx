import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Dashboard from "./Pages/Dashboard";
import Setting from "./Pages/Setting";
import Booking from "./Pages/Booking";
import Cabins from "./Pages/Cabins";
import Login from "./Pages/Login";
import User from "./Pages/User";
import Account from "./Pages/Account";
import PageNotFound from "./Pages/PageNotFound";
import GlobalStyles from "./Styles/GlobalStyles";
import AppLayout from "./UI/AppLayout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 1000 * 60, // one minute
      staleTime: 1000 * 60,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="setting" element={<Setting />} />
            <Route path="booking" element={<Booking />} />
            <Route path="cabins" element={<Cabins />} />
            <Route path="user" element={<User />} />
            <Route path="account" element={<Account />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{
          margin: "8px",
        }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-gray-0)",
            color: "var(--color-gray-700)",
          },
        }}
      />
    </QueryClientProvider>
  );
}
