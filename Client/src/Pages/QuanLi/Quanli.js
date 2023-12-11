import React from 'react';
import {
BrowserRouter as Router,
Switch,
Route,
} from "react-router-dom";
import Mycomment from '../Mycomment/Mycomment';
import LearnAxios from "../LearnAxios/LearnAxios";
import ListUser from "../listUser/ListUser";
import Timer from '../Timer/Timer';
import Navbar from '../Navbar/Navbar';
import LearnScss from '../LearnScss/LearnScss';
import HomeTest from '../HomeTest/HomeTest';
import LearnReduxAndRef from '../LearnReduxAndRef/LearnReduxAndRef';

const Quanli = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/quanli" exact>
                    <HomeTest/>
                </Route>
                <Route path="/timer">
                    <Timer />
                </Route>
                <Route path="/listUser" exact>
                    <ListUser />
                </Route>
                <Route path="/listUser/:id">
                    <LearnAxios />
                </Route>
                <Route path="/myComment">
                    <Mycomment />
                </Route>
                <Route path="/learnScss">
                    <LearnScss/>
                </Route>
                <Route path="/learnReduxAndRef">
                    <LearnReduxAndRef/>
                </Route>
            </Switch>
        </Router>
    );
};

export default Quanli;