import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from './components/Wrapper'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import NavBarLeft from './components/NavBarLeft'
import Dashboard from './pages/Dashboard'
import Cymbals from './pages/Cymbals'
import NewCymbalCSV from './pages/NewCymbalCSV'
import NewCymbalPackCSV from './pages/NewCymbalPackCSV'

function App() {
    return (
        <Router>
            <NavBar />
            <Wrapper>
                <div className="row">
                    <div className="col-2 pr-0" style={{ minWidth: "200px" }}>
                        <NavBarLeft />
                    </div>
                    <div className="col-10 pl-0">
                        <Route exact path="/" component={Dashboard} />
                        <Route path="/cymbals" component={Cymbals} />
                        <Route path="/NewCymbalCSV" component={NewCymbalCSV} />
                        <Route path="/NewPackCSV" component={NewCymbalPackCSV} />
                    </div>
                </div>
            </Wrapper>
            <Footer />
        </Router>
    )
}

export default App
