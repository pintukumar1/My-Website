import React, { Component } from 'react'
import Toolbar from '../../components/Toolbar/Toolbar'
import Landing from '../../components/Landing/Landing'
import Footer from '../../components/Footer/Footer'

class Dashboard extends Component {
    render() {
        return (
            <React.Fragment>
                <Toolbar />
                <Landing />
                <Footer />
            </React.Fragment>
        )
    }
}

export default Dashboard