const express = require('express');
const serveStatic = require('serve-static');
const app = express();
const resolve = require('path').resolve;
const request = require('request');
const fs = require('fs');

  
const file = '/.rsp.json';

app.use(serveStatic(resolve('./build')));
app.get('/', (req, res) => res.sendFile(resolve('./build/index.html')))
app.get('/our-team', (req, res) => res.sendFile(resolve('./build/our-team.html')));
app.get('/achievements', (req, res) => res.sendFile(resolve('./build/achievements.html')));
app.get('/latest', (req, res) => res.sendFile(resolve('./build/latest.html')));
app.get('/contact-us', (req, res) => res.sendFile(resolve('./build/contact-us.html')));

// app.get('/projects',  (req, res) =>res.sendFile(resolve('./build/projects.html')));
const data = [
        "/",
      "/our-team",
      "/achievements",
      "/latest",
      "/projects",
      "/contact-us",
];
const  projects = []
request('https://staging.starmarketingonline.com/wp-json/wp/v2/portf?_embed=true&per_page=100', function (error, response, body) {
    
    

    let Data = JSON.parse(body);
        Data.map((itm,index)=> {
        //     app.get("/"+itm.slug, (req, res) => res.sendFile(resolve('./build/'+itm.slug+".html")))
        // console.log('./build/project/'+itm.slug+".html")}
        projects[index] = "/project/"+itm.slug
                
        const content = {
            "port": 3000,
            "buildDirectory": "./build",
            "routes":[...data,...projects]
        };

  
        fs.writeFile('.rsp.json',JSON.stringify(content),{
        },(err)=> { console.log(err)})
    }
    )
    //  && body.map(itm=>
    //     console.log(itm)    
    // )

})


app.listen(3000, () => console.log('Started on PORT 3000'));