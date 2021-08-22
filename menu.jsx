import React from "react";
import {BrowserRouter as Router , Link, Route , Switch} from "react-router-dom";
import Data from "./data";
import Details from "./details"


const Menu =() => {

    return (
        <>
        <Router>

            <div>
                <nav className="hope">
                    <ul>
                        <li>
                            <Link to ="/">Home</Link>
                        </li>
                        <li>
                            <Link to ="/details">Details</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path ="/details">
                        <Details/>

                    </Route>
                    
                    <Route path ="/">
                        <Data/>
                    </Route>
                </Switch>
            </div>
        </Router>
        </>
    )
}


export default Menu
