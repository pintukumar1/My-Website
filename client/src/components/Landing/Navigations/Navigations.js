import React from 'react'
import NavigationItem from '../../NavigationItems/NavigationItem/NavigationItem'

import classes from './Navigations.module.css'

function Navigations() {
    return (
       <ul className={classes.Navigations}>
           <NavigationItem link="/" >Sign Up</NavigationItem>
           <NavigationItem link="/">Login</NavigationItem>
       </ul>
    )
}

export default Navigations