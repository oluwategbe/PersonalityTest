export const getPersonality = (ei, si, tf, jp) => {
  const eiLetter = ei > 500 ? "E" : "I";
  const siLetter = si > 500 ? "S" : "N";
  const tfLetter = tf > 500 ? "T" : "F";
  const jpLetter = jp > 500 ? "J" : "P";

  return `${eiLetter}${siLetter}${tfLetter}${jpLetter}`;
};
