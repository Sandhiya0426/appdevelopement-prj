// package com.backend.vevent.service;


// import com.backend.vevent.model.EventOrganizer;
// import com.backend.vevent.repository.EventOrganizerRepository;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import java.util.List;
// import java.util.Optional;

// @Service
// public class EventOrganizerService {
    
//     @Autowired
//     private EventOrganizerRepository eventOrganizerRepository;
    
//     public List<EventOrganizer> getAllOrganizers() {
//         return eventOrganizerRepository.findAll();
//     }
    
//     public Optional<EventOrganizer> getOrganizerById(int id) {
//         return eventOrganizerRepository.findById(id);
//     }
    
//     public EventOrganizer saveOrganizer(EventOrganizer eventOrganizer) {
//         return eventOrganizerRepository.save(eventOrganizer);
//     }
    
//     public void deleteOrganizer(int id) {
//         eventOrganizerRepository.deleteById(id);
//     }
// }
