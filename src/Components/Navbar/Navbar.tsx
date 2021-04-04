import React from 'react'
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        <div className={classes.Navbar}>
            <NavLink
                className={classes.Navbar__link}
                activeClassName={classes.Navbar__linkActive}
                to={'/home'}
            >
                <span className="material-icons">
                home
                </span>
                <span className={classes.Navbar__textLink}>Home Page</span>
            </NavLink>

            <NavLink
                className={classes.Navbar__link}
                activeClassName={classes.Navbar__linkActive}
                to={'/AllTodos'}
            >
                <span className="material-icons">
                    library_books
                </span>
                <span className={classes.Navbar__textLink}>All Todos</span>
            </NavLink>

            <NavLink
                className={classes.Navbar__link}
                activeClassName={classes.Navbar__linkActive}
                to={'/NotCompletedTodos'}
            >
                <span className="material-icons">
                    not_interested
                </span>

                <span className={classes.Navbar__textLink}>Not completed</span>
            </NavLink>

            <NavLink
                className={classes.Navbar__link}
                activeClassName={classes.Navbar__linkActive}
                to={'/Completed'}
            >
                <span className="material-icons">
                    check_box
                </span>
                <span className={classes.Navbar__textLink}>Completed</span>
            </NavLink>
        </div>
    )
}

export default Navbar
