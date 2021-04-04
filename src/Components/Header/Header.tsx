import React from 'react'
import styled from "styled-components";

const Header: React.FC = () => {
    return (
        <StyledHeader>
            <StyledTitle>JetBrains TodoList</StyledTitle>
        </StyledHeader>
    )
}
export default Header

const StyledHeader = styled.div`
    background-color: #21212B;
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
`

const StyledTitle = styled.h1`
    margin-left: 50px;
    font-size: 18px;
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: normal;
`
