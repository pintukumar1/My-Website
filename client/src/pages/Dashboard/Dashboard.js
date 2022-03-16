import React from 'react'
import Footer from '../../components/Footer/Footer'
import Toolbar from '../../components/Toolbar/Toolbar'
import classes from './Dashboard.module.css'

function Dashboard(props) {
    return (
        <div>
            <Toolbar />
             <main className={classes.Content}>
                 {props.children}
             </main>   
             <Footer /> 
        </div>
    )
}


export default Dashboard