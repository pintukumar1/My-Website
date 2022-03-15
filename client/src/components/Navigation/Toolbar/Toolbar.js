import React from 'react'
import NavigationItems from '../Navigationitems/NavigationItems'

import classes from './Toolbar.module.css'

function Toolbar() {
    return (
        <div className={classes.Toolbar}>
            <h1>DevConnector</h1>
            <NavigationItems />
        </div>    
    )
}

export default Toolbar