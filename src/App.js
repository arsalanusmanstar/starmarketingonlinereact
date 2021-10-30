import './App.css';
import React from "react";
import Home from "./components/pages/home";
import Pages from "./components/pages/pages";
import Projects from "./components/pages/projects";
import ProjectSingle from "./components/pages/projectSingle";
import ScrollButton from './components/elements/ScrollButton/ScrollButton';

import { SWRConfig } from 'swr'
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";

export default function App(state) {
  //const  headerBg  = data.isHome ? HomeBackground : PageBackground;

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return (
    <div className="App">
      <SWRConfig
      value={{
        refreshInterval: 3000,
        refreshWhenOffline : false
      }}
    >
        <Switch>
        {/* <Route path="/about">
          <About />
        </Route>*/}
        <Route path="/our-team"  component={Pages}></Route>
        <Route path="/achievements"  component={Pages}></Route>
        <Route path="/latest"  component={Pages}></Route>
        <Route path="/contact-us"  component={Pages}></Route>
        <Route path="/projects/" exact component={Projects}></Route>
        <Route path="/projects/:city" exact  component={Projects}></Route>
        <Route path="/projects/:city/:id"  exact component={Projects}></Route>
        <Route path="/hot-projects/" exact component={Projects}></Route>
        <Route path="/hot-projects/:city" exact  component={Projects}></Route>
        <Route path="/hot-projects/:city/:id"  exact component={Projects}></Route>
        <Route path="/project/:slug" exact component={ProjectSingle}></Route>
        <Route path="/"  component={Home}></Route>
      </Switch>
      <ScrollButton />
    </SWRConfig>
    </div>
  );
}
