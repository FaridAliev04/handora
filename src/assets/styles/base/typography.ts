import GilroyBlod from '../../fonts/gilroy/Gilroy-Black.otf';
import GilroyExtraBold from '../../fonts/gilroy/Gilroy-Extrabold.otf';
import GilroyLight from '../../fonts/gilroy/Gilroy-Light.otf';
import GilroyBlack from '../../fonts/gilroy/Gilroy-Black.otf';
const typography = {
  '@font-face': [
    {
      fontFamily: 'Gilroy-Bold',
      src: `url("${GilroyBlod}")`,
    },
    {
      fontFamily: 'Gilroy-ExtraBold ',
      src: `url("${GilroyExtraBold}")`,
    },
    {
        fontFamily: 'Gilroy-Light',
        src: `url("${GilroyLight}")`,
      },
      {
        fontFamily: 'Gilroy-Black',
        src: `url("${GilroyBlack}")`,
      },
  ],
};

export default typography;