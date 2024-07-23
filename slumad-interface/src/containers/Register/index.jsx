import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { Button } from '../../components/Button';
import { api } from "../../services/api";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

import LogoImage from '../../assets/logoImage.png';
import InternetLogo from '../../assets/logoInternet.png';
import CriarConta from '../../assets/criar.conta.png';
import Black from '../../assets/cliente.png';

import {
    Container,
    Form,
    InputContainer,
    Container2,
    Title,
    Image1,
    Internet,
    Link,
    Cliente1
} from "./styles";

export function Register() {
    const navigate = useNavigate();
    
    const schema = yup
        .object({

            name: yup.string().required('O nome é obrigatório'),
            email: yup.string()
                .email('Digite um e-mail válido')
                .required('O e-mail é obrigatorio.'),
            password: yup.string()
                .min(6, 'A senha deve ter pelo menos 6 caracteres.')
                .required('Digite uma senha.'),

            confirmPassword: yup
                .string()
                .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
                .required('Confirme sua senha.'),
        })
        .required();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    console.log(errors)

    const onSubmit = async (data) => {
        try {
            const { status } = await api.post('/users', {
                name: data.name,
                email: data.email,
                password: data.password,
            }, {
                validateStatus: () => true,
            },
            );
            if (status === 200 || status === 201) {
                setTimeout(()=>{
                    navigate('/login');                 
                }, 2000);
                toast.success('Conta criada com sucesso!')
            } else if (status === 409) {
                toast.error('Email já cadastrado! Faça o login para continuar.')
            }else {
                throw new Error(); // caso nao tenha sido o erro 409 por causa do email. ele vai mandar um aleatrorio para o usuario resolver
            }
            } catch (error) {
            toast.error('😭 Falha no sistema! Tente novamente. ') }
    }


    return (
        <Container>
            <Cliente1 src={Black} />
            <Image1 src={LogoImage} alt="logo-slumad" />
        
            <Internet src={InternetLogo} />
            <Container2>
                <Title src={CriarConta} />

                <Form onSubmit={handleSubmit(onSubmit)}>

                    <InputContainer>
                        <label>Name</label>
                        <input placeholder="Name" type="text"  {...register("name")} />
                        <p>{errors?.name?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label>E-mail</label>
                        <input placeholder="E-mail" type="email"  {...register("email")} />
                        <p>{errors?.email?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label>Senha</label>
                        <input placeholder="Senha" type="password"  {...register("password")} />
                        <p>{errors?.password?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label>Confirme a senha</label>
                        <input placeholder="Confirme a senha" type="password"  {...register("confirmPassword")} />
                        <p>{errors?.confirmPassword?.message}</p>
                    </InputContainer>

                    <Button type="submit">Criar conta</Button>
                </Form>
                <p>Já possui conta? <Link to='/login'>Clique aqui!</Link></p>
            </Container2>

        </Container>

    );
}