//punkt na planszy, który posiada:
//własciwosci: połozenie i rodzaj punktu
//metody - wyswietlanie
class Point {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
  }

  get displayPoint() {
    return <div>{this.x}</div>;
  }
}

function Singleplayer() {
  const countRows = 10;
  const countColumns = 10;
  let templateGrid = [];

  //array in array - declaration
  for (let x = 0; x < countColumns; x++) {
    templateGrid[x] = [];
  }
  //push value in grid
  for (let x = 0; x < countColumns; x++) {
    for (let y = 0; y < countRows; y++) {
      templateGrid[x][y] = new Point(x, y, "wather");
    }
    //po 10 y kolejny wiersz. Jak?
  }

  return (
    <div class="container" style={{ height: "100vh" }}>
      <div class="row">
        <div class="col">
          <h1>Battleship - single player</h1>
        </div>
      </div>
      <div class="row">
        <div class="col">
          twoja siatka
          {templateGrid[3][3].displayPoint}
        </div>
        <div class="col">
          siatka komputera
          {templateGrid[3][3].displayPoint}
        </div>
      </div>
      <div class="row">
        <div class="col">const 1x1 = new Point()</div>
        <div class="col">statki komputera</div>
      </div>
      <div class="row">
        <div class="col">Sekcja wróc, rozpocznij, restart. ustaw poziom</div>
      </div>
    </div>
  );
}

export default Singleplayer;
