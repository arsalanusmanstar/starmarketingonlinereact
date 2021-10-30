const express = require('express'); //Line 1
const request = require('request');
var cors = require('cors')
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3
app.options('*', cors()) // include before other routes
// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6
const baseUrl = 'https://starmarketingonline.com/wp-json/wp/v2';

// create a GET route
app.get('/express_backend', (req, res) => { //Line 93
    var url = baseUrl+req.query['link'];
    request({
        method: 'GET',
        uri: url,
     },function (error, response, body){
        res.send(body); //Line 10
     });
  
}); //Line 11

app.post('/expressPost', (req, res) => { //Line 93
     var url = req.query.slug ?  baseUrl+req.query.data+'&slug='+req.query.slug.replace('/','') : baseUrl+req.query.categories ? baseUrl+req.query.data+'&categories='+req.query.slug.replace('/','') : baseUrl+req.query.data;
    console.log(url)

    request({
        method: 'GET',
        uri: url,
     },function (error, response, body){
        res.send(body); //Line 10
     });
  
}); //Line 11

app.get('/latest', (req, res) => { //Line 93
     var url = baseUrl+'/posts?_embed=true&?categories=47,2673&per_page=100';
    console.log(url)

    request({
        method: 'GET',
        uri: url,
     },function (error, response, body){
        res.send(body); //Line 10
     });
  
}); //Line 11

app.get('/featureProject', (req, res) => { //Line 93
     var url = baseUrl+'/portf?_embed=true';
    console.log(url)

    request({
        method: 'GET',
        uri: url,
     },function (error, response, body){
        res.send(body); //Line 10
     });
  
}); //Line 11

app.get('/blog', (req, res) => { //Line 93
     var url = baseUrl+'/posts?_embed=true&?categories=47,2673&per_page=100';
    console.log(url)

    request({
        method: 'GET',
        uri: url,
     },function (error, response, body){
        res.send(body); //Line 10
     });
  
}); //Line 11

app.get('/projects', (req, res) => { //Line 93
   var url = baseUrl+'/portf?_embed=true&per_page=100';
  console.log(url)

  request({
      method: 'GET',
      uri: url,
   },function (error, response, body){
      res.send(body); //Line 10
   });

}); //Line 11


app.post('/singleprojects', (req, res) => { //Line 93
   var url = req.query.slug && baseUrl+'/portf?_embed=true&slug='+req.query.slug.replace('/','');
  console.log(url)

  request({
      method: 'GET',
      uri: url,
   },function (error, response, body){
      res.send(body); //Line 10
   });

}); //Line 11
