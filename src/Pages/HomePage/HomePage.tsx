import React from 'react'
import classes from './HomePage.module.css'
import {HomeAnimation} from "../../Components/HomeTextAnimation/HomeAnimation";

const HomePage: React.FC = () => {
    return (
        <div className={classes.HomePage}>
            <HomeAnimation />
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <h1>СДЕЛАТЬ СКРОЛИНГ ПРИ ДОБАЛЕНИИ ТУДУШКИ</h1>
                <p>Сделать поддержку локалСторедж</p>
                <p>github Pages</p>
                <p>navbar открытие</p>
            </div>
        </div>
    )
}

export default HomePage
