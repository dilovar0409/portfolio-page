import styled from "styled-components";
import PageImg from '../../img/bg-call.jpg';

export const PageWrapper=styled.div`
    background-image: url(${PageImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 200px 0;
    text-align: center;
`;

export const PageTitle=styled.p`
    font-size: 55px;
    font-weight: bold;
    margin-bottom: 50px;
`;

