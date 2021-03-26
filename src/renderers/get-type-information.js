const getTypeInformation = (type, specialStates) => {
  if (type === 0) {
    return `Type: SOLDIER
Military grade pansar armoury.

Availability: ${specialStates.includes('SOLDIER_') ? '[X]' : '[ ]'}
  `;
  }
  if (type === 1) {
    return `ENGINEER (BASIC)
Knowledge from Dialectics.
Interface remote direction of
a watcher. If watcher gets hurt,
you get hurt.

Availability: ${specialStates.includes('') ? '[X]' : '[ ]'}`;
  }
  return `ENGINEER (ADVANCED)
Knowledge from Golem Industries.
can remote direct a ROBOT

Availability: ${specialStates.includes('ENGINEER_') ? '[X]' : '[ ]'}`;
};
export default getTypeInformation;
