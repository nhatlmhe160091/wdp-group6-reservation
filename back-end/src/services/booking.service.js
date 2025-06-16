const { Booking,Restaurant, Table, User, Guest } = require('../models/index');
const tableService = require('./table.service');
const admin = require('../configs/firebaseAdmin');

class BookingService {

    /**
     * author: XXX
     */
    getAllBookings = async () => {
        return await Booking.find()
        .populate('restaurant')  
        .populate('customer')  
        .populate('guest')
         .populate({
            path: 'reservation.table', 
            model: 'Table' 
        }); 
    }
   /**
     * author: XXX
     */
    getBookingById = async (bookingId) => {
        const booking = await Booking.findById(bookingId).select('bookingTime adultsCount childrenCount note status reservation');
        if (!booking) {
            return { error: true, message: 'Booking not found' };
        }
        return { error: false, data: booking };
    };
       /**
     * author: XXX
     */
    }

module.exports = new BookingService;
