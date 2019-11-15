import React, { Component, Suspense } from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';

import SideBar from '../Sidebar/Sidebar.jsx';

import routes from '../../routes';

class MainLayout extends Component {
    loading = () => <div>Loading. . .</div>;

    render() {
        return (
            <div class="app">
                <SideBar />
                <main className="app-main">
                    <HashRouter>
                        <Suspense fallback={this.loading()}>
                            <Switch>
                                {
                                    routes.map((route, idx) => {
                                        return route.component ? (
                                            <Route
                                                key={idx}
                                                path={route.path}
                                                exact={route.exact}
                                                name={route.name}
                                                render={props => (
                                                    <route.component
                                                        {...props}
                                                    />
                                                )}
                                            />
                                        ) : null;
                                    })
                                }
                                <Redirect from='/' to='/about'/>
                            </Switch>
                        </Suspense>
                    </HashRouter>
                </main>
            </div>
        );
    }
}

export default MainLayout;