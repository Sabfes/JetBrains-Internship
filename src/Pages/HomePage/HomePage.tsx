import React from 'react'
import {HomeAnimation} from "../../Components/HomeTextAnimation/HomeAnimation";
import styled from "styled-components";

const HomePage: React.FC = () => {
    return (
        <StyledHomePage>
            <HomeAnimation />
        </StyledHomePage>
    )
}
export default HomePage

const StyledHomePage = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    overflow: hidden;
`
