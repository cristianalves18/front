import styled from "styled-components";



export const Container = styled.div`
    
    height: 350px;
   
    
`;
export const ContainerItens = styled.div`

    background-color: #000;
    height: 85px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 900px;
    border-bottom: 3px  solid #fff;
     
`;

export const ImageLogo = styled.img`
 height: 79px;
  position: absolute;
  
`;
export const ImageBlack = styled.img`
 height: 13px;
      
`;
export const ButtonContato = styled.button`
    background-color: transparent;
    border: 1px solid white;
    border-radius: 15px;
    color: white; 
    padding: 10px 20px; 
    font-size: 16px;
    z-index: 1;
    cursor: pointer;
a{
  text-decoration: none;
  color: #fff;
}

    &:hover{
      opacity: .8;
    }
    &:active{
      opacity: .4;
    }
     
   `;
export const ButtonCompre = styled.button`
background-color: transparent;
border: 1px solid white;
border-radius: 15px;
color: white; 
padding: 10px 20px; 
font-size: 22px;
position: absolute;
margin-top: 890px;
height: 74px;
width: 300px;

a{
  text-decoration: none;
  color: #fff;
}

cursor: pointer;

    &:hover{
      opacity: .8;
    }
    
    &:active{
      opacity: .4;
    }
 
`;
export const ContainerPainel = styled.div`
position: absolute;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;
export const ImageEmpresa = styled.img`

height: 98vh;
    width: 1343px;
    position: relative;
    z-index: -1;
    margin-top: 634px;

`;
export const Link1 = styled.a`

position: absolute;
display: flex;
    gap: 67px;
    margin-top: 125px;
    font-weight: 100;
    cursor: pointer;
    text-shadow: 1px 7px 11px #000;
      
a{
  text-decoration: none;
  color: #000;
  
  &:hover{
      opacity: .8;
    }
    &:active{
      opacity: .4;
    }
  }
      
  

`;
export const LogoSlumad = styled.img`
    position: absolute;
    height: 150px;
    margin-top: 500px;
    /* margin-left: 600px; */
    display: flex;
`;
export const Lista = styled.img`
position: absolute;
    margin-top: 1100px;
    height: 15px;
    @keyframes moverDireita {
  10% {
    transform: translateX(-19%);
  }
  50% {
    transform: translateX(10%);
  }
}

 animation: moverDireita 10s linear infinite; /* 5s para a duração, ajuste conforme necessário */
  
`;
export const ContainerSobre = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 30px;

`;
export const H1 = styled.h1`
    color: #000;
    font-size: 40px;
     margin-top: 90px;
    border-bottom: 1px  solid #1C1C1C;
width: 1200px;
position: absolute;


`;
export const P = styled.p`
font-size: 25px;
margin-top: 400px;
position: absolute;
margin-left:100px;
opacity: .7;
`;
export const ContainerServico = styled.div`

display: flex;
align-items: center;
justify-content: center;
text-align: center;
margin-top: 30px;

`;
export const H = styled.h1`

color: #000;
    font-size: 40px;
    margin-top: 750px;
    border-bottom: 1px  solid #1C1C1C;
width: 1200px;
position: absolute;
`;

export const P2 = styled.p`
font-size: 30px;
margin-top: 1000px;
    position: absolute;
    margin-right: -25px;
    opacity: .7;
    width: 845px;
text-align: center;
display: flex;
`;


export const ContainerExecucao = styled.div`
height: 500px;
width:90%;
background-color: #000;
border-radius: 20px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
position: absolute;
top: 1950px;
`;

export const ImageEndereco = styled.img`

height: 240px;
position: absolute;
margin-top: 4200px;
`;


export const ConatinerFinal = styled.div`
background-color: #000;
height: 250px;
width: 100%;
position: absolute;
margin-top: 4800px;


     
`;
export const Link2 = styled.a`

    display: flex;
    gap: 67px;
    margin-top: 30px;
     align-items: center;
     justify-content: center;
    font-weight: 100;
    cursor: pointer;

a{
  text-decoration: none;
  color: #fff;
  &:hover{
      opacity: .8;
    }
    &:active{
      opacity: .4;
    }
}
`;

export const Solicitacao = styled.h1`
    font-size: 38px;
    color: #000;
    position: absolute;
    margin-top: 3700px;
`;

export const P3 = styled.p`
font-size: 22px;
    margin-top: 3813px;
    position: absolute;
    opacity: .7;
    text-align: center;

`;

export const Autor = styled.h3`
font-size: 10px;
color: #fff;
padding: 15px;
margin-top: 200px;
border-top: 1px solid #fff;
margin-top: 150px;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
`;

export const Logotipo = styled.img`
height: 110px;
    position: absolute;
    margin-left: 25px;
    
    
`;

export const H4 = styled.h1`
color: #fff;
margin-left: 260px;
padding: 10px;
`;

export const P4 = styled.p`

color: #fff;
width: 400px;
margin-left: 500px;

`;

export const Image = styled.img`
height: 350px;
margin-left: -500px;
margin-top: -50px;
position:absolute ;

`;