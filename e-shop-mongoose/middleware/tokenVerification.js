import jwt from 'jsonwebtoken';
export const verifyToken = (request,response,next)=>{
  try{
     let token = request.headers.authorization;
     if(!token)
        return response.status(401).json({error: 'Unauthorized request', status: false});
     jwt.verify(token,'dfsdfrrererxvvvcxvrererere');
     next();
  }
  catch(err){
    return response.status(401).json({error: 'Unauthorized request', status: false});
  }
}