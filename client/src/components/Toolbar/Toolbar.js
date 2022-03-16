import React from 'react'
import NavigationItems from '../NavigationItems/NavigationItems'

import classes from './Toolbar.module.css'

function Toolbar() {
    return (
        <div className={classes.Toolbar}>
            <h1 style={{color:"whitesmoke"}}>DevConnector</h1>
            <NavigationItems />
        </div>    
    )
}

export default Toolbar