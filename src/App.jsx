import { useState } from "react";
import LoginPage from "./components/pages/LoginPage";

function App() {
  // state (état, données)
  const [prenom, setPrenom] = useState("");

  // comportements

  const handleSubmit = () => {
    alert("Bonjour");
  };

  // affichage (render)

  return <LoginPage />;
}

export default App;
