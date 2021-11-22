import React from "react";

// Footer component
const Footer = () => {
  const style = {
    
    background: "#24292e",
    color: "white",
    position: "fixed",
    bottom: "0",
    width: "100%",
    textAlign: "left",
    height: "30px",
    
  };
  const anchorStyle = {
    color: "white",
    textDecoration: "none"
  };
  return (
    <footer style={style}>
     Chris Allan Wajega
    </footer>
  );
};

export default Footer;
