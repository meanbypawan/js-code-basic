import Category from "../model/category.model.js";
import Product from "../model/product.model.js";

export const indexPage = (request,response,next)=>{
    Promise.all([Product.getList(),Category.getList()])
    .then(results=>{
      return response.render("index.ejs",{
        productList: results[0],
        categoryList: results[1]
      })
    })
    .catch(err=>{
        console.log(err);
    });
}