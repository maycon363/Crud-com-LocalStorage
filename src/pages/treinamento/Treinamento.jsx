import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";
import { useForm } from "react-hook-form";
import ReactPlayer from 'react-player'
import treinamentoValidator from "../../validators/treinamentoValidator";
import TreinamentoService from "../../services/academico/TreinamentoService";
import ConstrucaoService from "../../services/academico/ConstrucaoService";
import { mask } from "remask";
import ComandatesService from "../../services/academico/ComandatesService";

const Treinamento = () => {
  const params = useParams();
  const navigate = useNavigate();
  const {register, handleSubmit, setValue, formState: { errors },} = useForm();

  const missao = ConstrucaoService.getAll()

  const comandante = ComandatesService.getAll()

  useEffect(() => {
    if (params.id) {
      const servi = TreinamentoService.get(params.id);

      for (let campo in servi) {
        setValue(campo, servi[campo]);
      }
    }
  }, []);

  function salvar(dados) {
    if (params.id) {
      TreinamentoService.update(params.id, dados);
    } else {
      TreinamentoService.create(dados);
    }
    navigate("/treinamento");
  }

  function handleChange(event) {
    const mascara = event.target.getAttribute('mask')
    setValue(event.target.name, mask(event.target.value, mascara))
  }

  return (
    <div>
      <div className='para mb-3'>
          <ReactPlayer playing={true} loop={true} controls={false} onPlay={true} url='https://youtu.be/JhplELDnVYw' />
      </div>
      <div className="text-center mb-3">
          <h1>Inserir Navio para Treinamento</h1>
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="navio">
          <Form.Label>Nome do Navio: </Form.Label>
          <Form.Control type="text" placeholder="Informe Nome do Navio" isInvalid={errors.navio} {...register("navio", treinamentoValidator.navio )} />
          {errors.navio && <p style={{color: "red"}}>{errors.navio.message}</p>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="guerra">
          <Form.Label>Nome do Comandante: </Form.Label>
            <Form.Select {...register("guerra", treinamentoValidator.guerra)}>
              <option>Selecione</option>
              {comandante.map((item, i) => (
              <option key={i} value={item.guerra}>{item.guerra}</option>
              ))}
              {errors.missao && <span>Campo Obrigatório</span>}
            </Form.Select>
          </Form.Group>
        <Form.Group className="mb-3" controlId="classe">
          <Form.Label>Classe: </Form.Label>
          <Form.Select {...register("classe", treinamentoValidator.classe)}>
            <option>Selecione</option>
            {missao.map((item, i) => (
            <option key={i} value={item.classe}>{item.classe}</option>
            ))}
            {errors.classe && <span>{errors.classe.message}</span>}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="tipo">
          <Form.Label>Nome do Treinamento: </Form.Label>
          <Form.Control type="text" placeholder="Informe Nome do treinamento" isInvalid={errors.tipo} {...register("tipo", treinamentoValidator.tipo)}/>
          {errors.tipo && <p style={{ color: "red" }}>{errors.tipo.message}</p>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="marinheiro">
          <Form.Label>Marinheiros: </Form.Label>
          <Form.Control type="number" placeholder="Informe Quatidade de marinheiros" isInvalid={errors.marinheiro} {...register("marinheiro", treinamentoValidator.marinheiro)}/>
          {errors.marinheiro && <p style={{ color: "red" }}>{errors.marinheiro.message}</p>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="data">
          <Form.Label>Data Treinamento: </Form.Label>
          <Form.Control type="text" placeholder="Informe Data do treinamento" isInvalid={errors.data} {...register("data", treinamentoValidator.data)} 
          mask="99/99/9999" onChange={handleChange}/>
          {errors.data && <p style={{ color: "red" }}>{errors.data.message}</p>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="situacao">
          <Form.Label>Situação </Form.Label>
          <Form.Select {...register("situacao", treinamentoValidator.situacao)}>
            <option value={"N"}>Selecione</option>
            <option value={"A"}>Ativo</option>
            <option value={"I"}>Inativo</option>
            {errors.situacao && <span>Campo Obrigatório</span>}
          </Form.Select>
        </Form.Group>
        <div className="text-center mb-3">
          <Button onClick={handleSubmit(salvar)} className="btn btn-sucess butao"><FaCheck /> Salvar</Button>{" "}
          <Link to={-1} className="btn btn-danger butao"><BsArrowLeft /> Voltar</Link>
        </div>
      </Form>
    </div>
  );
};

export default Treinamento;
