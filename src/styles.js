import styled from 'styled-components'
import { FcCheckmark, FcEmptyTrash } from "react-icons/fc";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000;
`;

export const ToDoList = styled.div`
    max-width: 500px;
    width: 100%;
    padding: 30px 30px;
    border-radius: 5px;
    background-color: #fff;
    text-align: center;

    ul {    
        padding: 0;
        margin-top: 60px;
    }
`;


export const Input = styled.input`
    border-radius: 5px;
    border: 2px solid rgba(209, 211, 212, 0.4);
    max-width: 340px;
    width: 100%;
    height: 40px;
    margin: 0 15px 15px 0;
`;

export const Button = styled.button`
    background-color: blue;
    color: white;
    border-radius: 5px;
    border: 1px solid transparent;
    font-weight: 600;
    color: white;
    width: 130px;
    height: 40px;
    cursor: pointer;
    transition: 0.6s;

    &:hover{
        background-color: white;
        color: blue;
        border-color: blue;
    }
    &:active {
        opacity: 0.8;
        background-color: blue;
        color: white;
    }
`;

export const ListItem = styled.div`
    padding: 0 10px;
    background: ${(props) => (props.isFinished ? 'lightblue' : '#e4e4e4')};
    box-shadow: 1px 4px 10px #00000059;
    border-radius: 5px;
    max-width: 470px;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 30px auto 0 auto;

    li {
        list-style: none;
    }
`;

export const Check = styled(FcCheckmark)`

`;

export const Trash = styled(FcEmptyTrash)`

`;