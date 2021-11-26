import './App.css';

import React, { useContext } from "react";
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
import  {Helmet, HelmetProvider } from 'react-helmet-async';
import ReactLoading from "react-loading";
import  { UserContext } from './components/elements/UserContext';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation
} from "react-router-dom";
import Header from './components/header';

export default function App(state) {
  //const  headerBg  = data.isHome ? HomeBackground : PageBackground;
  
  const [data,setData] = useState('');
  const [isActive,setIsActive] = useState(true);
  const [collectData,setColletData] = useState(false);
  
  const { pathname } = useLocation();
   
 

  const [moduleOff,setModuleOff] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      setIsActive(true)
      setTimeout(()=>{
        setIsActive(false)
      },1000)

      try {
        !collectData && axios.get('https://staging.starmarketingonline.com/wp-json/wp/v2/portf?_embed=true&per_page=100')
         .then(response => {
           setData(response.data)
           setColletData(true)
         })
       } catch (e) {
           console.error(e);
       }
  }, [pathname]);

  return (
    <HelmetProvider>
       <UserContext.Provider value={[data,setData]}>
   <div className="App">
         <UserContext.Provider value={[data,setData]}> <Header  params={pathname} data={data}/></UserContext.Provider>
          {isActive && <ReactLoading type={'bubbles'}  className="loading" style={{margin:'0 auto',color:"#fff",height:'100vh',width:"100%",background:"rgb(0 20 57 / 100%)",position:"fixed",left:'0',right:'0',top:"0",zIndex:"9999"}} />}

        <Switch>
        <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
        <Route path="/our-team" exact component={Pages}></Route>
        <Route path="/achievements" exact component={Pages}></Route>
        <Route path="/latest" exact component={Pages}></Route>
        <Route path="/contact-us" exact component={Pages}></Route>
        <Route path="/privacy-policy" exact component={Pages}></Route>
        <Route path="/careers" exact component={Pages}></Route>
        <Route path="/career/:slug"  exact component={CareerSingle} data={data}></Route>
        <Route path="/projects/" exact render={(props) => <Projects {...props} data="" /> } />
        <Route path="/projects/:region" exact render={(props) => <Projects {...props} /> } />
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
    </UserContext.Provider>
    </HelmetProvider>
  );
}
