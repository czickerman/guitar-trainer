import Fretboard from "./components/Fretboard";
import { notes } from "./lib/noteManager";
import { useAppContext } from "./lib/AppContext";

function App() {
  const { state } = useAppContext();

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col items-center mb-4">
        <h1 className="text-5xl">Guitar Trainer</h1>
        <h2 className="text-xl">Click the note {notes[state.correctNote]}</h2>
      </div>
      <Fretboard length={15} />
    </div>
  );
}

export default App;
