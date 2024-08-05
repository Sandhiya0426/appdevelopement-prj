// package com.backend.vevent.service;

// import com.backend.vevent.model.PaymentDetails;
// import com.backend.vevent.repository.PaymentDetailsRepository;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import java.util.List;
// import java.util.Optional;

// @Service
// public class PaymentDetailsService {
    
//     @Autowired
//     private PaymentDetailsRepository paymentDetailsRepository;
    
//     public List<PaymentDetails> getAllPayments() {
//         return paymentDetailsRepository.findAll();
//     }
    
//     public Optional<PaymentDetails> getPaymentById(int id) {
//         return paymentDetailsRepository.findById(id);
//     }
    
//     public PaymentDetails savePayment(PaymentDetails paymentDetails) {
//         return paymentDetailsRepository.save(paymentDetails);
//     }
    
//     public void deletePayment(int id) {
//         paymentDetailsRepository.deleteById(id);
//     }
// }
