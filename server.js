const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

const users = [{
    id:1,
    email: "alice@gmail.com",
    password: "alice@123"
},
{
    id:2,
    email: "jhon@gmail.com",
    password: "jhon@123"
},
{
    id:3,
    email: "bob@gmail.com",
    password: "bob@123"
}
]

// get
app.get("/users",(req,res)=>{
    res.status(200).json(users)
})

// put

app.put("/update/:id",(req,res)=>{
    const id = parseInt(req.params.id)
    const index = users.findIndex(u=> u.id === id)
    const updatedUser = req.body

    if(index == -1){
        return res.status(404).json({message: "Email not found"})
    }

    users[index] = {...users[index],...updatedUser}

    res.status(201).json({message: "user updated successfully",data: updatedUser})

})



//delete

app.delete("/delUser/:id",(req,res)=>{
    const id = parseInt(req.params.id)
    const index = users.findIndex(u=>u.id === id)

    if(index == -1){
        return res.status(404).json({message:"email not found"})
    }

    const deletedUser = users.splice(index,1)

    res.status(201).json({message:"user deleted successfully"})
})





app.listen(port,()=>{
    console.log(`server is running on the port ${port}`)
})