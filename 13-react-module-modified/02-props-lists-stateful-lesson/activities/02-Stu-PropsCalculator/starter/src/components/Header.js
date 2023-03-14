import React from "react";
import "../styles/Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads
const styles = {
  header: {
  background: "#b71775",
  height: 200
  },
  h1: {
    margin: 0,
    paddingTop: 75,
    textAlign: "center",
    color: "white",
    fontSize: "3rem"
  }
}

function Header() {
  return (
    <header style={styles.header} className="header">
      <h1 style={styles.h1}>Welcome</h1>
    </header>
  );
}

export default Header;
