import React, { Suspense, useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AllQoutes from "./pages/AllQoutes";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import AuthPage from "./pages/AuthPage";
import ProfilePage from "./pages/ProfilePage";
import AuthContext from "./store/auth-context";
const NewQoutes = React.lazy(() => import("./pages/NewQoutes"));
const QouteDetails = React.lazy(() => import("./pages/QouteDetails"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
function App() {
  const authCtx = useContext(AuthContext);
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
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
            {authCtx.isLoggedIn && <NewQoutes />}
            {!authCtx.isLoggedIn && <AuthPage />}
          </Route>
          <Route path="/auth">
            <AuthPage />
          </Route>
          <Route path="/profile">
            {authCtx.isLoggedIn && <ProfilePage />}
            {!authCtx.isLoggedIn && <AuthPage />}
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
