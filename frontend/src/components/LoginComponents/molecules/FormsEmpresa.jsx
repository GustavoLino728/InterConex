import { useState } from "react";
import { ButtonPrimary } from "../atoms/Button";
import { InputPrimary } from "../atoms/Input";
import { SelectAtoms } from "../atoms/Select";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEye, faEyeSlash, faBuilding, faEnvelope, faLock, faBriefcase } from "@fortawesome/free-solid-svg-icons";

import styles from './molecules.module.css';
import { api } from "../../../services/api";

import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { useForm } from "react-hook-form";

// eslint-disable-next-line no-useless-escape
const cnpj_regex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;

const cnpj_validacao = yup.string().required('CNPJ obrigatório')
.matches(cnpj_regex, 'Formato de CNPJ inválido')
.test('cnpj_valido', 'CNPJ inválido', function (value){
    if (!value) return false;
    const cnpj_limpo = value.replace(/[^\d]+/g, '');

    if (cnpj_limpo.length !== 14) return false;

    return true;
})

const schema = yup.object().shape({
    nome: yup.string().required('Nome obrigatório'),
        email: yup.string().email('Email inválido').required('Email obrigatório')
        .test('checar_email', 'Email já está em uso', async (value) => {
            if (!value) return true;
            try{
                const response = await api.post('/check-email', { email: value })
                return !response.data.exists;
            } catch (error) {
                console.error("Erro ao verificar o email: ", error);
                return false;
            }
        }), 
    cnpj: cnpj_validacao,
    tipo1: yup.string().required("Ao menos um tipo é obrigatório"),
    tipo2: yup.string(),
    senha: yup.string().min(6, 'Senha muito curta, mínimo 6 caracteres').required('Senha obrigatória'),
})

const FormsEmpresa = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [enviando, setEnviando] = useState(false);

    const navigate = useNavigate();

    const optionsSelect = [
        { value: 'tecnologia', label: 'Tecnologia' },
        { value: 'saude', label: 'Saúde' },
        { value: 'inovacao', label: 'Inovação' },
        { value: 'projetos', label: 'Projetos' },
        { value: 'marketing', label: 'Marketing' },
        { value: 'negocios', label: 'Negócios' },
        { value: 'gestao', label: 'Gestão' },
        { value: 'esg', label: 'ESG' },
        { value: 'remoto', label: 'Remoto' },
        { value: 'presencial', label: 'Presencial' },
        { value: 'hibrido', label: 'Híbrido' },
        { value: 'outros', label: 'Outros' },
    ]    

  const { control, handleSubmit, reset, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

    const onSubmit = async (data) => {
        setEnviando(true);
        try{
            await api.post('/registro-empresa', {
                nome_empresa: data.nome,
                email: data.email,
                cnpj: data.cnpj,
                tipo1: data.tipo1,
                tipo2: data.tipo2,
                senha: data.senha,
            });
            alert("Cadastrado com sucesso!");
            reset();
            navigate('/login');
            
        } catch (error){
            console.error('Erro ao enviar dados: ', error)
        } finally {
            setEnviando(false);
        }
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
        <InputPrimary
            leftIcon={<FontAwesomeIcon icon={faUser} className={styles.iconeInput}/>}
            name="nome"
            control={control}
            errorMessage={errors?.nome?.message}
            type="text"
            placeholder="Insira nome da Empresa/Startup"
            spellCheck="false"
        />

        <InputPrimary
            leftIcon={<FontAwesomeIcon icon={faEnvelope} className={styles.iconeInput}/>}
            name="email"
            control={control}
            errorMessage={errors?.email?.message}
            type="email"
            placeholder="Email da Empresa/Startup"
            spellCheck="false"
        />

        <InputPrimary
            leftIcon={<FontAwesomeIcon icon={faBuilding} className={styles.iconeInput}/>}
            name="cnpj"
            control={control}
            errorMessage={errors?.cnpj?.message}
            type="text"
            placeholder="CNPJ (00.000.000/0000-00)"
            spellCheck="false"
        />

        <SelectAtoms
            leftIcon={<FontAwesomeIcon icon={faBriefcase} className={styles.iconeInput}/>}
            nameLeft="tipo1"
            nameRight="tipo2"
            control={control}
            errorMessage={errors?.tipo1?.message}
            options={optionsSelect}
        />

        <InputPrimary
            leftIcon={<FontAwesomeIcon icon={faLock} className={styles.iconeInput}/>}
            name="senha"
            control={control}
            errorMessage={errors?.senha?.message}
            type={showPassword ? "text" : "password"}
            placeholder="Insira sua senha"
            spellCheck="false"
            rightIcon={
                <FontAwesomeIcon
                  icon={showPassword ? faEye : faEyeSlash}
                  className={styles.iconeInputRight}
                  onClick={handleShowPassword}
                />
            }
        />

        <ButtonPrimary type="submit" title={enviando ? 'Cadastrando' : 'Cadastrar'} disabled={!isValid || enviando} />
    </form>
  )
}

export default FormsEmpresa