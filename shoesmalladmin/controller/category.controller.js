import Category from "../model/category.model.js";
export const addCategoryPage = (request,response)=>{
   return response.render("add-category.ejs",{currentUser: 
    request.session.user.currentUser,message: "",alertClass:""});
}

export const save = (request,response,next)=>{
Category.isExist(request.body.categoryName)
.then(result=>{
    if(result.length)
      return response.render("add-category.ejs",{
        currentUser: request.session.user.currentUser,
        message: "Category already exists",
        alertClass: "info"
      });
    else{
        let category = new Category(null,request.body.categoryName);
        category.save()
        .then(result=>{
          if(result.affectedRows)
           return response.render("add-category.ejs",{currentUser: 
              request.session.user.currentUser, message: "Category added",
            alertClass: "success"});
        })
        .catch(err=>{
          console.log(err);
        });
    }  
}).catch(err=>{
    console.log(err);
});
  
}

export const list = (request,response,next)=>{
    Category.fetch()
    .then(result=>{
       return response.render("view-category.ejs",{
        currentUser: request.session.user.currentUser,
        categoryList: result
       })
    }).catch(err=>{
       console.log(err);      
    })   
}
export const remove = (request,response,next)=>{
  Category.delete(request.params.id)
  .then(result=>{
      return response.redirect("/category/view");
  })
  .catch(err=>{
    console.log(err);
  });
}
