export const verify = (request,response,next)=>{
    if(request.session.user.isLoggedIn)
      next();
    else
     return response.redirect("/");  
}