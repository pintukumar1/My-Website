import React, { Component } from 'react'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import Landing from '../Landing/Landing'
import Footer from '../Dashboard/Footer/Footer'

class Layout extends Component {
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

export default Layout 