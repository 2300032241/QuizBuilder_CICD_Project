import React, { useState } from "react";
import { TextField, Button, Card, Typography } from "@mui/material";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    await fetch("http://localhost:8081/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });
    alert("Signup successful!");
    window.location.href = "/login";
  };

  return (
    <div style={{ display:"flex", height:"100vh", justifyContent:"center", alignItems:"center", background:"#f0f2f5" }}>
      <Card style={{ padding:"40px", width:"350px" }}>
        <Typography variant="h5" textAlign="center">Sign Up</Typography>
        <br/>

        <TextField fullWidth label="Username" variant="outlined"
          value={username} onChange={(e) => setUsername(e.target.value)} />
        <br/><br/>

        <TextField fullWidth type="password" label="Password" variant="outlined"
          value={password} onChange={(e) => setPassword(e.target.value)} />
        <br/><br/>

        <Button variant="contained" fullWidth onClick={signup}>Sign Up</Button>
        <br/><br/>

        <Button variant="text" fullWidth onClick={() => window.location.href="/login"}>
          Already have an account?
        </Button>
      </Card>
    </div>
  );
}

export default Signup;
