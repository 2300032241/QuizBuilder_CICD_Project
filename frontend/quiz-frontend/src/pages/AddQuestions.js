import React, { useState } from "react";
import { TextField, Button, Card, Typography, List, ListItem } from "@mui/material";

function AddQuestions() {
  const [question, setQ] = useState("");
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [d, setD] = useState("");
  const [answer, setAnswer] = useState("");
  const [list, setList] = useState([]);

  const add = async () => {
    const obj = { text: question, optionA: a, optionB: b, optionC: c, optionD: d, answer };
    const quizId = localStorage.getItem("quizId");

    await fetch(`http://localhost:8081/quiz/${quizId}/add-question`, {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(obj)
    });

    setList([...list, obj]);
    setQ(""); setA(""); setB(""); setC(""); setD(""); setAnswer("");
  };

  return (
    <div style={{ padding:"40px" }}>
      <Typography variant="h4">Add Questions</Typography>
      <br/>

      <Card style={{ padding:"30px", width:"450px" }}>
        <TextField fullWidth label="Question" value={question} onChange={(e)=>setQ(e.target.value)} />
        <br/><br/>

        <TextField fullWidth label="Option A" value={a} onChange={(e)=>setA(e.target.value)} />
        <br/><br/>
        <TextField fullWidth label="Option B" value={b} onChange={(e)=>setB(e.target.value)} />
        <br/><br/>
        <TextField fullWidth label="Option C" value={c} onChange={(e)=>setC(e.target.value)} />
        <br/><br/>
        <TextField fullWidth label="Option D" value={d} onChange={(e)=>setD(e.target.value)} />
        <br/><br/>

        <TextField fullWidth label="Correct Answer" value={answer} onChange={(e)=>setAnswer(e.target.value)} />
        <br/><br/>

        <Button fullWidth variant="contained" onClick={add}>Add Question</Button>
      </Card>

      <br/><br/>
      <Typography variant="h6">Added Questions</Typography>

      <List>
        {list.map((q, index)=>(<ListItem key={index}>{q.text}</ListItem>))}
      </List>
    </div>
  );
}

export default AddQuestions;
