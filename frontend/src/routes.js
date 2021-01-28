import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Atish from './Atish';

export default (
    <Route path="/" component={App}>
    <Route path="Atish" component={Atish} />
    </Route>
);