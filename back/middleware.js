const jwt= require("jsonwebtoken")
async function authentification( req,res ,next) {
    const token=req.header("authorization").replace("Bearer ","")
    console.log(token)
    if(!token)throw new Error("le token est vide")
        const decoded=jwt.verify(token,"signature")
    if(decoded){
        
        req.user=decoded 
    }
    else{
        res.status(400).json({message:"erreur dauthentification"})
    }
    next()
    
}
module.exports={authentification}