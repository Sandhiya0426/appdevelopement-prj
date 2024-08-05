// package com.backend.vevent.service;

// import com.backend.vevent.model.User;
// import com.backend.vevent.repository.UserRepository;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import java.util.List;
// import java.util.Optional;

// @Service
// public class UserService {

//     @Autowired
//     private UserRepository userRepository;

//     // Register a new user
//     public User registerUser(User user) {
//         return userRepository.save(user);
//     }

//     // Get all users
//     public List<User> getAllUsers() {
//         return userRepository.findAll();
//     }

//     // Get a user by ID
//     public Optional<User> getUserById(Long id) {
//         return userRepository.findById(id);
//     }

//     // Update user details
//     public User updateUser(Long id, User userDetails) {
//         return userRepository.findById(id)
//                 .map(user -> {
//                     user.setName(userDetails.getName());
//                     user.setEmail(userDetails.getEmail());
//                     user.setPassword(userDetails.getPassword());
//                     return userRepository.save(user);
//                 })
//                 .orElseThrow(() -> new RuntimeException("User not found with id: " + id));
//     }

//     // Delete a user
//     public void deleteUser(Long id) {
//         userRepository.deleteById(id);
//     }

//     // Authenticate user (optional)
//     public User authenticateUser(String email, String password) {
//         return userRepository.findAll().stream()
//                 .filter(user -> user.getEmail().equals(email) && user.getPassword().equals(password))
//                 .findFirst()
//                 .orElseThrow(() -> new IllegalArgumentException("Invalid email or password"));
//     }
// }
