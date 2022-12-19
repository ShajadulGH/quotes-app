import { Route, Switch, Redirect } from "react-router-dom";
import AllQoutes from "./pages/AllQoutes";
import NewQoutes from "./pages/NewQoutes";
import QouteDetails from "./pages/QouteDetails";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <Layout>
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
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
