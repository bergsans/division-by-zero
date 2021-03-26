import drawDataText from './draw-data-text';

const printPersonData = (ctx, player) => {
  const info = `
Name:
Occupation:
Cash:
HP:
Ammo:
Armour:
  `;
  const data = `
Joshua Davids
police officer
${player.cash}$
${player.hp * 10}%
${player.ammo}
${player.armour}
  `;
  drawDataText(ctx, info, 806, 22, 84, 'rgba(20,120,100,0.8)');
  drawDataText(ctx, data, 940, 22, 84);
};
export default printPersonData;
