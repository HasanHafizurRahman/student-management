// Layout.jsx

import React from "react";
import Navbar from "./component/navbar/Navbar";
import { Outlet } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

const Layout = () => {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </div>
  );
};

export default Layout;
