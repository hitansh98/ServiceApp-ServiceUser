import React from "react";
import { Switch, Route } from "react-router-dom";


import AddUserScreen from '../pages/AddUserScreen/AddUserScreen';
import UserScreen from '../pages/UserScreen/UserScreen';
import UserDetailsScreen from '../pages/UserDetailsScreen/UserDetailsScreen';


export default function Routes() {
    return (
        <Switch>
          <Route path="/" exact component={UserScreen} />
          <Route path="/adduserscreen" component={AddUserScreen} />
          <Route path="/userdetailsscreen" component={UserDetailsScreen} />
          <Route component={UserScreen} />
        </Switch>
      );
  }
