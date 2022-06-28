import React from 'react'
import { Spinner, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {AiOutlinePlus} from 'react-icons/ai'
import ConstrucaoService from '../services/academico/ConstrucaoService'
import ManutencaoService from '../services/academico/ManutencaoService'
import MissaoService from '../services/academico/MissaoService'
import ServicoService from '../services/academico/ServicoService'
import TreinamentoService from '../services/academico/TreinamentoService'
import ReactPlayer from 'react-player'

const ListaFrota = () => {
    const construcao = ConstrucaoService.getAll()
    const manutencao = ManutencaoService.getAll()
    const missao = MissaoService.getAll()
    const servico = ServicoService.getAll()
    const treinamento = TreinamentoService.getAll()

  return (
    <div>
        <div className="text-center mb-3">
            <h1>Lista Geral dos Navios</h1>
        </div>
        <div className='para'>
                <ReactPlayer playing={true} loop={true} controls={false} onPlay={true} url='https://youtu.be/gCfC1UST8p8' />
            </div>
        <div className="text-center mb-3">
          <h1>Lista dos Navios em Construção</h1>
          <Link className='btn btn-success butao' to={'/construcao/create'}><AiOutlinePlus/> Inserir</Link>
        </div>
        <Table variant="dark" striped bordered hover>
          <thead>
            <tr>
                <th>Nome do Navio</th>
                <th>Classe do Navio</th>
                <th>Investimento</th>
                <th>Prazo</th>
                <th>Progresso</th>
            </tr>
          </thead>
        <tbody>
            {construcao.map((item, i)=> (
              <tr className='td' key={i}>
                <td>{item.nome}</td>
                <td>{item.classe}</td>
                <td>{item.custo}</td>
                <td>{item.data}</td>
                <td>{item.situacao ===  "A" && <Spinner animation="border" variant="success" />}
                    {item.situacao ===  "I" && <Spinner animation="border" variant="danger" />}
                    {item.situacao ===  "N" && <Spinner animation="border" variant="warning" />}
                </td>         
              </tr>
            ))}
        </tbody>
        </Table>
        <div className="text-center">
          <h1>Lista dos Navios em Manutenção</h1>
          <Link className='btn btn-success butao' to={'/manutencao/create'}><AiOutlinePlus/> Inserir</Link>
        </div>
        <Table variant="dark" className="mt-3" striped bordered hover>
         <thead>
            <tr>
              <th>Nome do Navio</th>
              <th>Classe</th>
              <th>Investimento</th>
              <th>Prazo</th>
              <th>Progresso</th>
            </tr>
          </thead>
        <tbody>
            {manutencao.map((item, i) => (
              <tr className='td' key={i}>
                <td>{item.nome}</td>
                <td>{item.classe}</td>
                <td>{item.custo}</td>
                <td>{item.data}</td>
                <td>{item.situacao ===  "A" && <Spinner animation="border" variant="success" />}
                    {item.situacao ===  "I" && <Spinner animation="border" variant="danger" />}
                    {item.situacao ===  "N" && <Spinner animation="border" variant="warning" />}
                </td>   
              </tr>
            ))}
        </tbody>
        </Table>
        <div className="text-center">
            <h1>Lista dos Navios em Missões</h1>
            <Link className='btn btn-success mb-3 butao' to={'/missao/create'}><AiOutlinePlus /> Inserir</Link>
          </div>
          <Table variant="dark" striped bordered hover>
            <thead>
              <tr>
                <th>Nome do Navio</th>
                <th>Classe</th>
                <th>Missão</th>
                <th>Prazo</th>
                <th>Situação</th>
              </tr>
            </thead>
            <tbody>
              {missao.map((item, i) => (
                <tr className='td' key={i}>
                  <td>{item.nome}</td>
                  <td>{item.classe}</td>
                  <td>{item.missao}</td>
                  <td>{item.data}</td>
                  <td>{item.situacao ===  "A" && <Spinner animation="grow" variant="success" />}
                      {item.situacao ===  "I" && <Spinner animation="grow" variant="danger" />}
                      {item.situacao ===  "N" && <Spinner animation="grow" variant="warning" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="text-center">
            <h1>Lista de Navio em Serviço</h1>
            <Link className='btn btn-success mb-3 butao' to={'/servico/create'}><AiOutlinePlus /> Inserir</Link>
          </div>
          <Table variant="dark" striped bordered hover>
            <thead>
              <tr>
                <th>Nome do Navio</th>
                <th>Classe</th>
                <th>Tipo de Serviço</th>
                <th>Data</th>
                <th>Situação</th>
              </tr>
            </thead>
            <tbody>
              {servico.map((item, i) => (
                <tr className='td' key={i}>
                  <td>{item.nome}</td>
                  <td>{item.classe}</td>
                  <td>{item.missao}</td>
                  <td>{item.data}</td>
                  <td>{item.situacao ===  "A" && <Spinner animation="grow" variant="success" />}
                      {item.situacao ===  "I" && <Spinner animation="grow" variant="danger" />}
                      {item.situacao ===  "N" && <Spinner animation="grow" variant="warning" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="text-center">
          <h1>Lista dos Navios no Treinamento</h1>
          <Link className='btn btn-success butao' to={'/treinamento/create'}><AiOutlinePlus/> Inserir</Link>
        </div>
        <Table variant="dark" className="mt-3" striped bordered hover>
         <thead>
        <tr>
            <th>Nome do navio</th>
            <th>Classe</th>
            <th>Tipo de treinamento</th>
            <th>Marinheiros</th>
            <th>Data do Treinamento</th>
            <th>Situação</th>
        </tr>
        </thead>
        <tbody>
            {treinamento.map((item, i) => (
              <tr className='td' key={i}>
                <td>{item.navio}</td>
                <td>{item.classe}</td>
                <td>{item.tipo}</td>
                <td>{item.marinheiro}</td>
                <td>{item.data}</td>
                <td>{item.situacao ===  "A" && <Spinner animation="grow" variant="success" />}
                    {item.situacao ===  "I" && <Spinner animation="grow" variant="danger" />}
                    {item.situacao ===  "N" && <Spinner animation="grow" variant="warning" />}
                </td>
              </tr>
            ))}
        </tbody>
        </Table>
    </div>   
  )
}

export default ListaFrota

