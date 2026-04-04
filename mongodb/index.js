let express = require("express")
let app = express();

app.use(express.json())


app.get("/student" , (req , res)=>{
    res.send("Student View Api")
})

app.post("/insert" , (req,res)=>{
    res.send("Student Insert API")
})

app.listen("8000")