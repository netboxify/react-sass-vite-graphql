import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";

import Login from "pages/login";
import DashboardLayout from "./layout";

import client from "api";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route component={DashboardLayout} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
};

export default App;
