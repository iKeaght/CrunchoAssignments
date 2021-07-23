import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap';
const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Text className="text-light">
          Cruncho Assignment
        </Navbar.Text>
        <Navbar.Brand>
          <img
            alt=""
            src="../logoCruncho.png"
            width="150"
            height="50"
          />{' '}
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}
export default Header;