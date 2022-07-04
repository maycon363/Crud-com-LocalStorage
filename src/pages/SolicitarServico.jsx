import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { GrBasket } from "react-icons/gr";
import { FcSupport } from "react-icons/fc";

const SolicitarServico = () => {
  return (
    <div className='mb-2'>
        <div className='text-center mb-3'> 
            <h1>Solicitar um Serviço</h1>
        </div>
        <div>
            <div className='images mb-2'>
                <Card style={{ width: '45rem' }}>
                        <Card.Body className='corcards'>
                            <Card.Title ><GrBasket className='iconesx'/> Compra Armamento</Card.Title>
                        </Card.Body>
                    <Link to={'/armamentos/create'}>
                        <Card.Img variant="top" src="https://tecnodefesa.com.br/wp-content/uploads/2021/06/d5bde4ca-abae-4e01-8ca5-aad5c2ec1462.jpg" />
                    </Link>
                </Card>
            </div>
            <div className='images mb-2'>       
                <Card style={{ width: '45rem' }}>
                    <Card.Body className='corcards'>
                        <Card.Title ><FcSupport className='iconesx'/> Solicitar Manutenção pro Navio</Card.Title>
                    </Card.Body>
                    <Link to={'/manutencao/create'}>
                        <Card.Img variant="top" src="https://www.naval.com.br/blog/wp-content/uploads/2020/06/FREMM-Spartaco-Schergat.jpg" />
                    </Link>
                </Card>
            </div>
            <div className='images mb-2'>
                <Card style={{ width: '45rem' }}>
                    <Card.Body className='corcards'>
                        <Card.Title ><GrBasket className='iconesx'/> Compra Navio</Card.Title>
                    </Card.Body>
                    <Link to={'/manutencao/create'}>
                        <Card.Img variant="top" src="https://p2.trrsf.com/image/fget/cf/800/450/middle/images.terra.com/2013/10/30/131028-o-zz999-101.JPG" />
                    </Link>
                </Card>
            </div>
            <div className='images mb-2'>
                <Card style={{ width: '45rem' }}>
                    <Card.Body className='corcards'>
                        <Card.Title> Solicitar Navio pra Missão</Card.Title>
                    </Card.Body>
                    <Link to={'/missao/create'}>
                        <Card.Img variant="top" src="https://cdn-pen.nuneshost.com/images/190131-fragata-fremm-francesa.jpg" />
                    </Link>
                </Card>
            </div>
            <div className='images mb-2'>
                <Card style={{ width: '45rem' }}>
                    <Card.Body className='corcards'>
                        <Card.Title> Solicitar Navio pro Treinamento</Card.Title>
                    </Card.Body>
                    <Link to={'/treinamento/create'}>
                        <Card.Img variant="top" src="https://cdn-defesaaereanaval.nuneshost.com/wp-content/uploads/2021/07/luigi-rizzo-f-595-750x500.jpg" />
                    </Link>
                </Card>
            </div>
            <div className='images mb-2'>
                <Card style={{ width: '45rem' }}>
                    <Card.Body className='corcards'>
                        <Card.Title> Solicitar Navio pro Serviço</Card.Title>
                    </Card.Body>
                    <Link to={'/servico/create'}>
                        <Card.Img variant="top" src="https://www.naval.com.br/blog/wp-content/uploads/2018/05/FREMM-italiana-Alpino.jpg" />
                    </Link>
                </Card>
            </div>
        </div>
    </div>
  )
}

export default SolicitarServico