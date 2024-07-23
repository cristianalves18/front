import LogoImageSlumad from '../../assets/logoImage.png';
import Barra from '../../assets/barra.png';
import PerfilConta from '../../assets/perfil.png';
import ImgAnotacao from '../../assets/anotacao.png';
import InicialHome from '../../assets/fundo.home.inicio.png';
import Camisetas from '../../assets/cami.png';
import PanfletoImg from '../../assets/pan.png';
import Cartoes from '../../assets/cartoes.png';
import BemVindo from '../../assets/bem.vindo.png';
import CopoAdega from '../../assets/copo.png';
import Categoria from '../../assets/img.categoria.png';
import Promocao from '../../assets/img.promocao.png';


import {
    Container,
    ContainerTela,
    ImageSlumadHome,
    ImageBarra,
    ImagePerfil,
    ImageAnotacao,
    ContainerInicio,
    ImageCamisetaHome,
    ImagePanfleto,
    ImageCartao,
    ImageBemVindo,
    ImageCopo,
    Pedidos,
    ContainerItens,
    ImagePromocao,
    CategoriaImg,
    BackgroundFinal

} from "./styles";

export function Home() {


    return (
        <ContainerTela>
            <Container>
                <ImageSlumadHome src={LogoImageSlumad} />
                <p>Inicio</p>
                <p><span>Produtos</span></p>
                <ImageBarra src={Barra} />
                <ImagePerfil src={PerfilConta} />
                <ImageAnotacao src={ImgAnotacao} />
                <Pedidos>Pedidos</Pedidos>
            </Container>
            <ContainerInicio src={InicialHome} />
            <ImageCamisetaHome src={Camisetas} />
            <ImagePanfleto src={PanfletoImg} />
            <ImageCartao src={Cartoes} />
            <ImageBemVindo src={BemVindo} />
            <ImageCopo src={CopoAdega} />


            <CategoriaImg src={Categoria} />
            <ContainerItens>
                <ImagePromocao src={Promocao} />
                <BackgroundFinal>
                    <p> © 2024 Site desenvolvovido por Cristian Alves </p>
                </BackgroundFinal>
            </ContainerItens>
        </ContainerTela>

    );
}