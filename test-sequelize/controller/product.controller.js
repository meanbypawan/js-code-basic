import Product from "../model/product.model.js"

export const save = (request,response,next)=>{
    Product.create(request.body).then(result=>{
      return response.status(200).json({result: result, status:true});
    }).catch(err=>{
      console.log(err);  
      return response.status(500).json({error: "Internal server error", status: false});
    });
}

export const list = (request,response,next)=>{
    Product.findAll()
    .then(result=>{
        return response.status(200).json({products: result, status: true});
    }).catch(err=>{
        return response.status(500).json({error: "Internal Server Error", status: false});
    })
}

export const getProductById = (request,response,next)=>{
   Product.findByPk(request.params.productId)
   .then(result=>{
    return response.status(200).json({product: result, status: true});
   }).catch(err=>{
     return response.status(500).json({error: "Internal Server Error", status: false});   
   })   
}

export const getProductByName = (request,response,next)=>{
 Product.findAll({
    where:{
        name: request.body.name
    }
 }).then(result=>{
    return response.status(200).json({product: result, status: true});
 }).catch(err=>{
    return response.status(500).json({error: "Internal server error", status: false});
 })   
}