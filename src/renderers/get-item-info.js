const getItemInfo = (item) => {
  if (item === 'MEDICIN') {
    return `Type: ${item}
Kairos Labs is proud to
present this excellent
piece of medicin.
Wounded? No problem.
Take it and heal 1 HP.`;
  } if (item === 'COMPUTER') {
    return `Type: ${item}
This hacking device from The
Park is legendary. It is said
to be used to be used by the
best cyber cowboys. It can
de/activate lasers.
`;
  } if (item === 'AMMO') {
    return `Type: ${item}
This may not be the best ammo
that can you can buy. But it 
sure is a damn fine piece of
ammo. Now on sale at The
Market of Despair!
`;
  }
  return '';
};
export default getItemInfo;
