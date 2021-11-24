import { useState } from "react";
import {
  Navbar,
  Nav,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";
import { useNavigate } from "react-router";





export const MyNavBar = ({setSearch}) => {
  const[sValue, setSValue] = useState("")
  const navigate = useNavigate()
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand onClick={() => navigate(`/`)}>Job Search</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={() => navigate(`/`)}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate(`/favourites`)}>Favourites</Nav.Link>
          </Nav>
          <Form >
            <FormControl onKeyUp={(e) => (setSearch(e.target.value))} type="text" placeholder="Search" className="d-flex mr-sm-2" />
            {/* <Button onClick={() => (setSearch(sValue))} variant="outline-success">Search</Button> */}
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
