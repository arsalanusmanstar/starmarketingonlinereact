const express = require('express');
const app = express();
const request = require('request');
const fs = require('fs');

request('https://staging.starmarketingonline.com/wp-json/wp/v2/portf?_embed=true&per_page=20', function (error, response, body) {


    let Data = JSON.parse(body);
        Data.map((itm,index)=> {
                       
                fs.readFile('./build/index.html', 'utf-8', function(err, data) {
                    if (err) throw err;
                    var newValue = data.replace("Star Marketing (PVT)Ltd", itm.yoast_meta[0].content);
                    console.log(newValue)
                    // var newValue = data.replace('', 'name');
                    fs.writeFile("./build/project/"+itm.slug+".html", newValue, 'utf-8', function(err, data) {
                        if (err) throw err;
                        console.log('Done!');
                    })
                })

        })

})

app.listen(3000, () => console.log('Started on PORT 3000'));