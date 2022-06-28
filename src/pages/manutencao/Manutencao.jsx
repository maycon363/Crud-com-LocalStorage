import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate, useParams} from 'react-router-dom';
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import manutencaoValidator from '../../validators/manutencaoValidator';
import ManutencaoService from '../../services/academico/ManutencaoService';
import ConstrucaoService from '../../services/academico/ConstrucaoService';
import ReactPlayer from 'react-player/youtube'
import { useForm } from 'react-hook-form';
import { mask } from 'remask';

const Manutencao = () => {
    
  const params = useParams();
  const navigate = useNavigate();
  const {register, handleSubmit, setValue, formState: { errors },} = useForm();

  const missao = ConstrucaoService.getAll()

  useEffect(() => {
    if (params.id) {
      const manu = ManutencaoService.get(params.id);

      for (let campo in manu) {
        setValue(campo, manu[campo]);
      }
    }
  }, []);

  function salvar(dados) {
    if (params.id) {
      ManutencaoService.update(params.id, dados);
    } else {
      ManutencaoService.create(dados);
    }
    navigate("/manutencao");
  }

  function handleChange(event) {
    const mascara = event.target.getAttribute('mask')
    setValue(event.target.name, mask(event.target.value, mascara))
  }
    return (
        <div>
            <div className='para'>
                <ReactPlayer playing={true} loop={true} controls={false} onPlay={true} url='https://youtu.be/55rZ9LMUsNY' />
            </div>
            <div className="text-center">
              <h1>Inserir Navio para Manutenção</h1>
            </div>
            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome do Navio: </Form.Label>
                    <Form.Control type="text" placeholder="Informe Nome do Navio" isInvalid={errors.nome} {...register("nome", manutencaoValidator.nome )} />
                    {errors.nome && <p style={{color: "red"}}>{errors.nome.message}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="classe">
                  <Form.Label>Classe: </Form.Label>
                  <Form.Select {...register("classe", manutencaoValidator.classe)}>
                    <option>Selecione</option>
                    {missao.map((item, i) => (
                    <option key={i} value={item.classe}>{item.classe}</option>
                     ))}
                    {errors.missao && <span>Campo Obrigatório</span>}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="data">
                    <Form.Label>Data limite da entrega: </Form.Label>
                    <Form.Control type="text" placeholder="Informe Data Limite da Entrega" isInvalid={errors.data} {...register("data", manutencaoValidator.data )} 
                    mask="99/99/9999" onChange={handleChange} />
                    {errors.data && <p style={{color: "red"}}>{errors.data.message}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="custo">
                    <Form.Label>Investimento: </Form.Label>
                    <Form.Control type="text" placeholder="Informe o Investimento" isInvalid={errors.custo} {...register("custo", manutencaoValidator.custo )} />
                    {errors.custo && <p style={{color: "red"}}>{errors.custo.message}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="situacao">
                    <Form.Label>Situação </Form.Label>
                      <Form.Select {...register("situacao", manutencaoValidator.situacao)}>
                        <option value={"N"}>Selecione</option>
                        <option value={"A"}>Ativo</option>
                        <option value={"I"}>Inativo</option>
                        {errors === "Error" && <p style={{color: "red"}}>Selecione Ativo ou Nativo!</p>}
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

export default Manutencao