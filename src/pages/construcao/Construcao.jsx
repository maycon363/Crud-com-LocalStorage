import React, { useEffect } from 'react'
import { Button, Form} from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import { useForm } from 'react-hook-form';
import ReactPlayer from 'react-player'
import construcaoValidator from '../../validators/construcaoValidator';
import ConstrucaoService from '../../services/academico/ConstrucaoService';
import { mask } from 'remask';


const Construcao = () => {
    
  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  
  useEffect(() => {
    
    if (params.id) {
      const construc = ConstrucaoService.get(params.id)

      for (let campo in construc) {
        setValue(campo, construc[campo])
      }
    }
  }, [])

  function salvar(dados) {

    if (params.id) {
      ConstrucaoService.update(params.id, dados)
    } else {
      ConstrucaoService.create(dados)
    }

    navigate('/construcao')
  }

  function handleChange(event) {
    const mascara = event.target.getAttribute('mask')
    setValue(event.target.name, mask(event.target.value, mascara))
  }
  

    return (
        <div>
            <div className='para'>
                <ReactPlayer playing={true} loop={true} controls={false} onPlay={true} url='https://youtu.be/Rr4utWfl90A' />
            </div>
            <div className="text-center">
              <h1>Inserir Navio para Construção</h1>
            </div>
            <Form>          
                <Form.Group className="mb-3" controlId="ships">
                    <Form.Label>Nome do Navio: </Form.Label>
                    <Form.Control type="text" placeholder="Informe Nome do Navio" isInvalid={errors.nome} {...register("nome", construcaoValidator.nome )} />
                    {errors.nome && <p style={{color: "red"}}>{errors.nome.message}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="classe">
                    <Form.Label>Classe do Navio: </Form.Label>
                    <Form.Control type="text" placeholder="Informe Classe do Navio" isInvalid={errors.classe} {...register("classe", construcaoValidator.classe )} />
                    {errors.classe && <p style={{color: "red"}}>{errors.classe.message}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="data">
                    <Form.Label>Data limite da entrega: </Form.Label>
                    <Form.Control type="text" placeholder="Informe Data limite" isInvalid={errors.data} {...register("data", construcaoValidator.data )} 
                    mask="99/99/9999" onChange={handleChange} />
                    {errors.data && <p style={{color: "red"}}>{errors.data.message}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="custo">
                    <Form.Label>Investimento: </Form.Label>
                    <Form.Control type="text" placeholder="Informe o Investimento" isInvalid={errors.custo} {...register("custo", construcaoValidator.custo )}/>
                    {errors.custo && <p style={{color: "red"}}>{errors.custo.message}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="situacao">
                    <Form.Label>Situação </Form.Label>
                      <Form.Select {...register("situacao", construcaoValidator.situacao)}>
                        <option value={"N"}>Selecione</option>
                        <option value={"A"}>Ativo</option>
                        <option value={"I"}>Inativo</option>
                        {errors.situacao && <span>Campo Obrigatório</span>}
                      </Form.Select>
                </Form.Group>
                <div className="text-center mb-5" >
                    <Button onClick={handleSubmit(salvar)} className=' btn btn-success butao'><FaCheck /> Salvar</Button>{' '}
                    <Link to={-1} className='btn btn-danger butao'><BsArrowLeft />  Voltar</Link>
                </div>
            </Form>
        </div>
    )
}

export default Construcao