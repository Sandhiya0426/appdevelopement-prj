// package com.backend.vevent.controller;

// import com.backend.vevent.model.Booking;
// import com.backend.vevent.service.BookingService;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import java.util.List;
// import java.util.Optional;

// @RestController
// @RequestMapping("/api/bookings")
// public class BookingController {

//     @Autowired
//     private BookingService bookingService;

//     @PostMapping
//     public ResponseEntity<Booking> createBooking(@RequestBody Booking booking) {
//         Booking savedBooking = bookingService.createBooking(booking);
//         return ResponseEntity.ok(savedBooking);
//     }

//     @GetMapping
//     public ResponseEntity<List<Booking>> getAllBookings() {
//         List<Booking> bookings = bookingService.getAllBookings();
//         return ResponseEntity.ok(bookings);
//     }

//     @GetMapping("/{id}")
//     public ResponseEntity<Booking> getBookingById(@PathVariable int id) {
//         Optional<Booking> booking = bookingService.getBookingById(id);
//         return booking.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
//     }

//     @PutMapping("/{id}")
//     public ResponseEntity<Booking> updateBooking(@PathVariable int id, @RequestBody Booking bookingDetails) {
//         Booking updatedBooking = bookingService.updateBooking(id, bookingDetails);
//         if (updatedBooking != null) {
//             return ResponseEntity.ok(updatedBooking);
//         }
//         return ResponseEntity.notFound().build();
//     }

//     @DeleteMapping("/{id}")
//     public ResponseEntity<Void> deleteBooking(@PathVariable int id) {
//         bookingService.deleteBooking(id);
//         return ResponseEntity.noContent().build();
//     }
// }
