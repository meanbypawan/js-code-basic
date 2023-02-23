import Admin from '../model/admin.model.js';

export const indexPage = (request,response,next)=>{
    return response.render("index.ejs");
}

export const signIn = (request,response,next)=>{
     let email = request.body.email;
     let password = request.body.password;
     let admin = new Admin(null,email,password);
     admin.signIn()
     .then(result=>{
        if(result.length)
          return response.render("dashboard.ejs");
        else
          return response.redirect("/");
          // http://localhost:3000/  
     })
     .catch();
}