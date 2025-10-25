import { Link } from "react-router";

export default function OrderPage() {
  return (
    <div>
      <h1>Bonjour Bob</h1>
      <br />
      <Link to="/">
        <button>Deconnexion</button>
      </Link>
    </div>
  );
}
