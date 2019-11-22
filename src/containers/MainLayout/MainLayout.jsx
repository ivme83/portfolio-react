import React, { Component, Suspense } from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';

import SideBar from '../Sidebar/Sidebar.jsx';

import routes from '../../routes';

class MainLayout extends Component {
    loading = () => <div className="loading">Loading&#8230;</div>;

    render() {
        return (
            <div className='app'>
                <HashRouter>
                    <SideBar minimizeSidebar={this.minimizeSidebar} />
                    <main className="app-main">
                        <Suspense fallback={this.loading()}>
                            <Switch>
                                {routes.map((route, idx) => {
                                    return route.component ? (
                                        <Route
                                            key={idx}
                                            path={route.path}
                                            exact={route.exact}
                                            name={route.name}
                                            render={props => (
                                                <route.component {...props} />
                                            )}
                                        />
                                    ) : null;
                                })}
                                <Redirect from="/" to="/about" />
                            </Switch>
                        </Suspense>
                    </main>
                </HashRouter>
            </div>
        );
    }
}

export default MainLayout;
