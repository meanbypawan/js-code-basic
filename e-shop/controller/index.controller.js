import Admin from '../model/admin.model.js';

export const indexPage = (request,response,next)=>{
    return response.render("index.ejs",{message: ""});
}

export const signIn = (request,response,next)=>{
     // request.body = {email: '', password: ''}
     const {email,password} = request.body;
     
     let admin = new Admin(null,email,password);
     admin.signIn()
     .then(result=>{
        if(result.length){
          request.session.user = {isLoggedIn: true, currentUser: email};
          return response.redirect("/admin/dashboard");
        }
        else
         return response.render("index.ejs",{
          message: "Invalid email id or password"
         });
     })
     .catch();
}