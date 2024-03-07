import Note from "./Note";
import { notes } from "../lib/noteManager";
import { useAppContext } from "@/lib/AppContext";

interface StringProps {
  length: number;
  stringIndex: number;
}

const standardInlays = [2, 4, 6, 8, 14, 16, 18, 20];

export default function String({ length, stringIndex }: StringProps) {
  const { state } = useAppContext();

  const startingNote = state.strings[stringIndex][0];

  const inlays = // gl reading this shit (it just makes the inlays go on the right frets)
    stringIndex === Math.ceil(state.strings.length / 2)
      ? standardInlays
      : state.strings.length >= 6
        ? [2, state.strings.length - 2].includes(stringIndex)
          ? [11]
          : []
        : [];

  return (
    <div className="flex items-center justify-center relative">
      <h1 className="absolute left-[-40px] bg-amber-400 rounded-full w-5 h-5 text-black flex items-center justify-center select-none text-xs">
        {notes[(startingNote - 1) % notes.length]}
      </h1>
      {[...Array(length)].map((_x, i) => (
        <Note
          key={i}
          note={(i + startingNote) % notes.length}
          lastNote={i === length - 1}
          inlayed={inlays.includes(i)}
        />
      ))}
    </div>
  );
}
