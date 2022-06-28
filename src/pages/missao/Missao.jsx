import React, { useEffect} from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import { useForm } from 'react-hook-form'
import ReactPlayer from 'react-player'
import missaoValidator from '../../validators/missaoValidator'
import MissaoService from '../../services/academico/MissaoService'
import ConstrucaoService from '../../services/academico/ConstrucaoService'
import { mask } from 'remask'
import ComandatesService from '../../services/academico/ComandatesService'

const Missao = () => {

  const params = useParams();
  const navigate = useNavigate();
  const {register, handleSubmit, setValue, formState: { errors },} = useForm();

  const missao = ConstrucaoService.getAll()

  const comandante = ComandatesService.getAll()

  useEffect(() => {
    if (params.id) {
      const manu = MissaoService.get(params.id);

      for (let campo in manu) {
        setValue(campo, manu[campo]);
      }
    }
  }, []);

  function salvar(dados) {
    if (params.id) {
      MissaoService.update(params.id, dados);
    } else {
      MissaoService.create(dados);
    }
    navigate("/missao");
  }

  function handleChange(event) {
    const mascara = event.target.getAttribute('mask')
    setValue(event.target.name, mask(event.target.value, mascara))
  }

    return (
        <div>
            <div className='para'>
              <ReactPlayer playing={true} loop={true} controls={false} onPlay={true} url='https://youtu.be/JhplELDnVYw' />
            </div>
            <div className="text-center">
              <h1>Inserir Navio para Missão</h1>
            </div>
            <Form>
                <Form.Group className="mb-3" controlId="nome">
                  <Form.Label>Nome do Navio: </Form.Label>
                  <Form.Control type="text" placeholder="Informe o Nome do Navio" isInvalid={errors.nome} {...register("nome", missaoValidator.nome)} />
                  {errors.nome && <p style={{color: "red"}}>{errors.nome.message}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="guerra">
                  <Form.Label>Nome do Comandante: </Form.Label>
                  <Form.Select {...register("guerra", missaoValidator.guerra)}>
                    <option>Selecione</option>
                    {comandante.map((item, i) => (
                    <option key={i} value={item.guerra}>{item.guerra}</option>
                     ))}
                    {errors.missao && <span>Campo Obrigatório</span>}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="classe">
                  <Form.Label>Classe: </Form.Label>
                  <Form.Select {...register("classe", missaoValidator.classe)}>
                    <option>Selecione</option>
                    {missao.map((item, i) => (
                    <option key={i} value={item.classe}>{item.classe}</option>
                     ))}
                    {errors.missao && <span>Campo Obrigatório</span>}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="missao">
                    <Form.Label>Missão: </Form.Label>
                    <Form.Control type="text" placeholder="Informe qual é a Missão" isInvalid={errors.missao} {...register("missao", missaoValidator.missao)} />
                    {errors.missao && <span className="text-danger">{errors.missao.message}</span>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="data">
                  <Form.Label>Data da Missão: </Form.Label>
                  <Form.Control type="text" placeholder="Informe Data da Missão" isInvalid={errors.data} {...register("data", missaoValidator.data)} 
                  mask="99/99/9999" onChange={handleChange} />
                  {errors.data && <span className="text-danger">{errors.data.message}</span>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="situacao">
                    <Form.Label>Situação </Form.Label>
                      <Form.Select {...register("situacao", missaoValidator.situacao)}>
                        <option value={"N"}>Selecione</option>
                        <option value={"A"}>Ativo</option>
                        <option value={"I"}>Inativo</option>
                        {errors.situacao && <span>Campo Obrigatório</span>}
                      </Form.Select>
                </Form.Group>
                <div className="text-center mb-3">
                    <Button onClick={handleSubmit(salvar)} className='btn btn-success butao'><FaCheck /> Salvar</Button>{' '}
                    <Link to={-1} className='btn btn-danger butao'><BsArrowLeft />  Voltar</Link>
                </div>
            </Form>
        </div>
    )
}

export default Missao