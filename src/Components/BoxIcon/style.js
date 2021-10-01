import styled from "styled-components";

export const BoxIconWrapper = styled.div`
    text-align: center;
    background-color: #1D809F;
    padding: 100px 0;
    .box-icon-text{
        font-weight: bold;
        color: #ECB807;
        margin-bottom: 10px;
    }
    .box-icon{
        width: 110px;
        height: auto;
        background-color: white;
        border-radius: 50%;
        padding: 30px;
    }
    .icon-text{
        color: #BCD9D8;
    }
`;

export const BoxIconTitle = styled.p`
    font-size: 50px;
    font-weight: 700;
    color: white;
    margin-bottom: 50px;
`;

export const IconText = styled.p`
    font-size: 22px;
    font-weight: 800;
    color: white;
    margin: 20px 0 10px 0;
`;

export const BoxIcons = styled.div`
    width: 1100px;
    margin: auto;
    display: flex;
    justify-content: space-between;
`;


