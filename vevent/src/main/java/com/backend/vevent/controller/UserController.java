// package com.backend.vevent.controller;

// import com.backend.vevent.model.User;
// import com.backend.vevent.service.UserService;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import java.util.List;
// import java.util.Optional;

// @RestController
// @RequestMapping("/api/users")
// public class UserController {

//     @Autowired
//     private UserService userService;

//     @PostMapping("/register")
//     public ResponseEntity<User> registerUser(@RequestBody User user) {
//         User newUser = userService.registerUser(user);
//         return ResponseEntity.ok(newUser);
//     }

//     @GetMapping
//     public ResponseEntity<List<User>> getAllUsers() {
//         List<User> users = userService.getAllUsers();
//         return ResponseEntity.ok(users);
//     }

//     @GetMapping("/{id}")
//     public ResponseEntity<User> getUserById(@PathVariable Long id) {
//         Optional<User> user = userService.getUserById(id);
//         return user.map(ResponseEntity::ok)
//                    .orElseGet(() -> ResponseEntity.notFound().build());
//     }

//     @PutMapping("/{id}")
//     public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userDetails) {
//         User updatedUser = userService.updateUser(id, userDetails);
//         return ResponseEntity.ok(updatedUser);
//     }

//     @DeleteMapping("/{id}")
//     public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
//         userService.deleteUser(id);
//         return ResponseEntity.noContent().build();
//     }

//     // Log in an existing user
//     // @PostMapping("/login")
//     // public ResponseEntity<String> loginUser(@RequestBody User loginUser) {
//     //     try {
//     //         User authenticatedUser = userService.authenticateUser(loginUser.getEmail(), loginUser.getPassword());
//     //         return ResponseEntity.ok("Login successful. Welcome, " + authenticatedUser.getName());
//     //     } catch (IllegalArgumentException e) {
//     //         return ResponseEntity.badRequest().body(e.getMessage());
//     //     }
//     // }
// }
