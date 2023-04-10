import { Product } from "../model/product.model.js"

export const getProductsByCategory = (request,response,next)=>{
    Product.find({category:request.params.categoryName}).
    then(result=>{
        return response.status(200).json({products: result, status: true});
    }).catch(err=>{
        return response.status(500).json({error:"Internal Server Error", status: false});
    })
}
export const getProduct = (request,response,next)=>{
    Product.findById(request.params.id).
    then(result=>{
        return response.status(200).json({product: result, status: true});
    }).catch(err=>{
        return response.status(500).json({error:"Internal Server Error", status: false});
    })
}
export const list = (request,response,next)=>{
    Product.find().
    then(result=>{
        return response.status(200).json({products: result, status: true});
    }).catch(err=>{
        return response.status(500).json({error:"Internal Server Error", status: false});
    })
}
export const bulkSave = (request,response)=>{
    Product.insertMany(request.body.products)
    .then(result=>{
        return response.json({message : "save"});
    }).catch(err=>{
        return response.json({error: "error"});
    })
}