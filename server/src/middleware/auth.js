import jwt from 'jsonwebtoken'

export const auth = (req,res,next)=>{

    const token = req.header('x-auth-token');

    if(!token){
       return res.status(401).send("Access Denied")
    }

    try {
        const decoded = jwt.verify(token,'text')

        req.user = decoded
        next()
        
    } catch (ex) {
        res.status(403).send("invalid token")
        
    }
}