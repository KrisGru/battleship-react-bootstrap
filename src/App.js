import { Link } from "react-router-dom";

function App() {
  return (
    <div
      className="App"
      style={{ backgroundImage: `url('/assets/background.jpg')` }}
    >
      <h1 className="mainTittle">Battleship game</h1>
      <Link class="btn btn-dark btn-lg" to="/singleplayer">
        Start!
      </Link>
    </div>
  );
}

export default App;
