import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import SpacedContainer from "./SpacedContainer";

const Layout = () => {
  return (
    <SpacedContainer>
        <Nav />
        <Outlet />
    </SpacedContainer>
  )
}

export default Layout;