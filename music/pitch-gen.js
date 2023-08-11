// Define all the possible musical notes and their corresponding frequencies
const notes = {
  'C': 261.63,
  'C#': 277.18,
  'D': 293.66,
  'D#': 311.13,
  'E': 329.63,
  'F': 349.23,
  'F#': 369.99,
  'G': 392.00,
  'G#': 415.30,
  'A': 440.00,
  'A#': 466.16,
  'B': 493.88
};

// Define the intervals for major, minor, and diminished scales
const scales = {
  major: [2, 2, 1, 2, 2, 2, 1],
  minor: [2, 1, 2, 2, 1, 2, 2],
  diminished: [2, 1, 2, 1, 2, 1, 2, 1]
};

// Function to generate and return the list of scales
function generateScales() {
  const allScales = {};

  for (const note in notes) {
    allScales[note] = {};
    for (const scaleType in scales) {
      allScales[note][scaleType] = createScale(note, scales[scaleType]);
    }
  }

  return allScales;
}

// Helper function to create a scale based on the root note and intervals
function createScale(root, intervals) {
  let scale = [root];
  let noteNames = Object.keys(notes);
  let index = noteNames.indexOf(root);

  for (const interval of intervals) {
    index = (index + interval) % noteNames.length;
    scale.push(noteNames[index]);
  }

  return scale.map(note => ({ note, pitch: notes[note] }));
}

// Function to output the list of scales
function outputScales() {
  const allScales = generateScales();

  for (const note in allScales) {
    console.log(`Scales for ${note} (${notes[note]} Hz):`);
    for (const scaleType in allScales[note]) {
      console.log(`  ${scaleType}: ${allScales[note][scaleType].map(n => `${n.note} (${n.pitch} Hz)`).join(' ')}`);
    }
  }
}

// Example usage
outputScales();

