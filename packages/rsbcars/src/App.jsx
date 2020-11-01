import React from "react";
import { Route, Switch } from "react-router-dom";

// conatiner
import Container from "./components/Container/Container";

// pages
import Home from "./pages/Home/Home";
import Registration from "./pages/Registration/Registration";
import Login from "./pages/Login/Login";

//widgets
import NavbarWidget from "./widgets/NavbarWidget/NavbarWidget";
import CrmWidget from "./widgets/CrmWidget/CrmWidget";

const NAV_ITEMS = [
  {
    id: 1,
    navItemName: "HOME",
    navItemRedirectPath: "",
  },
  {
    id: 2,
    navItemName: "SIGN UP",
    navItemRedirectPath: "/auth/signup",
  },
  {
    id: 3,
    navItemName: "LOGIN",
    navItemRedirectPath: "/auth/login",
  },
];

const App = () => {
  return (
    <Container>
      <CrmWidget widgetConfig={{ visibility: false }} />
      <NavbarWidget
        widgetConfig={{
          navItems: NAV_ITEMS,
        }}
      />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/auth/signup" component={Registration} />
        <Route path="/auth/login" component={Login} />
      </Switch>
    </Container>
  );
};

export default App;
