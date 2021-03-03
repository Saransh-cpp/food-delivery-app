import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
    } from "react-router-dom"
import GoldPage from "../pages/GoldPage";
import OrderPage from "../pages/OrderPage"
import ProfilePage from "../pages/ProfilePage";

function BaseLayout(params) {
    return(
        <div>
       <Switch>
            <Route path="/order">
                <OrderPage />
            </Route>
            <Route path="/gold">
                <GoldPage />
            </Route>
            <Route path="/profile">
                <ProfilePage />
            </Route>
       </Switch>
       </div>
    );
}

export default BaseLayout;