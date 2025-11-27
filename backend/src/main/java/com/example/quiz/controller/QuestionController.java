package com.example.quiz.controller;

import com.example.quiz.model.Question;
import com.example.quiz.repo.QuestionRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/questions")
public class QuestionController {

    private final QuestionRepository repo;

    public QuestionController(QuestionRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Question> getAllQuestions() {
        return repo.findAll();
    }

    @PostMapping
    public Question createQuestion(@RequestBody Question question) {
        return repo.save(question);
    }
}
