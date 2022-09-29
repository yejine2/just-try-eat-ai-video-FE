const bg = {
  main: '#13141E',
  sub: '#222426',
  modal: '#292951',
};

const colors = {
  main: {
    purple: '#5C4DF7',
    green: '#2ED573',
    blue: '#002868',
  },
  sub: {
    blueGray: '#33354C',
    gray: '#333333',
    red: '#FF6040',
    purple: '#B1A9FF',
  },
  gray400: '#5E5D6D',
  gray300: '#B0B0B0',
  gray200: '#DEDDDD',
  gray100: '#FFFFFF',
};

const fontSize = {
  xxxLarge: '40px',
  xxLarge: '32px',
  xLarge: '24px',
  large: '20px',
  medium: '16px',
  small: '14px',
};

const fontWeight = {
  light: '300',
  regular: '400',
  medium: '500',
  bold: '700',
};

const flex = {
  flexCenter: `
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  flexAround: `
    display: flex;
    align-items: center;
    justify-content: space-around;
  `,
  flexColumn: `
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
};

const theme = {
  bg,
  colors,
  fontSize,
  fontWeight,
  flex,
};

export default theme;
