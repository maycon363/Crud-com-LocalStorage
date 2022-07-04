import React, { useEffect, useState } from 'react'
import ArmamentosService from '../../services/academico/ArmamentosService'
import swal from 'sweetalert';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { Chip } from '@mui/material'
import { Link } from 'react-router-dom';
import { AiOutlinePlus, AiOutlineRollback } from 'react-icons/ai'

const ListaArmamentos = () => {

    const [armamento, setArmamento] = useState([])

    useEffect(() => {

        setArmamento(ArmamentosService.getAll())

    }, [])

    function apagar(id) {
        if(swal("Deletado com Sucesso!!!", "Registro apagado", "success", {dangerMode: true,})){
            ArmamentosService.delete(id)
            setArmamento(ArmamentosService.getAll())
        }
    }
  return (
    <div>
        <div className='text-center'>
            <h1>Lista dos Armamentos</h1>
        </div>
            {armamento.length === 0 && <h1><Spinner animation="border" variant="success" />Carregando... </h1>}

            <Container>
                <Row>
                    <div className="text-center">
                        <Link className='btn btn-success mb-2 butao' to={'/armamentos/create'}><AiOutlinePlus /> Inserir</Link>
                    </div>
                    {
                    armamento.map((item, i)=> (
                        <Col key={i} md={4} className='ml-4 g-2 letra'  >
                            <Card className='mb-2 cards' border="danger">
                                <Card.Body>
                                    <Card.Text><strong>Nome do Armamento: </strong> {item.nome}</Card.Text>
                                    <Card.Text><strong>Tipo do Armamento: </strong> {item.tipo}</Card.Text>
                                    <Card.Text><strong>Data de entrega: </strong> {item.data}</Card.Text>  
                                    <Card.Text><strong>Investimento: </strong> {item.custo}</Card.Text>  
                                    <Card.Text><strong>Quantidade de Armamento: </strong> {item.quantidade}</Card.Text>  
                                </Card.Body>
                            </Card>
                            <div className='mb-3 iconess'>
                                <Link to={'/armamentos/' + i}>
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

export default ListaArmamentos