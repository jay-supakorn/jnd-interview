import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "../store";
import { PersistGate } from "redux-persist/integration/react";
// pages
import Register from "../pages/Register";
import Login from "../pages/Login";
import Shorten from "../pages/Shorten";
import ProtectedRoute from "../containers/ProtectedRoute";

const RouteSwitch = withRouter((props) => {
    return (
        <>
            <Switch location={props.location}>
                {/*
                <Route path="/login" component={Shorten} /> */}
                <ProtectedRoute path="/dashboard" component={Shorten} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/" component={Shorten} />
            </Switch>
        </>
    );
});

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <RouteSwitch />
                </Router>
            </PersistGate>
        </Provider>
    );
};

export default App;
