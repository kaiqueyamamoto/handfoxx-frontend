import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

function Header() {
  return (
    <>
      <Navbar color="dark" dark>
        <div className="container">
          <NavbarBrand href="/">Link</NavbarBrand>
        </div>
      </Navbar>
    </>
  );
}

export default Header;
