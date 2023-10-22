import "./App.css";
import { SpaceShipSvg } from "./components/spaceShipSvg";

function App() {
  return (
    <main className="flex flex-col items-center font-[Handlee]">
      <div className="w-64 h-64">
        <SpaceShipSvg />
      </div>
      <h1 className="font-bold">Aliens are Coming</h1>
    </main>
  );
}

export default App;
