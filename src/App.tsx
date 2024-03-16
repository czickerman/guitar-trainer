import Fretboard from "./components/Fretboard";
import { notes } from "./lib/noteManager";
import { useAppContext } from "./lib/AppContext";

function App() {
  const { state } = useAppContext();

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col items-center absolute top-[3vh] ">
        <h1 className="text-7xl font-genos">Guitar Trainer</h1>
        <h2 className="text-3xl font-genos font-light">Click the note {notes[state.correctNote]}</h2>
      </div>
      <Fretboard length={15} />
    </div>
  );
}

export default App;
