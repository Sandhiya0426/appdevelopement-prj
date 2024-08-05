package com.backend.vevent.service;

import com.backend.vevent.model.Booking;
import com.backend.vevent.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    public Booking createBooking(Booking booking) {
        return bookingRepository.save(booking);
    }

    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    public Optional<Booking> getBookingById(int id) {
        return bookingRepository.findById(id);
    }

    public Booking updateBooking(int id, Booking bookingDetails) {
        Optional<Booking> bookingOptional = bookingRepository.findById(id);
        if (bookingOptional.isPresent()) {
            Booking booking = bookingOptional.get();
            booking.setName(bookingDetails.getName());
            booking.setDate(bookingDetails.getDate());
            booking.setNumberOfGuests(bookingDetails.getNumberOfGuests());
            booking.setType(bookingDetails.getType());
            booking.setOrganizer(bookingDetails.getOrganizer());
            return bookingRepository.save(booking);
        }
        return null; // Or throw an exception if preferred
    }

    public void deleteBooking(int id) {
        bookingRepository.deleteById(id);
    }
}
