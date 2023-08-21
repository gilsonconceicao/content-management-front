import { Box, Stack } from "@mui/material";
import Header from "Components/Header/Header";
import { SideBar } from "Components/Menu/Menu";
import { useAuth } from "Contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRouters = () => {
  const { isAuthenticated } = useAuth();
  return (
    <>
      {!isAuthenticated ? (
        <Navigate to='/login' />
      ) : (
        <Stack direction='row'>
          <SideBar />
          <Box width='100%'>
            <Header />
            <Box maxWidth='1200px' m='50px auto'>
              <Outlet />
            </Box>
          </Box>
        </Stack>
      )}
    </>
  );
}