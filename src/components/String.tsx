import Note from "./Note";
import { notes } from "../lib/noteManager";

interface StringProps {
  length: number;
  startingNote: number;
  inlays?: number[];
}

export default function String({ length, startingNote, inlays = [] }: StringProps) {
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
