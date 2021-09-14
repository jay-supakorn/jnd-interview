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
import Login from "../pages/Login";
import Shorten from "../pages/Shorten";

const RouteSwitch = withRouter((props) => {
    return (
        <>
            <Switch location={props.location}>
                {/* <ProtectedRoute path="/outgoing" component={Shorten} />
                <Route path="/register" component={Shorten} />
                <Route path="/login" component={Shorten} /> */}
                <Route path="/login" component={Login} />
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
