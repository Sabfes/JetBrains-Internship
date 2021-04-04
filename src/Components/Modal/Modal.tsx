import React from 'react'
import './Modal.css'

type PropsType = {
    active: boolean,
    setActive: (bol: boolean) => void,
}

const Modal: React.FC<PropsType> = ({active, setActive, children}) => {
    return (
        <div className={active ? 'Modal active' : 'Modal'} onClick={() => setActive(false)}>
            <div className={active ? 'Modal__content active' : 'Modal__content'} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal
