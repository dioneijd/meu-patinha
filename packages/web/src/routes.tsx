import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Logon from './pages/Logon'
import RegisterUser from './pages/RegisterUser'
import ProfileUser from './pages/ProfileUser'
// import NewIncident from './pages/NewIncident'

const Routes = () => {
    return (        
        <Switch>
            <Route path="/" exact component={Logon} />
            <Route path="/register" component={RegisterUser} />
    
            <Route path="/profile" component={ProfileUser} />
            {/* <Route path="/incidents/new" component={NewIncident} /> */}
        </Switch>
    );
}

export default Routes;