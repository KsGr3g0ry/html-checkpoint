import logo from './logo.svg';
import './App.css';
import { Button, Form, Navbar, Nav, FormControl } from 'react-bootstrap';
import { Component } from 'react';



class App extends Component{
  render(){
    return(
      <div className="App">
        <div>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">GMDB</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#login">Login</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar>
        </div>
        <h2>Login</h2>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email"/>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password"/>
          </Form.Group>
          <Button color="primary">Submit</Button>
        </Form>
    </div>
    )
  }
}
  

export default App;
