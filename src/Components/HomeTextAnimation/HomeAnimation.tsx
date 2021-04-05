import React from 'react'
import './style.scss'

export const HomeAnimation: React.FC = () => {
    return (
        // Анимация логотипа-приложения домашней страницы
        <div className={'container'}>
            <ul className="Words">
                <li className="Words-line">
                    <p className="Words-p">&nbsp;</p>
                    <p className="Words-p">JetBrains</p>
                </li>
                <li className="Words-line">
                    <p className="Words-p">JetBrains</p>
                    <p className="Words-p">InternShip</p>
                </li>
                <li className="Words-line">
                    <p className="Words-p">InternShip</p>
                    <p className="Words-p">TodoList by</p>
                </li>
                <li className="Words-line">
                    <p className="Words-p">TodoList by</p>
                    <p className="Words-p">Denis Bitaev</p>
                </li>
                <li className="Words-line">
                    <p className="Words-p">Denis Bitaev</p>
                    <p className="Words-p">&nbsp;</p>
                </li>
            </ul>
        </div>
    )
}

