// package com.backend.vevent.controller;

// import com.backend.vevent.model.CartItem;
// import com.backend.vevent.service.CartItemService;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import java.util.List;
// import java.util.Optional;

// @RestController
// @RequestMapping("/api/cart")
// public class CartItemController {

//     @Autowired
//     private CartItemService cartItemService;

//     @GetMapping
//     public ResponseEntity<List<CartItem>> getAllCartItems() {
//         List<CartItem> cartItems = cartItemService.getAllCartItems();
//         return new ResponseEntity<>(cartItems, HttpStatus.OK);
//     }

//     @GetMapping("/{id}")
//     public ResponseEntity<Optional<CartItem>> getCartItemById(@PathVariable Integer id) {
//         Optional<CartItem> cartItem = cartItemService.getCartItemById(id);
//         return cartItem.isPresent() ? new ResponseEntity<>(cartItem, HttpStatus.OK) : new ResponseEntity<>(HttpStatus.NOT_FOUND);
//     }

//     @PostMapping
//     public ResponseEntity<CartItem> createCartItem(@RequestBody CartItem cartItem) {
//         CartItem newCartItem = cartItemService.saveCartItem(cartItem);
//         return new ResponseEntity<>(newCartItem, HttpStatus.CREATED);
//     }

//     @PutMapping("/{id}")
//     public ResponseEntity<CartItem> updateCartItem(@PathVariable Integer id, @RequestBody CartItem cartItem) {
//         if (cartItemService.getCartItemById(id).isPresent()) {
//             cartItem.setId(id);
//             CartItem updatedCartItem = cartItemService.saveCartItem(cartItem);
//             return new ResponseEntity<>(updatedCartItem, HttpStatus.OK);
//         } else {
//             return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//         }
//     }

//     @DeleteMapping("/{id}")
//     public ResponseEntity<Void> deleteCartItem(@PathVariable Integer id) {
//         if (cartItemService.getCartItemById(id).isPresent()) {
//             cartItemService.deleteCartItem(id);
//             return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//         } else {
//             return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//         }
//     }
// }
