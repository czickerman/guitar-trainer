import String from "./String";

const standardInlays = [2, 4, 6, 8, 14, 16, 18, 20];

interface FretboardProps {
  length: number;
}

export default function Fretboard({ length }: FretboardProps) {
  return (
    <div className="flex flex-col bg-[#2E2B2F]">
      <String length={length} startingNote={8} />
      <String length={length} startingNote={3} />
      <String length={length} startingNote={11} inlays={[11]} />
      <String length={length} startingNote={6} inlays={standardInlays} />
      <String length={length} startingNote={1} inlays={[11]} />
      <String length={length} startingNote={8} />
    </div>
  );
}
