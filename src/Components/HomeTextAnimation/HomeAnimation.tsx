import React from 'react'
import styled from "styled-components";

export const HomeAnimation: React.FC = () => {
    return (
        // Логотип - приложения домашней страницы
        <StyledContainer>
            <StyledWords>
                <StyledWordsLine>
                    <StyledWordsP>&nbsp;</StyledWordsP>
                </StyledWordsLine>
                <StyledWordsLine>
                    <StyledWordsP>JetBrains</StyledWordsP>
                </StyledWordsLine>
                <StyledWordsLine>
                    <StyledWordsP>InternShip</StyledWordsP>
                </StyledWordsLine>
                <StyledWordsLine>
                    <StyledWordsP>TodoList by</StyledWordsP>
                </StyledWordsLine>
                <StyledWordsLine>
                    <StyledWordsP>Denis Bitaev</StyledWordsP>
                </StyledWordsLine>
            </StyledWords>
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    margin-top: 6%;
    margin-left: 25%;
`

const StyledWords = styled.ul`
    font-family: "Roboto", Helvetica, Arial, sans-serif;
    font-size: 75px;
    font-weight: 900;
    letter-spacing: -2px;
    text-transform: uppercase;
    color: #21212B;
    transform: translate3d(0, 0, 0);
    -webkit-font-smoothing: antialiased;
    -webkit-font-kerning: normal;
    -webkit-text-size-adjust: 100%;
    
    &:hover {
        p {
            color: #FF75A1;
        }
    }
`

const StyledWordsLine = styled.li`
    height: 70px;
    overflow: hidden;
    position: relative;
    
    &:nth-child(odd) {
        transform: skew(60deg, -30deg) scaleY(0.66667);
    }
        
    &:nth-child(even) {
        transform: skew(0deg, -30deg) scaleY(1.33333);
    }

    &:nth-child(3) {
        left: 10px;
    }
    &:nth-child(4) {
        left: 20px;
    }
    &:nth-child(5) {
        left: 30px;
    }
`

const StyledWordsP = styled.p`
    height: 75px;
    line-height: 60px;
    padding: 0 10px;
    transition: all 0.4s ease-in-out;
    transform: translate3d(0, 0, 0);
    vertical-align: top;
    white-space: nowrap;
`



