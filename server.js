const express = require('express')
const fs=require('fs')
var app=express();
app.set('view engine','ejs')

////app.get act as middleware

app.use(express.static(__dirname + '/public')); /////dirname give path till public

app.use((req,res,next)=>{
    res.render('maintenance.ejs');
});


app.use((req,res,next)=>{
    var log=new Date().toString();
     fs.appendFile('server.log',log)
     log+=req.method+req.path
    //console.log(log+req.method+req.path)
    next();     /////////its a callback
})


app.get('/',(req,res)=>{                             ///// '/' denotes root
    res.send('<h1>hello express....</h1>')
})


// app.get('/user',(req,res)=>{                             ///// '/' denotes root
//     res.send({                                       ////////sending object
//                 name:'Prajakta',
//                  Address:'Hadapsar'                                                   
//     })
// })


app.get('/user',(req,res,next)=>{                             ///// '/' denotes root
    res.render('home.ejs',{
        pagetitle:'Express Web app',
        username:'Praju'

    })
})


app.listen(3000,()=>{
    console.log('server started...check your website at localhost:3000')
});