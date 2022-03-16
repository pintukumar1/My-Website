import React from "react";
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = () => (
    <div className={classes.NavigationItems}>
            <ul className={classes.NavigationItems}>
                    <NavigationItem link="/register" >Sign Up</NavigationItem>
                    <NavigationItem link="/login">Login</NavigationItem>
            </ul>
    </div>
    
)

export default NavigationItems