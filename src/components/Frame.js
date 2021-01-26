import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import NavLeft from './NavLeft'
import Footer from './Footer'
import Dashboard from './Dashboard'
import Cymbals from './Cymbals'

export default function Frame() {
    return (
        <Router>
        <div className="row" style={{backgroundColor: "#e6e6e6", marginTop:"65px", paddingTop: "60px", height:"100vh"}}>
            <div className="col-2 pr-0" style={{minWidth:"200px"}}>
                <NavLeft />
            </div>
            <div className="col-10 pl-0">
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/cymbals" component={Cymbals} />

            </div>
        </div>
        <Footer />
        </Router>
    )
}
