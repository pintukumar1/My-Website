import React from 'react'
import Logo from '../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'

import classes from './Toolbar.module.css'

function Toolbar() {
    return (
        <div className={classes.Toolbar}>
            <Logo />
            <NavigationItems />
        </div>    
    )
}

export default Toolbar