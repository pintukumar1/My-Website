import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Logo.module.css'

function Logo() {
    return (
        <ul className={classes.Logo}>
            <li>
            <Link to="/" className={classes.LinkStyles}>Devconnector</Link>
            </li>
            <li>
                <Link to="/profiles" className={classes.LinkStyles}>Developers</Link>
            </li>
        </ul>
    )
}

export default Logo