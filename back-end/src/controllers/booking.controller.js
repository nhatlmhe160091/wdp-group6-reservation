const { BookingService } = require('../services/index');

class BookingController {
    /**
    * method: GET
    * router(/api/v1/booking)
    * author: XXX
    */
    getAllBookings = async (req, res, next) => {
        try {
            const bookings = await BookingService.getAllBookings();
            res.status(200).json({
                data: bookings,
            });
        } catch (error) {
            next(error);
        }
    }

  /**
    * method: GET
    * router(/api/v1/booking/details-booking/:bookingId)
    * author: XXX
    */
    getBookingById = async (req, res, next) => {
        const { bookingId } = req.params;
        try {
            const result = await BookingService.getBookingById(bookingId);
            if (result.error) {
                return res.status(404).json({
                    error: true,
                    message: result.message,
                });
            }
            res.status(200).json({
                message: 'Booking fetched successfully',
                data: result.data,
            });
        } catch (error) {
            next(error);
        }
    };
      /**
   }

module.exports = new BookingController;