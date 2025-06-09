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
    updateBookingFields = async (bookingId, bookingData) => {
        try {
            const allowedUpdates = {
                bookingTime: bookingData.bookingTime,
                adultsCount: bookingData.adultsCount,
                childrenCount: bookingData.childrenCount,
                note: bookingData.note,
                status: bookingData.status
            };
            // if (allowedUpdates.bookingTime) {
            //     const bookingTime = new Date(allowedUpdates.bookingTime);
            //     if (bookingTime <= Date.now()) {
            //         throw new Error('Thời gian đặt bàn phải ở tương lai.');
            //     }
            // }
            const updatedBooking = await Booking.findByIdAndUpdate(
                bookingId,
                { $set: allowedUpdates },
                { new: true, runValidators: true, context: 'query' }
            ).select('bookingTime adultsCount childrenCount note status');

            if (!updatedBooking) {
                return { error: true, message: 'Booking not found' };
            }

            return { error: false, message: 'Booking updated successfully', data: updatedBooking };
        } catch (error) {
            console.error('Error updating booking:', error);
            return { error: true, message: error.message || 'Internal Server Error' };
        }
    };
    
}

module.exports = new BookingService;
