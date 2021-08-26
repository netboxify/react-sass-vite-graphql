import { Route } from "react-router-dom";

import Header from "./components/header";

import routes from "shell/routes";

import "./layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      {routes.map((route) => {
        return <Route path={route.path} component={route.component} exact />;
      })}
    </div>
  );
};

export default Layout;
