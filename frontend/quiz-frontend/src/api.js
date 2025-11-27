const API_BASE = "http://quiz-backend:8081";

// ----------------------
// AUTH APIs
// ----------------------
export async function login(username, password) {
  const response = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });
  return response.json();
}

export async function signup(username, password) {
  const response = await fetch(`${API_BASE}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });
  return response.json();
}

// ----------------------
// QUIZ APIs
// ----------------------
export async function createQuiz(title) {
  const response = await fetch(`${API_BASE}/api/quizzes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title })
  });
  return response.json();
}

export async function addQuestion(quizId, question) {
  const response = await fetch(`${API_BASE}/api/quizzes/${quizId}/questions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(question)
  });
  return response.json();
}

export async function getQuizzes() {
  const response = await fetch(`${API_BASE}/api/quizzes`);
  return response.json();
}
