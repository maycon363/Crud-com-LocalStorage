import React from 'react'
import { Container, Dropdown, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>

      <Navbar bg="success" variant="dark" className="mb-3">
        <Container>
          <Navbar.Brand href="/">Frota Naval</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link" to="/">Lista Geral</Link>
            <Link className="nav-link" to="/solicita">Solicitação de Serviços</Link>
            <Dropdown>
              <NavDropdown title="Serviços" className='show' id="basic-nav-dropdown">
                <Link className="dropdown-item" to="/manutencao">Manutenção</Link>
                <Link className="dropdown-item" to="/construcao">Construção</Link>
                <Link className="dropdown-item" to="/missao">Missao</Link>
                <Link className="dropdown-item" to="/treinamento">Treinamento</Link>
                <Link className="dropdown-item" to="/servico">Serviço</Link>
                <Link className="dropdown-item" to="/comandantes">Comandantes</Link>
                <Link className="dropdown-item" to="/armamentos">Armamentos</Link>
              </NavDropdown>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}

export default Menu