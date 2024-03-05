export const notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];

// Randomly select a note from notes but make sure all notes are cycled through once before repeating\
let unusedNotes = [...notes];
export const nextNote = () => {
  const note = unusedNotes[Math.floor(Math.random() * unusedNotes.length)];
  unusedNotes = unusedNotes.length !== 1 ? unusedNotes.filter((n) => n !== note) : [...notes];
  return notes.indexOf(note);
};
