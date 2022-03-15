import React from 'react'
import classes from './NavigationItem.module.css'

const NavigationItem = (props) => {
    return (
        <li className={classes.NavigationItem}>
            <a link={props.link} href="#" >{props.children}</a>
        </li>
    )
}

export default NavigationItem