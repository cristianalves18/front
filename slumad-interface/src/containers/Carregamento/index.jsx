
import LogoImage from '../../assets/logoImage.png';
import Inicial from '../../assets/fundo.jpg';
import Black from '../../assets/cliente.png';
import Slumad from '../../assets/slumad.png';
import ListaDeProdutos from '../../assets/lista.png';
import Endereco from '../../assets/numero.jpg';
import Camiseta from '../../assets/cami.png';
import LogoS from '../../assets/logoFinal.png';

import {
    Container,
    ImageLogo,
    ButtonContato,
    ButtonCompre,
    ContainerPainel,
    ImageEmpresa,
    Link1,
    ImageBlack,
    LogoSlumad,
    Lista,
    ContainerSobre,
    ContainerItens,
    H1,
    P,
    ContainerServico,
    H,
    P2,
    ContainerExecucao,
    ImageEndereco,
    ConatinerFinal,
    Link2,
    Solicitacao,
    P3,
    Autor,
    Logotipo,
    H4,
    P4,
    Image,



} from "./style";
import { Itens } from '../Login/styles';


export function Carregamento() {

    return (
        <Container>

            <ContainerItens>
                <ImageBlack src={Black} alt="client-black" />

                <ImageLogo src={LogoImage} alt="logo-homem-de-ferro" />

                <ButtonContato >
                    <a href="#solicita"><i>Contato</i></a>
                </ButtonContato>

                <ContainerPainel>
                    <ImageEmpresa src={Inicial} alt="fundo" />
                    <Link1>
                       
                            <a href="#quem somos">Quem somos</a>
                            <a href="#serviço">Serviço</a>
                            <a href="#preparação">Preparação</a>
                            
                    </Link1>






                    <LogoSlumad src={Slumad} />

                    <ButtonCompre>
                        <a href="/login"><i>Compre conosco</i></a>
                    </ButtonCompre>

                    <Lista src={ListaDeProdutos} />

                    <ContainerSobre>
                        <H1 id='quem somos' >Quem somos?</H1>
                        <P> A Slumad comunicação visual é uma loja se destacando-se pela inovação.
                            Nosso compromisso é proporcionar um ótimo serviço aos clientes,
                            com excelência evidenciada pela qualidade excepcional de nossos
                            produtos e serviços. Buscamos ser a escolha primordial para clientes
                            e parceiros. Criamos as artes de todos os serviços. Nossa visão é expandir
                            nossos negócios mantendo os padrões elevados de qualidade.</P>
                    </ContainerSobre>

                    <ContainerServico>
                        <H id='serviço'>Serviços</H>
                        <P2>A Slumad comunicação visual oferece serviços abrangentes para os clientes se destacando-se pela criação de artes personalizadas, assegurando um bom contato e atenção com os clientes.</P2>
                    </ContainerServico>

                    <ContainerExecucao>
                        <a href="contato">
                            <Image src={Camiseta} /></a>
                        <H4 id='preparação'>Preparação</H4>
                        <P4>A Slumad destaca-se na habilidade criação de suas artes, para seus serviços, resultando em um custo-benefício favorável.
                            Independentemente do tamanho da empresa e espaço, a Slumad atende às especificidades de cada serviço. Tendo uma boa comunição com os clientes, e tendo a variedade de soluções para cada um de nosso clientes. Para assim entregarmos o nosso melhor. </P4>

                    </ContainerExecucao>

                    <Solicitacao id='solicita'>Solicite Seu Orçamento Agora!</Solicitacao>
                    <P3>Aguardamos ansiosamente a oportunidade de colaborar no seu serviço!
                    </P3>
                    <ImageEndereco src={Endereco} />

                    <ConatinerFinal>
                        <Logotipo src={LogoS} />

                        <Link2>
                            <a href="#quem somos">Quem somos</a>
                            <a href="#serviço">Serviço</a>
                            <a href="#preparação">Preparação</a>

                        </Link2>

                        <Autor>
                        © 2024 Site desenvolvovido por Cristian Alves </Autor>

                    </ConatinerFinal>
                </ContainerPainel>
            </ContainerItens>
        </Container >




    );
}
