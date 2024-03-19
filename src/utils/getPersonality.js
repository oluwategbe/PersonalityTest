export const getPersonality = (ei, si, tf, jp) => {
  const eiLetter = ei >= 350 ? "E" : "I";
  const siLetter = si >= 350 ? "N" : "S";
  const tfLetter = tf >= 350 ? "F" : "T";
  const jpLetter = jp >= 350 ? "P" : "J";

  return `${eiLetter}${siLetter}${tfLetter}${jpLetter}`;
};
