// package com.backend.vevent.controller;

// import com.backend.vevent.model.PaymentDetails;
// import com.backend.vevent.service.PaymentDetailsService;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import java.util.List;
// import java.util.Optional;

// @RestController
// @RequestMapping("/api/payments")
// public class PaymentDetailsController {
    
//     @Autowired
//     private PaymentDetailsService paymentDetailsService;
    
//     @GetMapping
//     public List<PaymentDetails> getAllPayments() {
//         return paymentDetailsService.getAllPayments();
//     }
    
//     @GetMapping("/{id}")
//     public ResponseEntity<PaymentDetails> getPaymentById(@PathVariable int id) {
//         Optional<PaymentDetails> paymentDetails = paymentDetailsService.getPaymentById(id);
//         return paymentDetails.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
//     }
    
//     @PostMapping
//     public PaymentDetails createPayment(@RequestBody PaymentDetails paymentDetails) {
//         return paymentDetailsService.savePayment(paymentDetails);
//     }
    
//     @PutMapping("/{id}")
//     public ResponseEntity<PaymentDetails> updatePayment(@PathVariable int id, @RequestBody PaymentDetails paymentDetails) {
//         if (!paymentDetailsService.getPaymentById(id).isPresent()) {
//             return ResponseEntity.notFound().build();
//         }
//         paymentDetails.setId(id);
//         PaymentDetails updatedPayment = paymentDetailsService.savePayment(paymentDetails);
//         return ResponseEntity.ok(updatedPayment);
//     }
    
//     @DeleteMapping("/{id}")
//     public ResponseEntity<Void> deletePayment(@PathVariable int id) {
//         if (!paymentDetailsService.getPaymentById(id).isPresent()) {
//             return ResponseEntity.notFound().build();
//         }
//         paymentDetailsService.deletePayment(id);
//         return ResponseEntity.noContent().build();
//     }
// }

