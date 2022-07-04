import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Spinner, Container, Row, Col, Card } from 'react-bootstrap'
import {AiOutlineRollback} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import swal from 'sweetalert';
import { AiOutlinePlus } from 'react-icons/ai'
import ComandatesService from '../../services/academico/ComandatesService'
import { Chip } from '@mui/material'

const ComandantesLista = () => {
    const [comandante, setConmandante] = useState([])

  useEffect(() => {

    setConmandante(ComandatesService.getAll())

  }, [])

  function apagar(id) {
    if(swal("Deletado com Sucesso!!!", "Registro apagado", "success", {dangerMode: true,})){
        ComandatesService.delete(id)
        setConmandante(ComandatesService.getAll())
    }
  }

  return (
    <div>
        <div className="text-center">
          <h1>Total De Comandates de Esquadra</h1>
        </div>
        {comandante.length === 0 && <h1><Spinner animation="border" variant="success" />Carregando... </h1>}

    <Container>
      <Row>
        <div className="text-center">
          <Link className='btn btn-success mb-2 butao' to={'/comandantes/create'}><AiOutlinePlus /> Inserir</Link>
        </div>
            {
            comandante.map((item, i)=> (
                <Col key={i} md={4} className='ml-4 g-2 '  >
                    <Card className='mb-2 cards letra' border="danger">
                      <Card.Body>
                        <Card.Title>
                          <strong>{item.nome}</strong>
                        </Card.Title>
                      </Card.Body>
                      <Card.Body >
                        <Card.Text><strong>Data de Nascimento: </strong>{item.data}</Card.Text>
                        <Card.Text><strong>Idade: </strong> {item.idade}</Card.Text>
                        <Card.Text><strong>CPF: </strong>{item.cpf}</Card.Text>
                        <Card.Text><strong>RG: </strong> {item.rg}</Card.Text>
                        <Card.Text className='lets'><strong>Situação do Navio: </strong> 
                            {item.situacao ===  "A" && <Spinner animation="border" variant="success" />}
                            {item.situacao ===  "I" && <Spinner animation="border" variant="danger" />}
                            {item.situacao ===  "N" && <Spinner animation="border" variant="warning" />}
                        </Card.Text>   
                      </Card.Body>
                    </Card>
                        <div className='mb-3 iconess'>
                            <Link to={'/comandantes/' + i}>
                              <Chip
                                label="Editar"
                                color="info"
                              />
                            </Link>{' '}
                            
                            <Chip
                              color="error"
                              label="Deletar"
                              onClick={() => apagar(i)}
                            />
                        </div>
                </Col>
              ))
            }
            <div className='mb-2 bots'>
              <Link to={-1} className='btn btn-danger'><AiOutlineRollback/> Voltar</Link>
            </div>
          </Row>
        </Container>
      </div>
    );
};
export default ComandantesLista