import React from 'react'
import classes from './Completed.module.css'
import Todo from "../../Components/Todo/Todo";
import {todoCompleteToggle} from "../../Redux/actionCreators/todoActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import ChartBar from '../../Components/Chart/Chart';

const Completed = () => {
    const todos = useTypedSelector(state=> state.todo.todo)
    const dispatch = useDispatch()

    const makeTodoCompleted = (todo: any) => {
        dispatch(todoCompleteToggle(todo.id))
    }
    const daysOfWeek = [
        { day: "Monday", count: 0},
        { day: "Tuesday", count: 0},
        { day: "Wednesday", count: 0},
        { day: "Thursday", count: 0},
        { day: "Friday", count: 0},
        { day: "Saturday", count: 0},
        { day: "Sunday", count: 0},
    ]
    const data = []

    todos.forEach((el,i) => {
        for (let i in daysOfWeek) {
            if (daysOfWeek[i].day === el.day && el.completed === true) {
                daysOfWeek[i].count += 1
            }
        }
    })

    for (let i in daysOfWeek) {
        data.push(daysOfWeek[i].count)
    }

    return (
        <div className={classes.Completed}>
            {
                todos.filter(el=> el.completed === true).map((todo) => {
                    return <Todo
                        onClick={() => makeTodoCompleted(todo)}
                        text={todo.text}
                        day={todo.day}
                        key={todo.id}
                        desc={todo.desc}
                        id={todo.id}
                        isCompleted={todo.completed}
                    />
                })
            }
            <ChartBar data={data}/>
        </div>
    )
}

export default Completed
