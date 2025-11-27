import React from "react";
import { Button, Card, Typography } from "@mui/material";

function Dashboard() {
  const logout = () => {
    window.location.href = "/login";
  };

  return (
    <div style={{ padding: "40px" }}>
      <Typography variant="h4">Dashboard</Typography>
      <br/>

      <Card style={{ padding: "30px", width: "350px" }}>
        <Button fullWidth variant="contained" onClick={() => window.location.href="/create-quiz"}>
          Create Quiz
        </Button>
        <br/><br/>

        <Button fullWidth variant="outlined" onClick={() => window.location.href="/quiz-list"}>
          View All Quizzes
        </Button>
        <br/><br/>

        <Button fullWidth variant="text" color="error" onClick={logout}>
          Logout
        </Button>
      </Card>
    </div>
  );
}

export default Dashboard;
