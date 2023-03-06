import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function Portfolio() {
  const [currentPage, setCurrentPage] = useState("Home");

  handlePageChange = (page) => {
    setCurrentPage(page);
  };

  renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    } else if (currentPage === "About") {
      return <About />;
    } else if (currentPage === "Blog") {
      return <Blog />;
    } else {
      return <Contact />;
    }
  };

  return (
    <div>
      <NavTabs
        currentPage={currentPage}
        handlePageChange={this.handlePageChange}
      />
      {renderPage()}
    </div>
  );
}

export default Portfolio;
