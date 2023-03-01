export const dashboard =  (request,response,next)=>{
    return response.render("dashboard.ejs",{currentUser: 
    request.session.user.currentUser});
 }

export const signout = (request,response,next)=>{
    request.session.user = null;
    request.session.destroy();
    return response.redirect("/");
} 