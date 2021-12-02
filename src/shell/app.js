import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";

import Login from "pages/login";
import DashboardLayout from "./layout";

import client from "api";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/login" exact component={Login} />
          <Route component={DashboardLayout} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
};

export default App;
