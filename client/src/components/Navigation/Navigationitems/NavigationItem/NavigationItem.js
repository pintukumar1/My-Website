import React from 'react'

function NavigationItem() {
    return (
        <li className={classes.NavigationItem}>
            <a link="/" >{props.children}</a>
        </li>
        
    )
}

export default NavigationItem