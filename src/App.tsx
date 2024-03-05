import { useContext } from "react";
import Fretboard from "./components/Fretboard";
import { notes } from "./lib/noteManager";
import { AppContext } from "./lib/AppContext";

function App() {
  const { state } = useContext(AppContext)!;

  return (
    <div className="h-screen bg-gray-950 flex flex-col justify-center items-center">
      <div className="flex flex-col items-center mb-4">
        <h1 className="text-5xl text-white">Guitar Trainer</h1>
        <h2 className="text-xl text-white">Click the note {notes[state.correctNote]}</h2>
      </div>
      <Fretboard length={15} />
    </div>
  );
}

export default App;
