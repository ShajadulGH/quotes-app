import { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AllQoutes from "./pages/AllQoutes";
import NewQoutes from "./pages/NewQoutes";
import QouteDetails from "./pages/QouteDetails";
function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/qoutes" />
        </Route>
        <Route path="/qoutes" exact>
          <AllQoutes />
        </Route>
        <Route path="/qoutes/:qouteID">
          <QouteDetails />
        </Route>
        <Route path="/new-qoutes">
          <NewQoutes />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
