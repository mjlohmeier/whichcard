import React from 'react';
import { HashRouter, Route, Switch} from 'react-router-dom';
import HomePageContainer from './components/HomePageContainer';
import MainGameContainer from './components/MainGameContainer';

const Router = () => (
    <HashRouter>
        <div>
            {/* <Navbar />
            <SideBar /> */}
            <Switch>
                <Route exact path='/' component={HomePageContainer}/>
                <Route path='/game/:id' component={MainGameContainer}/>
            </Switch>
        </div>
    </HashRouter>
)

export default Router;