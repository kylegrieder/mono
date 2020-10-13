import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import Home from './views/Home'
import AboutMe from './views/AboutMe'
import Projects from './views/Projects'

class RouterDemo extends React.Component {
    render() {
        return (
            <Router>
                <ul className="nav m-4">
                    <li className="nav-item mx-2">
                        <Link to="/home">Home</Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link to="/about-me">About Me</Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link to="/projects">Projects</Link>
                    </li>
                </ul>

                <div className="container">
                    <Switch>
                        <Route path="/home">
                            <Home></Home>
                        </Route>
                        <Route path="/about-me">
                            <AboutMe></AboutMe>
                        </Route>
                        <Route path="/projects">
                            <Projects></Projects>
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default RouterDemo