const { Restaurant, Voucher, Dish } = require('../models/index');

class RestaurantService {
    /**
    * author: thaikv
    */
    getAllRestaurants = async () => {
        return await Restaurant.find();
    }

    /**
    * author: thaikv
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

    /**
    * author: thaikv
    */
    getRestaurantsByVoucherId = async (voucherId) => {
        const voucher = await Voucher.findById(voucherId)
            .populate({
                path: 'restaurants',
            })
            .exec();
        if (!voucher) {
            throw new Error('Voucher not found');
        }

        return {
            data: voucher.restaurants,
        }
    };

    /**
    * author: thaikv
    */
    getRestaurantsByDishId = async (dishId) => {
        const dish = await Dish.findById(dishId)
            .populate({
                path: 'restaurants',
            })
            .exec();
        if (!dish) {
            throw new Error('Dish not found');
        }

        return {
            data: dish.restaurants,
        }
    };

    /**
    * author: thaikv
    */
    getRestaurant = async (restaurantId) => {
        const restaurant = await Restaurant.findById(restaurantId)
        const totalRecords = await Restaurant.countDocuments({ _id: restaurantId });
        return {
            data: restaurant,
            meta: {
                total: totalRecords
            }
        }
    };

    /**
    * author: Thaikx
    */
    getAllRestaurantsNgocNB = async () => {
        return await Restaurant.find();
    }

    /**
    * author: Thaikx
    */
    countRestaurants = async () => {
        return await Restaurant.countDocuments();
    }

    /**
    * author: Thaikx
    */
    findRestaurantsInPage = async (LIMIT, startIndex) => {
        return await Restaurant.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);
    }

    /**
    * author: Thaikv
    */
    createRestaurant = async (restaurantData) => {
        const newRestaurant = new Restaurant(restaurantData);
        return await newRestaurant.save();
    }

    /**
    * author: Thaikx
    */
    updateRestaurant = async (id, updatedData) => {
        return await Restaurant.findByIdAndUpdate(id, updatedData, { new: true });
    }

    /**
    * author: Thaikv
    */
    deleteRestaurant = async (id) => {
        return await Restaurant.findByIdAndDelete(id); // Xóa nhà hàng theo id
    }

}

module.exports = new RestaurantService;
