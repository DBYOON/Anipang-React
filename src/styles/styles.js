const unit = (number) => {
  return (number / 16).toFixed(3) + 'rem';
};

const commonStyles = {
  header: 45,
  footer: 30,
  mainColor: '#fff',
  solidColor: '#333',
  voidColor: '#fff',
  fontColor: '#f18448',
  minWidth: unit(900),
  maxWidth: '100%',
  fontFamily: '"Hanna"',
  activeColor: '#000',
};

export {
  unit,
  commonStyles,
};