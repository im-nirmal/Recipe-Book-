import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <Navbar expand="lg" >
      <Container>
        <Link to={'/'} style={{textDecoration:'none'}}>
          <Navbar.Brand href="#home" className=' fw-bolder fs-2 text-dark d-flex justify-content-center align-items-center'>
            <i className="fa-solid fa-utensils me-3 "></i>
             Recipe Book
          </Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
    
  )
}

export default Header