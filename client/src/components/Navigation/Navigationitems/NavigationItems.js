import React from "react";
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = () => (
    <ul className={classes.NavigationItems}>
            <NavigationItem link="/">Developers</NavigationItem>
            <NavigationItem link="/" >Sign Up</NavigationItem>
            <NavigationItem link="/">Login</NavigationItem>
    </ul>
)

export default NavigationItems