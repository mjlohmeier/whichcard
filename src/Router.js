import React from 'react';
import { HashRouter, Route, Switch} from 'react-router-dom';
import UserCreationWrapper from './components/UserCreationHome';
import MainGameContainer from './components/MainGameContainer';

const Router = () => (
    <HashRouter>
        <div>
            {/* <Navbar />
            <SideBar /> */}
            <Switch>
                <Route exact path='/' component={UserCreationWrapper}/>
                <Route path='/game/:id' component={MainGameContainer}/>
            </Switch>
        </div>
    </HashRouter>
)

export default Router;