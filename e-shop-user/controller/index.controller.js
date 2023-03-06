import Category from "../model/category.model.js";
import Product from "../model/product.model.js";
import User from "../model/user.model.js";

export const indexPage = (request,response,next)=>{
    Promise.all([Product.getList(),Category.getList()])
    .then(results=>{
      return response.render("index.ejs",{
        productList: results[0],
        categoryList: results[1],
        currentUser: request.session.user,
        message: '' 
      })
    })
    .catch(err=>{
        console.log(err);
    });
}

export const signinPage = (request,response,next)=>{
  return response.render("signin.ejs",{message: ""});
}

export const signupPage = (request,response,next)=>{
  return response.render("signup.ejs");
}

export const signup = (request,response,next)=>{
  let user = new User(null, request.body.username,request.body.email, request.body.password, request.body.contact);
  user.save()
  .then(result=>{
    return response.render("signin.ejs",{message: ""});
  }).catch(err=>{
    console.log(err);
  });
}

export const signin = (request,response,next)=>{
  let user = new User();
  let {email,password} = request.body;
  user.email = email;
  user.password = password;
  user.signin()
  .then(result=>{
     if(result.length){
      request.session.user = {id: result[0].id,
      username: result[0].username,
      email: result[0].email}; 
      return response.redirect("/");
     } 
     else
       return response.render("signin.ejs",{message: "Invalid email or password"});  
  })
  .catch(err=>{
    console.log(err);
  });
  
}
export const signout = (request,response,next)=>{
   request.session.user = null;
   request.session.destroy();
   return response.redirect("/");   
}