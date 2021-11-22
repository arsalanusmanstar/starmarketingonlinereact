
import loadable from '@loadable/component'
import TopBanner from "./banner";
import FeatureProjects from "./feature-projects";
import LatestNews from "./latestNew";
import About from "./about"
import CallRequest from "./callrequest";
import Locations from "./locations";
import Team from "./team";
import Regions from "./regions";
import Blog from "./blog";
import Achievements from "./achievements";
import Contact from "./contact";
import Careers from "./careers";




const Modules = ({data,location}) => {
   return (
       
       <>
        {data && data['main_banner'] && <TopBanner data={data['main_banner']}/> }
        {/* {data && data['featured_projects'] && <FeatureProjects data={data['featured_projects']}/>} */}
        {data && data['latest_projects'] && <LatestNews data={data['latest_projects']}/>}
        {data && data['regions'] && <Regions data={data['regions']}/>}
        {data && data['about_us'] && <About data={data['about_us']}/>}
        {data && data['call_back'] && <CallRequest location={location} title={'Request Instant Call Back'} data={data['call_back']}/>}
        {data && data['team_members'] && <Team team={data['team_members']} owner={data['owner']}/>}
        
        {data && data['blog_categories'] && <Blog data={data['blog_categories']}/>}
        {data && data['achievement'] && <Achievements team={data['achievement']}/>}
        {data && data['offices'] && <Contact offices={data['offices']} get_in_touch={data['get_in_touch']}/>}
        {data && data['career'] && <Careers team={data['career']}/>}
        <Locations />
     </>
    ) 
}
export default Modules;