//bring express in Node.js
const express=require("express")
const cors=require("cors");

//create express app using what we imported
const app=express();

//use cors middleware to handle requests
app.use(cors());

const tasks=[
          {
              id:1,
              title:"Learn React",
              description:"Understanding Components",
              status: "Completed"
          },
          {
              id:2,
              title:"Learn JavaScript",
              description:"Understanding Variables, Functions",
              status: "Pending"
          },
      ];
app.get("/api/tasks",(req,res)=>{res.json(tasks);});
//our api route(testing)
app.get("/",(req,res)=>{
    res.send("Backend is working!!")
});
//start the server and listen to port 5000
app.listen(5000,()=>{
    console.log("Server us running on port 5000")
});