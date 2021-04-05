import React from 'react'
import styled from "styled-components";

const NotFoundPage: React.FC = () => {
    return (
        <StyledNotFoundPage>
            {/*Титул и сабтитул*/}
            <StyledTitle>404</StyledTitle>
            <StyledSubTitle>not found</StyledSubTitle>
        </StyledNotFoundPage>
    )
}
export default NotFoundPage

const StyledNotFoundPage = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const StyledTitle = styled.h1`
    font-size: 260px;
    line-height: 260px;
`

const StyledSubTitle = styled.span`
    font-size: 20px;
    color: #FF75A1;
`
