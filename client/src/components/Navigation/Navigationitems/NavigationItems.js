import React from "react";
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = () => (
    <ul className={classes.NavigationItems}>
        <div>
            <NavigationItem link="/">Developers</NavigationItem>
        </div>
        <div>
            <NavigationItem link="/" active>Sign Up</NavigationItem>
            <NavigationItem link="/">Login</NavigationItem>
        </div>
    </ul>
)

export default NavigationItems