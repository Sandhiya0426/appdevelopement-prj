// package com.backend.vevent.controller;

// import com.backend.vevent.model.EventOrganizer;
// import com.backend.vevent.service.EventOrganizerService;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import java.util.List;
// import java.util.Optional;

// @RestController
// @RequestMapping("/api/organizers")
// public class EventOrganizerController {
    
//     @Autowired
//     private EventOrganizerService eventOrganizerService;
    
//     @GetMapping
//     public List<EventOrganizer> getAllOrganizers() {
//         return eventOrganizerService.getAllOrganizers();
//     }
    
//     @GetMapping("/{id}")
//     public ResponseEntity<EventOrganizer> getOrganizerById(@PathVariable int id) {
//         Optional<EventOrganizer> eventOrganizer = eventOrganizerService.getOrganizerById(id);
//         return eventOrganizer.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
//     }
    
//     @PostMapping
//     public EventOrganizer createOrganizer(@RequestBody EventOrganizer eventOrganizer) {
//         return eventOrganizerService.saveOrganizer(eventOrganizer);
//     }
    
//     @PutMapping("/{id}")
//     public ResponseEntity<EventOrganizer> updateOrganizer(@PathVariable int id, @RequestBody EventOrganizer eventOrganizer) {
//         if (!eventOrganizerService.getOrganizerById(id).isPresent()) {
//             return ResponseEntity.notFound().build();
//         }
//         eventOrganizer.setId(id);
//         EventOrganizer updatedOrganizer = eventOrganizerService.saveOrganizer(eventOrganizer);
//         return ResponseEntity.ok(updatedOrganizer);
//     }
    
//     @DeleteMapping("/{id}")
//     public ResponseEntity<Void> deleteOrganizer(@PathVariable int id) {
//         if (!eventOrganizerService.getOrganizerById(id).isPresent()) {
//             return ResponseEntity.notFound().build();
//         }
//         eventOrganizerService.deleteOrganizer(id);
//         return ResponseEntity.noContent().build();
//     }
// }
