import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { Button } from '../../components/Button';
import { api } from "../../services/api";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/UserContext";

import LogoImage from '../../assets/logoImage.png';
import InternetLogo from '../../assets/logoInternet.png';
import ImageLogin from '../../assets/login.png';
import Client from '../../assets/cliente.png';
import {

    Form,
    InputContainer,
    Container2,
    Title,
    Image1,
    Internet,
    Link,
    Itens,
    Black,

} from "./styles";

export function Login() {
    const { putUserData  } = useUser()
   
    const navigate = useNavigate();

    const schema = yup
        .object({
            email: yup.string()
                .email('Digite um e-mail válido')
                .required('O e-mail é obrigatorio.'),
            password: yup.string()
                .min(6, 'A senha deve ter pelo menos 6 caracteres.')
                .required('Digite uma senha.'),
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

    const onSubmit = async (formData) => {
        const { data } = await toast.promise(api.post('/session', {
            email: formData.email,
            password: formData.password,
        }),

            {
                pending: 'Verificando seus dados',
                success: {
                    render() {
                        setTimeout(() => {
                            navigate('/');

                        }, 2000);
                        return 'Seja bem-vindo(a) 👌'
                    },
                },
                error: 'E-mail ou Senha incorretos 🤯'
            },
        );

        putUserData(data)
    }

    return (

        <Itens>
            <Black src={Client} />
            <Image1 src={LogoImage} alt="logo-slumad" />
            <Internet src={InternetLogo} />
            <Container2>
                <Title src={ImageLogin} />

                <Form onSubmit={handleSubmit(onSubmit)}>
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
                    <Button type="submit">Entrar</Button>
                </Form>
                <p>Não possui conta? <Link to='/register'>Clique aqui!</Link></p>
            </Container2>
        </Itens>


    );
}