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
    
}

module.exports = new BookingService;
