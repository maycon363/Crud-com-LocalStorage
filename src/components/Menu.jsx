import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>

      <Navbar bg="success" variant="dark" className="mb-3">
        <Container>
          <Navbar.Brand href="#home">Frota Naval</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link" to="/">Lista Geral</Link>
            <Link className="nav-link" to="/manutencao">Manutenção</Link>
            <Link className="nav-link" to="/construcao">Construção</Link>
            <Link className="nav-link" to="/missao">Missao</Link>
            <Link className="nav-link" to="/treinamento">Treinamento</Link>
            <Link className="nav-link" to="/servico">Serviço</Link>
            <Link className="nav-link" to="/comandantes">Comandantes</Link>
          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}

export default Menu