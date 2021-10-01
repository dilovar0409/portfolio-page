import styled from "styled-components";
import HeaderImg from '../../img/bg-masthead.jpg';

export const HeaderWrapper = styled.header`
    background: url(${HeaderImg});  
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 190px 0;
    text-align: center;
`;

export const HeaderText = styled.p`
    font-size: 85px;
    font-weight: bold;
    text-align: center;
    color: #212529;
`;

export const HeaderText1 = styled.p`
    text-align: center;
    font-size: 27px;
    font-weight: bold;
    color: #212529;
    margin: 10px 0 50px 0;
`;

export const HeaderButton = styled.button`
    font-size: 16px;
    color: white;
    background-color: #1D809F;
    border: none;
    border-radius: 5px;
    padding: 23px 40px;
    &:hover{
        background-color: #5D809F;
    }
`;