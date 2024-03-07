import String from "./String";
import { useAppContext } from "@/lib/AppContext";

interface FretboardProps {
  length: number;
}

export default function Fretboard({ length }: FretboardProps) {
  const { state } = useAppContext();

  return (
    <div className="flex flex-col bg-[#2E2B2F]">
      {state.strings.map((_s, i) => (
        <String length={length} stringIndex={i} key={i} />
      ))}
    </div>
  );
}
