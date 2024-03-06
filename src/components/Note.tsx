import { useContext, useState } from "react";
import { notes, nextNote } from "../lib/noteManager";
import { AppContext } from "@/lib/AppContext";

interface NoteProps {
  lastNote: boolean;
  note: number;
  inlayed: boolean;
}

export default function Note({ note, lastNote, inlayed }: NoteProps) {
  const [selected, setSelected] = useState(false);
  const { state, setState } = useContext(AppContext)!;

  const handleClick = () => {
    if (state.selectedNote === undefined) {
      setSelected(true);
      setState({ ...state, selectedNote: note });

      setTimeout(() => {
        setSelected(false);
        setState({
          ...state,
          correctNote: state.correctNote === note ? nextNote() : state.correctNote,
          selectedNote: undefined,
        });
      }, 1000);
    }
  };

  return (
    <div
      className={`h-8 w-18 flex justify-center items-center relative border-r-[#565258]/50 ${!lastNote ? "border-r-2 " : ""}`}
    >
      <div
        className={`absolute border-t-[1px] z-10 border-t-[#D0CDCC] top-[50%] left-[0px] ${!lastNote ? "w-full-2px" : "w-full"}`}
      ></div>
      <button className="absolute z-50 w-[65%] h-[60%]" onClick={handleClick} />
      {inlayed && <div className="inlay"></div>}
      {selected && (
        <h1
          className={`${state.correctNote === note ? "bg-green-300" : "bg-red-400"} rounded-full text-black z-20 w-5 h-5 flex items-center justify-center select-none text-xs`}
        >
          {notes[note]}
        </h1>
      )}
    </div>
  );
}
