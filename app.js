const express = require("express");
const app = express();
const path = require('path');
const fs = require("fs");

app.use(express.static('public'));

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));

app.get('/',(req,res)=>{
    // res.send('Hi');
    res.render('index')
    
})


app.get('/generate_report',(req,res)=>{
    res.render('generate_report')
})

app.get('/view_report',(req,res)=>{
    // res.render('report')
    // Read users.json file
fs.readFile("dummy.json", function(err, data) {
	// Check for errors
	if (err) throw err;
	// Converting to JSON
	 const details = JSON.parse(data);
    //  const acuuracy_detail=JSON.parse(data.accuracy);
     const accuracy_detail=(details.accuracy);
    //  console.log(details);
     const myJSON = JSON.stringify(accuracy_detail);
    //  console.log(myJSON.length);
    res.render('report',{details, myJSON});
});
})

app.get('/detailed_report',(req,res)=>{
    res.render('generate_report')
})

app.listen(8080, ()=>{
    console.log("Listening on port 8080!")
})