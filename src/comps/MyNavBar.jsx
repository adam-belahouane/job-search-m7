
import {
  Navbar,
  Nav,
  FormControl,
  Form
} from "react-bootstrap";
import { useNavigate } from "react-router";
import { setSearchAction } from "../actions";
import { useSelector, useDispatch } from "react-redux";



export const MyNavBar = () => {
  const navigate = useNavigate()
  const jobs = useSelector(state => state.jobs)
  const dispatch = useDispatch()
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
            <FormControl onKeyUp={(e) => (dispatch(setSearchAction(e.target.value)))} type="text" placeholder="Search" className="d-flex mr-sm-2" />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};


export default MyNavBar