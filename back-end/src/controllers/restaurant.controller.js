const { RestaurantService, DishService } = require('../services/index');

class RestaurantController {
    /**
        * method: GET
        * router(api/v1/restaurant)
        * author: XXX
        */
    getAllRestaurants = async (req, res, next) => {
        try {
            const restaurants = await RestaurantService.getAllRestaurants();
            res.status(200).json(restaurants);
        } catch (error) {
            next(error);
        }
    }

    /**
    * method: GET
    * router(api/v1/get-paginated-restaurants)
    * author: XXX
    */
    }

module.exports = new RestaurantController();
