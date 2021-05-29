import React, { Component,} from "react";
import NavTabs from "./NavTabs";
// import ImageHeader from "./ImageHeader";
import Project from "./pages/Project";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

// import BackgroundImage from "../assets/JZ.png"


class Portfolio extends Component {

  state = {
    currentPage: "About"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Project") {
      return <Project />;
    } else if (this.state.currentPage === "About") {
      return <About />;
    } else if (this.state.currentPage === "Blog") {
      return <Blog />;
    } else {
      return <Contact />;
    };
  };

  render() {
    return (
      <div>
        {/* <Header/> */}

        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  };
};

export default Portfolio;
