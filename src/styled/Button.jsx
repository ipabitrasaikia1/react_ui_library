import styled from "styled-components";

export const Button = styled.button`
color : ${(props) => (props.theme === "light" ? "red" : "blue")};
background-color :  ${(props) => (props.theme === "light" ? "blue" : "red")}
`

export const Div = styled.div`
height : 500px;
width : 500px;
margin : auto ;
border :1px solid red;

& > div {
  background-color : tomato;
} 


& > p {
  color : green
}
& > p:hover{
    color : blue;
    background-color: aliceblue;
 }

`;

export const ButtonD = styled.button`color : red`;

export const InputText = styled.input`color : red`