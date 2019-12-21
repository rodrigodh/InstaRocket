import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Feed from './pages/Feed';
import New from './pages/New';

function Routes() {
    return(
//Switch garante que apenas uma rota seja chamada a cada url que eu chamar, assim fazendo o "Switch" =)
        <Switch>
            <Route path="/" exact component={Feed} />
            <Route path="/new" component={New} />
        </Switch>
    );
}

export default Routes;