const express=require("express")
const{authentification}=require('./middleware.js')
const {connexion}=require("./connexion.js")
const { Facebook}=require('./user.js')
const port=3000
const app=express()
const cors= require("cors")


app.use(express.json())
app.use(cors())
app.post('/logine',async(req,res)=>{
 
  
    const infos=req.body
    if(!infos)throw new Error("les informations sont vident")
        try{
    const user=new Facebook(infos)
user.generate_token()
     res.json({message:"connexion reussir",user:user.Token}).status(200)
    }
    catch(e){
res.json({message:"connexion echoué, veuillez recommencer"}).status(400)
    }})

app.get("/commerce",authentification,async(req,res)=>{
   try{
      res.json({message:"ok"})

  }
   catch(e){
        res.json({message:e.message}).status(400)
   }
    

})




app.listen(port,()=>{
    console.log("serveur en ligne")
})
connexion()
.catch((e)=>{
    console.log(e.message)
})