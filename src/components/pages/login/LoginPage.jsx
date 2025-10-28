import LoginForm from "./LoginForm";
import { Routes, Route } from "react-router";

export default function LoginPage() {
  // affichage (render)
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

