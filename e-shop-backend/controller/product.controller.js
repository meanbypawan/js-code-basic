import { Op } from 'sequelize';
import {Product} from '../model/association.js';
export const search = (request,response,next)=>{
    Product.findAll({
       where:{
         [Op.or]:{
            title:{
                [Op.like]: "%"+request.params.keyword+"%"
            },
            description:{
                [Op.like]: "%"+request.params.keyword+"%"
            }
        }
      }
}).then(result=>{
        return response.status(200).json({products: result, status: true});
    }).catch(err=>{
        return response.status(500).json({error: "Internal Server Error", status: false});
    })
}
export const getProductByName = (request,response,next)=>{
    Product.findAll({
        where: {categoryname: request.params.categoryName}
    })
    .then(result=>{
        return response.status(200).json({product: result, status: true});
    }).catch(err=>{
        return response.status(500).json({error: "Intrnal Server Error", status: false});
    })
}

export const list = (request,response,next)=>{
    Product.findAll()
    .then(result=>{
        return response.status(200).json({product: result, status: true});
    }).catch(err=>{
        return response.status(500).json({error: "Intrnal Server Error", status: false});
    })
}

export const getProduct = (request,response,next)=>{
    Product.findByPk(request.params.id,{raw: true})
    .then(result=>{
        return response.status(200).json({product: result, status: true});
    }).catch(err=>{
        return response.status(500).json({error: "Intrnal Server Error", status: false});
    })
}
export const saveMultiple = async (request,response,next)=>{
    try{ 
      let productList = request.body.products;
      for(let product of productList){
       let {title, description,price,discountPercentage,rating,stock,brand,category,thumbnail} = product;
       let imageArray = "";
       for(let image of product.images){
         imageArray = imageArray+image+" ";
       }
       await Product.create({
         title:title, description:description,price:price,discountPercentage:discountPercentage,rating:rating,stock:stock,brand:brand,categoryname:category,thumbnail:thumbnail,imageArray:imageArray
       });
     }
     return response.status(200).json({message: 'Product saved', status: true});
    }
    catch(err){
      console.log(err);
      return response.status(500).json({error: 'Internal Server Error', status: false});
    }
 }
 