/*Great Magicians: Start with a copy of your program from Exercise 39. 
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
 Call show_magicians() to see that the list has actually been modified.*/

let GreatMagician: string[] = [
  "Wizardry Whisper",
  "Phantom Phoenix",
  "Enigma Evoker",
];
for (let i = 0; i < GreatMagician.length; i++) {
  console.log(GreatMagician[i]);
}

function make_great(magicians: string[]) {
  let magician = GreatMagician;
  for (let i = 0; i < magicians.length; i++) {
    console.log(`${magician[i]} The great magician`);
  }
}

make_great(GreatMagician);
