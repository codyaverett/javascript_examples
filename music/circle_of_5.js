function generateCircleOfFifths() {
  const notes = ['C', 'G', 'D', 'A', 'E', 'B', 'F#', 'C#', 'G#', 'D#', 'A#', 'F'];
  const circleOfFifths = {
    major: [],
    minor: []
  };

  for (let i = 0; i < notes.length; i++) {
    circleOfFifths.major.push(notes[i]);
    let minorIndex = (i + 9) % notes.length; // Relative minor is a minor third below the major
    circleOfFifths.minor.push(notes[minorIndex]);
  }

  return circleOfFifths;
}

function printCircleOfFifths() {
  const circleOfFifths = generateCircleOfFifths();
  console.log('Major keys:', circleOfFifths.major.join(' - '));
  console.log('Minor keys:', circleOfFifths.minor.join(' - '));
}

// Example usage
printCircleOfFifths();

