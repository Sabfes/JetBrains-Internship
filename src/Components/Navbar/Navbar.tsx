import React from 'react'
import {NavLink} from "react-router-dom";
import styled from "styled-components";

type PropsTypes = {
    isNavbarOpen: boolean
    navbarToggle: () => void
}

const Navbar: React.FC<PropsTypes> = ({isNavbarOpen, navbarToggle}) => {
    // Стили для активной ссылки
    const activeLinkStyle = {
        color: '#FF75A1',
        cursor: 'pointer',
    }

    return (
        <>
            {/*Навигация */}
            <StyledNavbar isNavbarOpen={isNavbarOpen}>
                {/*Flex обертка*/}
                <StyledLinkWrapper isNavbarOpen={isNavbarOpen}>
                    <StyledNavLink
                        to={'/home'}
                        activeStyle={activeLinkStyle}
                    >
                        <span className="material-icons">home</span>
                        {isNavbarOpen ? <StyledSpan>Home</StyledSpan> : null}
                    </StyledNavLink>

                    <StyledNavLink
                        to={'/AllTodos'}
                        activeStyle={activeLinkStyle}
                    >
                        <span className="material-icons">library_books</span>
                        {isNavbarOpen ? <StyledSpan>Todos</StyledSpan> : null}
                    </StyledNavLink>

                    <StyledNavLink
                        to={'/NotCompletedTodos'}
                        activeStyle={activeLinkStyle}
                    >
                        <span className="material-icons">not_interested</span>
                        {isNavbarOpen ? <StyledSpan>UnCompleted</StyledSpan> : null}
                    </StyledNavLink>

                    <StyledNavLink
                        to={'/Completed'}
                        activeStyle={activeLinkStyle}
                    >
                        <span className="material-icons">check_box</span>
                        {isNavbarOpen ? <StyledSpan>Completed</StyledSpan> : null}
                    </StyledNavLink>
                </StyledLinkWrapper>
            </StyledNavbar>

            {/*Кнопка открытия\закрытия навбара*/}
            <StyledToggleButton isNavbarOpen={isNavbarOpen}>
                <span onClick={navbarToggle} className="material-icons">arrow_back_ios</span>
            </StyledToggleButton>
        </>
    )
}
export default Navbar

const StyledToggleButton = styled.div<{ isNavbarOpen: boolean }>`
    cursor: pointer;
    position: fixed;
    bottom: 35px;
    transition: .2s;
    z-index: 100;
    transform: ${({isNavbarOpen}) => isNavbarOpen ? "rotate(0)" : "rotate(180deg)"};
    left: ${({isNavbarOpen}) => isNavbarOpen ? "130px" : "20px"};
    
    &:hover {
        color: rgb(255, 117, 161);
    }
`

const StyledLinkWrapper = styled.div<{ isNavbarOpen: boolean }>`
    display: flex;
    flex-direction: column;
`

const StyledNavbar = styled.div<{ isNavbarOpen: boolean }>`
    position: relative;
    min-width: ${({isNavbarOpen}) => isNavbarOpen ? "280px" : "80px"};
    min-height: calc(100vh - 80px);
    background-color: #21212B;
    box-shadow: inset 0px 5px 12px -3px rgba(0,0,0,0.35);
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: .2s;
`

const StyledNavLink = styled(NavLink)`
    display: flex;
    align-items: center;
    text-decoration: none;
    margin-top: 40px;
    color: #B7B6BB;
    font-size: 18px;
    
    &:hover {
        color: #FF75A1;
        cursor: pointer;
    }
`

const StyledSpan = styled.span`
    margin-left: 5px;
`
