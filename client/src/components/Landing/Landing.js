import React from 'react'
import classes from './Landing.module.css'
import Navigations from './Navigations/Navigations'

function Landing() {
    return (
        <div className={classes.Landing}>
                <h1>Developer Connector</h1>
                <h2> Create a developer profile/portfolio, share posts and get help from other developers</h2>
                <Navigations />
        </div>
    )
}

export default Landing