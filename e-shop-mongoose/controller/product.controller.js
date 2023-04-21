import { Product } from "../model/product.model.js"

export const recentProduct = (request,response,next)=>{
    console.log("CAlled..........");
    Product.find().limit(8).
    then(result=>{
        return response.status(200).json({products: result, status: true});
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({error:"Internal Server Error", status: false});
    });
} 
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
    let page = parseInt(request.query.page) || 1;
    let perPage = 10;
    Product.find().skip((page-1)*10).limit(10).
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