import React, { useState } from "react";
import { TextField, Button, Card, Typography } from "@mui/material";

function CreateQuiz() {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");

  const createQuiz = async () => {
    const res = await fetch("http://localhost:8081/quiz/create", {
      method: "POST",
      headers: { "Content-Type":"application/json" },
      body: JSON.stringify({ title, description })
    });

    const quiz = await res.json();
    localStorage.setItem("quizId", quiz.id);
    window.location.href = "/add-questions";
  };

  return (
    <div style={{ padding:"40px" }}>
      <Card style={{ padding:"30px", width:"450px" }}>
        <Typography variant="h5">Create Quiz</Typography>
        <br/>
        
        <TextField fullWidth label="Quiz Title" value={title}
          onChange={(e)=>setTitle(e.target.value)} />
        <br/><br/>

        <TextField fullWidth multiline rows={3} label="Description" value={description}
          onChange={(e)=>setDesc(e.target.value)} />
        <br/><br/>

        <Button variant="contained" fullWidth onClick={createQuiz}>
          Create Quiz
        </Button>
      </Card>
    </div>
  );
}

export default CreateQuiz;
