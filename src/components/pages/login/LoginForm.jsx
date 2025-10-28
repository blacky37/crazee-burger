import React, { useState } from "react";
import { Link, useNavigate } from "react-router";

export default function LoginForm() {
  //  states, données
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();

  // comportements

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue("");
    navigate(`order/${inputValue}`);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input
        value={inputValue}
        onChange={handleChange}
        type="text"
        placeholder="Entrez votre prénom..."
        required
      />
      <button>Accéder à votre espace</button>
    </form>
  );
}
