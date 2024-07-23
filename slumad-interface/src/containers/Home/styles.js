import styled from 'styled-components';


export const ContainerTela = styled.div`
height: 1300px;

`;

export const Container = styled.div`
background-color: #000;
height: 80px;
width: 100%;
border-bottom: 5px  solid #fff000;
display: flex;
gap: 40px;

p{
    color: #fff000;
    font-size: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;

    &:hover{
    opacity: .8;
   
}
&:active{
    opacity: .5;
}
}
span{
    color: #fff;
  
    &:hover{
        color: #fff000;
   }
}

`;

export const ImageBarra = styled.img`
margin-left: -130px;
margin-top: 20px;
height: 30px;


`;

export const ImageSlumadHome = styled.img`
height: 70px;
margin-left: 15px;
`;
export const ImagePerfil = styled.img`
margin-left: 800px;
height: 25px;
margin-top: 20px;

`;
export const ImageAnotacao = styled.img`
margin-left: 70px;
height: 25px;
margin-top: 20px;
`;
export const Pedidos = styled.h3`
cursor: pointer;
color: #fff;
font-size: 16px;
display: flex;
align-items: center;

    &:hover{
    opacity: .8;
    color: #ffff00;
   
}
&:active{
    opacity: .5;
}
`;
export const ContainerInicio = styled.img`
width: 100%;
border-bottom: 5px  solid #fff000;
`;
export const ImageCamisetaHome = styled.img`
height: 380px;
    position: absolute;
    margin-left: -1300px;
    margin-top: 40px;
`;
export const ImagePanfleto = styled.img`
height: 320px;
    position: absolute;
    margin-left: -890px;
    margin-top: 60px;
`;

export const ImageCartao = styled.img`
height: 360px;
    position: absolute;
    margin-left: -650px;
    margin-top: 60px;
`;

export const ImageBemVindo = styled.img`

height: 60px;
    position: absolute;
    margin-left: -450px;
    margin-top: 30px;
`;

export const ImageCopo = styled.img`

height: 240px;
    position: absolute;
    margin-left: -400px;
    margin-top: 200px;

`;

export const ContainerItens = styled.div`
background-color: #000;
height: 60px;
width: 100%;
margin-top: 300px;
`;

export const ImagePromocao = styled.img`
margin-left: 360px;
height: 60px;
padding: 10px;


`;

export const CategoriaImg = styled.img`
height: 80px;
margin-left: 470px;
margin-top: 10px;
`;

export const BackgroundFinal = styled.div`

background-color: #000;
height: 30px;
width: 100%;
margin-top: 300px;
display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

p{
    color: #fff;
    font-size: 10px;
   
}
`;