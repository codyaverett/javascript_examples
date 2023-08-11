// Define all the possible musical notes
const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

// Define the intervals for major, minor, and diminished scales
const scales = {
  major: [2, 2, 1, 2, 2, 2, 1],
  minor: [2, 1, 2, 2, 1, 2, 2],
  diminished: [2, 1, 2, 1, 2, 1, 2, 1]
};

// Function to generate and return the list of scales
function generateScales() {
  const allScales = {};

  for (const note of notes) {
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
  let index = notes.indexOf(root);

  for (const interval of intervals) {
    index = (index + interval) % notes.length;
    scale.push(notes[index]);
  }

  return scale;
}

// Function to output the list of scales
function outputScales() {
  const allScales = generateScales();

  for (const note in allScales) {
    console.log(`Scales for ${note}:`);
    for (const scaleType in allScales[note]) {
      console.log(`  ${scaleType}: ${allScales[note][scaleType].join(' ')}`);
    }
  }
}

// Example usage
outputScales();

