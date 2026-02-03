import {createUseStyles} from 'react-jss';
import backgroundImg from '../../../../assets/image/statics/zarla-craft-website-examples-3999x2662-20240710.avif'
import colors from '../../../../assets/styles/abstracts/color';
import { rem } from '../../../../assets/styles/abstracts/function';
import sizes from '../../../../assets/styles/abstracts/sizes';
import fonts from '../../../../assets/styles/abstracts/fonts';



const styles = {
    info_main:{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '45vh',
        position: 'relative',
       
    },
    textDiv: {
        position: 'absolute',
        top: '50%',
        right: '5%',
        transform: 'translateY(-50%)',
        zIndex: 2,
        color: colors.white,
        width: '30%',
        display: 'flex',
        flexDirection: 'column',
        fontSize: sizes.size_medium,
        fontFamily: fonts.fontBold,
        letterSpacing: '3px',
        '& p': {
          fontSize: rem(sizes.base),
          fontFamily: fonts.font,
          letterSpacing: '1px',
          width: '100%',
          lineHeight: '25px'
        }
}
,
    slider:{
        display:'flex',
        justifyContent: 'center',
        flexDirection:'column',
        gap: rem(sizes.base),
        cursor: 'pointer',
    }
}

export const useInfoStyle = createUseStyles(styles);