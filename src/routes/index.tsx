import { Route, Switch } from "react-router";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>

      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  );
};

export default Routes;
