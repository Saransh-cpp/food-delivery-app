import {
    Switch,
    Route,
    } from "react-router-dom"
import BottomNav from "../components/BottomNav";
import GoldPage from "../pages/GoldPage";
import OrderPage from "../pages/OrderPage"
import ProfilePage from "../pages/ProfilePage";
import OutPage from "../pages/OutPage";
import SearchPage from "../pages/SearchPage";

function BaseLayout() {
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
            <Route path="/out">
                <OutPage />
            </Route>
            <Route path="/search">
                <SearchPage />
            </Route>
       </Switch>

       <BottomNav />
       </div>
    );
}

export default BaseLayout;