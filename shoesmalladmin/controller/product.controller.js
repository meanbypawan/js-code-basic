import Category from "../model/category.model.js";
import Product from "../model/product.model.js";
export const addProductPage = (request,response,next)=>{
    Category.fetch().then(result=>{
      return response.render("add-product.ejs",{
        currentUser: request.session.user.currentUser,
        categoryList: result,
        message: ""
      });
    }).catch(err=>{
      console.log(err);
    })
}

export const save = (request,response,next)=>{
  let image = request.file?.filename;
  let {productName,price,stock,description,size,color,discount,type,categoryId} = request.body;
  let product = new Product(null,productName,price,stock,description,size,color,discount,type,image,categoryId); 
  product.save().then(result=>{
    Category.fetch().then(result=>{
        return response.render("add-product.ejs",{
          currentUser: request.session.user.currentUser,
          categoryList: result,
          message: "Product saved"
        });
      }).catch(err=>{
        console.log(err);
      })
  }).catch();
}






