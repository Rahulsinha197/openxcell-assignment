import React, { Suspense, lazy } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

const Property = lazy(() => import("./modules/properties/Property"));
const Details = lazy(() => import("./modules/properties/Details"));

const Routes = (props) => (
  <main>
    <Router>
      <Suspense fallback={<div>...Loading</div>}>
        <Switch>
          <Route path="/" component={Property} />
          <Route path="/property" component={Property} />
          <Route path="/details" component={Details} />
        </Switch>
      </Suspense>
    </Router>
  </main>
);

export default Routes;
