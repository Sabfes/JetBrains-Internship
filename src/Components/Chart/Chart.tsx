import React from "react";
import styled from 'styled-components'
import {ChartColumn} from "./ChartColumn/ChartColumn";

type PropsTypes = {
    data: number[]
}

const ChartBar: React.FC<PropsTypes> = ({data}) => {
    const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const maxOfArr = Math.max(...data)

    return (
        <StyledChartBar>
            {data.map((el: number, i: number) => {
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

const StyledChartBar = styled.div`
    margin: 40px auto;
    width: 700px;
    height: 400px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`

