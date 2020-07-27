import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Logon from './pages/Logon'
import RegisterOng from './pages/RegisterOng'
import Profile from './pages/ProfileOng'
// import NewIncident from './pages/NewIncident'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={RegisterOng} />
        
                <Route path="/profile" component={Profile} />
                {/* <Route path="/incidents/new" component={NewIncident} /> */}
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;