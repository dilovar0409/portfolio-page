import styled from "styled-components";

export const NextPageWrapper = styled.div`
    padding: 100px 150px;
`;

export const NextPageText = styled.p`
    font-weight: bold;
    color: #ECB807;
    margin-bottom: 10px;
    text-align: center;
`;

export const NextPageTitle = styled.p`
    font-size: 44px;
    font-weight: bold;
    margin-bottom: 50px;
    text-align: center;
`;

export const PageDirection = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const NextPageBox = styled.div`
    width: 50%;
    height: 350px;
    position: relative;
    cursor: pointer;
    transition-duration: .5s;
    &:hover{
        transform: scale(.9);
        background-color: black;
    }
`;

export const NextPageImg = styled.img`
    width: 100%;
    height: 100%;
`;

export const NextPageTitle1 = styled.p`
    font-weight: bold;
    font-size: 14px;
    color: white;
    position: absolute;
    top: 200px;
    left: 100px;
`;

export const NextPageText1 = styled.p`
    width: 335px;
    color: #FFFFFF;
    line-height: unset;
    position: absolute;
    top: 220px;
    left: 100px;
`;



