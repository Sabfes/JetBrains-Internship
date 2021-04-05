import styled from "styled-components";
import React from "react";

type PropsType = {
    todoCount: number
    label: string
    height: number
}

export const ChartColumn:React.FC<PropsType> = ({label, todoCount, height}) => {
    return (
        <FlexWrapper>
            {/*Лэйбл (день недели)*/}
            <StyledSpan height={height}>{label + ' ' + todoCount}</StyledSpan>
            {/*Колонка диаграммы выполненных задач по дням недели*/}
            <StyledColumn height={height}></StyledColumn>
        </FlexWrapper>
    )
}

const FlexWrapper = styled.div`
    display: flex;
    flex-direction: column-reverse;
    height:100%;
    align-items: center;
`

const StyledColumn = styled.div<{height: number}>`
    transition: 1s;
    width: 60px;
    background-color: #21212B;
    height: ${({height}) => height}%;
    &:hover {
        background-color: rgb(255, 188, 188);
    }
`

const StyledSpan = styled.span<{height: number}>`
    opacity: ${({height}) => height === 0 ? 0 : 1}
`
