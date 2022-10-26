import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { ThemeContext } from "../contexts/ThemeProvider/ThemeProvider";

const Main = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div data-theme={isDarkMode ? "light" : "dark"}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
