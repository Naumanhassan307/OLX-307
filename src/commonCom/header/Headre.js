import { Navbar, Form, InputGroup, FormControl, Button } from "react-bootstrap";
import CustomizedDialogs from "../../components/addCard/AddCard"
import Loginpop from "../../components/login/Popup"

import "./Header.css";
function Header() {
 
  return (
    <>
      <div className="parent-div">
        <Navbar bg="light" expand="lg" className="main-nav">
          <Navbar.Brand className="nav-logo">OlX</Navbar.Brand>

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
                {/* <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">
                  <BsSearch />
                </InputGroup.Text>
              </InputGroup.Prepend> */}
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
              <Loginpop />
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}

export default Header;
