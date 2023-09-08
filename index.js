const express=require('express')
const port =3002
const App=express();
App.get('/',(req,res)=>{
    res.send("<h1>It's Express Handson</h1>")
})
App.get('/api/main/',(req,res)=>{
    res.json({
        "What is Express":"Express is a node js web application framework that provides broad features for building web and mobile applications."
    })
})
App.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})