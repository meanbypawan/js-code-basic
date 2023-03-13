import Category from "../model/category.model.js";
import Product from "../model/product.model.js";

export const allProduct = (request,response,next)=>{
    Promise.all([Product.getList(),Category.getList()])
    .then(results=>{
      return response.render("product.ejs",{
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

export const productByCategory = (request,response,next)=>{
    let categoryName = request.params.categoryName;
    Promise.all([Product.getProductByCategory(categoryName),Category.getList()])
    .then(results=>{
      return response.render("product.ejs",{
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

export const search = (request,response,next)=>{
    console.log(request.params.keyword);
    Product.getProductByKeyword(request.params.keyword)
    .then(result=>{
       return response.status(200).json({productList: result});
    }).catch(err=>{
        console.log(err);
    })
}