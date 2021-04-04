import React from "react";
import styled from 'styled-components'

const StyledChartBar = styled.div`
    margin: 40px auto;
    width: 700px;
    height: 400px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`


const ChartBar: React.FC<any> = (props: any) => {
    const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const maxOfArr = Math.max(...props.data)

    return (
        <StyledChartBar>
            {props.data.map((el: any, i: number) => {
                const height = ((el / maxOfArr) * 100) || 0
                return <ChartColumn
                    todoCount={el}
                    label={labels[i]}
                    key={i}
                    height={height}
                />
            })}
        </StyledChartBar>
    )
}
export default ChartBar

const FlexWrapper = styled.div`
    display: flex;
    flex-direction: column-reverse;
    height:100%;
    align-items: center;
`

const StyledColumn = styled.div`
    transition: 1s;
    width: 60px;
    background-color: #21212B;
    height: ${(props: any) => props.height}%;
    &:hover {
        background-color: rgb(255, 188, 188);
    }
`
const StyledSpan = styled.span`
    opacity: ${(props:any) => props.height === 0 ? 0 : 1}
`
const ChartColumn:React.FC<any> = (props: any) => {
    return (
        <FlexWrapper>
            <StyledSpan {...props}>{props.label + ' ' + props.todoCount}</StyledSpan>
            <StyledColumn {...props}></StyledColumn>
        </FlexWrapper>
    )
}
