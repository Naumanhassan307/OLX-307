import { Navbar, Form, InputGroup, FormControl } from "react-bootstrap";
import CustomizedDialogs from "../../components/addCard/AddCard";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import "./Header.css";
function Header() {
  return (
    <>
      <div className="parent-div">
        <Navbar bg="light" expand="lg" className="main-nav">
          <Link to="/">
            <Navbar.Brand className="nav-logo">OlX</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Form inline className="nav-first-form">
              <FormControl
                type="text"
                placeholder="Find City "
                className="mr-sm-2"
              />
            </Form>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <Form inline className="nav-second-form">
              <InputGroup>
               
                <FormControl
                  className="nav-2nd-form"
                  placeholder="Find Cars, Mobile and more..."
                  aria-label="Find Cars, Mobile and more..."
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Form>
            {/* <Button outline="none" className="main-nav-btn">
            Login
          </Button> */}
            <div className="nav-second-form">
              <CustomizedDialogs />
            </div>
            &nbsp; &nbsp; &nbsp;
            <div className="log-btn" className="nav-second-form">
              {/* <Loginpop /> */}
              <Link to="/login">
                <Button variant="outlined" color="primary">
                  Login
                </Button>
              </Link>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}

export default Header;
