import styled from 'styled-components';
import { Link as ReactLink } from 'react-router-dom';



export const Itens = styled.div`
background-color: #000;
height: 100px;
width: 100vw;
border-bottom: 8px  solid #C0C0C0;
display: flex;
align-items: center;
justify-content: center;

`;
export const Black = styled.img`
height: 15px;
display: flex;
position: absolute;
margin-right: 900px;
`;
export const Image1 = styled.img`
height: 85px;
margin-left: 20px ;
top: -10px;
      
`;
export const Image2 = styled.img`
height: 60px;
margin-left: 430px;
margin-top: 10px;
position: absolute;
`;

export const Cliente = styled.img`
 height: 13px;
margin-top: 40px;
position: absolute;
 margin-left: 65px;
`;

export const Internet = styled.img`
height: 30px;
margin-left: 1160px;
top: 30px;
position: absolute;
`;

export const RightContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;

   p{
    color: #fff;
    font-size: 19px;
    font-weight:100;
    a{
       color: yellow;
       font-size: 18px;
       cursor: pointer;
       
    &:hover{
         opacity: .8;
        
        }
         &:active{
         opacity: .5;
    }
    }
   

}`;

export const Container2 = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;


    position: absolute;
    top: -86px;
    background-color: white;
    width: 400px;
    height: 500px;
    margin-top: 200px;
    border-radius: 13px;
    box-shadow: 0px 12px 20px 0px #C0C0C0;

    p{
      font-weight: 500;
      font-family: "Anton SC", sans-serif;
      }

     a{
        color: 	#FFD700;
        cursor: pointer;
        font-family: "Anton SC", sans-serif;
        font-weight: 500;
      
        
        &:hover{
         color: #000;
        }
      }
`;

export const Title = styled.img`
   height: 58px;
   margin-top: -15px;

`;

export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 25px;
padding: 20px;
width: 100%;
max-width: 400px;
margin-top: 35px;
`;

export const InputContainer = styled.div`

display:flex;
flex-direction: column;
gap: 5px;
width: 100%;


input{
    width: 100%;
    border: none;
    height: 52px;
    border-radius: 10px;
    padding:  0 16px;
    cursor: pointer;
    background-color: #DCDCDC;
    font-size: 16px;
    
   
}

label{
        color: #000;
        font-size: 18px;
        font-weight: 700;
        
        
    }

    p{
        font-size: 14px;
        line-height: 80%;
        color: #FF0000;
        font-weight: 200;
        height: 10px;
  
    }
`;


export const Link = styled(ReactLink)`
text-decoration: none;
`;