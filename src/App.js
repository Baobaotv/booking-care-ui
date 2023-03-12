import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from '~/Layout/DefaultLayout';
import config from './config';
import { publicRoutes } from './routes';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Layout = route.layout || DefaultLayout;
                        const Page = route.component;
                        const type =
                            route.path === config.routes.login
                                ? 'login'
                                : route.path === config.routes.register
                                ? 'register'
                                : '';
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={<Layout>{!!type ? <Page type={type}></Page> : <Page />}</Layout>}
                            ></Route>
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
