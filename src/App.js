import './App.css';

import React from "react";
import Modal from "./components/elements/modal";
import Home from "./components/pages/home";
import Pages from "./components/pages/pages";
import Projects from "./components/pages/projects";
import ProjectSingle from "./components/pages/projectSingle";
import ScrollButton from './components/elements/ScrollButton/ScrollButton';
import { useEffect,useState } from "react";
import axios from "axios";
import {MobileView,isMobile} from 'react-device-detect';
import CareerSingle from './components/modules/careerSingle';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation
} from "react-router-dom";

export default function App(state) {
  //const  headerBg  = data.isHome ? HomeBackground : PageBackground;
  let projects = []
  try {
    projects = JSON.parse(localStorage.getItem('projects'));
    projects.length > 0 && axios.get('https://staging.starmarketingonline.com/wp-json/wp/v2/portf?_embed=true&per_page=100')
    .then(response => {
     localStorage.setItem('projects',JSON.stringify(response.data))
    })
  } catch (e) {
      console.error(e);
  }

  const { pathname } = useLocation();
   
  const [data,setData] = useState('');
  const [moduleOff,setModuleOff] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
   
  }, [pathname]);

  return (
    <div className="App">
      {/*parseInt(width) < 767 &&
       <MobileView>
            <meta http-equiv="Refresh" content={"0; url=https://m.starmarketingonline.com"+pathname} /> 
          </MobileView>
         */}
        <Switch>
        {/* <Route path="/about">
          <About />
        </Route>*/}
        <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
        <Route path="/our-team" exact component={Pages}></Route>
        <Route path="/achievements" exact component={Pages}></Route>
        <Route path="/latest" exact component={Pages}></Route>
        <Route path="/contact-us" exact component={Pages}></Route>
        <Route path="/privacy-policy" exact component={Pages}></Route>
        <Route path="/careers" exact component={Pages}></Route>
        <Route path="/career/:slug"  exact component={CareerSingle} data={data}></Route>
        <Route path="/projects" exact render={(props) => <Projects {...props} data="" />} />
        <Route path="/projects/:region" exact render={(props) => <Projects {...props} />} />
        <Route path="/projects/:region/:id" exact render={(props) => <Projects {...props} />} />
        <Route path="/hot-projects/" exact render={(props) => <Projects data={data} {...props} />} />
        <Route path="/hot-projects/:city" exact render={(props) => <Projects data={data} {...props} />} />
        <Route path="/hot-projects/:city/:id" exact  component={Projects} data={data}></Route>
        <Route path="/project/:slug"  exact component={ProjectSingle} data={data}></Route>
        <Route path="/" exact component={Home}></Route>
        <Route path="/react" exact component={Home}></Route>
        <Route path="*" component={Pages} />
      </Switch>
        {moduleOff && <Modal offModule={()=>setModuleOff(false)}/>} 
      <ScrollButton />
      
    </div>
  );
}
