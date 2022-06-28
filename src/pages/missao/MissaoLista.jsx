import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MissaoService from '../../services/academico/MissaoService'
import { AiOutlinePlus } from 'react-icons/ai'
import { Chip } from '@mui/material'
import { AiOutlineRollback } from 'react-icons/ai'
import swal from 'sweetalert';


const MissaoLista = () => {

      const [missao, seMissao] = useState([])

      useEffect(() => {

        seMissao(MissaoService.getAll())

      }, [])

      function apagar(id) {
        if(swal("Registro Deletado com Sucesso!!!", "Registro apagado", "success", {dangerMode: true,
        })){
          MissaoService.delete(id)
          seMissao(MissaoService.getAll())
        }
      }

      return (
       <div>
        <div className="text-center">
          <h1>Total De Navios em Missão</h1>
        </div>
    {missao.length === 0 && <h1><Spinner animation="border" variant="success" /> Carregando... </h1>}

    <Container>
      <Row>
       <div className="text-center">
          <Link className='btn btn-success mb-3 butao' to={'/missao/create'}><AiOutlinePlus /> Inserir</Link>
        </div>
        {
          missao.map((item, i)=> (
            <Col key={i} md={4} className='ml-4 g-2 letra '  >
              <Card className='mb-2 cards' border="danger">
                <Card.Body>
                  <Card.Title><strong>{item.nome}</strong></Card.Title>
                </Card.Body>
                <Card.Body>
                 <Card.Text><strong>Classe do Navio: </strong>{item.classe}</Card.Text>
                 <Card.Text><strong>Nome do Comandante: </strong>{item.guerra}</Card.Text>
                 <Card.Text><strong>Data da Missão: </strong> {item.data}</Card.Text>
                 <Card.Text><strong>Situação do Navio: </strong>  
                    {item.situacao ===  "A" && <Spinner animation="border" variant="success" />}
                    {item.situacao ===  "I" && <Spinner animation="border" variant="danger" />}
                    {item.situacao ===  "N" && <Spinner animation="border" variant="warning" />}
                    </Card.Text>   
                </Card.Body>
              </Card>
                <div className='mb-3 iconess'>
                  <Link to={'/servico/' + i}>
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

export default MissaoLista