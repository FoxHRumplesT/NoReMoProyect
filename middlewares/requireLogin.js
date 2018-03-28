module.exports=(req,res,next)=>{
    if(!req.user){
        return res.status(401).send({error:"Debe estar logueado para realizar esta acción"});
    }
    next();
}