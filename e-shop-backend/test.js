inputlist.aggregate([
    {
        $lookup: {
            from: "category",
            localField: "category",
            foreignField: "_id",
            as: "category"
        }
    },
    {
        $unwind: {
            path: '$category',
            preserveNullAndEmptyArrays: true
        },
    },
    {
        $lookup: {
            from: "category",
            localField: "category.parentId",
            foreignField: "_id",
            as: "parentCategory"
        }
    },
    {
        $unwind: '$parentCategory'
    },
    {
        $lookup: {
            from: 'users',
            localField: 'dealer',
            foreignField: '_id',
            as: "dealer"
        }
    },
    {
        $unwind: '$dealer'
    },
    {
        $project: {
            id: "$_id",
            code: "$code",
            name: "$name",
            dealer: "$dealer.fullName",
            dealerId: "$dealer._id",
            dealerCode: "$dealer.sellerCode",
            company: "$company",
            category: "$category.name",
            categoryId: "$category._id",
            parentCategory: "$parentCategory.name",
            variety: "$variety",
            price: "$price",
            images: "$images",
            isDeleted: "$isDeleted",
            createdAt: "$createdAt",
            isFeatured: "$isFeatured",
            isApproved: "$isApproved",
            isExpired: "$isExpired",
            isActive: "$isActive",
            availableQuantity: "$availableQuantity",
            minimumQuantityToPurchase: "$minimumQuantityToPurchase",
            workingUnit: "$workingUnit",
            soldQuantity: "$soldQuantity",
            availableTill: "$availableTill",
            status: "$status"
        }
    },
    {
        $match: query
    },
    {
        $sort: sortquery
    },
],{ cursor:{} }, function (err, totalresults) {
    if (err) {
        return res.status(400).jsonx({
            success: false,
            error: err
        });
    } else {

        var results = totalresults.slice(skipNo, skipNo + count)

        async.each(results, function (input, callback) {
            let query = {};
            query = { input: { $in: [input.id] } };
            Orderedcarts.find(query).then(function (suborders) {
                input["subOrdersLenght"] = suborders.length;
                callback();
            }).fail(function (error) {
                callback(error);
            });
        }, function (error) {
            if (error) {
                return res.status(400).jsonx({
                    success: false,
                    error: error,
                });
            } else {
                return res.jsonx({
                    success: true,
                    data: {
                        inputs: results,
                        total: totalresults.length
                    },
                });
            }
        });
    }
});