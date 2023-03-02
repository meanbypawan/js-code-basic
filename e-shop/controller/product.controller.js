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

export const saveProduct = async (request,response,next)=>{
  let productList = request.body.products;
  for(let product of productList){
   let {title, description,price,discountPercentage,rating,stock,brand,category,thumbnail} = product;
   let imageArray = "";
   for(let image of product.images){
      imageArray = imageArray+image+" ";
   }
   let productObject = new Product(null,title,description,price,discountPercentage,rating,stock,brand,category,thumbnail,imageArray);
   await productObject.save();
  }
  console.log("data saved..");
}

export const view = (request,response,next)=>{
   Product.getList()
   .then(result=>{
      return response.render("view-product.ejs",{
        currentUser: request.session.user.currentUser,
        productList: result
      })
   })
   .catch(err=>{
    console.log(err);
   });
}

export const viewDescription = (request,response,next)=>{
  let id = request.params.productId;
  Product.findById(id)
  .then(result=>{
    return response.render("product-description.ejs",{
      currentUser: request.session.user.currentUser,
      product: result[0]
    });
  })
  .catch(err=>{
    console.log(err);
  });
}


