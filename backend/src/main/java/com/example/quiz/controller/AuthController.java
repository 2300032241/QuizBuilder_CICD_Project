package com.example.quiz.controller;

import com.example.quiz.model.User;
import com.example.quiz.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private UserRepository userRepo;

    private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    // ----------------- SIGNUP -----------------
    @PostMapping("/signup")
    public String signup(@RequestBody User user) {
        if (userRepo.existsByUsername(user.getUsername())) {
            return "Username already exists";
        }

        // encrypt password
        user.setPassword(encoder.encode(user.getPassword()));
        userRepo.save(user);

        return "Signup successful";
    }

    // ----------------- LOGIN -----------------
    @PostMapping("/login")
    public String login(@RequestBody User user) {
        User dbUser = userRepo.findByUsername(user.getUsername())
                .orElse(null);

        if (dbUser == null) {
            return "User not found";
        }

        if (!encoder.matches(user.getPassword(), dbUser.getPassword())) {
            return "Incorrect password";
        }

        return "Login successful";
    }
}
