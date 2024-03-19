export const getPersonality = (ei, si, tf, jp) => {
  const eiLetter = ei > 350 ? "E" : "I";
  const siLetter = si > 350 ? "S" : "N";
  const tfLetter = tf > 350 ? "T" : "F";
  const jpLetter = jp > 350 ? "J" : "P";

  return `${eiLetter}${siLetter}${tfLetter}${jpLetter}`;
};
