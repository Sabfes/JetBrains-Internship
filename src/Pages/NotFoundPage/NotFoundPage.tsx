import React from 'react'
import classes from './NotFoundPage.module.css'

const NotFoundPage: React.FC = () => {
    return (
        <div className={classes.NotFoundPage}>
            <h1 className={classes.NotFoundPage__title}>404</h1>
            <span className={classes.NotFoundPage__subtitle}>not found</span>
        </div>
    )
}

export default NotFoundPage
