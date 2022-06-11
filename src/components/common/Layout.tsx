import React from "react";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
// import SpacedContainer from "./SpacedContainer";

const Layout = () => {
  return (
    <Box position="relative" >
      <Box position="fixed" bgColor="white" w="100%" zIndex="5">
        <Nav />
      </Box>
      <Outlet />
      <Footer />
    </Box>
  );
};

export default Layout;
