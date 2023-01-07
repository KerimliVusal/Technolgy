import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import {HiOutlineShoppingBag} from 'react-icons/hi'

const Navba=({cartitem}:any)=> {
  return (
    <Navbar  expand="lg" className='navbar ' sticky='top' >
      <Container fluid>
        <Navbar.Brand  className='nav1' >OneTech</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link ><NavLink style={{color:'black',textDecoration:'none'}} to='/'>Home</NavLink> </Nav.Link>
            <Nav.Link ><NavLink style={{color:'black',textDecoration:'none'}} to='/shop'>Shop</NavLink></Nav.Link>
            <NavDropdown title="Pages" id="navbarScrollingDropdown">
             
              <NavDropdown.Item >
                <NavLink style={{color:'black',textDecoration:'none'}} to='/cart'>Cart</NavLink>
              
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
                <NavLink style={{color:'black',textDecoration:'none'}} to='/blog'>Blog</NavLink>
                
              </NavDropdown.Item> <NavDropdown.Item >
                <NavLink style={{color:'black',textDecoration:'none'}} to='/contact'>Contact</NavLink>
                
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link  disabled>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className="me-2">Search</Button>
          </Form>
        <NavLink to='/cart'>  <span className='cartnum1'><HiOutlineShoppingBag className='carticn'></HiOutlineShoppingBag>{cartitem.length?<span className='cartnum'>{cartitem.length}</span>:''}</span></NavLink>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navba;