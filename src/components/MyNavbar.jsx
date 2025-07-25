import { Container, Nav, Navbar } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <Navbar expand='lg' className='bg-dark' data-bs-theme='dark'>
      <Container fluid={true}>
        <Navbar.Brand href='#home'>EpiBook</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>About</Nav.Link>
            <Nav.Link href='#browse'>Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
