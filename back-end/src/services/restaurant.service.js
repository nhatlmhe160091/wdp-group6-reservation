const { Restaurant, Voucher, Dish } = require('../models/index');

class RestaurantService {
    /**
    * author: XXX
    */
    getAllRestaurants = async () => {
        return await Restaurant.find();
    }

    /**
    * author: XXX
    */
    getPaginatedRestaurants = async (page = 1, limit = 10, name) => {
        const filter = {};
        if (name) {
            filter.name = { $regex: name, $options: 'i' };
        }
        const skip = (page - 1) * limit;
        const records = await Restaurant.find(filter)
            .skip(skip)
            .limit(parseInt(limit))
            .exec();
        const totalRecords = await Restaurant.countDocuments(filter);
        const totalPages = Math.ceil(totalRecords / limit);

        return {
            data: records,
            meta: {
                total: totalRecords,
                totalPages,
                currentPage: parseInt(page),
                perPage: parseInt(limit)
            }
        }
    }

    
}

module.exports = new RestaurantService;
