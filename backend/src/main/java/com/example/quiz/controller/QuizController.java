package com.example.quiz.controller;

import com.example.quiz.model.Question;
import com.example.quiz.model.Quiz;
import com.example.quiz.repo.QuestionRepository;
import com.example.quiz.repo.QuizRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/quiz")
@CrossOrigin(origins = "*")
public class QuizController {

    @Autowired
    private QuizRepository quizRepo;

    @Autowired
    private QuestionRepository questionRepo;

    // ---------------- CREATE QUIZ ----------------
    @PostMapping("/create")
    public Quiz createQuiz(@RequestBody Quiz quiz) {
        return quizRepo.save(quiz);
    }

    // ---------------- ADD QUESTIONS TO QUIZ ----------------
    @PostMapping("/{quizId}/add-question")
    public Quiz addQuestion(@PathVariable Long quizId, @RequestBody Question question) {

        Quiz quiz = quizRepo.findById(quizId).orElse(null);
        if (quiz == null) {
            return null;
        }

        Question savedQ = questionRepo.save(question);
        quiz.getQuestions().add(savedQ);

        return quizRepo.save(quiz);
    }

    // ---------------- GET ALL QUIZZES ----------------
    @GetMapping("/all")
    public List<Quiz> getAllQuizzes() {
        return quizRepo.findAll();
    }

    // ---------------- GET QUIZ BY ID ----------------
    @GetMapping("/{id}")
    public Quiz getQuizById(@PathVariable Long id) {
        return quizRepo.findById(id).orElse(null);
    }
}
