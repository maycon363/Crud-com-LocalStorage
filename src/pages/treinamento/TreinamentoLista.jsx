import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap'
import TreinamentoService from '../../services/academico/TreinamentoService'
import { Chip } from '@mui/material'
import { AiOutlineRollback, AiOutlinePlus } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import swal from 'sweetalert';


const TreinamentoLista = () => {

  const [treinamento, setTreinamento] = useState([])

  useEffect(() => {

    setTreinamento(TreinamentoService.getAll())

  }, [])

  function apagar(id) {
    if(swal("Registro Deletado com Sucesso!!!", "Treinamento Cancelado", "success", {dangerMode: true,
    })){
      TreinamentoService.delete(id)
      setTreinamento(TreinamentoService.getAll())
    }
  }
    
  return (
    <div>
        <div className="text-center">
          <h1>Total De Navios no Treinamento</h1>
        </div>
    {treinamento.length === 0 && <h1><Spinner animation="border" variant="success" /> Carregando... </h1>}

    <Container>
      <Row>
       <div className="text-center ">
          <Link className='btn btn-success mb-3 butao' to={'/treinamento/create'}><AiOutlinePlus /> Inserir</Link>
        </div>
          {
            treinamento.map((item, i)=> (
              <Col key={i} md={4} className='ml-4 g-2 letra '  >
                <Card className='mb-2 cards' border="danger">
                  <Card.Body>
                    <Card.Title><strong>{item.navio}</strong></Card.Title>
                  </Card.Body>
                  <Card.Body>
                  <Card.Text><strong>Classe do Navio: </strong>{item.classe}</Card.Text>
                  <Card.Text><strong>Nome do Comandante: </strong>{item.guerra}</Card.Text>
                  <Card.Text><strong>Data do Treinamento: </strong> {item.data}</Card.Text>
                  <Card.Text><strong>Situação do Navio: </strong>  
                      {item.situacao ===  "A" && <Spinner animation="border" variant="success" />}
                      {item.situacao ===  "I" && <Spinner animation="border" variant="danger" />}
                      {item.situacao ===  "N" && <Spinner animation="border" variant="warning" />}
                    </Card.Text>   
                  </Card.Body>
                </Card>
                  <div className='mb-2 iconess'>
                  <Link to={'/treinamento/' + i}>
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
export default TreinamentoLista