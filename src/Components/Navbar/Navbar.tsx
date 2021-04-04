import React from 'react'
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const Navbar: React.FC = () => {
    const activeLinkStyle = {
        color: '#FF75A1',
        cursor: 'pointer',
    }

    return (
        <StyledNavbar>
            <StyledNavLink
                to={'/home'}
                activeStyle={activeLinkStyle}
            >
                <span className="material-icons">home</span>
                <StyledSpan>Home Page</StyledSpan>
            </StyledNavLink>

            <StyledNavLink
                to={'/AllTodos'}
                activeStyle={activeLinkStyle}
            >
                <span className="material-icons">
                    library_books
                </span>
                <StyledSpan>All Todos</StyledSpan>
            </StyledNavLink>

            <StyledNavLink
                to={'/NotCompletedTodos'}
                activeStyle={activeLinkStyle}
            >
                <span className="material-icons">
                    not_interested
                </span>

                <StyledSpan>Not completed</StyledSpan>
            </StyledNavLink>

            <StyledNavLink
                to={'/Completed'}
                activeStyle={activeLinkStyle}
            >
                <span className="material-icons">
                    check_box
                </span>
                <StyledSpan>Completed</StyledSpan>
            </StyledNavLink>
        </StyledNavbar>
    )
}
export default Navbar

const StyledNavbar = styled.div`
    min-width: 280px;
    min-height: calc(100vh - 80px);
    background-color: #21212B;
    box-shadow: inset 0px 5px 12px -3px rgba(0,0,0,0.35);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const StyledNavLink = styled(NavLink)`
    display: flex;
    align-items: center;
    margin-left: 50px;
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
