import React from 'react'
import './style.scss'

export const HomeAnimation: React.FC = () => {
    return (
        <div className={'container'}>
            <ul className="Words">
                <li className="Words-line">
                    <p>&nbsp;</p>
                    <p>JetBrains</p>
                </li>
                <li className="Words-line">
                    <p>JetBrains</p>
                    <p>InternShip</p>
                </li>
                <li className="Words-line">
                    <p>InternShip</p>
                    <p>TodoList by</p>
                </li>
                {/*<li className="Words-line">*/}
                {/*    <p>TodoList</p>*/}
                {/*    <p>by</p>*/}
                {/*</li>*/}
                <li className="Words-line">
                    <p>TodoList by</p>
                    <p>Denis Bitaev</p>
                </li>
                <li className="Words-line">
                    <p>Denis Bitaev</p>
                    <p>&nbsp;</p>
                </li>
                {/*<li className="Words-line">*/}
                {/*    <p>Bitaev</p>*/}
                {/*    <p>&nbsp;</p>*/}
                {/*</li>*/}
            </ul>
        </div>
    )
}

